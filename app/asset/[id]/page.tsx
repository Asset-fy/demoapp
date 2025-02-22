"use client"

import type React from "react"
import Layout from "@/components/Layout"
import { CompanyData } from "@/components/CompanyData"
import CompanyContainer from "@/components/CompanyContainer"
import { useRouter } from "next/navigation"
import Providers from "@/app/providers"

interface AssetDetailProps {
  params: {
    id: string
  }
}

const AssetDetail: React.FC<AssetDetailProps> = ({ params }) => {
  const router = useRouter()

  // This is mock data. In a real application, you'd fetch this data based on the asset ID.
  const companyData = {
    name: "Toyota",
    logo: "https://cdn.worldvectorlogo.com/logos/toyota-1.svg",
    totalFunding: "$240,000,000",
    currentFunding: "$176,770,000",
    interestRate: "3.5%",
    maturityDate: "2025-12-31",
    videoUrl: "https://www.youtube.com/embed/qexKT52cXuI", // Replace with actual video URL
    tokenName: "ARCS-TOYOTA",
    description:
      "Toyota is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan. It was founded by Kiichiro Toyoda and incorporated on .",
  }

  return (
    <Providers>
    <Layout>
      <CompanyData
        name={companyData.name}
        totalFunding={companyData.totalFunding}
        currentFunding={companyData.currentFunding}
        interestRate={companyData.interestRate}
        logo={companyData.logo}
      />
      <CompanyContainer
        name={companyData.name}
        logo={companyData.logo}
        videoUrl={companyData.videoUrl}
        interestRate={companyData.interestRate}
        maturityDate={companyData.maturityDate}
        currentFunding={companyData.currentFunding}
        targetFunding={companyData.totalFunding}
        tokenName={companyData.tokenName}
        description={companyData.description}
        projectId={BigInt(1)}
      />
    </Layout>
    </Providers>
  )
}

export default AssetDetail

