import Typography, { TypographyProps } from "@material-ui/core/Typography";


export interface LabelProps extends TypographyProps {
  text: string;
}

const PrimaryLabel: React.FC<LabelProps> = (props) => {
  const { text, ...rest } = props;
  return (
    <Typography variant="h6" color="initial" {...rest}>
      {text}
    </Typography>
  );
};
export const CardLabel: React.FC<LabelProps> = (props) => {
  const {text, ...rest}=props;
  return <Typography variant="body2" color="textSecondary" {...rest}>{text}</Typography>;
};
export const TitleLabel: React.FC<LabelProps> = ({ text }) => {
  return (
    <Typography variant="h4" color="initial">
      {text}
    </Typography>
  );
};
export const LabelSubTitle: React.FC<LabelProps> = ({ text }) => {
  return (
    <Typography variant="subtitle1"  >
      {text}
    </Typography>
  );
};

export default PrimaryLabel;
