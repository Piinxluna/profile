export default function importImagesFromFolder(imgFolder) {
  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  var imagesArray = null;

  switch (imgFolder) {
    case "PSM_SportDay":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2020/PSM_SportDay",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "PSM_SchoolHazing2020":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2020/PSM_SchoolHazing2020",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "KMITL_KmitlizationOpenHouse":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2020/KMITL_KmitlizationOpenHouse",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "BasePlayhouse_LeadershipBooster":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2020/BasePlayhouse_LeadershipBooster",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "KUKPS_ProgrammingComp":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2020/KUKPS_ProgrammingComp",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "KMUTT_BangmodHackaton":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2020/KMUTT_BangmodHackaton",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "KMUTT_JSForGoogleMapAPI":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2021/KMUTT_JSForGoogleMapAPI",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "NECTEC_KidbrightBoard":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2021/NECTEC_KidbrightBoard",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "TNI_InnovatorJourney":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2021/TNI_InnovatorJourney",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "AideaTH_AideaWorkshop":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2021/AideaTH_AideaWorkshop",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "ITM_BasicDataScience":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2021/ITM_BasicDataScience",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "PSM_DataAnalytics":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2021/PSM_DataAnalytics",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "TCASter_AcademicWar3_Qualifier":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2021/TCASter_AcademicWar3_Qualifier",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "TCASter_AcademicWar3_Final":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2021/TCASter_AcademicWar3_Final",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "CRA_BasicPythonForHealthDataScience":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2022/CRA_BasicPythonForHealthDataScience",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "NECTEC_KidbrightOnstage2022":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2022/NECTEC_KidbrightOnstage2022",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "CU_LarnGearCamp21":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2022/CU_LarnGearCamp21",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "KMITL-IT_ToBeIT66_Onsite":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2022/KMITL-IT_ToBeIT66_Onsite",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "KMITL-IT_ITCamp18":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2022/KMITL-IT_ITCamp18",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "PSM_SchoolHazing2022":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2022/PSM_SchoolHazing2022",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "RSU_ReactBasic":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2022/RSU_ReactBasic",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "KKU_ComputerComp":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2022/KKU_ComputerComp",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "TU_DataCampInWonderland":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2022/TU_DataCampInWonderland",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    case "Garena_GamerToCoder":
      imagesArray = Object.values(
        importAll(
          require.context(
            "../../../public/images/activities/img/2022/Garena_GamerToCoder",
            false,
            /\.(png|jpe?g|svg|jpg|gif)$/
          )
        )
      );
      return imagesArray;
    default:
      return imagesArray;
  }
}
