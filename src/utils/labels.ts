export const getLabels = (labels: any) => {
  let pointSingular = getSingular(labels.labelPoints)
  let pointPlural = getPlural(labels.labelPoints)

  let referralSingular = getSingular(labels.labelReferrals)
  let referralPlural = getPlural(labels.labelReferrals)

  let perkSingular = getSingular(labels.labelPerks)
  let perkPlural = getPlural(labels.labelPerks)

  return {
    labelItems: labels.labelItems || 'Items',
    labelPerks: perkPlural || 'Perks',
    labelPoints: pointPlural || 'Points',
    labelQuests: labels.labelQuests || 'Quests',
    labelReferrals: referralPlural || 'Referrals',
    labelRewards: labels.labelRewards || 'Rewards',
    pointSingular: pointSingular || 'Point',
    referralSingular: referralSingular || 'Referral',
    perkSingular: perkSingular || 'Perk',
  }
}

export const getSingular = (label: string) => {
  if (label && label.length > 0 && label.substring(label.length - 1).toLowerCase() === 's') {
    return label.substring(0, label.length - 1)
  } else {
    return label
  }
}

export const getPlural = (label: string) => {
  if (label && label.length > 0 && label.substring(label.length - 1).toLowerCase() === 's') {
    return label
  } else {
    return `${label}s`
  }
}
