import CourseHero from "../Components/courses/CourseHero";
import CourseOverview from "../Components/courses/CourseOverview";
import SkillsSection from "../Components/courses/SkillsSection";
import LearningOutcomes from "../Components/courses/LearningOutcomes";
import CourseOutline from "../Components/courses/CourseOutline";
import TargetAudience from "../Components/courses/TargetAudience";
import TrainingModes from "../Components/courses/TrainingModes";
import WhyEdstellar from "../Components/courses/WhyEdstellar";
import CertificateSection from "../Components/courses/CertificateSection";
import QuoteSection from "../Components/courses/QuoteSection";

async function getCourseData() {
  const res = await fetch("http://localhost:3000/api/courses", {
    cache: "no-store",
  });

  return res.json();
}

export default async function CoursePage() {
  const data = await getCourseData();

  return (
    <>
      <CourseHero data={data} />
      <CourseOverview data={data.overview} />
      <SkillsSection skills={data.skills} />
      <LearningOutcomes outcomes={data.learningOutcomes} />
      <CourseOutline curriculum={data.curriculum} />
      <TargetAudience
        audience={data.targetAudience}
        prerequisites={data.prerequisites}
      />
      <TrainingModes modes={data.trainingModes} />
      <WhyEdstellar items={data.whyEdstellar} />
      <CertificateSection certificate={data.certificate} />
      <QuoteSection cta={data.cta} />
    </>
  );
}
