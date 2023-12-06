import AddressForm from "@components/organiser/registration/AddressForm";
import BankDetailForm from "@components/organiser/registration/BankDetailForm";
import HeadSection from "@components/organiser/registration/HeadSection";
import { NextPageContext } from "next";
import OrganisationDetail from "@components/organiser/registration/OrganisationDetail";
import ProgressStepsBar from "@components/organiser/registration/ProgressStepsBar";
import { RegistrationFormsStore } from "@store/index";
import { getCookie } from "cookies-next";
import { orgTokenStore } from "@store/index";
import { useEffect } from "react";

const Registration = ({ token }: { token: string }) => {
  const { orgDetailFormStatus, addressFormStatus, orgBankDetailFormStatus } =
    RegistrationFormsStore();

  // const { setOrgToken } = orgTokenStore();

  // useEffect(() => {
  //   setOrgToken(token);
  // }, []);

  return (
    <div className=' max-w-7xl mx-auto isolate bg-white px-6 py-24 sm:py-12 lg:px-8'>
      <HeadSection />
      <div className='mt-12'>
        <ProgressStepsBar />
      </div>
      {orgDetailFormStatus && <OrganisationDetail />}
      {addressFormStatus && <AddressForm />}
      {orgBankDetailFormStatus && <BankDetailForm />}
    </div>
  );
};

export default Registration;

// export async function getServerSideProps(context: NextPageContext) {
//   const req = context.req;
//   const res = context.res;
//   const token = getCookie("org_token", { req, res });
//   return {
//     props: { token },
//   };
// }
