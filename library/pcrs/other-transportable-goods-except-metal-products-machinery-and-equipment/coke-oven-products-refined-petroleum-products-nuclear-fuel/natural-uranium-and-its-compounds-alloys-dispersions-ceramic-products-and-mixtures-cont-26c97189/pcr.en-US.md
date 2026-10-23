---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.natural-uranium-and-its-compounds-alloys-dispersions-ceramic-products-and-mixtures-cont-26c97189
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Natural uranium hexafluoride delivery for civil nuclear fuel supply

## 1. Scope and Applicability

This PCR covers the environmental inventory of accepted solid natural-isotope uranium hexafluoride (UF6) delivered at a declared civil nuclear fuel supply factory gate, starting with externally supplied qualified purified uranium trioxide (UO3) powder. It records net deliveries, attributable utilities, actual externally supplied chemicals, waste transfers and environmental releases. Receipt, environmental production accounting, controls, container service and dispatch form one aggregated foreground unit; stage readings remain separate evidence. It provides no executable conversion, purification, enrichment, separation parameters, equipment designs or optimization. Public producer and regulator evidence establishes the UO3-to-UF6 delivery boundary, not a universal chemical recipe (`cameco-delivery`, `cameco-delivery-state`, `cnsc-case`).

Exclude mine extraction, ore/concentrate and yellowcake production from this foreground: reuse the existing uranium/thorium ores-and-concentrates PCR for independently compatible upstream products. Purchased purified UO3 carries its actual refining burdens in a supplier dataset. Exclude UO2/UO3 as final reference products, natural uranium metal, alloys, dispersions, ceramic articles, mixed formulations, aqueous uranium products, enriched/depleted/reprocessed uranium, thorium/plutonium products, fuel pellets/elements, reactor electricity and spent-fuel management. None is a proxy reference product. If the actual incoming form or delivery state is incompatible, establish a separately reviewed boundary and exact flow before using this PCR. CPC33610 is broader: the proposed relationship is narrower, not full coverage.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.natural-uranium-and-its-compounds-alloys-dispersions-ceramic-products-and-mixtures-cont-26c97189 |
| classification_refs | CPC 3.0:33610; narrower proposed context only |
| covered_products | Accepted natural-isotope UF6 whole compound at the declared civil supply gate |
| excluded_products | Ore/concentrate/yellowcake as final chemical reference; UO2/UO3 output; uranium metal; alloys; dispersions; mixtures; enriched/depleted/reprocessed products; fuel elements; electricity |
| representative_product | Natural-isotope uranium hexafluoride, accepted solid shipment |
| production_route | Qualified external UO3 receipt; aggregated environmental production and control accounting; acceptance and gate dispatch |
| market_state | Net accepted UF6 whole-compound mass excluding shipping container; actual chemical and isotope specifications independently evidenced |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply accepted natural-isotope whole UF6 to the civil nuclear fuel chain |
| How much | 1 kg |
| How well | Actual supplier and lot; UF6 chemical identity and accepted solid shipment state; independently evidenced natural isotopic origin and measured isotope assay with date and uncertainty; whole-product purity/impurities and moisture basis; accepted net commercial contents include actual measured incidental water/impurities within the acceptance specification, not an anhydrous pure-UF6 equivalent; exclude all packing and carrier tare; positive accepted net whole-product D excluding tare; contained-U mass distinct from UF6 mass; receiving gate, period, region and provider quantity; actual utilities/chemicals; source-specific waste and release compartments; analytical detection limits, activity reference dates and attribution/allocation. No assumed natural abundance, stoichiometric purity, water fraction, yield, recipe, emission factor or energy demand. |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Uranium hexafluoride `e0aa0856-f028-4d22-bab5-660613307174` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual supplier and lot; UF6 chemical identity and accepted solid shipment state; independently evidenced natural isotopic origin and measured isotope assay with date and uncertainty; whole-product purity/impurities and moisture basis; accepted net commercial contents include actual measured incidental water/impurities within the acceptance specification, not an anhydrous pure-UF6 equivalent; exclude all packing and carrier tare; positive accepted net whole-product D excluding tare; contained-U mass distinct from UF6 mass; receiving gate, period, region and provider quantity; actual utilities/chemicals; source-specific waste and release compartments; analytical detection limits, activity reference dates and attribution/allocation. No assumed natural abundance, stoichiometric purity, water fraction, yield, recipe, emission factor or energy demand. |

