// Competencies Component

import type React from "react";
import type { Competency } from "../types/competency";
import DisplayCompetency from "./DisplayCompetency";

interface CompetenciesProps {
    competencies: Competency[]
};

const Competencies: React.FC<CompetenciesProps> = ({ competencies }) => {
    const sortedCompetencies = competencies.sort((a, b) => a.order - b.order);
    return (
        <div className="field is-grouped is-grouped-multiline">
            { sortedCompetencies.map(competency => <DisplayCompetency competency={competency} />) }
        </div>
    );
};

export default Competencies;