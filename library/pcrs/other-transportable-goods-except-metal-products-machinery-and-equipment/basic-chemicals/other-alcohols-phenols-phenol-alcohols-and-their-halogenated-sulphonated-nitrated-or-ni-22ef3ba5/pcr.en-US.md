---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.other-alcohols-phenols-phenol-alcohols-and-their-halogenated-sulphonated-nitrated-or-ni-22ef3ba5
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Separated industrial phenol from the cumene oxidation route

## 1. Scope and Applicability

This method applies only to separated, undiluted bulk industrial phenol produced from fossil cumene by dry air oxidation, sulfuric-acid cleavage, sodium-hydroxide neutralisation, fractionation and aqueous phenol recovery. Actual residual water and impurities must be measured and declared; pure phenol is not assumed. Purification and heated storage/loading are included; declare the actual molten or solid gate state. Route evidence is jrc-lvoc-2017 Chapter 8. Producer grades in ineos-phenol-product distinguish undiluted product from aqueous solutions; they are not universal purity requirements.

CPC 3.0:34139 contains incompatible products: only a narrower mapping is proposed. Excluded are denatured ethanol (34131), other alcohols, industrial fatty alcohols, substituted phenols/phenol-alcohols, coal-tar recovery, direct benzene oxidation, toluene/benzoic-acid routes, sulphonation or chlorobenzene hydrolysis, wet oxidation, other catalysts/neutralisers, AMS hydrogenation and deliberate phenol-water solution formulation. Uncovered subclasses remain uncovered; formulated solutions cannot reuse this net supply-mass denominator.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.other-alcohols-phenols-phenol-alcohols-and-their-halogenated-sulphonated-nitrated-or-ni-22ef3ba5 |
| classification_refs | CPC 3.0:34139; narrower; proposed semantic relation, not an accepted mapping |
| covered_products | Undiluted separated industrial phenol, CAS 108-95-2, with declared actual residual water/impurities |
| excluded_products | Other alcohol/phenol families, deliberately aqueous solutions, crude cleavage mixtures and Section 1 excluded routes |
| representative_product | Bulk cumene-route industrial phenol; no universal purity default |
| production_route | Dry air oxidation → CHP concentration → sulfuric-acid cleavage → NaOH neutralisation → fractionation/aqueous recovery → storage/loading |
| market_state | Separated, undiluted bulk; declared grade, measured water/impurities and actual molten/solid state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Separated industrial phenol supplied as chemical feedstock |
| How much | 1 kg accepted net product as supplied |
| How well | Meets declared actual grade acceptance; measured phenol, water and impurity fractions, no default purity |
| How long or cycle | At gate delivery; no service-life assumption |
| reference_flow_link | out_phenol |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Phenol (`16e5f88d-6275-4be5-9b11-67af4822298c`) |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| Reference unit group | Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | kg |
| Required qualifiers | SKU, CAS, fossil cumene route, net supply mass, grade acceptance, measured phenol/water/impurity fractions, separation state, molten/solid state and temperature, site/period, coproduct and recovery destinations, allocation method, provider quantity basis |