Declare all qualifiers in the actual data package or reference-flow comment. The native UF6 record describes a broader chemical species, not a certified natural-isotope lot: use its Mass/kg identity for this subset only after independent natural-isotope, solid-shipment, net-commercial-content and provider-basis evidence. Its CN location is record context requiring explicit supply-geography compatibility; Canadian producer evidence is not a matching CN background dataset. Neither classification, a CAS label, broad synonyms nor a schema pass establishes isotope composition, purity, activity or an actual site. Incompatible isotope state or provider quantity excludes the link. Actual supplier/SKU, assay and site readings remain future collection requirements; their absence from this methodological template does not invent values or establish a data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the independently weighed positive accepted reporting-period net commercial UF6 contents in kg, including actual incidental water and impurities accepted under the specification and excluding packing, containers, rejects and cancelled internal transfers; collect using cp_final_product. All rows use per 1 kg reference flow. |
| product_vs_uranium | feed_uo3; final_product | Mass | kg | Record whole compound, contained elemental U, impurity and moisture as distinct measured quantities. m_U = m_product * measured_U_mass_fraction only when both quantities have the same actual assay basis. Do not infer a default UF6/UO3 assay, isotope composition or mass conversion from an ideal chemical formula. No drying or aqueous-solution assumption establishes accepted UF6 identity. |
| activity_basis | radionuclide rows | Radioactivity | kBq | Preserve measured nuclide identity, activity reference date and uncertainty; 1 kBq = 1000 Bq. Convert measured Bq to the verified kBq row unit before normalization. Neither total-U kg nor gross-alpha activity determines individual nuclide activity without independent evidence. |
| utility_basis | electricity; natural_gas; water_supply | Declared reference property | MJ; m3; kg | Use the verified reference property of each supply. Electricity: 1 kWh = 3.6 MJ. Gas m3 requires meter/provider temperature, pressure, wet/dry, composition and compressibility correspondence. Water m3 to kg requires applicable measured density. Do not copy non-reference meanValue factors as physical densities. |
| physical_accounts | production | Mass; Volume; energy | kg; m3; MJ | Keep total-material mass, separate C/H/O/N/S/U/F elemental accounts, water-species and energy accounts before burden allocation. Record all actual inputs, outputs and opening/closing stocks: feed, chemicals, work in progress, accepted/rejected product, retained residues, liquids, filters and carriers. Add any other actual element; preserve fossil/biogenic carbon separately. Track water in supplied formulations, moisture, wet-air intake/exhaust, independently observed reaction water, recycle, evaporation, waste and product without default chemistry. Wet/dry stream conversion requires matching measured composition, flow basis and time. Include attributable electricity, each fuel and heat supply, exported heat/work, losses and stored energy with compatible measured bases; energy is not material mass. Pair internal-transfer endpoints by identity, quantity, assay basis and time before aggregate cancellation; investigate residuals rather than forcing closure. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Qualified externally supplied natural-isotope UO3 powder with verified chemical identity, acceptance records and linked upstream refining dataset |
| starting_condition_role | Supplied precursor, not a geological resource or zero-burden uranium input |
| product_classification_scope | Only the accepted natural-isotope UF6 subset of CPC33610; no accepted mapping created by this text |
| recursive_input_rule | Internal recovery is a physical balance observation; external same-category purchases carry distinct providers and are not automatically credited. Reconditioning previously made UF6 is outside this UO3-start boundary. |
| upstream_dataset_requirement | Link actual UO3 refining, utilities, externally supplied chemicals, containers and waste management; identify missing links, compatible reference quantities and non-overlapping transport/cutoffs |
| disclosure | Actual supplier and lot; UF6 chemical identity and accepted solid shipment state; independently evidenced natural isotopic origin and measured isotope assay with date and uncertainty; whole-product purity/impurities and moisture basis; accepted net commercial contents include actual measured incidental water/impurities within the acceptance specification, not an anhydrous pure-UF6 equivalent; exclude all packing and carrier tare; positive accepted net whole-product D excluding tare; contained-U mass distinct from UF6 mass; receiving gate, period, region and provider quantity; actual utilities/chemicals; source-specific waste and release compartments; analytical detection limits, activity reference dates and attribution/allocation. No assumed natural abundance, stoichiometric purity, water fraction, yield, recipe, emission factor or energy demand. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| gate_boundary | production | This PCR covers the environmental inventory of accepted solid natural-isotope uranium hexafluoride (UF6) delivered at a declared civil nuclear fuel supply factory gate, starting with externally supplied qualified purified uranium trioxide (UO3) powder. It records net deliveries, attributable utilities, actual externally supplied chemicals, waste transfers and environmental releases. Receipt, environmental production accounting, controls, container service and dispatch form one aggregated foreground unit; stage readings remain separate evidence. It provides no executable conversion, purification, enrichment, separation parameters, equipment designs or optimization. Public producer and regulator evidence establishes the UO3-to-UF6 delivery boundary, not a universal chemical recipe (`cameco-delivery`, `cameco-delivery-state`, `cnsc-case`). | `cameco-delivery`, `cnsc-case` |
| upstream_partition | all inventory rows | Retain supplier burdens without repeating ore/concentrate, refining, enrichment, fuel fabrication or electricity-generation operations. The historical civil EPD already separates these stages; its per-kWh results cannot be used as per-kg UF6 factors. | `vattenfall-lca` |
| environment_boundary | all inventory rows | Track actual air and water releases separately from captured dust, stored waste and authorized offsite transfers. Collect process and non-process water routes separately; site-specific licence limits and ambient monitoring values are not default emission quantities. | `cnsc-case`, `iaea-environment`, `cww-inventory` |
| scope_completeness | all inventory rows | Cards are conditional measurement templates, not a universal recipe. Build a complete actual site exchange census; add every actually used absent chemical, coolant, fuel, transport service, water resource, land/infrastructure item, waste and pollutant as a separately identified atomic row. Document absent, measured zero, below-detection and unknown separately. Include attributable infrastructure/maintenance/closure with verified service-life and output attribution, or disclose exclusion and sensitivity. | `cww-inventory`, `iaea-environment` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| production | Aggregated natural-isotope UF6 environmental production and gate supply | required | Declared external UO3 feed and UF6 gate only; retain separate stage measurements | Foreground | per 1 kg reference flow |

