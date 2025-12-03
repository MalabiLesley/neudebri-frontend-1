from fastapi import APIRouter, Depends
from sqlmodel import Session, select, func
from datetime import datetime, timedelta

from app.database import get_session
from app.models.patients import Patient
from app.models.cases import Case
from app.models.visits import Visit
from app.models.invoices import Invoice, Payment
from app.models.users import User

router = APIRouter()

# -------------------------------------------------------
#                     PATIENTS DASHBOARD
# -------------------------------------------------------
@router.get("/patients")
def patients_dashboard(session: Session = Depends(get_session)):
    total = session.exec(select(func.count(Patient.id))).one()
    last_30_days = datetime.utcnow() - timedelta(days=30)

    new_patients = session.exec(
        select(Patient).where(Patient.created_at >= last_30_days)
    ).all()

    by_gender = {
        "male": len([p for p in new_patients if p.gender == "male"]),
        "female": len([p for p in new_patients if p.gender == "female"]),
    }

    return {
        "total_patients": total,
        "new_patients_last_30_days": len(new_patients),
        "gender_distribution": by_gender
    }


# -------------------------------------------------------
#                     CASES DASHBOARD
# -------------------------------------------------------
@router.get("/cases")
def cases_dashboard(session: Session = Depends(get_session)):

    all_cases = session.exec(select(Case)).all()
    total = len(all_cases)

    open_cases = len([c for c in all_cases if c.status == "open"])
    closed_cases = len([c for c in all_cases if c.status == "closed"])

    severities = {
        "low": len([c for c in all_cases if c.severity == "low"]),
        "medium": len([c for c in all_cases if c.severity == "medium"]),
        "high": len([c for c in all_cases if c.severity == "high"]),
        "critical": len([c for c in all_cases if c.severity == "critical"])
    }

    return {
        "total_cases": total,
        "open_cases": open_cases,
        "closed_cases": closed_cases,
        "severity_distribution": severities,
    }


# -------------------------------------------------------
#                     VISITS DASHBOARD
# -------------------------------------------------------
@router.get("/visits")
def visits_dashboard(session: Session = Depends(get_session)):
    all_visits = session.exec(select(Visit)).all()
    total = len(all_visits)

    last_30 = datetime.utcnow() - timedelta(days=30)
    last_30_visits = session.exec(
        select(Visit).where(Visit.created_at >= last_30)
    ).all()

    return {
        "total_visits": total,
        "visits_last_30_days": len(last_30_visits)
    }


# -------------------------------------------------------
#                  FINANCE / INVOICE DASHBOARD
# -------------------------------------------------------
@router.get("/finance")
def finance_dashboard(session: Session = Depends(get_session)):
    invoices = session.exec(select(Invoice)).all()
    payments = session.exec(select(Payment)).all()

    total_revenue = sum([p.amount for p in payments])

    return {
        "total_invoices": len(invoices),
        "total_revenue": total_revenue,
    }


# -------------------------------------------------------
#                     DOCTORS DASHBOARD
# -------------------------------------------------------
@router.get("/doctors")
def doctors_dashboard(session: Session = Depends(get_session)):
    doctors = session.exec(select(User).where(User.role == "doctor")).all()

    return {
        "total_doctors": len(doctors),
    }


# -------------------------------------------------------
#                     SYSTEM DASHBOARD
# -------------------------------------------------------
start_time = datetime.utcnow()

@router.get("/system")
def system_dashboard():
    uptime = round((datetime.utcnow() - start_time).total_seconds() / 3600, 2)
    return {
        "status": "online",
        "uptime_hours": uptime,
        "timestamp": datetime.utcnow()
    }