Record required qualifiers in dataset metadata, process notes, reference-flow comments or product description; missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_mass | reference_product | Mass | kg | Use 1 kg accepted net undiluted phenol product as supplied, including measured residual water/impurities. Disclose phenol mass fraction and active phenol mass separately; never silently switch the denominator. |
| m_solution | in_acid, in_caustic | Mass | kg | Use actual supply solution mass, assay and carrier water. Active chemical mass = solution mass × measured mass fraction; water already in the supply is not additional process-water input. Match background solution concentration and reference quantity. |
| m_electricity | in_electricity | Net calorific value | MJ | Preserve the record reference property label; convert actual meter kWh to MJ using 1 kWh = 3.6 MJ. This energy identity does not supply grid mix or loss factors. |
| m_steam | in_steam | Mass | kg | Collect supplied steam mass and returned condensate mass separately. Derive energy using actual absolute pressure, temperature, dryness and enthalpy from iapws-if97-2012 within its validity range. Preserve supplier net/gross heat and return conventions; an MJ label or pressure-independent latent heat is insufficient. |
| m_gas | in_gas | Volume | m3 | Convert meter volume only with recorded temperature, absolute pressure, wet/dry composition and compressibility consistent with supplier m3 reference. Retain measured heating-value basis separately; never infer density from database secondary mass coefficients. |
| m_commercial | chemical_and_material_rows | Mass | kg | For every actual catalyst, inhibitor, cleaning agent, maintenance consumable and packing material, record its specific commercial identity, grade, delivered mass and composition; active ingredient, solution carrier and disposable/returnable ownership remain distinct. Do not substitute refinery or unrelated recipe datasets for chemical-synthesis providers. |
| m_emissions | elementary_rows | Mass | kg | Integrate species concentration with compatible gas/liquid flow and actual operating time; report wet/dry/standard-state corrections, detection limits, sampling recovery and uncertainty. Keep total indicators distinct from physical species mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted fresh fossil cumene at plant receipt, with recorded supply composition |
| starting_condition_role | External chemical-feed input, not previously produced phenol |
| product_classification_scope | Only the stated cumene-route undiluted separated phenol subset of CPC 3.0:34139 |
| recursive_input_rule | Retain equal-endpoint internal cumene/phenol/acetone returns; purchased same-category inputs retain distinct upstream providers rather than recursively becoming zero burden |
| upstream_dataset_requirement | Cumene, chemical and utility providers compatible with actual composition, purity, energy property/measurement and geography; external waste-treatment receivers |
| disclosure | Actual route, stage measurements, all recovery/coproduct destinations, treatment inside/outside boundary, stocks, abnormal modes, missing identity/providers and uncertainty |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | phenol_train | Include receiving fresh cumene, compressed-air dry oxidation, CHP concentration, sulfuric-acid cleavage, NaOH neutralisation, fractionation/phenol purification, phenol recovery from aqueous streams, measured internal recycling, heated bulk storage and loading. Record the actual flow diagram and each stage meter. | jrc-lvoc-2017 |
| b_utilities | utilities | Include attributable electricity, steam/heat supply, air compression, cooling/makeup, vacuum, condensate return and environmental controls. Imported utilities need upstream providers; on-site fuel and emissions are foreground. Do not count internally produced steam as an additional purchased heat input. | jrc-lvoc-2017 |
| b_treatment | recovery_treatment | Track oxidation peroxide pretreatment separately from fractionation phenol/solvent recovery, neutralisation salts, final treatment and sludge handling. Include abnormal operations, starts/stops, maintenance, vacuum losses, regeneration, storage and fugitives within the period. | jrc-lvoc-2017 |
| b_interface | physical_ledger | Retain unallocated total physical mass, water-species, actual elemental and energy ledgers before allocation. Every internal transfer has equal mass/composition at both endpoints; recovery does not remove treatment energy or residual losses. Declare changes in inventories and off-spec rework; prevent supplier/site or waste-provider duplication. | jrc-lvoc-2017 |
| b_extensions | additional_exchanges | Inventory cards are a minimum conditional checklist, not a fixed recipe or exhaustive site census. Before a usable dataset, add a separate atomic row for every actual additional reagent, resin, inhibitor, refrigerant loss, filter, ash, fuel, packaging, pollutant or transport service. Bulk tanker containers are returnable equipment, not assumed disposable packaging. No silent zero or cut-off is allowed for an unidentified material exchange. Added rows do not extend the stated route to excluded production methods. | jrc-lvoc-2017 |
| b_carriers | physical_ledger | Measure wet ambient-air intake, humidity, N2/Ar, oxygen and complete vent-gas carrier separately from pollutant species. Gross air and the net consumed-O2 exchange are alternative accounting views, not additive inputs. Total vent mass includes species; never add pollutant rows twice. Track oxygen consumed and chemically bound, residual O2, water and other actual species in oxidation, combustion and treatment. | jrc-lvoc-2017 |
| b_assets | physical_and_burden_ledgers | Record actual packing, maintenance consumables, asset/container ownership, opening/closing stocks, returnable-container returns and decommissioning destinations. Add each actual material/service as an atomic exchange. Reconcile actual acquisitions, returns, replacement waste and disposals physically, separately from lifetime-amortised infrastructure/container burdens. State lifetime, throughput, ownership and service boundary; burden fractions never replace physical items or mass. | ilcd-detailed-2010, jrc-lvoc-2017 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| phenol_train | Integrated cumene-oxidation phenol foreground | required | Within the stated route | Foreground; independent stage metering, internal recycle adds no reference output | 1 kg accepted net phenol as supplied |

Physical map: fresh cumene + air → oxidation → CHP concentration → cleavage/neutralisation → fractionation → phenol/acetone and conditional recovered components. Cumene returns to oxidation; aqueous streams enter peroxide pretreatment or phenol recovery then treatment; heavy ends, adsorption carbon and sludge retain actual destinations. One foreground process aggregates these steps while retaining independent stage collection. The process diagram and allocated burden account remain separate.

### Process: Integrated cumene-oxidation phenol foreground (`phenol_train`)

#### Inputs

##### Product flows

###### Fresh fossil cumene (`in_cumene`)

Purchased isopropylbenzene, CAS 98-82-8; measure net fresh feed, grade and impurity profile. Separate fresh feed from internal recovered cumene and solvent circulation.

- Selected flow: Fresh fossil cumene
- Flow property / unit: Mass / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: jrc-lvoc-2017

###### Sulfuric acid (`in_acid`)

This UUID applies only to actual 93–98% supplied industrial sulfuric acid with a compatible chemical-synthesis route. Record delivered solution mass and measured acid/water fractions; on-site dilution is separate measured process water. Other supply concentrations require a compatible identity. No acid dose or cleavage concentration is prescribed.