Receipt → environmental production/control accounting → accepted dispatch. Record equal quantities at both endpoints of internal transfers and cancel within the aggregate; do not add an intermediate reference output with the same UUID.

### Process: Aggregated environmental production and gate supply (`production`)

#### Inputs

##### Product flows

###### Purified uranium trioxide powder (`feed_uo3`)

Qualified externally supplied natural-isotope UO3 powder only; exclude U3O8 yellowcake and unspecified uranium feed. Refining is linked upstream, not reconstructed here.

- Selected flow: Purified uranium trioxide powder
- Flow property / unit: Mass / kg
- Amount rule: Collect actual attributable reporting-period quantity under cp_feed_uo3; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_feed_uo3`
- Sources: `cameco-delivery`, `cnsc-case`

###### Alternating current (`electricity`)

Native CN grid-average customer-side 1–35 kV supply only; explicitly verify supply-geography compatibility; actual voltage, region, period and provider must match. Waste-incineration generation is not its substitute.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect actual attributable reporting-period quantity under cp_electricity; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electricity`
- Sources: `cww-inventory`

###### natural gas in the gaseous state (`natural_gas`)

Conditional purchased compressed pipeline gas at consumption, with actual supplier definition; no default fuel consumption or composition.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Collect actual attributable reporting-period quantity under cp_natural_gas; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_natural_gas`
- Sources: `cww-inventory`

###### Tap water (`water_supply`)

Actual treated mains water only; do not substitute source-specific raw, Hong Kong or remediation water. Self-abstraction needs its own resource row.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual attributable reporting-period quantity under cp_water_supply; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_supply`
- Sources: `cww-inventory`

###### Anhydrous Hydrogen Fluoride (`hf_supply`)

Only when actual procurement records establish anhydrous HF use within this declared foreground boundary; this card specifies no chemical-processing sequence or reagent demand.

- Selected flow: Anhydrous Hydrogen Fluoride `a648b3e6-eedd-4126-8cad-45071516b69c`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual attributable reporting-period quantity under cp_hf_supply; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hf_supply`
- Sources: `cww-inventory`

###### Hydrogen gas (`hydrogen`)

Only actual external H2 procurement supported by site records; onsite generation is an internal balance and requires its own measured inputs.

- Selected flow: Hydrogen gas
- Flow property / unit: Mass / kg
- Amount rule: Collect actual attributable reporting-period quantity under cp_hydrogen; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydrogen`
- Sources: `cnsc-case`, `cww-inventory`

###### Fluorine gas (`fluorine`)

Only actual external F2 procurement identified in the complete site chemical inventory; not a mandatory input. Onsite generation is counted through its actual external exchanges.

- Selected flow: Fluorine gas
- Flow property / unit: Mass / kg
- Amount rule: Collect actual attributable reporting-period quantity under cp_fluorine; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fluorine`
- Sources: `cww-inventory`

###### Sodium hydroxide (`caustic_soda`)

Conditional actual solid industrial-grade NaOH used in environmental controls. The selected native record explicitly restricts purity to 95%–98%: adopt only when actual grade/assay and provider whole-product basis match; this is an identity condition, not a prescribed procurement or use concentration. Other grades and aqueous formulations require separate exact identities. Record neat NaOH mass, complete delivered product mass and carrier/moisture independently without double counting.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual attributable reporting-period quantity under cp_caustic_soda; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_caustic_soda`
- Sources: `cww-inventory`

###### Reusable uranium hexafluoride shipping cylinder (`shipping_cylinder`)

Actual inbound reusable UF6 carrier as a physical product exchange within the dispatch boundary, distinct from chemical net contents and container-service burdens. Observe actual gross carrier movements, tare and ownership; require matching dispatch/return exchanges in the instantiated site inventory. Amortized manufacture or service kg is not this physical movement. No equipment design is specified.

- Selected flow: Reusable uranium hexafluoride shipping cylinder
- Flow property / unit: Mass / kg
- Amount rule: Collect actual attributable reporting-period quantity under cp_shipping_cylinder; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_shipping_cylinder`
- Sources: `cameco-delivery-state`, `iaea-environment`, `cww-inventory`

#### Outputs

##### Product flows

###### Uranium hexafluoride (`final_product`)

Accepted solid natural-isotope UF6 whole compound, declared supplier basis. Exclude enriched/depleted UF6, uranium metal, oxides, alloys, dispersions, mixtures and fuel elements.

- Selected flow: Uranium hexafluoride `e0aa0856-f028-4d22-bab5-660613307174`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_final_product`
- Sources: `cameco-delivery-state`, `cameco-delivery`, `cnsc-case`

##### Waste flows

###### Uranium-bearing conversion dry residue (`waste_residue`)

Actual removed dry process/control residue only; excludes mine tailings, product or internally recovered uranium.

