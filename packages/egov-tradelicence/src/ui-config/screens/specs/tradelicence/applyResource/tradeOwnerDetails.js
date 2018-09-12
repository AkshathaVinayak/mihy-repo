import {
  getCommonCard,
  getCommonGrayCard,
  getCommonTitle,
  getCommonSubHeader,
  getCommonParagraph,
  getTextField,
  getSelectTextField,
  getCommonContainer
} from "../../utils";

const OwnerInfoCard = getCommonGrayCard({
  header: getCommonSubHeader("Owner Information"),
  tradeUnitCardContainer: getCommonContainer({
    ownerMobileNo: getTextField("Mobile No.", "Enter Mobile No.", true, ""),
    ownerName: getTextField("Name", "Enter Name", true, ""),
    ownerFatherName: getTextField(
      "Father/Husband's Name",
      "Enter Father/Husband's Name",
      true,
      ""
    ),
    OwnerGender: getSelectTextField("Gender", "Select Gender", true, ""),
    ownerDOB: getTextField("Date of Birth", "Enter Date of Birth", true, ""),
    ownerEmail: getTextField("Email", "Enter Email", false, ""),
    ownerPAN: getTextField("PAN No.", "Enter Owner's PAN No.", false, ""),
    ownerAddress: getTextField(
      "Corrospondence Address",
      "Enter Corrospondence Address",
      true,
      ""
    ),
    OwnerSpecialCategory: getSelectTextField(
      "Special Owner Category",
      "Select Special Owner Category",
      true,
      ""
    )
  })
});

export const tradeOwnerDetails = getCommonCard({
  header: getCommonTitle("Please Provide Trade Owner Details"),
  paragraph: getCommonParagraph(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard."
  ),
  tradeLicenseType: getSelectTextField(
    "Type of ownership",
    "Select Type of Ownership",
    false,
    ""
  ),
  OwnerInfoCard
});
