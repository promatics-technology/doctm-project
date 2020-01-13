export interface Environment 
{
	endPoint:string;
	patientPic:string;
	reportPic:string;
	doctorPic:string;
	uploadedPrescriptionPath:string;
	socket:string;
	tutorialData:string;
	rate_us_pic: string;
	rate_us_pic1: string;
	doc_service_image: string;
	user_guide: string;
}

export const DEV: Environment = {
	endPoint:'https://doctmapi.gagzweblab.xyz:3003/',
	patientPic:'https://doctmapi.gagzweblab.xyz/public/patient_pic/',
	reportPic:'https://doctmapi.gagzweblab.xyz/public/patient_report_pic/',
	doctorPic:'https://doctmapi.gagzweblab.xyz/public/doctors_profile_image/',
	uploadedPrescriptionPath:'https://doctmapi.gagzweblab.xyz/public/prescriptions_uploaded/',
	socket:'https://doctmapi.gagzweblab.xyz:3002',
	tutorialData:'https://doctmapi.gagzweblab.xyz/public/tutorials_pdf/',
	rate_us_pic:'https://doctmapi.gagzweblab.xyz/public/rateus_image/',
	rate_us_pic1:'https://doctmapi.gagzweblab.xyz/public/rate_us_doc_image/',
	doc_service_image: 'https://doctmapi.gagzweblab.xyz/public/manage_services/',
	user_guide: 'https://doctmapi.gagzweblab.xyz/public/userGuide/',

}

export const PROD: Environment = {
	endPoint:'https://doctmapi.gagzweblab.xyz:3003/',
	patientPic:'https://doctmapi.gagzweblab.xyz/public/patient_pic/',
	reportPic:'https://doctmapi.gagzweblab.xyz/public/patient_report_pic/',
	doctorPic:'https://doctmapi.gagzweblab.xyz/public/doctors_profile_image/',
	uploadedPrescriptionPath:'https://doctmapi.gagzweblab.xyz/public/prescriptions_uploaded/',
	socket:'https://doctmapi.gagzweblab.xyz:3002',
	tutorialData:'https://doctmapi.gagzweblab.xyz/public/tutorials_pdf/',
	rate_us_pic:'https://doctmapi.gagzweblab.xyz/public/rateus_image/',
	rate_us_pic1:'https://doctmapi.gagzweblab.xyz/public/rate_us_doc_image/',
	doc_service_image: 'https://doctmapi.gagzweblab.xyz/public/manage_services/',
	user_guide: 'https://doctmapi.gagzweblab.xyz/public/userGuide/',
}

export const environment: Environment= PROD;