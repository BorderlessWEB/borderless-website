interface Step {
  number: number;
  title: string;
  description: string;
}

interface WorkflowStepsProps {
  steps: Step[];
}

export default function WorkflowSteps({ steps }: WorkflowStepsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step) => (
        <div key={step.number} className="relative">
          <div className="text-6xl lg:text-7xl font-semibold text-burgundy/10 mb-2">
            {String(step.number).padStart(2, "0")}
          </div>
          <h3 className="text-lg font-semibold text-dark mb-2">
            {step.title}
          </h3>
          <p className="text-gray-dark text-sm leading-relaxed">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
