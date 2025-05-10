import { FitnessMetrics } from "@/components/fitness-metrics"
import { Pageconfig } from "@/components/Pageconfig"

export default function DashBoard() {
  return (
    <Pageconfig title="Dashboard" description="Bem-vindo ao seu painel de controle">
      <FitnessMetrics
      className="flex-1"
      />
    </Pageconfig>
  )
}