- Selected flow: Uranium-bearing conversion dry residue
- Flow property / unit: Mass / kg
- Amount rule: Collect actual attributable reporting-period quantity under cp_waste_residue; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_residue`
- Sources: `iaea-environment`, `cww-inventory`

###### Uranium-contaminated spent filter medium (`waste_filter`)

Actual spent filter medium transferred offsite; captured dust returned internally is a separate internal balance.

- Selected flow: Uranium-contaminated spent filter medium
- Flow property / unit: Mass / kg
- Amount rule: Collect actual attributable reporting-period quantity under cp_waste_filter; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_filter`
- Sources: `iaea-environment`, `cww-inventory`

###### Uranium-bearing liquid waste for offsite treatment (`waste_liquid`)

Only actual liquid waste transferred to an authorized receiver; not direct freshwater release and not an automatic consequence of water use.

- Selected flow: Uranium-bearing liquid waste for offsite treatment
- Flow property / unit: Mass / kg
- Amount rule: Collect actual attributable reporting-period quantity under cp_waste_liquid; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_liquid`
- Sources: `iaea-environment`, `cww-inventory`

##### Elementary flows

###### Uranium (`uranium_air`)

Actual total elemental uranium crossing the outdoor-air boundary, unspecified subcompartment only when no more precise source location is available. Official Chinese display is retained; this row measures mass, not alpha activity.

- Selected flow: Uranium `dc288a13-a8c2-4b91-bae5-320a1fe11005`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual attributable reporting-period quantity under cp_uranium_air; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_uranium_air`
- Sources: `cnsc-case`, `iaea-environment`, `cww-inventory`

###### Total elemental uranium to freshwater (`uranium_water`)

Only actual attributable direct freshwater release, including evidenced non-process water routes; never substitute an isotope Bq flow or offsite waste-transfer row.

- Selected flow: Total elemental uranium to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Collect actual attributable reporting-period quantity under cp_uranium_water; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_uranium_water`
- Sources: `cnsc-case`, `iaea-environment`, `cww-inventory`

###### hydrogen fluoride (`hf_air`)

Only measured HF species escaping controls to outdoor air, unspecified subcompartment; total reported fluoride as F does not prove HF mass or speciation.

- Selected flow: hydrogen fluoride `08a91e70-3ddc-11dd-9804-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual attributable reporting-period quantity under cp_hf_air; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hf_air`
- Sources: `cnsc-case`, `cww-inventory`

###### fluoride (`fluoride_water`)

Actual fluoride-ion mass entering freshwater; source and receiver confirmed. Whole salt, HF, fluorine gas and total fluorinated compounds are not interchangeable.

- Selected flow: fluoride `08a91e70-3ddc-11dd-93fb-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual attributable reporting-period quantity under cp_fluoride_water; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fluoride_water`
- Sources: `cww-inventory`, `cnsc-case`

###### carbon dioxide (fossil) (`fossil_co2`)

Only actual foreground fossil combustion/process CO2 to outdoor air, unspecified subcompartment. Purchased electricity background emissions are not repeated here.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual attributable reporting-period quantity under cp_fossil_co2; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fossil_co2`
- Sources: `cww-inventory`

###### particles (PM2.5) (`pm_fine`)

Only measured PM2.5 actually leaving the site to outdoor air, unspecified subcompartment; captured/internal dust is excluded.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual attributable reporting-period quantity under cp_pm_fine; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm_fine`
- Sources: `cww-inventory`, `cnsc-case`

###### particles (PM2.5 - PM10) (`pm_coarse`)

Only measured the 2.5–10 micrometre fraction actually leaving the site to outdoor air, unspecified subcompartment; captured/internal dust is excluded.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual attributable reporting-period quantity under cp_pm_coarse; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm_coarse`
- Sources: `cww-inventory`, `cnsc-case`

###### particles (> PM10) (`pm_over10`)

Only measured the greater-than-10 micrometre fraction actually leaving the site to outdoor air, unspecified subcompartment; captured/internal dust is excluded.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect actual attributable reporting-period quantity under cp_pm_over10; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm_over10`
- Sources: `cww-inventory`, `cnsc-case`

###### Liquid water discharged to freshwater (`water_discharge`)

Only the independently determined H2O component volume discharged directly to freshwater, including separately identified cooling or storm-water routes. The native Water Volume/m3 identity does not identify whole mixed effluent. Keep whole liquid-effluent mass/volume as a separate measured carrier for concentration-load calculations; use this exchange only with evidenced H2O component volume or a justified equivalent-water-volume method and uncertainty. Do not silently equate mixed effluent m3 to H2O m3. Exclude withdrawal, evaporation, internal circulation and offsite liquid waste.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume / m3
- Amount rule: Collect actual attributable reporting-period quantity under cp_water_discharge; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water_discharge`
- Sources: `cnsc-case`, `cww-inventory`

###### uranium-238 (`u238_air`)

Actual measured U-238 release to outdoor air, unspecified only; identify the nuclide independently. This is activity, not total-U or whole-compound mass.

- Selected flow: uranium-238 `08a91e70-3ddc-11dd-9c44-0050c2490048`
- Flow property / unit: Radioactivity / kBq
- Amount rule: Collect actual attributable reporting-period quantity under cp_u238_air; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_u238_air`
- Sources: `iaea-environment`

###### uranium-238 (`u238_water`)

Actual measured U-238 release to freshwater only; identify the nuclide independently. This is activity, not total-U or whole-compound mass.

- Selected flow: uranium-238 `4d9a8790-3ddd-11dd-8db4-0050c2490048`
- Flow property / unit: Radioactivity / kBq
- Amount rule: Collect actual attributable reporting-period quantity under cp_u238_water; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_u238_water`
- Sources: `iaea-environment`

###### uranium-235 (`u235_air`)

Actual measured U-235 release to outdoor air, unspecified only; identify the nuclide independently. This is activity, not total-U or whole-compound mass.

- Selected flow: uranium-235 `08a91e70-3ddc-11dd-9c3c-0050c2490048`
- Flow property / unit: Radioactivity / kBq
- Amount rule: Collect actual attributable reporting-period quantity under cp_u235_air; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_u235_air`
- Sources: `iaea-environment`

###### uranium-235 (`u235_water`)

Actual measured U-235 release to freshwater only; identify the nuclide independently. This is activity, not total-U or whole-compound mass.

- Selected flow: uranium-235 `08a91e70-3ddc-11dd-9c40-0050c2490048`
- Flow property / unit: Radioactivity / kBq
- Amount rule: Collect actual attributable reporting-period quantity under cp_u235_water; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_u235_water`
- Sources: `iaea-environment`

###### uranium-234 (`u234_air`)

Actual measured U-234 release to outdoor air, unspecified only; identify the nuclide independently. This is activity, not total-U or whole-compound mass.

- Selected flow: uranium-234 `4d9a8790-3ddd-11dd-8daf-0050c2490048`
- Flow property / unit: Radioactivity / kBq
- Amount rule: Collect actual attributable reporting-period quantity under cp_u234_air; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_u234_air`
- Sources: `iaea-environment`

###### uranium-234 (`u234_water`)

Actual measured U-234 release to freshwater only; identify the nuclide independently. This is activity, not total-U or whole-compound mass.

- Selected flow: uranium-234 `fe0acd60-3ddc-11dd-ae3f-0050c2490048`
- Flow property / unit: Radioactivity / kBq
- Amount rule: Collect actual attributable reporting-period quantity under cp_u234_water; reconcile stocks and internal transfers, then divide by D.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_u234_water`
- Sources: `iaea-environment`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| subdivision_first | production | Prefer independent metering and subdivision for UF6 and any separately operating UO2 line; UO2 line ammonia does not establish a UF6-line release. Allocate only genuinely shared burdens using evidenced causal drivers; disclose basis, fraction, period, other outputs and sensitivity. No allocation share is prescribed. | `cnsc-case` |
| physical_vs_burden | all inventory rows | Maintain a physical material/process ledger separately from the environmental burden ledger. Keep full independently weighed co-product outputs in the physical ledger; do not multiply physical co-product mass by a burden allocation share. No coproduct, yield or avoided-disposal credit is presumed. |  |
| waste_and_reuse | waste and container service | Classify actual outputs by accepted recipient/use and authorization. Internal uranium/dust/water recovery cancels at the aggregate boundary, not an external coproduct or avoided-burden credit. Characterized radioactive waste requires its actual receiver/treatment chain; distinguish current operations from legacy remediation. Reusable container burdens require demonstrated uses and cleaning/repair records. | `iaea-environment`, `cnsc-case` |
| ancillary_completeness | actual packing; carriers; filters; maintenance | At site instantiation add each actually used packing material, fresh filter medium, coolant, cleaning chemical and repair consumable as its own identified atomic input with collection method; pair actual spent material, retirement, packing removal and carrier dispatch/return as distinct outputs with receiver, ownership and quantity. Generic carrier or material service is not physical product mass. Track complete opening/closing carrier and consumable stocks. Record manufacture, transport, cleaning, repair and retirement burdens separately with evidenced service-life/output allocation and no automatic recycling credit; disclose pending exact identities without deleting actual physical flows. | `cww-inventory`, `iaea-environment` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_feed_uo3 | production | Purified uranium trioxide powder | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Trace calibrated net lot weights, acceptance, chemical identity, supplier assay and stocks; keep whole powder kg and contained-U kg separately. | kg | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_electricity | production | Alternating current | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Use electricity meters and bills with stage readings; convert kWh to MJ using 3.6 MJ/kWh; reconcile purchased, exported and onsite generated power without duplicate supply. | MJ | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_natural_gas | production | natural gas in the gaseous state | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Retain meter temperature, pressure, wet/dry basis, composition and compressibility; reconcile billed volume to provider m3. The secondary Mass meanValue is not gas density. Unknown volume-state compatibility blocks the background link. | m3 | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_water_supply | production | Tap water | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Meter purchased water; if raw records are m3, derive kg from the measured applicable liquid density and temperature; disclose provider treatment and boundary. Internal circulation is not a new purchase. | kg | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_hf_supply | production | Anhydrous Hydrogen Fluoride | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Record received net product mass, assay, moisture, grade and stocks. An aqueous HF solution is a different delivered product: resolve its complete solution identity and carrier-water basis separately; never treat solution kg as neat HF kg. | kg | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_hydrogen | production | Hydrogen gas | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Trace H2 purity, supplier production route, delivered mass and meter basis. Mixed hydrogenation gas or refinery fuel gas is not pure H2; no demand, pressure or conversion conditions are prescribed. | kg | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_fluorine | production | Fluorine gas | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Use supplier net mass, chemical speciation, grade and stock records. HF, fluoride salts, chlorine and fluorine-doped glass are different identities; no operating recipe or generation method is specified. | kg | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_caustic_soda | production | Sodium hydroxide | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Record net solid product mass, actual grade, purity and moisture. For supplied solutions add the specific solution exchange with actual concentration and provider basis; do not invent a concentration or double count carrier water. | kg | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_shipping_cylinder | production | Reusable uranium hexafluoride shipping cylinder | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Record independently weighed incoming carrier mass, actual tare, identity, ownership and matching gross dispatch/return quantities and stock changes; no mass is inferred from an amortized service unit. Retain actual packing and fresh filter/maintenance-material purchases, separately identified spent/removal outputs, cleaning and repair exchanges. Attribute verified manufacture/service burdens over evidenced uses or service output in a separate burden ledger, without scaling physical carrier mass. Do not claim manufacture at every refill or invent service life. | kg | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_final_product | production | Uranium hexafluoride | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Independently weigh accepted complete commercial contents including actual measured incidental water/impurities accepted under the product specification and excluding all packing, carrier tare and rejects; match lots and every relevant product stock. Record complete contents, neat UF6, elemental U and water as distinct quantities on the same assay basis. D is positive accepted reporting-period net commercial contents in kg, not a dry/pure-UF6 equivalent. No default U fraction, isotope ratio, water or purity. | kg | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_waste_residue | production | Uranium-bearing conversion dry residue | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Use independent removal weights, composition, moisture, radionuclide characterization, waste classification, receiver and treatment records; retain whole waste mass and U content separately. | kg | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_waste_filter | production | Uranium-contaminated spent filter medium | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Use independent removal weights, composition, moisture, radionuclide characterization, waste classification, receiver and treatment records; retain whole waste mass and U content separately. | kg | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_waste_liquid | production | Uranium-bearing liquid waste for offsite treatment | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Use independent removal weights, composition, moisture, radionuclide characterization, waste classification, receiver and treatment records; retain whole waste mass and U content separately. | kg | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_uranium_air | production | Uranium | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Use source exhaust flow and representative uranium mass concentration, duration and sample coverage; do not multiply ambient concentration by stack flow or derive kg from gross alpha without nuclide-specific evidence. | kg | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_uranium_water | production | Total elemental uranium to freshwater | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Pair uranium mass concentration with discharge volume on the same stream/time and filtered or total analytical basis; distinguish intake background and actual attributable release with an explicit method. | kg | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_hf_air | production | hydrogen fluoride | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Use species-specific representative stack or fugitive measurement, flow and time. Reconcile the measured fluoride-element ledger to separately identified species without assuming all fluoride is HF or F2. | kg | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_fluoride_water | production | fluoride | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Pair fluoride-specific analysis and discharged volume; state analytical reporting basis and chemical species, avoid double counting upstream waste transfer and downstream treatment discharge. | kg | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_fossil_co2 | production | carbon dioxide (fossil) | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Use measured source CO2 or documented actual fuel carbon balance with oxidation, exported carbon and uncertainty; CO2-equivalent totals are not physical CO2. Retain biogenic CO2 separately whenever actually present. | kg | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_pm_fine | production | particles (PM2.5) | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Use non-overlapping measured particle-size loads. Nested TSP, PM10 and PM2.5 must not be summed; retain unknown size distribution as unknown and add a separately verified unsized exchange if that is the only supported measurement. | kg | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_pm_coarse | production | particles (PM2.5 - PM10) | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Use non-overlapping measured particle-size loads. Nested TSP, PM10 and PM2.5 must not be summed; retain unknown size distribution as unknown and add a separately verified unsized exchange if that is the only supported measurement. | kg | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_pm_over10 | production | particles (> PM10) | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Use non-overlapping measured particle-size loads. Nested TSP, PM10 and PM2.5 must not be summed; retain unknown size distribution as unknown and add a separately verified unsized exchange if that is the only supported measurement. | kg | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_water_discharge | production | Liquid water discharged to freshwater | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Measure whole liquid-effluent mass and volume by actual destination, route and sample interval as an independent carrier; retain matched density, H2O fraction/species, solutes, isotope analysis and uncertainty. Establish H2O component m3 separately by measured component volume or an explicitly justified equivalent-volume method; unknown component conversion leaves this water exchange unresolved. Use whole sampled effluent volume, not inferred pure-water volume, for matching solute kg or nuclide kBq load. Record supply/formulation water, wet-air and observed reaction-water movements, use, recycle, evaporation, product/waste water and stocks separately; no assumed reaction yield. The historical no-process-effluent case does not imply zero cooling-water, sanitary, storm or backwash discharge. | m3 | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_u238_air | production | uranium-238 | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Use nuclide-specific activity concentration, source stream flow and interval, laboratory method/detection limit, reference date and decay correction. No natural abundance or secular-equilibrium default; gross-alpha measurements cannot be assigned to this nuclide. Reconcile mass/activity observations of the same release without duplicating impact pathways. | kBq | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_u238_water | production | uranium-238 | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Use nuclide-specific activity concentration, source stream flow and interval, laboratory method/detection limit, reference date and decay correction. No natural abundance or secular-equilibrium default; gross-alpha measurements cannot be assigned to this nuclide. Reconcile mass/activity observations of the same release without duplicating impact pathways. | kBq | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_u235_air | production | uranium-235 | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Use nuclide-specific activity concentration, source stream flow and interval, laboratory method/detection limit, reference date and decay correction. No natural abundance or secular-equilibrium default; gross-alpha measurements cannot be assigned to this nuclide. Reconcile mass/activity observations of the same release without duplicating impact pathways. | kBq | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_u235_water | production | uranium-235 | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Use nuclide-specific activity concentration, source stream flow and interval, laboratory method/detection limit, reference date and decay correction. No natural abundance or secular-equilibrium default; gross-alpha measurements cannot be assigned to this nuclide. Reconcile mass/activity observations of the same release without duplicating impact pathways. | kBq | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_u234_air | production | uranium-234 | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Use nuclide-specific activity concentration, source stream flow and interval, laboratory method/detection limit, reference date and decay correction. No natural abundance or secular-equilibrium default; gross-alpha measurements cannot be assigned to this nuclide. Reconcile mass/activity observations of the same release without duplicating impact pathways. | kBq | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |
| cp_u234_water | production | uranium-234 | measurement/original record | lot; source/receiver; time; original amount and unit; opening/closing stocks; internal transfers; measured chemical/isotope/moisture assay; original method; detection limit; uncertainty; actual species/compartment; provider basis; attribution; D | Use nuclide-specific activity concentration, source stream flow and interval, laboratory method/detection limit, reference date and decay correction. No natural abundance or secular-equilibrium default; gross-alpha measurements cannot be assigned to this nuclide. Reconcile mass/activity observations of the same release without duplicating impact pathways. | kBq | Each lot/meter or sample interval; monthly reconciliation | Complete year or justified representative production period; cover startup/shutdown and abnormal conditions | Same declared UF6 gate and actual row condition | per 1 kg reference flow | Calibration; originals; assays; receiver evidence; balance residual; coverage/uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all inventory rows | Physical exchange = independently established reporting-period quantity / D after reconciling stocks and paired internal transfers; keep gross external carrier movements. Environmental burden attribution is a separate calculation and never scales physical material quantities or allocates them into fictitious closure. The reference product is 1 kg accepted net commercial UF6 contents. | cp_final_product; each row-specific collection protocol | per 1 kg reference flow |  |
| uranium_account | feed_uo3; final_product; waste and release observations | m_U = measured whole-material mass * measured U mass fraction on the same analytical basis; reconcile elemental U receipts, products, wastes, releases and stocks without prescribing process yield. | Traceable weights; laboratory assays; stock observations | separate kg-U physical ledger | `cnsc-case` |
| release_load | elementary outputs | Integrate matched source concentration times actual stream flow times interval; retain original concentration and flow units, blanks/background, analytical basis, coverage and uncertainty. Normalize each confirmed species and compartment separately; ambient concentration, licence limit or historical daily average alone is insufficient. | Source measurements; laboratory data; source flow and interval; cp_final_product | per 1 kg reference flow | `cww-inventory`, `iaea-environment` |
| activity_conversion | u238_air; u235_air; u234_air; u238_water; u235_water; u234_water | activity_kBq = measured_activity_Bq / 1000; record nuclide-specific reference date and any laboratory-supported decay correction before dividing by D. No gross-alpha or uranium-mass proxy conversion. | Nuclide measurements; laboratory basis; cp_final_product | kBq per 1 kg reference flow | `iaea-environment` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | reference and feed | Verify compound versus mixture, actual natural-isotope evidence and supply state. Tiangong flow identity is distinct from actual provider composition, isotope qualification and inventory reference quantity. Do not use a neighbour product or classifier label to close a physical mismatch. | Lot acceptance; assays; provider originals |
| measurement | all inventory rows | Trace calibrations, sample representativity, reporting period and production scope; record low loads, detection limits, uncertainty and balance residuals. No historical single-facility coefficient becomes a default. | Original meter and laboratory records |
| basis_compatibility | all background links | Verify supply route/geography/period and reference-property basis separately from identity lookup; keep concrete missing UUID or provider compatibility pending. A flow record is not a complete inventory dataset. | Verified flow plus actual provider definition |
| radiological | nuclide releases | Keep nuclide-specific activity, total elemental uranium mass and whole-compound mass distinct. The U-238 exchanges are conditional on the exact native English isotope identity, source compartment and verified Radioactivity/kBq chain; official Chinese 铀α and broad synonyms/CAS do not identify a laboratory analyte. Keep the official display when linked, but never assign gross-alpha, total-U or U-234 measurements to U-238. The Uranium Mass/kg row likewise needs independently measured elemental-U mass, not alpha activity. No isotope or equilibrium assumptions. | Laboratory nuclide data and reference date |
| coverage | environment and shared plant | Document actual routes, startup/shutdown/unplanned releases, sampled intervals, other production lines, waste fate, legacy contamination and excluded infrastructure. Do not claim complete environmental coverage when fields remain unknown. | Source register; actual environmental monitoring and waste records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference_complete | final_product | Require exactly one accepted reference output with whole-UF6 Mass/kg basis, independent D and all chemical, isotope and provider qualifiers; reject enriched/depleted or unspecified uranium identity. | `cameco-delivery` |
| quantity_agreement | all inventory rows | Reference quantity, inventory denominator, collection aggregation and calculations must use the same per-1-kg-whole-UF6 basis in both languages. Whole compounds, elemental uranium, water and activity must not substitute for one another. |  |
| atomic_and_species | all inventory rows | Each card is one exchange with its own source, direction, type, property and unit. Verify actual medium/submedium and fossil/biogenic origin. HF and total fluoride as F, kg-U and isotope kBq, captured dust and escaped PM are different quantities. Preserve measured biogenic CO2 when present; never infer NO2-equivalent NOx or combine overlapping PM fractions. | `cww-inventory`, `iaea-environment` |
| physical_integrity | production | Physical mass/water/element accounts are retained before burden allocation; independently weighed outputs and equal internal transfer endpoints reconcile, with investigated residuals rather than fabricated closure or yield. |  |
| source_coverage | all inventory rows | Disclose unresolved flow identity and provider basis. Validate actual source load methods, detection limits, analytical species and nuclide dates; site ambient values, historic coefficients and operating licence limits are not replacement data. Unresolved relevant methods or quantities make the concrete dataset incomplete. | `cww-inventory`, `cnsc-case` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Compatible civil natural-isotope UF6 supply models linked by evidenced physical identity and provider basis |
| excluded_use | Chemical operating instructions; equipment design; enrichment/separation optimization; isotope or recipe defaults; proxy enriched/depleted products; kg UF6 as kWh electricity results |
| required_metadata | Actual supplier and lot; UF6 chemical identity and accepted solid shipment state; independently evidenced natural isotopic origin and measured isotope assay with date and uncertainty; whole-product purity/impurities and moisture basis; accepted net commercial contents include actual measured incidental water/impurities within the acceptance specification, not an anhydrous pure-UF6 equivalent; exclude all packing and carrier tare; positive accepted net whole-product D excluding tare; contained-U mass distinct from UF6 mass; receiving gate, period, region and provider quantity; actual utilities/chemicals; source-specific waste and release compartments; analytical detection limits, activity reference dates and attribution/allocation. No assumed natural abundance, stoichiometric purity, water fraction, yield, recipe, emission factor or energy demand. |
| required_quality_disclosure | Pending identity/provider quantities; measurement coverage and detection limits; nuclide reference date; species/compartment; burden attribution and physical balances; upstream/infrastructure gaps |
| update_trigger | Reverify changes in supplier, delivery state, chemical/isotope qualification, route, metering, environmental licence/method or background data |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `cameco-delivery` | literature | Cameco Fuel Services, Port Hope Conversion Facility, web snapshot 2026-10-13, paragraph on purified UO3 and UF6/UO2 destinations; https://www.camecofuel.com/business/port-hope-conversion-facility | Producer first-party qualitative delivery boundary only; no universal recipe, isotope assay or factor. |
| `cnsc-case` | official_guidance | CNSC, Regulatory Oversight Report for Uranium and Nuclear Substance Processing Facilities in Canada: 2021, §§3.1–3.2, Appendix I Port Hope/Table I-6 and Liquid effluent; https://www.cnsc-ccsn.gc.ca/eng/reactors/regulating-nuclear-reactors-power-plants/regulatory-oversight-reports/uranium-and-nuclear-substance-processing-facilities/2021/ | Historical Canadian facility observation: distinct UO3/UO2/UF6 gates, monitored uranium/fluoride and process/non-process water. No emission quantity, chemistry recipe or licence condition generalized. |
| `cww-inventory` | official_guidance | European Commission JRC, CWW BREF, 2016, Scope printed xxiii/PDF29; Chapter4 printed540/PDF570, BAT2 printed543/PDF573, BAT3–4 printed544/PDF574; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf | Horizontal chemical-sector stream inventory and representative load monitoring; actual jurisdiction and installation scope assessed separately. Not uranium-specific BAT recipes, radionuclide methods or emission defaults; BAT-AEL yearly concentrations do not establish emission mass. |
| `iaea-environment` | official_guidance | IAEA, Safety of Nuclear Fuel Cycle Facilities, SSR-4, 2017, §1.8 printed3/PDF23; §§9.104–9.108 printed111/PDF131; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf | Fuel-cycle environmental effluent monitoring and characterized waste generation/storage/transfer records; used only for high-level accounting. No preparation, isotope-separation conditions, equipment design, activity or equilibrium defaults. |
| `vattenfall-lca` | literature | Vattenfall, Summary of certified EPD of Electricity from Vattenfall Nordic Nuclear Power Plants, S-P-00923, 2016-12-31, printed/PDF2; https://group.vattenfall.com/se/siteassets/sverige/ringhals/in-english/environment/epd-summary-vattenfall-nuclear-power-2016.pdf | Historical EPD expired 2019-12-31; prior civil LCA stage boundary evidence only. Its declared unit is electricity, so kWh results, plant lifetime and full fuel-cycle coefficients cannot be moved to kg UF6; does not certify this PCR. |
| `cameco-delivery-state` | literature | Cameco U101 - Refining & Conversion, web snapshot 2026-10-13, steel transport cylinders paragraph; https://www.cameco.com/uranium_101/fuel-processing/refining-conversion/ | Producer first-party solid UF6 shipment in specialized containers; no numerical state conditions, operating instructions, design, isotope ratios or energy-equivalent defaults adopted. |
