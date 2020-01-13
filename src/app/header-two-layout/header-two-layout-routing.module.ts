import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderTwoLayoutComponent} from './header-two-layout.component'
import {CanActivate} from "@angular/router";
import { AuthGuard } from '../auth.guard';
const routes: Routes = [
{
    path: '',
    component: HeaderTwoLayoutComponent,
    children: [
    { path: '', redirectTo: 'dashboard' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule',canActivate: [AuthGuard] },
    { path: 'dashboard-prescription', loadChildren: './dashboard-prescription/dashboard-prescription.module#DashboardPrescriptionModule',canActivate: [AuthGuard] },
    { path: 'dashboard-prescription-pad', loadChildren: './dashboard-prescription-pad/dashboard-prescription-pad.module#DashboardPrescriptionPadModule',canActivate: [AuthGuard] },
    { path: 'dashboard-prescription-view', loadChildren: './dashboard-prescription-view/dashboard-prescription-view.module#DashboardPrescriptionViewModule',canActivate: [AuthGuard] },
    { path: 'dashboard-referral', loadChildren: './dashboard-referral/dashboard-referral.module#DashboardReferralModule',canActivate: [AuthGuard] },
    // { path: 'dashboard-sms', loadChildren: './dashboard-sms/dashboard-sms.module#DashboardSmsModule',canActivate: [AuthGuard] },
    { path: 'dashboard-ipd-detail', loadChildren: './dashboard-ipd-detail/dashboard-ipd-detail.module#DashboardIpdDetailModule',canActivate: [AuthGuard] },
    { path: 'dashboard-diagnostics-detail', loadChildren: './dashboard-diagnostics-detail/dashboard-diagnostics-detail.module#DashboardDiagnosticsDetailModule',canActivate: [AuthGuard] },
    { path: 'dashboard-pharmacy-detail', loadChildren: './dashboard-pharmacy-detail/dashboard-pharmacy-detail.module#DashboardPharmacyDetailModule',canActivate: [AuthGuard] },
    { path: 'dashboard-consultation-prescription', loadChildren: './dashboard-consultation-prescription/dashboard-consultation-prescription.module#DashboardConsultationPrescriptionModule',canActivate: [AuthGuard] },
    { path: 'dashboard-consultation-patient', loadChildren: './dashboard-consultation-patient/dashboard-consultation-patient.module#DashboardConsultationPatientModule',canActivate: [AuthGuard] },
    { path: 'dashboard-consultation-time', loadChildren: './dashboard-consultation-time/dashboard-consultation-time.module#DashboardConsultationTimeModule',canActivate: [AuthGuard] },
    { path: 'dashboard-consultation-treatment', loadChildren: './dashboard-consultation-treatment/dashboard-consultation-treatment.module#DashboardConsultationTreatmentModule',canActivate: [AuthGuard] },
    { path: 'dashboard-consultation-diagnosis', loadChildren: './dashboard-consultation-diagnosis/dashboard-consultation-diagnosis.module#DashboardConsultationDiagnosisModule',canActivate: [AuthGuard] },
    { path: 'dashboard-consultation-investigation', loadChildren: './dashboard-consultation-investigation/dashboard-consultation-investigation.module#DashboardConsultationInvestigationModule',canActivate: [AuthGuard] },
    { path: 'dashboard-aoi', loadChildren: './dashboard-aoi/dashboard-aoi.module#DashboardAoiModule',canActivate: [AuthGuard] },
    { path: 'dashboard-staff-management', loadChildren: './dashboard-staff-management/dashboard-staff-management.module#DashboardStaffManagementModule',canActivate: [AuthGuard] },
    { path: 'dashboard-clinic-report', loadChildren: './dashboard-clinic-report/dashboard-clinic-report.module#DashboardClinicReportModule',canActivate: [AuthGuard] },
    { path: 'dashboard-progress', loadChildren: './dashboard-progress/dashboard-progress.module#DashboardProgressModule',canActivate: [AuthGuard] },
    { path: 'dashboard-ongoprescription', loadChildren: './dashboard-ongoprescription/dashboard-ongoprescription.module#DashboardOngoprescriptionModule',canActivate: [AuthGuard] },
    { path: 'dashboard-preset', loadChildren: './dashboard-preset/dashboard-preset.module#DashboardPresetModule',canActivate: [AuthGuard] },
    { path: 'dashboard-savedpreset', loadChildren: './dashboard-savedpreset/dashboard-savedpreset.module#DashboardSavedpresetModule',canActivate: [AuthGuard] },
    { path: 'edit-profile/:params', loadChildren: './edit-profile/edit-profile.module#EditProfileModule',canActivate: [AuthGuard] },
    { path: 'discharge-patient', loadChildren: './discharge-patient/discharge-patient.module#DischargePatientModule',canActivate: [AuthGuard] },
    { path: 'discharge-patientpdf', loadChildren: './discharge-patientpdf/discharge-patientpdf.module#DischargePatientpdfModule',canActivate: [AuthGuard] },
    { path: 'sms', loadChildren: './sms/sms.module#SmsModule',canActivate: [AuthGuard] },
    { path: 'aoi', loadChildren: './aoi/aoi.module#AoiModule',canActivate: [AuthGuard] },
    { path: 'opd', loadChildren: './opd/opd.module#OpdModule',canActivate: [AuthGuard] },
    { path: 'clinic-summary-opd', loadChildren: './clinic-summary-opd/clinic-summary-opd.module#ClinicSummaryOpdModule',canActivate: [AuthGuard] }, 
    { path: 'clinic-summary-diagnostic', loadChildren: './clinic-summary-diagnostic/clinic-summary-diagnostic.module#ClinicSummaryDiagnosticModule',canActivate: [AuthGuard] },
    { path: 'clinic-summary-pharmacy', loadChildren: './clinic-summary-pharmacy/clinic-summary-pharmacy.module#ClinicSummaryPharmacyModule',canActivate: [AuthGuard] },
    { path: 'clinic-summary-ipd', loadChildren: './clinic-summary-ipd/clinic-summary-ipd.module#ClinicSummaryIpdModule',canActivate: [AuthGuard] },
    { path: 'clinic-summary-all', loadChildren: './clinic-summary-all/clinic-summary-all.module#ClinicSummaryAllModule',canActivate: [AuthGuard] },
    { path: 'doctor-appointments', loadChildren: './doctor-appointments/doctor-appointments.module#DoctorAppointmentsModule',canActivate: [AuthGuard] },
    { path: 'dashboard-progress-time', loadChildren: './dashboard-progress-time/dashboard-progress-time.module#DashboardProgressTimeModule',canActivate: [AuthGuard] },
    { path: 'dashboard-progress-diagnosis', loadChildren: './dashboard-progress-diagnosis/dashboard-progress-diagnosis.module#DashboardProgressDiagnosisModule',canActivate: [AuthGuard] },
    { path: 'dashboard-progress-ipd', loadChildren: './dashboard-progress-ipd/dashboard-progress-ipd.module#DashboardProgressIpdModule',canActivate: [AuthGuard] },
    { path: 'dashboard-progress-pharmacy', loadChildren: './dashboard-progress-pharmacy/dashboard-progress-pharmacy.module#DashboardProgressPharmacyModule',canActivate: [AuthGuard] },
    { path: 'dashboard-progress-prescription', loadChildren: './dashboard-progress-prescription/dashboard-progress-prescription.module#DashboardProgressPrescriptionModule',canActivate: [AuthGuard] },
    { path: 'search-records', loadChildren: './search-records/search-records.module#SearchRecordsModule',canActivate: [AuthGuard] },
    { path: 'delete-records', loadChildren: './delete-records/delete-records.module#DeleteRecordsModule',canActivate: [AuthGuard] },
    { path: 'opd-holiday', loadChildren: './opd-holiday/opd-holiday.module#OpdHolidayModule',canActivate: [AuthGuard] },
    { path: 'share', loadChildren: './share/share.module#ShareModule',canActivate: [AuthGuard] },
    { path: 'dashboard-prescription-pad-off', loadChildren: './dashboard-prescription-pad-off/dashboard-prescription-pad-off.module#DashboardPrescriptionPadOffModule',canActivate: [AuthGuard] },
    { path: 'rate-clinic', loadChildren: './rate-clinic/rate-clinic.module#RateClinicModule',canActivate: [AuthGuard] },
    { path: 'faq-doctor', loadChildren: './faq-doctor/faq-doctor.module#FaqDoctorModule',canActivate: [AuthGuard] },
    { path: 'tutorials-doctor', loadChildren: './tutorials-doctor/tutorials-doctor.module#TutorialsDoctorModule',canActivate: [AuthGuard] },
    { path: 'subscription', loadChildren: './subscription/subscription.module#SubscriptionModule',canActivate: [AuthGuard] },
    { path: 'subscription-details', loadChildren: './subscription-details/subscription-details.module#SubscriptionDetailsModule',canActivate: [AuthGuard] },
    { path: 'subscription-payment', loadChildren: './subscription-payment/subscription-payment.module#SubscriptionPaymentModule',canActivate: [AuthGuard] },
	{ path: 'write-to-us', loadChildren: './write-to-us/write-to-us.module#WriteToUsModule',canActivate: [AuthGuard] },
	{ path: 'purchase-service', loadChildren: './purchase-service/purchase-service.module#PurchaseServiceModule',canActivate: [AuthGuard] }
	]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeaderTwoLayoutRoutingModule { }
