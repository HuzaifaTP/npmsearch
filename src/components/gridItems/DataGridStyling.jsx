import { createStyles, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      // '& div[data-rowIndex][role="row"]:nth-of-type(5n-4)': {
        
      //   //risky
      //   minHeight: "30px !important",
      //   height: 90,
      //   "& div": {
      //     minHeight: "60px !important",
      //     height: 60,
      //     lineHeight: "59px !important"
      //   }
      // },
      // "& .MuiDataGrid-renderingZone": {
      //   "& .MuiDataGrid-row": {
      //     "&:nth-child(2n)": { backgroundColor: "rgba(235, 235, 235, .7)" }
      //   }
      // }
    }
  })
);

export default useStyles