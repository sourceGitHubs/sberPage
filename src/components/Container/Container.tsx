import FilterBar from "./FilterBar/FilterBar";
import HeadContainer from "./HeadContainer/HeadContainer";

import styles from "./Container.module.scss";
import WidgetGroup1 from "./PieChartsWidgets/WidgetGroup1/WidgetGroup1";
import TrainingOtherPrograms from "./PieChartsWidgets/Widgets/Widget3/TrainingOtherPrograms";
import PopularInternalProgramsWidget from "./PieChartsWidgets/Widgets/Widget4/PopularInternalProgramsWidget";
import WidgetGroup2 from "./PieChartsWidgets/WidgetGroup2/WidgetGroup2";

const Container = () => {
  return (
    <div className={styles.container}>
      <HeadContainer />
      <FilterBar />
      <WidgetGroup1 />
      <WidgetGroup2 />
    </div>
  );
};

export default Container;
