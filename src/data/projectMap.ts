import Project1 from "../pages/projects/Project1";
import Project2 from "../pages/projects/Project2";
import Project3 from "../pages/projects/Project3";

const projectMap: Record<number, React.FC> = {
    1: Project1,
    2: Project2,
    3: Project3
};

export default projectMap;