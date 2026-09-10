---
title: Accept 85 recovered CPC 3.0 material mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing the recovered 85-PCR integration batch
  - when resolving any CPC 3.0 code listed in this decision
  - when regenerating aliases, coverage, or the material catalog
whenToUpdate:
  - when one of the listed semantic mappings or PCR identities changes
checkPaths:
  - docs/adr/0016-accept-recovered-85-cpc-material-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
  - library/pcrs/**
  - packages/pcr-viewer/**
lastReviewedAt: 2026-08-10
lastReviewedCommit: null
---

# Accept 85 Recovered CPC 3.0 Material Mappings

## Decision

Accept the 85 CPC 3.0-to-PCR edges listed below after repository-owner approval of the recovery integration. The batch contains 84 `exact` relations and one `narrower` relation for CPC 33380 because the recovered PCR covers petroleum-derived finished lubricating oils rather than every product in the broader CPC lubricant leaf.

Each target is a bilingual, four-file, authored methodology record whose manifest identity, semantic directory, CPC code, CPC title, and declared relation were checked against the normalized CPC 3.0 inventory. The accepted edges are recorded in `classifications/mappings/cpc-3.0-to-pcr.yaml`; this ADR is their durable acceptance reference.

## Batch Boundary

This decision covers exactly the 85 codes in the table. CPC 01961 and CPC 01962 are outside this recovery batch. Disputed recovery candidates CPC 41431, 46132, 46220, 46340, and 46410 remain excluded. No candidate or manual-review evidence is promoted by this decision.

Five recovered records—CPC 46932, 47211, 47213, 47313, and 47314—contained complete authored content but retained legacy scaffold lifecycle labels. Their manifests are repaired to `candidate` and `authored_methodology` as part of this transaction; their methodology content is unchanged.

## Accepted Edges

| CPC 3.0 | Product | Relation | Canonical PCR id |
| --- | --- | --- | --- |
| 01112 | Wheat, other | `exact` | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-other` |
| 01121 | Maize (corn), seed | `exact` | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-corn-seed` |
| 01122 | Maize (corn), other | `exact` | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-corn-other` |
| 01131 | Rice, seed | `exact` | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rice-seed` |
| 01132 | Rice paddy, other (not husked) | `exact` | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rice-paddy-other-not-husked` |
| 01141 | Sorghum, seed | `exact` | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sorghum-seed` |
| 01142 | Sorghum, other | `exact` | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sorghum-other` |
| 01151 | Barley, seed | `exact` | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.barley-seed` |
| 17100 | Electrical energy | `exact` | `pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.electrical-energy` |
| 33311 | Motor gasoline | `exact` | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.motor-gasoline` |
| 33312 | Aviation gasoline | `exact` | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.aviation-gasoline` |
| 33330 | Naphtha | `exact` | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.naphtha` |
| 33342 | Kerosene-type jet fuel | `exact` | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.kerosene-type-jet-fuel` |
| 33360 | Gas oil | `exact` | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.gas-oil` |
| 33370 | Fuel oils n.e.c. | `exact` | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.fuel-oils-n-e-c` |
| 33380 | Lubricants | `narrower` | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.lubricants` |
| 34232 | Phosphoric acid | `exact` | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.phosphoric-acid` |
| 34651 | Ammonia, anhydrous | `exact` | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ammonia-anhydrous` |
| 37113 | Float glass and surface ground or polished glass, in sheets | `exact` | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.float-glass-and-surface-ground-or-polished-glass-in-sheets` |
| 37440 | Portland cement, aluminous cement, slag cement and similar hydraulic cements, except in the form of clinkers | `exact` | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.portland-cement-aluminous-cement-slag-cement-and-similar-hydraulic-cements-except-in-th-4565601a` |
| 39380 | Waste and scrap of primary cells, primary batteries and electric accumulators; spent primary cells, primary batteries and electric accumulators | `exact` | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-primary-cells-primary-batteries-and-electric-accumulators-spent-prim-9f1a4593` |
| 41114 | Ferro-nickel | `exact` | `pcr.metal-products-machinery-and-equipment.basic-metals.ferro-nickel` |
| 41211 | Flat-rolled products of non-alloy steel, not further worked than hot-rolled, of a width of 600 mm or more | `exact` | `pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-not-further-worked-than-hot-rolled-of-a-width-o-fbbe0da4` |
| 41233 | Flat-rolled products of silicon-electrical steel | `exact` | `pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-silicon-electrical-steel` |
| 41413 | Refined copper and copper alloys, unwrought; master alloys of copper | `exact` | `pcr.metal-products-machinery-and-equipment.basic-metals.refined-copper-and-copper-alloys-unwrought-master-alloys-of-copper` |
| 41513 | Wire of copper | `exact` | `pcr.metal-products-machinery-and-equipment.basic-metals.wire-of-copper` |
| 41515 | Foil, of copper, of a thickness not exceeding 0.15 mm | `exact` | `pcr.metal-products-machinery-and-equipment.basic-metals.foil-of-copper-of-a-thickness-not-exceeding-0-15-mm` |
| 41533 | Wire of aluminium | `exact` | `pcr.metal-products-machinery-and-equipment.basic-metals.wire-of-aluminium` |
| 41534 | Plates, sheets and strip, of aluminium, of a thickness exceeding 0.2 mm | `exact` | `pcr.metal-products-machinery-and-equipment.basic-metals.plates-sheets-and-strip-of-aluminium-of-a-thickness-exceeding-0-2-mm` |
| 41535 | Foil, of aluminium, of a thickness not exceeding 0.2 mm | `exact` | `pcr.metal-products-machinery-and-equipment.basic-metals.foil-of-aluminium-of-a-thickness-not-exceeding-0-2-mm` |
| 45220 | Portable automatic data processing machines weighing not more than 10 kg, such as laptops, notebooks and sub-notebooks | `exact` | `pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.portable-automatic-data-processing-machines-weighing-not-more-than-10-kg-such-as-laptop-ad01b84e` |
| 45230 | Automatic data processing machines, comprising in the same housing at least a central processing unit and an input and output unit, whether or not combined | `exact` | `pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.automatic-data-processing-machines-comprising-in-the-same-housing-at-least-a-central-pr-d2ad0c9a` |
| 45240 | Automatic data processing machines presented in the form of systems | `exact` | `pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.automatic-data-processing-machines-presented-in-the-form-of-systems` |
| 45250 | Other automatic data processing machines whether or not containing in the same housing one or two of the following types of units: storage units, input units, output units | `exact` | `pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-automatic-data-processing-machines-whether-or-not-containing-in-the-same-housing-565130a9` |
| 45271 | Fixed media storage units | `exact` | `pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.fixed-media-storage-units` |
| 45281 | Sound, video, network and similar cards for automatic data processing machines | `exact` | `pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.sound-video-network-and-similar-cards-for-automatic-data-processing-machines` |
| 45289 | Other units of automatic data processing machines | `exact` | `pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-units-of-automatic-data-processing-machines` |
| 46113 | Photovoltaic AC/DC generators | `exact` | `pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.photovoltaic-ac-dc-generators` |
| 46122 | Ballasts for discharge lamps or tubes; static converters; other inductors | `exact` | `pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.ballasts-for-discharge-lamps-or-tubes-static-converters-other-inductors` |
| 46211 | Electrical apparatus for switching or protecting electrical circuits, or for making connexions to or in electrical circuits, for a voltage exceeding 1000 V | `exact` | `pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electrical-apparatus-for-switching-or-protecting-electrical-circuits-or-for-making-conn-673753bb` |
| 46212 | Electrical apparatus for switching or protecting electrical circuits, for making connexions to or in electrical circuits, for a voltage not exceeding 1000 V | `exact` | `pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electrical-apparatus-for-switching-or-protecting-electrical-circuits-for-making-connexi-f150ac20` |
| 46213 | Boards, consoles, cabinets and other bases, equipped with electrical switching etc. apparatus, for electric control or the distribution of electricity, for a voltage not exceeding 1000 V | `exact` | `pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.boards-consoles-cabinets-and-other-bases-equipped-with-electrical-switching-etc-apparat-8d49dcd5` |
| 46214 | Boards, consoles, cabinets and other bases, equipped with electrical switching etc. apparatus, for electric control or the distribution of electricity, for a voltage exceeding 1000 V | `exact` | `pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.boards-consoles-cabinets-and-other-bases-equipped-with-electrical-switching-etc-apparat-fffa1be2` |
| 46215 | Connectors for optical fibres, optical fibre bundles or cables | `exact` | `pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.connectors-for-optical-fibres-optical-fibre-bundles-or-cables` |
| 46310 | Insulated winding wire | `exact` | `pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.insulated-winding-wire` |
| 46330 | Ignition wiring sets and other wiring sets of a kind used in vehicles, aircraft or ships | `exact` | `pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.ignition-wiring-sets-and-other-wiring-sets-of-a-kind-used-in-vehicles-aircraft-or-ships` |
| 46350 | Other electric conductors, for a voltage exceeding 1000 V | `exact` | `pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.other-electric-conductors-for-a-voltage-exceeding-1000-v` |
| 46510 | Electric filament or discharge lamps; arc lamps | `exact` | `pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electric-filament-or-discharge-lamps-arc-lamps` |
| 46533 | Luminaires and lighting fittings, designed for use solely with light-emitting diode (LED) light sources | `exact` | `pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.luminaires-and-lighting-fittings-designed-for-use-solely-with-light-emitting-diode-led-a0afd2c0` |
| 46932 | Permanent ceramic or ferrite magnets | `exact` | `pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.permanent-ceramic-or-ferrite-magnets` |
| 47120 | Electrical resistors (except heating resistors) | `exact` | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.electrical-resistors-except-heating-resistors` |
| 47130 | Printed circuits | `exact` | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.printed-circuits` |
| 47150 | Diodes, transistors and similar semi-conductor devices; photosensitive semi-conductor devices; light emitting diodes; mounted piezo-electric crystals | `exact` | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.diodes-transistors-and-similar-semi-conductor-devices-photosensitive-semi-conductor-dev-f90ad4b6` |
| 47160 | Electronic integrated circuits | `exact` | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.electronic-integrated-circuits` |
| 47211 | Transmission apparatus incorporating reception apparatus | `exact` | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.transmission-apparatus-incorporating-reception-apparatus` |
| 47212 | Transmission apparatus not incorporating reception apparatus | `exact` | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.transmission-apparatus-not-incorporating-reception-apparatus` |
| 47213 | Television cameras | `exact` | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.television-cameras` |
| 47221 | Line telephone sets with cordless handsets | `exact` | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.line-telephone-sets-with-cordless-handsets` |
| 47222 | Telephones for cellular networks or for other wireless networks | `exact` | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.telephones-for-cellular-networks-or-for-other-wireless-networks` |
| 47223 | Other telephone sets and apparatus for transmission or reception of voice, images or other data, including apparatus for communication in a wired or wireless network (such as a local or wide area network) | `exact` | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.other-telephone-sets-and-apparatus-for-transmission-or-reception-of-voice-images-or-oth-5b63ed57` |
| 47311 | Radio broadcast receivers (except of a kind used in motor vehicles), whether or not combined with sound recording or reproducing apparatus or a clock | `exact` | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.radio-broadcast-receivers-except-of-a-kind-used-in-motor-vehicles-whether-or-not-combin-e736bc38` |
| 47312 | Radio broadcast receivers not capable of operating without an external source of power, of a kind used in motor vehicles | `exact` | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.radio-broadcast-receivers-not-capable-of-operating-without-an-external-source-of-power-cb6ffc15` |
| 47313 | Television receivers, whether or not combined with radio-broadcast receivers or sound or video recording or reproducing apparatus | `exact` | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.television-receivers-whether-or-not-combined-with-radio-broadcast-receivers-or-sound-or-510168d4` |
| 47314 | Monitors and projectors, not incorporating television reception apparatus and not principally used in an automatic data processing system | `exact` | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.monitors-and-projectors-not-incorporating-television-reception-apparatus-and-not-princi-bb48c1b5` |
| 47315 | Monitors and projectors, principally used in an automatic data processing system | `exact` | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.monitors-and-projectors-principally-used-in-an-automatic-data-processing-system` |
| 47321 | Sound recording or reproducing apparatus | `exact` | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.sound-recording-or-reproducing-apparatus` |
| 47323 | Video recording or reproducing apparatus | `exact` | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.video-recording-or-reproducing-apparatus` |
| 47550 | Solid-state non-volatile storage devices | `exact` | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.solid-state-non-volatile-storage-devices` |
| 47920 | Smart cards | `exact` | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.smart-cards` |
| 48110 | Apparatus based on the use of X-rays or of alpha, beta or gamma radiations | `exact` | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.apparatus-based-on-the-use-of-x-rays-or-of-alpha-beta-or-gamma-radiations` |
| 48121 | Electro-diagnostic apparatus, used in medical, surgical, dental or veterinary sciences | `exact` | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.electro-diagnostic-apparatus-used-in-medical-surgical-dental-or-veterinary-sciences` |
| 48160 | Mechano-therapy appliances; massage apparatus; psychological aptitude-testing apparatus; ozone therapy, oxygen therapy, aerosol therapy, artificial respiration or other therapeutic respiration apparatus; other breathing appliances and gas masks (excluding protective masks having neither mechanical parts nor replaceable filters) | `exact` | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.mechano-therapy-appliances-massage-apparatus-psychological-aptitude-testing-apparatus-o-0c93c769` |
| 48211 | Direction finding compasses; other navigational instruments and appliances | `exact` | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.direction-finding-compasses-other-navigational-instruments-and-appliances` |
| 48219 | Other surveying, hydrographic, oceanographic, hydrological, meteorological or geophysical instruments and appliances | `exact` | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.other-surveying-hydrographic-oceanographic-hydrological-meteorological-or-geophysical-i-1f12518d` |
| 48220 | Radar apparatus, radio navigational aid apparatus and radio remote control apparatus | `exact` | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.radar-apparatus-radio-navigational-aid-apparatus-and-radio-remote-control-apparatus` |
| 48241 | Instruments and apparatus for measuring or detecting ionizing radiations | `exact` | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-measuring-or-detecting-ionizing-radiations` |
| 48243 | Instruments and apparatus (except cathode-ray oscilloscopes and oscillographs) for measuring or checking voltage, current, resistance or power, without a recording device (except electricity production or supply meters) | `exact` | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-except-cathode-ray-oscilloscopes-and-oscillographs-for-measur-2511b092` |
| 48249 | Instruments and apparatus for measuring or checking electrical quantities n.e.c. | `exact` | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-measuring-or-checking-electrical-quantities-n-e-c` |
| 48251 | Hydrometers and similar floating instruments, thermometers, pyrometers, barometers, hygrometers and psychrometers | `exact` | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.hydrometers-and-similar-floating-instruments-thermometers-pyrometers-barometers-hygrome-9da9d72c` |
| 48252 | Instruments and apparatus for measuring or checking the flow, level, pressure or other variables of liquids or gases, except navigational, hydrological or meteorological instruments and appliances, gas or liquid supply meters and automatic regulating or controlling instruments and apparatus | `exact` | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-measuring-or-checking-the-flow-level-pressure-or-other-va-beb9ec57` |
| 48253 | Instruments and apparatus for physical or chemical analysis, for measuring or checking viscosity, porosity, expansion, surface tension or the like, or for measuring or checking quantities of heat, sound or light | `exact` | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-physical-or-chemical-analysis-for-measuring-or-checking-v-0d84169c` |
| 48262 | Machines and appliances for testing the mechanical properties of materials | `exact` | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.machines-and-appliances-for-testing-the-mechanical-properties-of-materials` |
| 48263 | Gas, liquid or electricity supply or production meters | `exact` | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.gas-liquid-or-electricity-supply-or-production-meters` |
| 48266 | Automatic regulating or controlling instruments and apparatus, hydraulic or pneumatic | `exact` | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.automatic-regulating-or-controlling-instruments-and-apparatus-hydraulic-or-pneumatic` |
| 48269 | Measuring, checking, regulating or controlling instruments, appliances and machines n.e.c. | `exact` | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.measuring-checking-regulating-or-controlling-instruments-appliances-and-machines-n-e-c` |

## Consequences

- The CPC 3.0 mapping contains 100 accepted positive edges after this batch.
- Deterministic alias regeneration removes the 85 former terminal aliases and leaves 2,777 aliases.
- CPC 3.0 coverage becomes 100 mapped, 2,777 unmapped, and 0 unknown leaves.
- The material catalog contains 102 PCRs after the five lifecycle repairs.
- Mapping acceptance does not make a candidate PCR published or active; methodology readiness and publication review remain separate controls.
- Historical ADR and migration snapshots retain the counts that were true when those decisions were made.
