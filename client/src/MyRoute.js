import { BrowserRouter,Switch,Route } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
// import AnnounceComponent from "./components/AnnounceComponent";
// import AddHospitalComponent from "./components/AddHospitalComponent";
import App from "./App"
// import HospitalComponent from "./components/HospitalComponent";
// import AddAnnounceComponent from "./components/AddAnnounceComponent";
import TestComponent from "./components/TestComponent";
// import EditHospitalComponent from "./components/EditHospitalComponent";
import NewsComponent from "./components/NewsComponent";
import OrganizationComponent from "./components/OrganizationComponent";
import DocumentComponent from "./components/DocumentComponent";
import ResultComponent from "./components/ResultComponent";
import OrganizationComponent1 from "./components/Organizationcomponent1";

import CheckStatusForNisitComponent from "./components/CheckStatusForNisitComponent";
import CheckStatusForSuperComponent from "./components/CheckStatusForSuperComponent";
import ApproveStatusForSuperComponent from "./components/ApproveStatusForSuperComponent";
import NewsAddComponent from "./components/NewsAddComponent";
import LabComponent from "./components/LabComponent";
import TestResultComponent from "./components/TestResultComponent";
import LabAddComponent from "./components/LabAddComponent";
import LabEditComponent from "./components/LabEditComponent";
import TestResultEditComponent from "./components/TestResultEditComponent"; 
import TestResultAddComponent from "./components/TestResultAddComponent";
import OrganizationEditComponent from "./components/OrganizationEditComponent";
import PatientInfoComponent from "./components/PatientInfoComponent";

const MyRoute=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}/>
                {/* <Route path="/announce" exact component={AnnounceComponent}/> */}
                <Route path="/login" exact component={LoginComponent}/>
                <Route path="/register" exact component={RegisterComponent}/>
                {/* <Route path="/addhospital" exact component={AddHospitalComponent}/> */}
                {/* <Route path="/hospital" exact component={HospitalComponent}/> */}
                {/* <Route path="/addannounce" exact component={AddAnnounceComponent}/> */}
                <Route path="/test" exact component={TestComponent}/>
                {/* <Route path="/edithospital/:_id" exact component={EditHospitalComponent}/> */}


                <Route path="/news" exact component={NewsComponent}/>
                <Route path="/addnews/:_id" exact component={NewsAddComponent} />

                <Route path="/organization" exact component={OrganizationComponent} />
                <Route path="/organization1" exact component={OrganizationComponent1} />
                <Route path="/editorganization1/:_id" exact component={OrganizationEditComponent} />

                <Route path="/checkstatusfornisit" exact component={CheckStatusForNisitComponent} />
                <Route path="/checkstatusforsuper" exact component={CheckStatusForSuperComponent} />
                <Route path="/documents" exact component={DocumentComponent} />
                <Route path="/result" exact component={ResultComponent} />
                <Route path="/appstatussuper" exact component={ApproveStatusForSuperComponent} />
                <Route path="/appstatussuper/:_id" exact component={ApproveStatusForSuperComponent} />

                <Route path="/lab" exact component={LabComponent} />
                <Route path="/addlab" exact component={LabAddComponent} />
                <Route path="/editlab/:_id" exact component={LabEditComponent} />

                <Route path="/testresult" exact component={TestResultComponent} />
                <Route path="/addresult" exact component={TestResultAddComponent} />
                <Route path="/editresult/:_id" exact component={TestResultEditComponent} />
                

                {/* <Route path="/patientinfo/:_id" exact component={PatientInfoComponent} /> */}
                <Route path="/patientinfo/:_id" exact component={PatientInfoComponent} />


            </Switch>
        </BrowserRouter>
    );
}
export default MyRoute;