- Selected flow: Sulfuric acid (`7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: jrc-lvoc-2017

###### Sodium hydroxide neutralisation solution (`in_caustic`)

Record one actual aqueous NaOH supply, its delivered mass, concentration, carrier water and supplier basis. Do not substitute a 30% or solid-grade flow unless the actual supply matches; neutralisation can form sodium phenate internally.

- Selected flow: Sodium hydroxide neutralisation solution
- Flow property / unit: Mass / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: jrc-lvoc-2017

###### Alternating current (`in_electricity`)

Use this UUID only for purchased 1–35 kV grid-average supply to the user in China (record location CN); other supply geographies require a compatible flow. Meter compressors, vacuum equipment, pumps, cooling, treatment and heated storage; retain actual location, voltage, supplier and losses boundary.

- Selected flow: Alternating current (`3d76981f-964a-4865-b588-0e067a2a1163`)
- Flow property / unit: Net calorific value (`93a60a56-a3c8-11da-a746-0800200c9a66`); unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: jrc-lvoc-2017

###### Purchased process steam (`in_steam`)

Conditional external supply for concentration, fractionation and recovery. Record actual pressure, temperature, dryness, mass, condensate return and supplier reference basis. Keep delivered steam kg in this physical row and condensate return in the physical ledger; separate actual pressure levels. Convert to a provider MJ reference only after its heat definition agrees with the enthalpy ledger. Do not link both steam mass and its derived heat to upstream provision for the same supply. A hard 11.0 MPaG steam record or a paper-mill steam record does not establish low-pressure chemical-service compatibility.

- Selected flow: Purchased process steam
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: jrc-lvoc-2017

###### natural gas in the gaseous state (`in_gas`)

Conditional pipeline fuel for on-site boiler or thermal oxidiser. Record meter volume, temperature, absolute pressure, wet/dry composition and compressibility; reconcile site and provider m3 conventions. Secondary mass coefficients do not establish density.

- Selected flow: natural gas in the gaseous state (`4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`)
- Flow property / unit: Volume (`93a60a56-a3c8-22da-a746-0800200c9a66`); unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: jrc-lvoc-2017

###### Process water (`in_water`)

Purchased treated process-water make-up for washing, dilution, cleaning and utilities when the same physical grade applies. Measure net external supply; exclude internal recirculation and water already contained in acid/caustic supplies. Separate different-quality water sources.

- Selected flow: Process water (`ec205030-248c-496f-9cf2-06d9d26dc6ff`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: jrc-lvoc-2017

###### Activated carbon (`in_carbon`)

Conditional VOC adsorption material; weigh actual replacement carbon and record granular grade, carbon origin, regeneration and supplier. The native absorption label conflicts with its adsorption comment; retain the chemical identity conditionally, verify actual adsorbent use and provider, and do not adopt either text as a reaction rule. The broad chemical identity provides no biomass/fossil share, capacity or replacement default.

- Selected flow: Activated carbon (`5cad53b5-252a-4e2f-8197-8be465707405`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: jrc-lvoc-2017

##### Elementary flows

###### oxygen (`in_oxygen`)

Net atmospheric oxygen consumed in reaction, combustion and included treatment, not purchased pure oxygen. Reconcile measured air throughput/composition, residual oxygen and process balance; compression energy stays in electricity.

- Selected flow: oxygen (`e2fb04b0-6555-11dd-ad8b-0800200c9a66`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_balance`
- Sources: jrc-lvoc-2017

#### Outputs

##### Product flows

###### Phenol (`out_phenol`)

Accepted separated industrial phenol, undiluted bulk at gate; net product mass includes measured residual water and impurities but excludes tank/container tare. One reference output covers purification, storage and bulk loading.

- Selected flow: Phenol (`16e5f88d-6275-4be5-9b11-67af4822298c`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: jrc-lvoc-2017

###### Acetone (`out_acetone`)

Record isolated acetone, CAS 67-64-1, grade, water, impurities, net mass and destination independently of phenol. The selected record identifies liquid acetone by CAS and mass. Its wafer-production text expresses intended use; it does not establish manufacture by wafers or an exclusive purity grade. Retain chemical identity conditionally for actual finished acetone; verify actual grade, composition, provider and reference quantity. The use text and generic solvent comment do not certify an upstream provider or universal purity. Crude mixtures and deliberately formulated solutions need their own identity. No default phenol/acetone ratio is supplied.

- Selected flow: Acetone (`d5d65ffc-92f2-4d88-b6e7-e050445978f5`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: jrc-lvoc-2017

###### Separated alpha-methylstyrene (`out_ams`)

Conditional recovered saleable AMS, CAS 98-83-9; record actual purity, inhibitors and mass. This PCR covers distillation recovery, not AMS hydrogenation to cumene. Unseparated AMS in tar remains part of that tar stream.

- Selected flow: Separated alpha-methylstyrene
- Flow property / unit: Mass / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: jrc-lvoc-2017

###### Separated acetophenone (`out_acetophenone`)

Conditional isolated saleable acetophenone, CAS 98-86-2; record grade, mass and receiver. Do not turn acetophenone contained in heavy ends into a second product output.

- Selected flow: Separated acetophenone
- Flow property / unit: Mass / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: jrc-lvoc-2017

###### Externally exported recovered cumene (`out_cumene`)

Conditional actual export, measured separately from internal recycle. State mixture purity, impurities and recipient acceptance; internal recovery is never a purchased input, saleable output or avoided virgin-product credit.

- Selected flow: Externally exported recovered cumene
- Flow property / unit: Mass / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: jrc-lvoc-2017

##### Waste flows

###### Phenol fractionation light-end purge (`out_heads`)

Conditional physical light-end stream exported for treatment, with actual composition, water, mass and receiver. Retain internal recovery, return and on-site destruction in stage ledgers; a recovered saleable component needs its own product identity and acceptance. Do not relabel the mixed stream as pure acetone or cumene. Heads retained inside the process cannot also be counted as external waste or pollutant release.

- Selected flow: Phenol fractionation light-end purge
- Flow property / unit: Mass / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: jrc-lvoc-2017

###### Phenol fractionation heavy-end tar (`out_tar`)

One physical heavy-end stream; record mass, water, phenol/ACP/AMS content, hazardous classification and treatment receiver. If burned on site, keep it only in the internal ledger and report combustion exchanges; export as waste and on-site combustion cannot both count the same mass.

- Selected flow: Phenol fractionation heavy-end tar
- Flow property / unit: Mass / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: jrc-lvoc-2017

###### spent activated carbon (`out_spent_carbon`)

Conditional exhausted adsorption carbon sent outside; record wet mass, retained organics, carbon origin, regeneration/disposal and receiver. Do not add adsorbed VOC mass as an air emission.

- Selected flow: spent activated carbon (`aff33890-3f08-40f9-9310-a7f77213de05`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: jrc-lvoc-2017

###### Sludge (`out_primary_sludge`)

The native Waste flow identifies semi-solid sludge on a mass basis. Apply conditionally to this separately collected primary stream only when its phase matches; measure wet mass and dry-solids fraction separately. The water-treatment use label does not establish a treatment provider or phenol-specific contaminant composition. Dry or differently formulated residues require compatible identity. Conditional separately removed physical sludge; record wet/dry mass, water, organic contamination, salt content and receiver. Keep distinct from biological sludge.

- Selected flow: Sludge (`725c8f6e-7975-4155-a250-1f95ef70c508`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: jrc-lvoc-2017

###### Sludge (`out_bio_sludge`)

The native Waste flow identifies semi-solid sludge on a mass basis. Apply conditionally to this separately collected biological excess stream only when its phase matches; measure wet mass and dry-solids fraction separately. The water-treatment use label does not establish a treatment provider or phenol-specific contaminant composition. Dry or differently formulated residues require compatible identity. Conditional excess sludge from included biological treatment, with actual moisture, contaminant composition and receiver. Returned activated sludge is internal, not this export.

- Selected flow: Sludge (`725c8f6e-7975-4155-a250-1f95ef70c508`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: jrc-lvoc-2017

###### Phenol process wastewater to external treatment (`out_wastewater`)

Conditional transfer after site recovery/pretreatment to a named off-site treatment provider. Record volume, density, phase, hydroperoxides, species, COD and salts. This is not a final river emission; the same load cannot be duplicated in foreground receiving-water rows.

- Selected flow: Phenol process wastewater to external treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: jrc-lvoc-2017

##### Elementary flows

###### phenol (`air_phenol`)

Actual residual phenol after recovery/abatement, including storage, loading and fugitive losses; validate collection recovery for condensable phenol. Outdoor-air unspecified compartment; qualify actual stack/fugitive source and use a compatible more specific compartment when established.

- Selected flow: phenol (`fe0acd60-3ddc-11dd-aa41-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: jrc-lvoc-2017

###### cumene (`air_cumene`)

Actual residual cumene from oxidiser exhaust, concentration, fractionation and fugitive sources. Condensed or adsorbed cumene is not an air release. Outdoor-air unspecified compartment; qualify actual stack/fugitive source and use a compatible more specific compartment when established.

- Selected flow: cumene (`08a91e70-3ddc-11dd-a2a2-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: jrc-lvoc-2017

###### acetone (`air_acetone`)

Actual residual acetone from process vents, storage and loading, determined species by species. Outdoor-air unspecified compartment; qualify actual stack/fugitive source and use a compatible more specific compartment when established.

- Selected flow: acetone (`08a91e70-3ddc-11dd-9520-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: jrc-lvoc-2017

###### benzene (`air_benzene`)

Screen feed impurity and actual process/combustion releases; no BREF example feed concentration or emission factor is prescribed. Outdoor-air unspecified compartment; qualify actual stack/fugitive source and use a compatible more specific compartment when established.

- Selected flow: benzene (`08a91e70-3ddc-11dd-9202-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: jrc-lvoc-2017

###### methanol (`air_methanol`)

Actual oxidation side-product release after treatment; distinguish measured methanol from TVOC reported as carbon. Outdoor-air unspecified compartment; qualify actual stack/fugitive source and use a compatible more specific compartment when established.

- Selected flow: methanol (`fe0acd60-3ddc-11dd-a935-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: jrc-lvoc-2017

###### α,α-dimethylbenzyl hydroperoxide (`air_chp`)

Conditional measured hydroperoxide release; CAS 80-15-9 identifies CHP. Validate aerosol/condensation recovery; Method 18 alone is insufficient where volatility limitations apply. Outdoor-air unspecified compartment; qualify actual stack/fugitive source and use a compatible more specific compartment when established.

- Selected flow: α,α-dimethylbenzyl hydroperoxide (`bdb8632d-b7d1-4415-a7dd-39048f42f953`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: jrc-lvoc-2017

###### Methyl hydroperoxide (`air_mhp`)

Conditional actually identified methyl hydroperoxide release; retain a validated compound-specific method. Total peroxide expressed as CHP is not this molecular mass. Outdoor-air unspecified compartment; qualify actual stack/fugitive source and use a compatible more specific compartment when established.

- Selected flow: Methyl hydroperoxide
- Flow property / unit: Mass / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: jrc-lvoc-2017

###### carbon dioxide (fossil) (`air_co2_fossil`)

Actual fossil CO2 from included fuel/tar/VOC destruction and wastewater carbon conversion; close fossil-carbon balance, excluding externally modelled treatment. Outdoor-air unspecified compartment; qualify actual stack/fugitive source and use a compatible more specific compartment when established.

- Selected flow: carbon dioxide (fossil) (`08a91e70-3ddc-11dd-923d-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: jrc-lvoc-2017

###### carbon dioxide (biogenic) (`air_co2_bio`)

Conditional demonstrated biogenic carbon release within the selected boundary, including any combustion of biogenic carbon materials. Record actual carbon origin; retain biogenic CO2 in LCI even if an impact/reporting convention excludes it. Outdoor-air unspecified compartment; qualify actual stack/fugitive source and use a compatible more specific compartment when established.

- Selected flow: carbon dioxide (biogenic) (`08a91e70-3ddc-11dd-9c15-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: jrc-lvoc-2017

###### methane (fossil) (`air_methane`)

Actual fossil methane from oxidiser tail gas, gas leaks or included treatment; identify carbon origin and do not treat all wastewater methane as biogenic. Outdoor-air unspecified compartment; qualify actual stack/fugitive source and use a compatible more specific compartment when established.

- Selected flow: methane (fossil) (`08a91e70-3ddc-11dd-9610-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: jrc-lvoc-2017

###### carbon monoxide (fossil) (`air_co`)

Actual fossil-carbon CO from included combustion, distinguished from CO2. Outdoor-air unspecified compartment; qualify actual stack/fugitive source and use a compatible more specific compartment when established.

- Selected flow: carbon monoxide (fossil) (`08a91e70-3ddc-11dd-924e-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: jrc-lvoc-2017

###### nitrogen monoxide (`air_no`)

Actual NO molecular mass from included combustion; a total NOx reading as NO2 equivalent cannot be assigned here without species-resolved conversion evidence. Outdoor-air unspecified compartment; qualify actual stack/fugitive source and use a compatible more specific compartment when established.

- Selected flow: nitrogen monoxide (`08a91e70-3ddc-11dd-96ee-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: jrc-lvoc-2017

###### nitrogen dioxide (`air_no2`)

Actual NO2 molecular mass from included combustion; do not duplicate NO plus NO2 with a third NOx total row; exclude N2O from NOx. Outdoor-air unspecified compartment; qualify actual stack/fugitive source and use a compatible more specific compartment when established.

- Selected flow: nitrogen dioxide (`08a91e70-3ddc-11dd-96e5-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: jrc-lvoc-2017

###### sulfur dioxide (`air_so2`)

Conditional actual SO2 from fuel/tar sulfur and included combustion; do not substitute sulfur oxides aggregate or acid aerosol. Outdoor-air unspecified compartment; qualify actual stack/fugitive source and use a compatible more specific compartment when established.

- Selected flow: sulfur dioxide (`fe0acd60-3ddc-11dd-ac48-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: jrc-lvoc-2017

###### particles (PM2.5) (`air_pm25`)

Measured emitted particles at or below PM2.5; retain test definition and source. Collected dust/ash is not emitted particulate. Outdoor-air unspecified compartment; qualify actual stack/fugitive source and use a compatible more specific compartment when established.

- Selected flow: particles (PM2.5) (`08a91e70-3ddc-11dd-9293-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: jrc-lvoc-2017

###### particles (PM2.5 - PM10) (`air_pm2510`)

Only the disjoint >2.5 to 10 micrometre fraction; calculate from compatible same-source cumulative measurements if needed, with uncertainty. Outdoor-air unspecified compartment; qualify actual stack/fugitive source and use a compatible more specific compartment when established.

- Selected flow: particles (PM2.5 - PM10) (`08a91e70-3ddc-11dd-9501-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: jrc-lvoc-2017

###### particles (> PM10) (`air_pm_over10`)

Only the disjoint >10 micrometre fraction; do not add cumulative PM10 to these size-bin rows. Outdoor-air unspecified compartment; qualify actual stack/fugitive source and use a compatible more specific compartment when established.

- Selected flow: particles (> PM10) (`fe0acd60-3ddc-11dd-a70a-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: jrc-lvoc-2017

###### water vapour (`air_water_vapour`)

Actual evaporative/combustion water within the foreground, including measured intake humidity and water formed/consumed internally; reconcile makeup, condensate and liquid discharge without counting gross cooling circulation. Outdoor-air unspecified compartment; qualify actual stack/fugitive source and use a compatible more specific compartment when established.

- Selected flow: water vapour (`fe0acd60-3ddc-11dd-ac04-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: jrc-lvoc-2017

###### Liquid water discharged to freshwater (`water_liquid`)

Record the physical water carrier separately from solute species, with actual density and recipient; maintain a non-duplicated water/solute mass ledger. Applies only to actual final freshwater discharge after included treatment, not treatment influent; other recipients require a compatible compartment.

- Selected flow: Liquid water discharged to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: jrc-lvoc-2017

###### phenol (`water_phenol`)

Quantify phenol itself, using validated matrix-specific analysis; total phenols or volatile phenols are not automatically phenol mass. Applies only to actual final freshwater discharge after included treatment, not treatment influent; other recipients require a compatible compartment.

- Selected flow: phenol (`08a91e70-3ddc-11dd-975b-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: jrc-lvoc-2017

###### cumene (`water_cumene`)

Measure dissolved and separate-phase cumene with representative sampling; recovered solvent is internal. Applies only to actual final freshwater discharge after included treatment, not treatment influent; other recipients require a compatible compartment.

- Selected flow: cumene (`08a91e70-3ddc-11dd-928e-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: jrc-lvoc-2017

###### acetone (`water_acetone`)

Actual measured acetone remaining after recovery and included treatment. Applies only to actual final freshwater discharge after included treatment, not treatment influent; other recipients require a compatible compartment.

- Selected flow: acetone (`08a91e70-3ddc-11dd-9524-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: jrc-lvoc-2017

###### methanol (`water_methanol`)

Conditional identified methanol remaining after included treatment. Applies only to actual final freshwater discharge after included treatment, not treatment influent; other recipients require a compatible compartment.

- Selected flow: methanol (`fe0acd60-3ddc-11dd-a939-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: jrc-lvoc-2017

###### α,α-dimethylbenzyl hydroperoxide (`water_chp`)

Separate CHP molecular mass from MHP and total peroxide as CHP; record actual pretreatment and compound-specific recovery. Applies only to actual final freshwater discharge after included treatment, not treatment influent; other recipients require a compatible compartment.

- Selected flow: α,α-dimethylbenzyl hydroperoxide (`4dd99a74-9603-4b7b-8058-12fe2759f3a3`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: jrc-lvoc-2017

###### Methyl hydroperoxide discharged to freshwater (`water_mhp`)

Retain species-resolved measured mass; no conversion from total peroxide without validated composition. Applies only to actual final freshwater discharge after included treatment, not treatment influent; other recipients require a compatible compartment.

- Selected flow: Methyl hydroperoxide discharged to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: jrc-lvoc-2017

###### sulfate (`water_sulfate`)

Actual sulfate-ion mass (CAS 14808-79-8, SO4^2-) after treatment; the official sulfate display does not mean sodium-sulfate salt mass; distinguish elemental S, sodium sulfate and sulfate ion bases. Applies only to actual final freshwater discharge after included treatment, not treatment influent; other recipients require a compatible compartment.

- Selected flow: sulfate (`fe0acd60-3ddc-11dd-ac59-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: jrc-lvoc-2017

###### Sodium, ion (`water_sodium`)

Actual sodium-ion mass (CAS 17341-25-2, Na+); maintain ionic/salt balance without also adding sodium-sulfate salt as a second discharge. Applies only to actual final freshwater discharge after included treatment, not treatment influent; other recipients require a compatible compartment.

- Selected flow: Sodium, ion (`6a3f413e-8aab-4c58-93b0-1f51c9714adb`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period quantity from the linked collection protocol divided by accepted net phenol supply mass for the same period; no default
- Value mode: Collected record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: jrc-lvoc-2017

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_products | multifunctionality | Keep phenol, acetone and actually isolated saleable AMS/acetophenone/exported cumene in the full physical output ledger, with actual mass, purity and recipient. Heavy ends, wastewater and spent carbon remain wastes unless documented positive product function and acceptance justify a different role. | jrc-lvoc-2017, ilcd-detailed-2010 |
| a_hierarchy | environmental_burdens | For a declared attributional dataset, first subdivide independently measured purification, storage and treatment services; allocate only the remaining inseparable burdens. Demonstrate a determining physical causal relationship where available; reaction stoichiometry or product masses alone do not establish that relationship. If unavailable, disclose justified economic allocation using actual grade-specific net quantities and consistent representative prices/time/geography, with sensitivity analysis. No universal fraction is supplied. | ilcd-detailed-2010 |
| a_accounting | physical_and_allocated_ledgers | Preserve the unallocated process diagram and mass/water/carbon balances separately from the allocated burden account. Apply fractions to attributable environmental burdens only; never multiply physical co-product outputs or internal transfers by phenol allocation fractions. Shares must sum to one over the declared co-functions. | ilcd-detailed-2010 |
| a_recovery | recovery_and_waste | Internal cumene/phenol/acetone return is an internal loop, never avoided-product credit. Do not combine system-expansion credits with an allocated attributional burden. Document external waste treatment and any externally exported recovery consistently with the selected model; actual energy recovery cannot also retain the same tar as an external waste output. | ilcd-detailed-2010, jrc-lvoc-2017 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | phenol_train | accepted and coproduct output | acceptance and batch records | lot; SKU; CAS; route; net mass; tare; phenol/water/impurity assay; phase; grade; receiver; opening/closing stocks | Calibrated load-cell/scale or traceable tank mass with measured density/temperature; reconcile acceptance certificates and separate grades | kg | each lot; reconcile period | Representative production period including actual abnormal modes | Same phenol train and attributable utilities/treatment | per 1 kg reference flow | Original records, calibration, acceptance/recovery/blanks/detection limits and uncertainty evidence |
| cp_material | phenol_train | fresh chemical and adsorbent input | receipts and consumption ledger | material identity; supply grade; concentration; carrier water; origin; net receipts; stock change; supplier; internal returns | Weigh receipts and reconcile purchases, stores, actual consumption and supplier assay; meter separate fresh/recycled streams | kg | each delivery and campaign | Representative production period including actual abnormal modes | Same phenol train and attributable utilities/treatment | per 1 kg reference flow | Original records, calibration, acceptance/recovery/blanks/detection limits and uncertainty evidence |
| cp_energy | phenol_train | electricity steam fuel | meter and utility balance | meter; interval; kWh; steam mass; pressure; temperature; dryness; enthalpy; condensate; fuel m3; T; absolute P; moisture; composition; Z; heating value; provider basis | Read calibrated stage meters; reconcile compressed air, vacuum, cooling, distillation, heated storage, boiler and abatement loads; close supplier/site boundary | kg; MJ; m3 | continuous readings and period reconciliation | Representative production period including actual abnormal modes | Same phenol train and attributable utilities/treatment | per 1 kg reference flow | Original records, calibration, acceptance/recovery/blanks/detection limits and uncertainty evidence |
| cp_air | phenol_train | final species releases | monitoring and fugitive survey | source; compound; CAS; concentration; wet/dry basis; flow; T; P; operating hours; recovery; blanks; detection limits; carbon origin; PM size; NO/NO2 definition; events | Use compound/matrix-validated stack sampling and GC where Method 18 applies, with low-volatility/condensation limitations checked; validated alternative for peroxides; LDAR/storage/loading survey and actual operating logs; validated source-specific combustion tests | kg | representative operating modes plus abnormal events | Representative production period including actual abnormal modes | Same phenol train and attributable utilities/treatment | per 1 kg reference flow | Original records, calibration, acceptance/recovery/blanks/detection limits and uncertainty evidence |
| cp_water | phenol_train | water supply effluent and solutes | water balance and laboratory analysis | source; recipient; flow; density; separate phase; concentration by species; phenol; CHP; MHP; sulfate; sodium; COD; recovery; preservation; blank; detection limit; treatment path | Calibrated flow and flow-proportional representative samples; validate Method 604 or equivalent for phenol in actual matrix, with independent confirmation for unfamiliar samples; validate other species separately; record before/after treatment and off-site transfers | kg; m3; mg/L | matched flow/sample intervals; cover regeneration and abnormal loads | Representative production period including actual abnormal modes | Same phenol train and attributable utilities/treatment | per 1 kg reference flow | Original records, calibration, acceptance/recovery/blanks/detection limits and uncertainty evidence |
| cp_waste | phenol_train | external residual export | waste manifests | stream; wet mass; moisture; dry solids; composition; carbon source; hazardous class; receiver; treatment; reuse; weigh ticket | Calibrated weighing and representative moisture/composition samples; receiver acceptance and treatment records; separate sludge types and spent carbon | kg | each shipment and period | Representative production period including actual abnormal modes | Same phenol train and attributable utilities/treatment | per 1 kg reference flow | Original records, calibration, acceptance/recovery/blanks/detection limits and uncertainty evidence |
| cp_balance | phenol_train | physical balances and allocation evidence | stage and burden accounts | stage; total physical mass; composition; water formation/consumption; C/H/O/N/S/Na; wet air; vent carrier; O2 consumption; energy/enthalpy; stocks; internal transfers; heads/tars; independent phenol and acetone quantities; asset/container ownership/returns; price; period; uncertainty | Reconcile each actual stage and equal-endpoint transfers; measure oxygen net consumption from air/vent composition; preserve unallocated balances and a separate justified allocation worksheet | kg; MJ; price/kg | each campaign and representative period | Representative production period including actual abnormal modes | Same phenol train and attributable utilities/treatment | per 1 kg reference flow | Original records, calibration, acceptance/recovery/blanks/detection limits and uncertainty evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_normalise | all inventory rows | Each attributable measured period exchange quantity / accepted net phenol kg for that same period; result per 1 kg reference flow. Reference-product output is exactly 1 kg; retain full physical coproduct ratios, with allocated burdens in a separate account. | cp_product; linked row protocol | per 1 kg reference flow | jrc-lvoc-2017, ilcd-detailed-2010 |
| c_composition | reference_product, in_acid, in_caustic | Component mass = actual supply mass × measured mass fraction; components and carrier water/impurities close to the same net supply mass; active phenol never replaces the reference denominator. | cp_product; cp_material | component masses | ineos-phenol-product |
| c_electricity | in_electricity | Actual meter kWh × 3.6 gives MJ; divide by accepted phenol kg for the same period; preserve the original Net calorific value property. | cp_energy; cp_product | MJ per 1 kg reference flow | jrc-lvoc-2017 |
| c_species | elementary_rows | Integrate actual species concentration × compatible flow × matched time to kg, then divide by accepted net phenol kg; liquid mg/L × L × 10^-6 gives kg. For gas, reconcile moisture, temperature/pressure, oxygen corrections and instrument species/equivalent basis first. | cp_air; cp_water; cp_product | kg species per 1 kg reference flow | epa-method18-2025, epa-method604-1984 |
| c_balances | physical_ledger | For each stage, total physical mass inputs + opening stocks = total physical mass outputs + closing stocks. Close C/H/O/N/S/Na and other actual elements using composition. Water-species inputs + opening stocks + internal chemical formation = water-species outputs + closing stocks + chemical consumption. Reaction-generated H2O is internal species conversion, never a total-mass source/sink. Cumene C9H12 + O2 → CHP C9H12O2 → phenol C6H6O + acetone C3H6O is the main reaction identity, not a recovered-product yield ratio; DMBA dehydration can form AMS and H2O. Internal transfers agree at both endpoints. Retain measured residuals and uncertainty without fictional balancing flows. | cp_balance; all collection protocols | unallocated stage balances | jrc-lvoc-2017 |
| c_energy_balance | physical_ledger | Reconcile electricity/work, actual fuel composition/heating-value basis, steam/condensate enthalpy, reaction energy, cooling/rejected and exported heat, and stock changes independently of mass. Use one consistent enthalpy convention; never add reaction heat twice to chemical enthalpy. For an equal-mass closed steam/condensate circuit, useful heat is mass × (supply enthalpy − exit-condensate enthalpy), with enthalpy in kJ/kg; divide kJ by 1000 for MJ. If masses/endpoints differ, retain all streams and a complete consistent enthalpy balance instead of that shortcut. Provider net heat follows its own qualified supply/return boundary. | cp_energy; cp_balance | unallocated energy ledger | iapws-if97-2012, jrc-lvoc-2017 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_coverage | all inventory rows | For each row disclose measured, condition not applicable or unresolved; non-detects retain detection limits rather than implying no release. Cover normal/abnormal modes and storage/loading in the same period. | cp_air; cp_water; site logs |
| dq_bases | all inventory rows | No single-plant literature recipe, yield, purity, purification or energy default is transferred; actual records confirm each SKU, concentration and provider basis. | cp_product; cp_material; cp_energy |
| dq_complete | foreground_dataset | Identify all additional atomic exchanges and close provider/treatment boundaries before a usable dataset; retain physical and allocated accounts and uncertainty. | cp_balance; source and receiver evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | reference_product | Require cumene-route evidence, CAS 108-95-2, actual SKU, net mass, measured phenol/water/impurity fractions, acceptance specification and molten/solid gate state. Reject crude mixtures, deliberately aqueous solutions and excluded routes as this reference product. | jrc-lvoc-2017, ineos-phenol-product |
| v_quantity | all_inventory_rows | Require one quantitative-reference phenol output while retaining every actual co-product, including independently measured acetone, and the same per-1-kg net accepted supply basis in every inventory card, collection aggregation and calculation in both languages. Reject active-phenol/solution-mass substitution, gross-tare mass and unmatched sampling periods. | ineos-phenol-product |
| v_balance | physical_ledger | Check total physical mass, water-species, all actual elements and energy balances before allocation with actual compositions, wet-air/vent carriers, bound oxygen, heads/tars, stocks, equal-endpoint recovery and off-spec losses; reaction water is never a total-mass balancing plug and carrier/species mass must not be duplicated; document site uncertainty and reconciliation tolerance without a PCR default. Distinguish product, by-product, waste transfer and final emissions. | jrc-lvoc-2017 |
| v_emission | elementary_rows | Validate actual species, CAS where available, medium, source, fossil/biogenic origin, property and unit. Use post-abatement final releases; keep treatment influent and externally treated load out of final foreground discharge. TVOC as C, COD, total phenols and total peroxides are QA metrics, not substitute molecular emissions. | jrc-lvoc-2017, epa-method18-2025, epa-method604-1984 |
| v_size_nox | air_rows | Use disjoint PM2.5, >2.5–10 and >10 micrometre fractions; do not add cumulative PM10 or collected dust. Separate actual NO and NO2 molecular masses; total NOx as NO2 equivalent requires documented composition/conversion and must not duplicate the species rows. N2O is separate. Retain any actual biogenic CO2 in LCI. | jrc-lvoc-2017 |
| v_providers | technosphere_links | A UUID establishes physical identity only. Verify actual provider, grade, concentration, geography, voltage, steam pressure/net heat and gas volume conventions separately. Missing UUID/provider or unidentified exchanges remain explicit unresolved boundaries; do not claim a complete usable background dataset until they are resolved. | jrc-lvoc-2017 |
| v_evidence | foreground_dataset | Require original site logs, calibrated meters/scales, analytical recovery, blanks, detection limits, representative coverage and abnormal-operation records. No historical single-plant reaction/distillation values, BREF plant ranges, manufacturer purity claims or database comments become quantity defaults. Report missing fields and uncertainty honestly. | jrc-lvoc-2017, epa-method18-2025, epa-method604-1984 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Phenol feedstock LCI after actual collection, complete links and independent review; methodology state alone does not establish dataset completeness |
| allowed_use | Reuse only for matching route, supply mass, water/purity, geography/period and allocation conditions |
| excluded_use | Whole 34139, denatured ethanol, other alcohols/phenols, formulated aqueous solutions, excluded routes, default recipes/yields/energy or automatic background substitution when data are incomplete |
| required_metadata | Actual SKU/CAS, route, supply/active basis, residual water/impurities, phase, site/period, coproduct/recovery and treatment boundaries, provider reference quantities, allocation and original collection evidence |
| required_quality_disclosure | Missing/unresolved flows/providers, analytical/sampling coverage, uncertainty, abnormal modes, balance residuals, economic/physical allocation sensitivity and excluded subclasses |
| update_trigger | Changes to feed/route, purification, supply water/grade, recovery/coproduct destinations, abatement, utilities, provider measurement or market-price period |

## 11. Data Sources

| source_id | Type | Used for | Reference |
| --- | --- | --- | --- |
| jrc-lvoc-2017 | official_guidance | European Commission JRC, 2017 LVOC BAT Reference Document, Chapter 8: 8.2.1–8.2.2.4 route; Figure 8.4; 8.3.1–8.3.3 emissions/water/recovery; 8.3.4–8.3.6 utilities, water and residues; printed pp. 396–411. Scope is this cumene route; plant examples/ranges are not quantity defaults. | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/JRC109279_LVOC_Bref.pdf |
| ineos-phenol-product | literature | INEOS Phenol original product page, accessed 2026-10-13; undiluted and aqueous supply grades and product state. Producer-grade examples, not universal purity or density defaults. | https://www.ineos.com/businesses/ineos-phenol/products/phenol/ |
| epa-method18-2025 | official_guidance | US EPA Method 18, 04/01/2025, Sections 1–2 and 4: species-resolved industrial gaseous organics GC, moisture/condensation and applicability limitations. Not applicable to low-volatility/polymerising compounds without an appropriate validated alternative; no emission factor. | https://www.epa.gov/system/files/documents/2025-04/m-18-04012025_0.pdf |
| epa-method604-1984 | official_guidance | US EPA Method 604, promulgated 1984, Sections 1–3: industrial wastewater phenol GC analysis, unfamiliar-sample confirmation and matrix interference. Only phenol and listed phenols; not acetone/cumene/total peroxide analysis or a current-jurisdiction compliance claim. | https://www.epa.gov/sites/default/files/2015-08/documents/method_604_1984.pdf |
| ilcd-detailed-2010 | official_guidance | JRC ILCD Detailed Guidance, first edition 2010, Sections 7.9.3 and 14.4; attributional multifunctionality/physical causality and economic allocation, recovery roles. Apply to the declared goal; no phenol coproduct share is supplied. | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf |
| iapws-if97-2012 | official_guidance | IAPWS R7-97(2012), Sections 1–2, 5–9 and 12: actual-state water/steam enthalpy, applicability regions and uncertainty; no supplier heat convention, pressure or yield default. | https://iapws.org/technical-guidance/release/IF97-Rev.download |
