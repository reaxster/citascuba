import React from "react";
import {
  TermsOfUse,
  PrivacyNotice,
  User,
  AccessAndNavigation,
  PrivacyAndProtectionOfData,
  LinksPolicy,
  IntellectualProperty,
} from "../components/disclosure/DisclosureText";

export default () => {
  return (
    <div className="my-5 container jumbotron">
      <TermsOfUse />
      <PrivacyNotice />
      <User />
      <AccessAndNavigation />
      <PrivacyAndProtectionOfData />
      <LinksPolicy />
      <IntellectualProperty />
    </div>
  );
};
