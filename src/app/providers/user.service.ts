import { Injectable } from '@angular/core';
import { Http ,Headers,RequestOptions,ResponseContentType} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import {environment} from '../../environments/environment.prod';
import { HttpClient, HttpHeaders, HttpEventType, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { SubscribeOnObservable } from 'rxjs/internal-compatibility';

@Injectable()
 
export class UserService {

  constructor(private http:Http) { }

	SignUpDoctor(data): Observable<any>{
	    let api = environment.endPoint+"SignUpDoctor";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	
	
	getSmartAsstByClinicId(data): Observable<any>{
	    let api = environment.endPoint+"getSmartAsstByClinicId";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}


	LoginDoctor(data): Observable<any>{
	    let api = environment.endPoint+"LoginDoctor";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	
	deleteServiceAccount(data): Observable<any>{
	    let api = environment.endPoint+"deleteServiceAccount";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	LoginSmartAssistant(data): Observable<any>{
	    let api = environment.endPoint+"LoginSmartAssistant";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}	
	
	GenerateOTPChangeEmail(data): Observable<any>{
	    let api = environment.endPoint+"GenerateOTPChangeEmail";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}	
	UpdateDoctorUserID(data): Observable<any>{
	    let api = environment.endPoint+"UpdateDoctorUserID";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetStatesOfCountry():Observable<any>{
	  let api = environment.endPoint+"GetStatesOfCountry";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}
	
	 GetPricingListing():Observable<any>{
	  let api = environment.endPoint+"GetSubscriptionPricingDiscount";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	GetCitiesOfState(id):Observable<any>{
	  let api = environment.endPoint+"GetCitiesOfState/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	GetDoctorPrescriptionFields(id):Observable<any>{
	  let api = environment.endPoint+"GetDoctorPrescriptionFields/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	AddDoctorPrescriptionFields(data): Observable<any>{
	    let api = environment.endPoint+"AddDoctorPrescriptionFields";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SaveClinicalObservations(data): Observable<any>{
	    let api = environment.endPoint+"SaveClinicalObservations";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetDoctorClinicalObservations(id):Observable<any>{
	  let api = environment.endPoint+"GetDoctorClinicalObservations/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	SaveSymptoms(data): Observable<any>{
	    let api = environment.endPoint+"SaveSymptoms";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetDoctorSymptoms(id):Observable<any>{
	  let api = environment.endPoint+"GetDoctorSymptoms/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	GetMedicationSuggestions(data): Observable<any>{
	    let api = environment.endPoint+"GetMedicationSuggestions";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SaveMedicationSuggestion(data): Observable<any>{
	    let api = environment.endPoint+"SaveMedicationSuggestion";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SaveDiagnosis(data): Observable<any>{
	    let api = environment.endPoint+"SaveDiagnosis";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetDoctorDiagnosis(id):Observable<any>{
	  let api = environment.endPoint+"GetDoctorDiagnosis/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	GetSavedSuggestions(data): Observable<any>{
	    let api = environment.endPoint+"GetSavedSuggestions";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SaveOtherTreatmentSuggestions(data): Observable<any>{
	    let api = environment.endPoint+"SaveOtherTreatmentSuggestions";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SearchSuggestion(data): Observable<any>{
	    let api = environment.endPoint+"SearchSuggestion";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetInvestigationSuggestions(data): Observable<any>{
	    let api = environment.endPoint+"GetInvestigationSuggestions";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SaveInvestigationSuggestion(data): Observable<any>{
	    let api = environment.endPoint+"SaveInvestigationSuggestion";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SaveDoctorPreset(data): Observable<any>{
	    let api = environment.endPoint+"SaveDoctorPreset";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetDoctorPreset(id):Observable<any>{
	  let api = environment.endPoint+"GetDoctorPreset/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	SaveDoctorOtherPreset(data): Observable<any>{
	    let api = environment.endPoint+"SaveDoctorOtherPreset";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetDoctorOtherPreset(data): Observable<any>{
	    let api = environment.endPoint+"GetDoctorOtherPreset";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SaveDoctorPresetArray(data): Observable<any>{
	    let api = environment.endPoint+"SaveDoctorPresetArray";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetDoctorPresetArray(data): Observable<any>{
	    let api = environment.endPoint+"GetDoctorPresetArray";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetAllPresetsOfDoctor(id):Observable<any>{
	  let api = environment.endPoint+"GetAllPresetsOfDoctor/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	SavePrescriptionPad(data): Observable<any>{
	    let api = environment.endPoint+"SavePrescriptionPad";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetPrescriptionPad(id):Observable<any>{
	  let api = environment.endPoint+"GetPrescriptionPad/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	GetPrescriptionPadDetail(id):Observable<any>{
	  let api = environment.endPoint+"GetPrescriptionPadDetail/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	DeletePreset(data): Observable<any>{
	    let api = environment.endPoint+"DeletePreset";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	UpdateDoctorPreset(data): Observable<any>{
	    let api = environment.endPoint+"UpdateDoctorPreset";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	UpdateDoctorOtherPreset(data): Observable<any>{
	    let api = environment.endPoint+"UpdateDoctorOtherPreset";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	UpdateDoctorPresetArray(data): Observable<any>{
	    let api = environment.endPoint+"UpdateDoctorPresetArray";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	UpdateMedicationSuggestion(data): Observable<any>{
	    let api = environment.endPoint+"UpdateMedicationSuggestion";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	AddDoctorSurgeryArray(data): Observable<any>{
	    let api = environment.endPoint+"AddDoctorSurgeryArray";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetDoctorSurgeryArray(id):Observable<any>{
	  let api = environment.endPoint+"GetDoctorSurgeryArray/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	AllPrescriptionData(data): Observable<any>{
	    let api = environment.endPoint+"AllPrescriptionData";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	UpdatePrescriptionPad(data): Observable<any>{
	    let api = environment.endPoint+"UpdatePrescriptionPad";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	FindDoctorReferDetail(id):Observable<any>{
	  let api = environment.endPoint+"FindDoctorReferDetail/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	FindProcedureNameOfSurgery(data): Observable<any>{
	    let api = environment.endPoint+"FindProcedureNameOfSurgery";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SaveDoctorMedicineInfo(data): Observable<any>{
	    let api = environment.endPoint+"SaveDoctorMedicineInfo";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	UpdateDoctorMedicineInfo(data): Observable<any>{
	    let api = environment.endPoint+"UpdateDoctorMedicineInfo";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	onTextChangeOfMedName(data): Observable<any>{
	    let api = environment.endPoint+"onTextChangeOfMedName";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SaveMedicineNameInMedDB(data): Observable<any>{
	    let api = environment.endPoint+"SaveMedicineNameInMedDB";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetDoctorPresetArrayById(id):Observable<any>{
	  let api = environment.endPoint+"GetDoctorPresetArrayById/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	SearchLocation(data):Observable<any>{
      let api = environment.endPoint+"SearchLocation";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	
	
	SearchLocationSuggestions(data):Observable<any>{
      let api = environment.endPoint+"GetCitySuggestion";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}


	GetLatLng(data):Observable<any>{
      let api = environment.endPoint+"GetLatLng";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	
	GoogleTransaltion(data):Observable<any>{
      let api = environment.endPoint+"GoogleTransaltion";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	
	test(data):Observable<any>{
      let api = environment.endPoint+"test";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GenerateOTPSignUp(data):Observable<any>{
      let api = environment.endPoint+"GenerateOTPSignUp";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetSmartAssistantDataAfterLogin(data):Observable<any>{
      let api = environment.endPoint+"GetSmartAssistantDataAfterLogin";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetSmartAssistantByPhone(data):Observable<any>{
      let api = environment.endPoint+"GetSmartAssistantByPhone";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	AddDcotorBySmartAssistant(data):Observable<any>{
      let api = environment.endPoint+"AddDcotorBySmartAssistant";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	UpdateSmartAssistant(data):Observable<any>{
      let api = environment.endPoint+"UpdateSmartAssistant";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetPatientDetail(data):Observable<any>{
      let api = environment.endPoint+"GetPatientDetail";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	BookAppointment(data):Observable<any>{
      let api = environment.endPoint+"BookAppointment";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	AppointmentsBySmartAssistant(data):Observable<any>{
      let api = environment.endPoint+"AppointmentsBySmartAssistant";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	TodayTmrwAppointmentsBySmartAssistant(id):Observable<any>{
	  let api = environment.endPoint+"TodayTmrwAppointmentsBySmartAssistant/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	GetCityFromClinicId(id):Observable<any>{
	  let api = environment.endPoint+"GetCityFromClinicId/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	SearchAppointementsByPatNameOrMob(data):Observable<any>{
      let api = environment.endPoint+"SearchAppointementsByPatNameOrMob";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	RegisterFromAppointment(data):Observable<any>{
      let api = environment.endPoint+"RegisterFromAppointment";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	DeleteAppointment(id):Observable<any>{
	  let api = environment.endPoint+"DeleteAppointment/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	GetDoctorDetail(id):Observable<any>{
	  let api = environment.endPoint+"GetDoctorDetail/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	EditDoctorProfile(data):Observable<any>{
      let api = environment.endPoint+"EditDoctorProfile";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}	
	
	UpdateDoctorClinicID(data):Observable<any>{
      let api = environment.endPoint+"UpdateDoctorClinicID";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	UpdateDoctorEmailPhone(data):Observable<any>{
      let api = environment.endPoint+"UpdateDoctorEmailPhone";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GenerateOTPUpdate(data):Observable<any>{
      let api = environment.endPoint+"GenerateOTPUpdate";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	ChangePasswordDoctor(data):Observable<any>{
      let api = environment.endPoint+"ChangePasswordDoctor";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	AllPatinetsForTodayBySmartAssistant(data):Observable<any>{
      let api = environment.endPoint+"AllPatinetsForTodayBySmartAssistant";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetSmartAssistantById(id):Observable<any>{
	  let api = environment.endPoint+"GetSmartAssistantById/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	VerifySmartAssistantOfSameClinic(data):Observable<any>{
      let api = environment.endPoint+"VerifySmartAssistantOfSameClinic";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	UpdateSmartAssistantByDoctor(data):Observable<any>{
      let api = environment.endPoint+"UpdateSmartAssistantByDoctor";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	FindPatientAppointmentByPhone(data):Observable<any>{
      let api = environment.endPoint+"FindPatientAppointmentByPhone";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	NewRegistration(data):Observable<any>{
      let api = environment.endPoint+"NewRegistration";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	UpdateAppointment(data):Observable<any>{
      let api = environment.endPoint+"UpdateAppointment";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	ChangeBlockedStatus(data):Observable<any>{
      let api = environment.endPoint+"ChangeBlockedStatus";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	UpdateDoctorPersonalDetail(data):Observable<any>{
      let api = environment.endPoint+"UpdateDoctorPersonalDetail";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	AllPatinetsForTodayDoctor(data):Observable<any>{
      let api = environment.endPoint+"AllPatinetsForTodayDoctor";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	
	SaveDoctorPrescriptionForPatient(data):Observable<any>{
      let api = environment.endPoint+"SaveDoctorPrescriptionForPatient";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetDoctorDataById(id):Observable<any>{
	  let api = environment.endPoint+"GetDoctorDataById/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	UpdateConsultationInProgress(data):Observable<any>{
      let api = environment.endPoint+"UpdateConsultationInProgress";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	UpdatePrescriptionByImage(data):Observable<any>{
      let api = environment.endPoint+"UpdatePrescriptionByImage";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	RemoveTestReportImage(data):Observable<any>{
      let api = environment.endPoint+"RemoveTestReportImage";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	UpdateReg(data):Observable<any>{
      let api = environment.endPoint+"UpdateReg";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	DeleteReg(id):Observable<any>{
	  let api = environment.endPoint+"DeleteReg/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	GetSmartIpdByPhone(data):Observable<any>{
      let api = environment.endPoint+"GetSmartIpdByPhone";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	UpdateSmartIpdByDoctor(data):Observable<any>{
      let api = environment.endPoint+"UpdateSmartIpdByDoctor";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetSmartIpdById(id):Observable<any>{
	  let api = environment.endPoint+"GetSmartIpdById/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	LoginSmartIpd(data):Observable<any>{
      let api = environment.endPoint+"LoginSmartIpd";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetSmartIpdDataAfterLogin(data):Observable<any>{
      let api = environment.endPoint+"GetSmartIpdDataAfterLogin";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetPatientLastPrescription(data):Observable<any>{
      let api = environment.endPoint+"GetPatientLastPrescription";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	// GetSmartAssistantByClinicId(id):Observable<any>{
	//   let api = environment.endPoint+"GetSmartAssistantByClinicId/"+id;
	//   return this.http.get(api)
	//   .map(response =>{
	//        return response.json();
	//   }).catch(error =>{
	//        return error;
	//   })
	// }

	UpdateBedCharges(data):Observable<any>{
      let api = environment.endPoint+"UpdateBedCharges";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	BookIpdForPatient(data):Observable<any>{
      let api = environment.endPoint+"BookIpdForPatient";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	FindProcedureSuggestion(data):Observable<any>{
      let api = environment.endPoint+"FindProcedureSuggestion";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	AddActivity(data):Observable<any>{
      let api = environment.endPoint+"AddActivity";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetAllIpdActivityOfPatient(id):Observable<any>{
	  let api = environment.endPoint+"GetAllIpdActivityOfPatient/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	UpdateActivity(data):Observable<any>{
      let api = environment.endPoint+"UpdateActivity";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	DeleteActivity(id):Observable<any>{
	  let api = environment.endPoint+"DeleteActivity/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	GetTotalIpdPendingPatientsOfDoctors(id):Observable<any>{
	  let api = environment.endPoint+"GetTotalIpdPendingPatientsOfDoctors/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	// DischargePatient(data):Observable<any>{
 //      let api = environment.endPoint+"DischargePatient";
	//     let body= data;
	//     return this.http.post(api,body)
	//     .map(response =>{
	//         return response.json();
	//     }).catch(error =>{
	//         return error;
	//     })
	// }

	GetIpdPatientsDataForToday(id):Observable<any>{
	  let api = environment.endPoint+"GetIpdPatientsDataForToday/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	GetIpdPatientsDataBetweenTwoDates(data):Observable<any>{
      let api = environment.endPoint+"GetIpdPatientsDataBetweenTwoDates";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetSmartPharmacyByPhone(data):Observable<any>{
      let api = environment.endPoint+"GetSmartPharmacyByPhone";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	
	UpdateSmartPharmacyByDoctor(data):Observable<any>{
      let api = environment.endPoint+"UpdateSmartPharmacyByDoctor";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetSmartPharmacyById(id):Observable<any>{
	  let api = environment.endPoint+"GetSmartPharmacyById/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	LoginSmartPharmacy(data):Observable<any>{
      let api = environment.endPoint+"LoginSmartPharmacy";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetSmartPharmacyDataAfterLogin(data):Observable<any>{
      let api = environment.endPoint+"GetSmartPharmacyDataAfterLogin";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	FindPatientsForPharmacy(data):Observable<any>{
      let api = environment.endPoint+"FindPatientsForPharmacy";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	FindByInvoiceID(id):Observable<any>{
	  let api = environment.endPoint+"FindByInvoiceID/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	UpdateSmartIpdAddress(data):Observable<any>{
      let api = environment.endPoint+"UpdateSmartIpdAddress";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	FindInstructionSuggestion(data):Observable<any>{
      let api = environment.endPoint+"FindInstructionSuggestion";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	RequestToDischargePatient(data):Observable<any>{
      let api = environment.endPoint+"RequestToDischargePatient";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetIpdDischargeReqForDoc(id):Observable<any>{
	  let api = environment.endPoint+"GetIpdDischargeReqForDoc/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	GetDoctorSuggestions(data):Observable<any>{
      let api = environment.endPoint+"GetDoctorSuggestions";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	DischargePatientApprovalByDr(data):Observable<any>{
      let api = environment.endPoint+"DischargePatientApprovalByDr";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	CreateStockPurchase(data):Observable<any>{
      let api = environment.endPoint+"CreateStockPurchase";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	FetchBill(data):Observable<any>{
      let api = environment.endPoint+"FetchBill";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	
	FindDoctorsOfSameClinic(id):Observable<any>{
	  let api = environment.endPoint+"FindDoctorsOfSameClinic/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	FindProductSuggestionFromStock(data):Observable<any>{
      let api = environment.endPoint+"FindProductSuggestionFromStock";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetStockPurchaseBetweenTwoDates(data):Observable<any>{
      let api = environment.endPoint+"GetStockPurchaseBetweenTwoDates";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SearchByPartyNameOrBill(data):Observable<any>{
      let api = environment.endPoint+"SearchByPartyNameOrBill";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	StockOnToday(data):Observable<any>{
      let api = environment.endPoint+"StockOnToday";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	FindMedicinesFromStock(data):Observable<any>{
      let api = environment.endPoint+"FindMedicinesFromStock";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	FindSingleMedicinesFromStock(data):Observable<any>{
      let api = environment.endPoint+"FindSingleMedicinesFromStock";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	FindPartySuggestion(data):Observable<any>{
      let api = environment.endPoint+"FindPartySuggestion";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	ExpiryBook(id):Observable<any>{
	  let api = environment.endPoint+"ExpiryBook/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	FetchReceipt(data):Observable<any>{
      let api = environment.endPoint+"FetchReceipt";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	CreateSalesEntry(data):Observable<any>{
      let api = environment.endPoint+"CreateSalesEntry";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SalesEntryBySmartPharmacy(data):Observable<any>{
      let api = environment.endPoint+"SalesEntryBySmartPharmacy";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SalesEntryBySmartPharmacyById(data):Observable<any>{
      let api = environment.endPoint+"SalesEntryBySmartPharmacyById";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	UpdatePharmacyDetail(data):Observable<any>{
      let api = environment.endPoint+"UpdatePharmacyDetail";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	UpdateStockPurchase(data):Observable<any>{
      let api = environment.endPoint+"UpdateStockPurchase";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	FindPartyName(data):Observable<any>{
      let api = environment.endPoint+"FindPartyName";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	DeleteExpiredStock(data):Observable<any>{
      let api = environment.endPoint+"DeleteExpiredStock";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetSmartDiagnosticsByPhone(data):Observable<any>{
      let api = environment.endPoint+"GetSmartDiagnosticsByPhone";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	
	UpdateSmartDiagnosticsByDoctor(data):Observable<any>{
      let api = environment.endPoint+"UpdateSmartDiagnosticsByDoctor";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	
	GetHelpText():Observable<any>{
      let api = environment.endPoint+"GetHelpText";
	    return this.http.get(api)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetSmartDiagnosticsById(id):Observable<any>{
	  let api = environment.endPoint+"GetSmartDiagnosticsById/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}	

	LoginSmartDiagnostics(data):Observable<any>{
      let api = environment.endPoint+"LoginSmartDiagnostics";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	ProductReorderList(id):Observable<any>{
	  let api = environment.endPoint+"ProductReorderList/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}	

	UpdateMinStockToReorder(data):Observable<any>{
      let api = environment.endPoint+"UpdateMinStockToReorder";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetReorderProducts(id):Observable<any>{
	  let api = environment.endPoint+"GetReorderProducts/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}	

	CreateSalesEntryWalkin(data):Observable<any>{
      let api = environment.endPoint+"CreateSalesEntryWalkin";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	UpdateSalesEntry(data):Observable<any>{
      let api = environment.endPoint+"UpdateSalesEntry";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetSmartPharmacyDataAfterLoginAndExpiry(data):Observable<any>{
      let api = environment.endPoint+"GetSmartPharmacyDataAfterLoginAndExpiry";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	ChangeSalesBookStatus(data):Observable<any>{
      let api = environment.endPoint+"ChangeSalesBookStatus";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	UpdateDiagnosticDetail(data):Observable<any>{
      let api = environment.endPoint+"UpdateDiagnosticDetail";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetSmartDiagnosticsDataAfterLogin(data):Observable<any>{
      let api = environment.endPoint+"GetSmartDiagnosticsDataAfterLogin";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	AddTestBySmartDiagnostics(data):Observable<any>{
      let api = environment.endPoint+"AddTestBySmartDiagnostics";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetTestBySmartDiagnostics(id):Observable<any>{
	  let api = environment.endPoint+"GetTestBySmartDiagnostics/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}	

	UpdateTestBySmartDiagnostics(data):Observable<any>{
      let api = environment.endPoint+"UpdateTestBySmartDiagnostics";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	PharmacyProgressToday(data):Observable<any>{
      let api = environment.endPoint+"PharmacyProgressToday";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	DeleteTestBySmartDiagnostics(id):Observable<any>{
	  let api = environment.endPoint+"DeleteTestBySmartDiagnostics/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}	

	FindTestSuggestion(data):Observable<any>{
      let api = environment.endPoint+"FindTestSuggestion";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	FindPatientsForDiagnostics(data):Observable<any>{
      let api = environment.endPoint+"FindPatientsForDiagnostics";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetSmartDiagnosicsDataAfterLogin(data):Observable<any>{
      let api = environment.endPoint+"GetSmartDiagnosicsDataAfterLogin";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SaveDiagnosticsSale(data):Observable<any>{
      let api = environment.endPoint+"SaveDiagnosticsSale";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	ChangeSalesBookStatusDiagnostics(data):Observable<any>{
      let api = environment.endPoint+"ChangeSalesBookStatusDiagnostics";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SalesEntryBySmartDiagnostics(data):Observable<any>{
      let api = environment.endPoint+"SalesEntryBySmartDiagnostics";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SalesEntryBySmartDiagnosticsById(data):Observable<any>{
      let api = environment.endPoint+"SalesEntryBySmartDiagnosticsById";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	DiagnosticsProgressToday(data):Observable<any>{
      let api = environment.endPoint+"DiagnosticsProgressToday";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SaveDiagnosticsSaleWithPrescription(data):Observable<any>{
      let api = environment.endPoint+"SaveDiagnosticsSaleWithPrescription";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	FindTestForDiagnostics(id):Observable<any>{
	  let api = environment.endPoint+"FindTestForDiagnostics/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}	

	SendEmailToAdminDoctorForPharmacyProgressToday(data):Observable<any>{
      let api = environment.endPoint+"SendEmailToAdminDoctorForPharmacyProgressToday";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	findWalkinOtherPatientsForPharmacy(data):Observable<any>{
      let api = environment.endPoint+"FindWalkinOtherPatientsForPharmacy";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	findWalkinOtherPatientsForDiagnostics(data):Observable<any>{
      let api = environment.endPoint+"FindWalkinOtherPatientsForDiagnostics";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SendEmailToAdminDoctorForDiagnosticsProgressToday(data):Observable<any>{
      let api = environment.endPoint+"SendEmailToAdminDoctorForDiagnosticsProgressToday";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	DeletePharmacyProduct(data):Observable<any>{
      let api = environment.endPoint+"DeletePharmacyProduct";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	PharmacyAnalytics(data):Observable<any>{
      let api = environment.endPoint+"PharmacyAnalytics";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	DiagnosticsAnalytics(data):Observable<any>{
      let api = environment.endPoint+"DiagnosticsAnalytics";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	UpdateDischargeStatusIpdPatient(data):Observable<any>{
      let api = environment.endPoint+"UpdateDischargeStatusIpdPatient";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	AreaOfInfluence(data):Observable<any>{
      let api = environment.endPoint+"AreaOfInfluence";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	IpdAnalytics(data):Observable<any>{
      let api = environment.endPoint+"IpdAnalytics";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	PharmacyAnalyticsDateWise(data):Observable<any>{
      let api = environment.endPoint+"PharmacyAnalyticsDateWise";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	DiagnosticsAnalyticsDateWise(data):Observable<any>{
      let api = environment.endPoint+"DiagnosticsAnalyticsDateWise";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	TimeAnalytics(data):Observable<any>{
      let api = environment.endPoint+"TimeAnalytics";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	PrescriptionAnalytics(data):Observable<any>{
      let api = environment.endPoint+"PrescriptionAnalytics";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	PrescriptionAnalyticsMedication(data):Observable<any>{
      let api = environment.endPoint+"PrescriptionAnalyticsMedication";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SaveUniqueMedicinesForAnalytics(data):Observable<any>{
      let api = environment.endPoint+"SaveUniqueMedicinesForAnalytics";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SaveUniqueMedicinesForAnalyticsInvestigation(data):Observable<any>{
      let api = environment.endPoint+"SaveUniqueMedicinesForAnalyticsInvestigation";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	PrescriptionAnalyticsInvestigation(data):Observable<any>{
      let api = environment.endPoint+"PrescriptionAnalyticsInvestigation";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	PrescriptionAnalyticsDiagnosis(data):Observable<any>{
      let api = environment.endPoint+"PrescriptionAnalyticsDiagnosis";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	
	PrescriptionAnalyticsSurgery(data):Observable<any>{
      let api = environment.endPoint+"PrescriptionAnalyticsSurgery";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	OPDAnalytics(data):Observable<any>{
      let api = environment.endPoint+"OPDAnalytics";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	TimeAnalyticsClinic(data):Observable<any>{
      let api = environment.endPoint+"TimeAnalyticsClinic";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	MyClinicScore(data):Observable<any>{
      let api = environment.endPoint+"MyClinicScore";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	FindReferralPatients(data):Observable<any>{
      let api = environment.endPoint+"FindReferralPatients";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json(); 
	    }).catch(error =>{
	        return error;
	    })
	}

	OPDAnalyticsClinicSummary(data):Observable<any>{
      let api = environment.endPoint+"OPDAnalyticsClinicSummary";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	ShareClinicId(data:any):Observable<any>{
		let api = environment.endPoint+"ShareClinicId";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}


	getAverageConsultationTime(data:any):Observable<any>{
		let api = environment.endPoint+"getAverageConsultationTime";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}


	checkOldPassword(data:any):Observable<any>{
		let api = environment.endPoint+"checkOldPassword";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	PharmacyProgressTodayClinicSummary(data):Observable<any>{
      let api = environment.endPoint+"PharmacyProgressTodayClinicSummary";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	SalesEntryBySmartPharmacyClinicSummary(data):Observable<any>{
      let api = environment.endPoint+"SalesEntryBySmartPharmacyClinicSummary";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetStockPurchaseBetweenTwoDatesClinicSummary(data):Observable<any>{
      let api = environment.endPoint+"GetStockPurchaseBetweenTwoDatesClinicSummary";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	StockOnTodayClinicSummary(data):Observable<any>{
      let api = environment.endPoint+"StockOnTodayClinicSummary";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	
	AllClinicSummary(data):Observable<any>{
      let api = environment.endPoint+"AllClinicSummary";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	IpdSummaryBreakUp(data):Observable<any>{
      let api = environment.endPoint+"IpdSummaryBreakUp";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	DeleteReferral(id):Observable<any>{
	  let api = environment.endPoint+"DeleteReferral/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}
	PurchasesForClinicReport(data):Observable<any>{
      let api = environment.endPoint+"PurchasesForClinicReport";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	StockOnTodayForClinicReport(data):Observable<any>{
      let api = environment.endPoint+"StockOnTodayForClinicReport";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	SendSms(data):Observable<any>{
      let api = environment.endPoint+"SendSms";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	GenerateOtpForActiveDoctor(data):Observable<any>{
      let api = environment.endPoint+"GenerateOtpForActiveDoctor";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	GenerateOtpForChangeMobile(data):Observable<any>{
      let api = environment.endPoint+"GenerateOtpForChangeMobile";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	DeleteDoctor(id):Observable<any>{
	  let api = environment.endPoint+"DeleteDoctor/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}
	ChangeVerifiedStatus(data):Observable<any>{
      let api = environment.endPoint+"ChangeVerifiedStatus";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	GetFaq():Observable<any>{
	  let api = environment.endPoint+"GetFaq";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	GetPricing():Observable<any>{
	  let api = environment.endPoint+"GetSubscriptionPricingDiscount";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}
	PrivacyPolicy():Observable<any>{
	  let api = environment.endPoint+"PrivacyPolicy";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	TermAndCondition():Observable<any>{
	  let api = environment.endPoint+"TermAndCondition";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	AboutUs():Observable<any>{
	  let api = environment.endPoint+"AboutUs";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}
	AllDispensePatients(data):Observable<any>{
      let api = environment.endPoint+"AllDispensePatients";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetAllDoctors():Observable<any>{
	  let api = environment.endPoint+"GetAllDoctors";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}
	FindPatientByName(data):Observable<any>{
      let api = environment.endPoint+"FindPatientByName";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	AllDispensePatientsForSearchRecords(data):Observable<any>{
      let api = environment.endPoint+"AllDispensePatientsForSearchRecords";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	
	
	DeletePatientRecord(data):Observable<any>{
      let api = environment.endPoint+"DeletePatientRecord";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	GetUploadTutorials():Observable<any>{
	  let api = environment.endPoint+"GetTutorialsdata";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}
	
	GetTutorialVideos():Observable<any>{
	  let api = "https://doctmapi.gagzweblab.xyz:3001/GetTutorialsVideo";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}
	
	GetTutorialDocuments():Observable<any>{
	  let api = "https://doctmapi.gagzweblab.xyz:3001/GetTutorialspdf";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}
	GetTutorialsCategories():Observable<any>{
	  let api = environment.endPoint+"GetTutorialsCategories";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}
	AllDispensePatientsHistory(data):Observable<any>{
      let api = environment.endPoint+"AllDispensePatientsHistory";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	ChangeDigitalPrescriptionStatus(data):Observable<any>{
      let api = environment.endPoint+"ChangeDigitalPrescriptionStatus";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}
	SetOpdHolday(data):Observable<any>{
      let api = environment.endPoint+"SetOpdHolday";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetOpdHoliday(ob):Observable<any>{
	  let api = environment.endPoint+"GetOpdHoliday/"+ob.doctor_id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}
	
	ShareByDoctor(data):Observable<any>{
      let api = environment.endPoint+"ShareByDoctor";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	DeleteOpdHoliday(id):Observable<any>{
	  let api = environment.endPoint+"DeleteOpdHoliday/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	RateUs(data):Observable<any>{
      let api = environment.endPoint+"RateUs";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetRatingUs():Observable<any>{
	  let api = environment.endPoint+"GetRatingUs";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	GetFaqForDoctor():Observable<any>{
	  let api = environment.endPoint+"GetFaqForDoctor";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	SMSPayment(data):Observable<any>{
      let api = environment.endPoint+"SMSPayment";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	GetSmsPricing():Observable<any>{
	  let api = environment.endPoint+"GetSmsPricing";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	GetAllDispenseListToDelete(data):Observable<any>{
      let api = environment.endPoint+"GetAllDispenseListToDelete";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })
	}

	CreateDoctorForSubscription(data):Observable<any>{
      let api = environment.endPoint+"CreateDoctorForSubscription";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
	}

	updateRazorpayToDoctor(data):Observable<any>{
      let api = environment.endPoint+"updateRazorpayToDoctor";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
	}

	SevenDaysTrialSubscription(data):Observable<any>{
      let api = environment.endPoint+"SevenDaysTrialSubscription";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
	}
	GetSevenDaysTrialSubscription():Observable<any>{
	  let api = environment.endPoint+"GetSevenDaysTrialSubscription";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}
	
	FindPatientAppointmentByDate(data):Observable<any>{
      let api = environment.endPoint+"FindPatientAppointmentByDate";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
	}
	DeleteAppointmentViaHoliday(data):Observable<any>{
      let api = environment.endPoint+"DeleteAppointmentViaHoliday";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
	}
	GetSMSPaymentData(data):Observable<any>{
      let api = environment.endPoint+"GetSMSPaymentData";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
	}
	SendSMSToPatients(data):Observable<any>{
      let api = environment.endPoint+"SendSMSToPatients";
	    let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
	}

	
	CreateUserPlan(data):Observable<any>{
		let api= environment.endPoint+"createUserPlan";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
		
	}
	
	updateDoctorSubscription(data):Observable<any>{
		let api= environment.endPoint+"updateDoctorSubscription";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
		
	}	
	fetchSubscription(data):Observable<any>{
		let api= environment.endPoint+"fetchSubscription";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
		
	}
	
	UpdatePrintOutStatusReg(data):Observable<any>{
		let api= environment.endPoint+"UpdatePrintOutStatusReg";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
		
	}
	FindOneDoctorByPhone(data):Observable<any>{
		let api= environment.endPoint+"FindOneDoctorByPhone";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
		
	}

	UpdateDoctorPassword(data):Observable<any>{
		let api= environment.endPoint+"UpdateDoctorPassword";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
		
	}
	
	GetSmartClinicService():Observable<any>{
	  let api = environment.endPoint+"GetSmartClinicService";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}
	GetSmartAssistantService():Observable<any>{
	  let api = environment.endPoint+"GetSmartAssistantService";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}
	GetSmartPhamacyService():Observable<any>{
	  let api = environment.endPoint+"GetSmartPhamacyService";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}
	GetSmartDiagnosticsService():Observable<any>{
	  let api = environment.endPoint+"GetSmartDiagnosticsService";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}
	GetSmartIPDService():Observable<any>{
	  let api = environment.endPoint+"GetSmartIPDService";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}

	FindOneAssistantByPhone(data):Observable<any>{
		let api= environment.endPoint+"FindOneAssistantByPhone";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
		
	}
	FindOnePharmacyByPhone(data):Observable<any>{
		let api= environment.endPoint+"FindOnePharmacyByPhone";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
		
	}
	FindOneDiagnosticsByPhone(data):Observable<any>{
		let api= environment.endPoint+"FindOneDiagnosticsByPhone";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
		
	}
	FindOneIPDByPhone(data):Observable<any>{
		let api= environment.endPoint+"FindOneIPDByPhone";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
		
	}

	UpdateAssistantPassword(data):Observable<any>{
		let api= environment.endPoint+"UpdateAssistantPassword";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
		
	}
	UpdatePharmacyPassword(data):Observable<any>{
		let api= environment.endPoint+"UpdatePharmacyPassword";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
		
	}
	UpdateDiagnosticsPassword(data):Observable<any>{
		let api= environment.endPoint+"UpdateDiagnosticsPassword";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
		
	}

	createSmartDiagnosticsOnSignUp(data):Observable<any>{
		let api= environment.endPoint+"createSmartDiagnosticsOnSignUp";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
		
	}
	createSmartIpdOnSignUp(data):Observable<any>{
		let api= environment.endPoint+"createSmartIpdOnSignUp";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
		
	}
	createSmartPharmacyOnSignUp(data):Observable<any>{
		let api= environment.endPoint+"createSmartPharmacyOnSignUp";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
		
	}
	UpdateIPDPassword(data):Observable<any>{
		let api= environment.endPoint+"UpdateIPDPassword";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
	}
	
	AddWriteToUs(data):Observable<any>{
		let api= environment.endPoint+"AddWriteToUs";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
	}	
	CheckDoctorEmailPhone(data):Observable<any>{
		let api= environment.endPoint+"CheckDoctorEmailPhone";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
	}	
	SendSMSANDEMAILPAtiants(data):Observable<any>{
		let api= environment.endPoint+"SendSMSANDEMAILPAtiants";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
	}	
	SubmitContactUsDetails(data):Observable<any>{
		let api= environment.endPoint+"SubmitContactUsDetails";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
	}	
	FindDispensedPatients(data):Observable<any>{
		let api= environment.endPoint+"FindDispensedPatients";
		let body= data;
	    return this.http.post(api,body)
	    .map(response =>{
	        return response.json();
	    }).catch(error =>{
	        return error;
	    })    
	}

	DeleteOneDispensedPatients(id):Observable<any>{
	  let api = environment.endPoint+"DeleteOneDispensedPatients/"+id;
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}
	GetUserGuide():Observable<any>{
	  let api = environment.endPoint+"GetUserGuide";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}
	GetAllDoctorDiagnosis():Observable<any>{
	  let api = environment.endPoint+"GetAllDoctorDiagnosis";
	  return this.http.get(api)
	  .map(response =>{
	       return response.json();
	  }).catch(error =>{
	       return error;
	  })
	}


}