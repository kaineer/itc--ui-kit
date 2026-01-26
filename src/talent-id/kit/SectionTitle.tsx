import classes from "./SectionTitle.module.css";

interface Props {
  title: string;
}

export const SectionTitle = ({ title }: Props) => {
  return <h1 className={classes.title}>{title}</h1>;
};
