---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.methanol-stabilized-formalin-silver-route
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Methanol-stabilised aqueous formalin from the silver-catalyst route

## 1. Scope and Applicability

This method covers bulk aqueous formaldehyde stabilised with methanol, made from fossil industrial methanol by the high-conversion crystalline-silver oxidation/dehydrogenation route, water absorption, actual grade adjustment and bulk storage/loading. The foreground includes a dedicated thermal oxidiser with heat-recovery boiler for the hydrogen-rich tail gas. “High conversion” names the process configuration in jrc-lvoc-2017 Sections 6.2.1–6.2.2.1 and Figure 6.1, not an assumed numerical conversion. No conversion, yield, purity, catalyst life, recipe, energy intensity or emission factor is prescribed.

The reference identity is conventional nominal 37 wt% methanol-stabilised formalin; actual SKU, HCHO-equivalent assay, methanol, water and impurities must be collected and checked against that identity and the provider basis. The native reference describes approximately 37 wt% HCHO and usually 10–12% methanol. These are illustrative customary composition descriptions, not mandatory grade limits or a recipe; the methanol percentage convention is unspecified. Nominal 37 wt% is this PCR’s declared product subset, not a hard native tolerance. The silver-route absorber product in jrc-lvoc-2017 has lower residual methanol; it is not automatically the accepted reference mixture. Collect any finishing addition and require actual composition/concentration conventions and provider acceptance to agree with the whole-mixture identity. Intended preservative/fixative use is descriptive and does not establish an exclusive manufacturing grade. Producer evidence hexion-formalin confirms varying aqueous concentrations and methanol inhibition levels, not a universal recipe or a silver-route attribution. A different grade must have a compatible identity; neither a pure-HCHO record nor a recovered solvent can automatically stand for the supplied mixture.

Excluded are biological enzyme preparations/fermentation, ethanol manufacture or denaturation, other aldehydes/ethers/ketones/isomers, metal-oxide formaldehyde, silver partial-conversion routes requiring methanol distillation, gas-engine/central-boiler tail-gas handling, urea/melamine precondensates, non-methanol stabilisers, paraformaldehyde production, methanol-free or buffered fixation solutions, and standalone dilution of purchased formalin. Product application labels do not create another PCR. This method is a narrower subset of mixed CPC 3.0:34170, not full coverage.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.methanol-stabilized-formalin-silver-route |
| classification_refs | CPC 3.0:34170; proposed narrower relation, acceptance remains separate |
| covered_products | Bulk conventional nominal 37 wt% aqueous formalin, formaldehyde CAS 50-00-0, methanol CAS 67-56-1, water CAS 7732-18-5; actual grade and assay disclosed |
| excluded_products | Section 1 excluded chemicals, mixtures, manufacturing and delivery routes |
| representative_product | Actual accepted methanol-stabilised formalin SKU; no default composition |
| production_route | Fossil methanol receipt → vaporisation with air/water → crystalline silver reaction → water absorption → grade adjustment → bulk storage/loading; dedicated tail-gas thermal oxidation/heat recovery |
| market_state | Full aqueous supply mixture, bulk at plant loading gate; packaging is not included in the reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Methanol-stabilised aqueous formalin supplied as a chemical intermediate |
| How much | 1 kg accepted net product as supplied |
| How well | Meets the actual declared SKU acceptance; assayed HCHO-equivalent, overall methanol/water and distinct impurities; true/free-species basis separate; no assumed purity |
| How long or cycle | At gate delivery; storage time and temperature collected, no service-life default |
| reference_flow_link | out_formalin |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Formalin (`a7fad773-b7f9-4027-8488-4108c2c41d45`) |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| Reference unit group | Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | kg |
| Required qualifiers | Actual SKU and assay method; aqueous supply state; HCHO-equivalent/overall methanol/overall water/distinct impurity mass fractions and analytical convention; free versus bound quantities explicitly distinguished; net accepted supply mass; fossil methanol origin/provider; crystalline-silver high-conversion configuration; dedicated oxidiser/heat-recovery boundary; site/period/stocks; bulk delivery temperature; recovered-stream destinations; utility pressure/enthalpy/volume reference; allocation and provider basis compatibility |

Required qualifiers belong in dataset metadata, product/reference comments or equivalent fields; missing qualifiers make the package reference incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_supply | reference_product | Mass | kg | Use 1 kg accepted net formalin supply mixture, including methanol, water and actual impurities. Pure HCHO-equivalent mass is reported separately and never silently replaces the denominator. |
| m_assay | out_formalin, in_methanol, w_aqueous | Mass | kg | Measure mass fractions on the actual supplied or discharged basis. For out_formalin determine industrial solution HCHO-equivalent mass fraction using iso-formalin-assay-1972 and cp_product; free-carbonyl analysis alone is not a full product assay. Report overall water/methanol composition separately from true free/bound species. Record sample state, dilution, recovery, impurities and propagated uncertainty. Raw methanol and dilute/contaminated wastes require their own compatible assays; do not transfer the commercial-solution procedure outside its matrix/concentration limits. |
| m_electricity | in_electricity | Net calorific value | MJ | Preserve the selected reference-property label. Convert metered kWh using 1 kWh = 3.6 MJ; this identity supplies no grid mix, voltage, losses or generation factor. |
| m_steam | in_steam, out_steam | Net delivered thermal energy | MJ | Use calibrated physical mass/state measurements and iapws-if97-2012 enthalpies within its validity regions, following cp_energy and c_heat. Measure wet-steam quality; pressure and temperature on the saturation line do not determine it. Provider/receiver net heat definition must agree; NCV/GCV labels do not establish enthalpy service. |
| m_gas | in_gas | Volume | m3 | Reconcile measured volume with provider absolute temperature/pressure, wet/dry gas composition and compressibility; preserve actual heating-value basis separately. Database secondary mass coefficients do not supply density. |
| m_species | elementary outputs | Mass or Volume as selected | kg or m3 as selected | Integrate compatible species concentrations and actual gas/liquid volumes over the operating period. Preserve phase, origin, medium, dry/wet/standard-state conventions and monitoring quantity definition; volume discharge is separate from pollutant mass. |

### Supply-assay and steam-service protocols

For cp_product, use representative sealed, nearly filled samples taken promptly after receipt; retain lot temperature, appearance and sampling-to-analysis time. ISO2227 covers clear or slightly cloudy industrial solutions at 25–45% HCHO; precipitated samples give incorrect results even when mixed. Preserve the precipitate/off-spec quantity and analyse all phases by an independently validated method before claiming a total; filtering it away cannot validate whole product. Follow the fresh neutral sulphite preparation, weighed test portion, sample/reagent neutralisation, covered handling, two-minute mixing and standardised acid endpoint of Sections 4–8. With acid concentration c in mol/L, sample mass m_sample in g and attributable titration volume V in mL, w_HCHO = 30.03 × c × V / (1000 × m_sample), corrected for actual dilution/titer and any demonstrated blank. This is an analytical HCHO-equivalent mass fraction, not free HCHO gas. Qualify the actual methanol/impurity matrix through replicated assays, reagent blanks, dilution consistency and recovery or independent comparison; retain departures, interfering carbonyls, detection limits and uncertainty rather than assuming complete response.

For overall water use the actual published volumetric KF preparation in breitkreuz-formalin-analysis-2023 Section 2.4.3: weigh 0.2 g sample with 1 g dry methanol, condition at least 24 h, then titrate; repeat at least twice and correct the weighed dilution and measured reagent blank. Validate on comparable compositions, including actual acid/redox/other carbonyl impurities, time-dependent recovery and moisture ingress. These are analytical preparation conditions, not a factory recipe. Do not borrow that study’s omission of small formic-acid contents or its 1%/2% errors as site defaults. Within a verified single-liquid HCHO/methanol/water matrix, w_MeOH = 1 - w_HCHO - w_water_overall - sum(w_distinct_impurities); measure impurity fractions independently and propagate closure uncertainty. Unknown impurities, separated phases or analytical interferences invalidate this inference until an independent quantitative method establishes coverage. This scheme defines overall composition, including equivalents bound in soluble oligomers/hemiformals, and does not establish free water or free methanol. True species, paraformaldehyde solids, methylal and other stable compounds remain separate; do not assign an equilibrium model or a guessed bound fraction.

For cp_energy, record calibrated steam and condensate mass meters, absolute pressure (convert gauge pressure using measured local ambient pressure), temperature, phase and independently measured wet-steam quality, with synchronised intervals and meter/state uncertainty. Obtain h(p,T) for single-phase ordinary water/steam from iapws-if97-2012; on the saturation line use measured quality x and h = (1 - x) × h_liquid + x × h_vapour. Verify the applicable region, validity limits, implementation/test values and a common enthalpy datum. IF97 does not describe contaminated chemical mixtures; their composition/thermodynamic method needs separate qualification. Use the mass-closed enthalpy difference in c_heat only for the actual matched service. Reconcile unequal mass, non-returned condensate, make-up, drains, leaks, residual steam and storage before reporting net useful heat; include losses and any work/kinetic/potential terms when material. Retain kg/state water transfers once in the physical ledger and MJ service once in the energy ledger. Imports and useful exports require their actual supplier/receiver acceptance; no standard pressure, dry-steam assumption, constant heat factor or NCV/GCV-to-enthalpy conversion is supplied.

Physical reconciliation uses the silver-route reactions CH3OH ⇌ CH2O + H2 and H2 + ½ O2 → H2O only as species/atom identities (jrc-lvoc-2017 Section 6.2.2), not as assumed extents, yield or a fixed oxygen demand. Collect actual reaction/combustion water generation and any water consumed or released by hydration/condensation separately from fresh water, carrier water, internal steam/condensate and emitted H2O. Retain whole stream mass and its component account as two views of the same material. HCHO-equivalent assay and water-by-difference may be an analytical equivalent convention; neither independently establishes free-water mass or molecular speciation. For the declared overall-composition convention, poly(oxymethylene) glycols contribute their HCHO-equivalent plus water and hemiformals contribute their HCHO-equivalent plus methanol (breitkreuz-formalin-analysis-2023 Section 2.3). This is an atom-preserving decomposition, not a measured free/bound split. Close H/O using these overall constituents plus measured distinct impurities; if true-species quantities are needed, require independent species evidence. Never add equivalent HCHO, full hydrated/oligomeric species and their bound water as separate physical masses. An unresolved analytical basis remains incomplete.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted externally supplied fossil industrial methanol and declared fresh catalyst/utility inputs at plant receipt |
| starting_condition_role | Chemical feed and utility supply; methanol manufacture remains in compatible upstream providers |
| product_classification_scope | The stated aqueous methanol-stabilised silver-route formalin subset of CPC 3.0:34170 |
| recursive_input_rule | Preserve equal-endpoint internal absorption liquor/methanol/formalin returns. Purchased same-category formalin retains a separate upstream provider and measured rework contribution; do not recurse to zero burden or treat dilution-only as this manufacture route |
| upstream_dataset_requirement | Composition/route-compatible methanol, refined silver or actual regeneration service, demineralised water, electricity, fuel, steam and external waste-treatment providers with matching reference quantities |
| disclosure | Actual flow diagram, unit boundaries, supplier/receiver states, all stocks/rework/recycles, final discharge media, normal/abnormal operating modes, meter and laboratory bases, allocated burden account and unresolved links |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | formalin_train | Include feed receipt and storage, vaporisation, air supply, crystalline-silver conversion, cooling/heat recovery, multistage water absorption, actual methanol stabilisation/dilution, storage/loading and their final controls. Retain stage meters in one integrated foreground unit; do not make the same solution an additional reference output between absorption and finishing. | jrc-lvoc-2017, hexion-formalin |
| b_tailgas | formalin_train | Include dedicated thermal oxidation and heat-recovery boiler, support fuel/start-ups, condensate, cooling and final stack. Absorber gas, hydrogen and recovered heat used internally are measured internal transfers; do not also count them as fuel purchases, product sales or pre-control emissions. | jrc-lvoc-2017 |
| b_water | formalin_train | Include collection/rework of cleaning, spill and contaminated condensate streams, pretreatment and any wastewater treatment actually inside the foreground. External treatment uses a composition/receiver-specific waste interface; final elementary releases occur only at the declared nature boundary. No normal-operation effluent assumption permits deleting episodic releases. | jrc-lvoc-2017 |
| b_ledger | physical_ledger | Retain unallocated mass, water, carbon, hydrogen, oxygen and energy ledgers, with composition/quantity equality at both endpoints of every internal link. Include stocks, precipitation, catalysts, nitrogen/oxygen carriers, reaction water, collected residues and abnormal losses. Recovered solvent has its actual composition/state, not fresh feed identity by name alone. | jrc-lvoc-2017 |
| b_complete | additional_exchanges | Inventory cards are a conditional minimum checklist. Add one atomic row for every additional actual reagent, filter, ion-exchange resin/regenerant, captured dust, sludge type, packaging component, transport, cooling chemical, fuel or pollutant. State documented absence rather than silent zero; missing identity/provider stays incomplete. For actual packed deliveries, add each container/closure component separately while excluding it from net product mass. Account for actual returnable containers/tankers, packing, maintenance replacements, cleaning, transport and return losses using evidenced service/cycle shares; do not assume disposable packaging or zero equipment burden. Preserve carried upstream burdens of purchased feed, rework and regenerated material without crediting the same recovery twice. | jrc-lvoc-2017 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| formalin_train | Integrated silver-route aqueous formalin manufacture and dedicated tail-gas control | required | Stated route and bulk product state | Foreground with independent stage metering and complete internal links | 1 kg accepted net formalin as supplied |

Physical map: fresh methanol + atmospheric air + demineralised water → vaporisation → silver reaction/cooling → water absorption → measured grade adjustment → accepted bulk formalin. Absorption liquid and optional tail gas return internally to vaporisation. Tail gas → dedicated thermal oxidiser/heat-recovery boiler → final stack and measured own-use/export steam. Cleaning/condensate → permitted rework or actual treatment/receiver; cold-spot deposits and spent catalyst retain actual destinations. Keep this physical process map separate from the allocated environmental-burden account.

### Process: Integrated formalin manufacture (`formalin_train`)

#### Inputs

##### Product flows

###### Methanol (market average) (`in_methanol`)

Fresh fossil industrial methanol, CAS 67-56-1, for vaporiser feed and conditional finishing stabilisation. Meter these purposes separately and aggregate only net external additions. This market-average identity explicitly covers coal gasification/coking and natural-gas routes; record the actual supplier mix, purity and water, with no biomass assignment or default background. Internal recovered methanol is not fresh input. The row quantity is the whole accepted industrial methanol supply on its verified provider basis, not a purity-corrected alcohol component substituted without conversion. Record consumed alcohol, retained stabiliser, recovered alcohol and losses separately; no complete conversion or stabiliser dose is assumed.

- Selected flow: Methanol (market average) (`adbc8430-7937-4ade-b7a5-cb1797dda661`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: jrc-lvoc-2017

###### Demineralized water (`in_water`)

Externally supplied ion-exchange/RO demineralised water for absorption, measured grade adjustment, cleaning and boiler make-up. Separate the purpose meters; water already in methanol supply or recycled scrubber liquor is not another external input. On-site production requires its own actual raw-water and treatment exchanges.

- Selected flow: Demineralized water (`9385842f-1815-4f19-a6b9-3dbb7ccbbffc`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: jrc-lvoc-2017

###### silver (`in_silver`)

Unalloyed refined crystalline silver, CAS 7440-22-4, supplied to the catalyst bed. The broad refined-metal identity applies only to actual silver metal, not silver salts, supported composites, foil or conductive paste. Weigh installed/replaced fresh and regenerated charges separately; a regeneration service and its losses are separate exchanges. No catalyst life, silver recovery or loading is prescribed.

- Selected flow: silver (`7db0c01b-7605-4e92-90a1-c4bc6dd8e157`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_catalyst`
- Sources: jrc-lvoc-2017

###### Alternating current (`in_electricity`)

Meter vaporiser, blowers, pumps, cooling, loading and pollution controls. This selected record is China 1–35 kV grid-average consumption supply to user; use it only where the actual location, voltage and provider boundary agree. Another geography, voltage or generation contract needs a separately verified flow/provider.

- Selected flow: Alternating current (`3d76981f-964a-4865-b588-0e067a2a1163`)
- Flow property / unit: Net calorific value (`93a60a56-a3c8-11da-a746-0800200c9a66`); unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: jrc-lvoc-2017

###### Imported process-steam heat (`in_steam`)

Conditional imported process-steam heat for start-up, vaporisation or finishing. Determine actual pressure, temperature, dryness, steam/condensate masses and delivered enthalpy difference; the supplier/background must define the same net delivered heat basis. Record 11.0 MPaG or 0.45 MPaG streams only when those pressures are real; no currently verified record establishes this unspecified site heat service. Retain the utility link as incomplete until matched.

- Selected flow: Imported process-steam heat
- Flow property / unit: Net delivered thermal energy (property/unit group pending compatible provider) / MJ
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: jrc-lvoc-2017

###### natural gas in the gaseous state (`in_gas`)

Conditional compressed pipeline fossil natural gas for start-up or support firing in the dedicated thermal oxidiser/heat-recovery boiler. The selected reference is Volume, not Mass. Collect absolute pressure, temperature, wet/dry composition and compressibility and reconcile supplier cubic-metre conditions; a secondary mass coefficient is not a density. No firing rate or heating value is assumed.

- Selected flow: natural gas in the gaseous state (`4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`)
- Flow property / unit: Volume (`93a60a56-a3c8-22da-a746-0800200c9a66`); unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: jrc-lvoc-2017

##### Elementary flows

###### air (`air_input`)

Measure net fresh atmospheric air drawn into the vaporiser/reaction and combustion system; do not count recycled tail gas as fresh air. This is a resource from air. Derive mass from recorded volume, pressure, temperature, humidity and composition; keep O2/N2/carrier-water components in the physical ledger without also entering them as duplicate air-resource inputs.

- Selected flow: air (`fe0acd60-3ddc-11dd-aaa4-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: jrc-lvoc-2017

#### Outputs

##### Product flows

###### Formalin (`out_formalin`)

Accepted bulk methanol-stabilised aqueous formalin at the loading gate. The selected oxidation-route solution identity describes conventional nominal 37 wt% formalin with methanol stabilisation; verify actual SKU/assay compatibility before using it. Its descriptive composition is not a dose, exact purity or universal assay. The native oxidation treatment is compatible with this declared silver oxidative-dehydrogenation subset but does not independently prove a site route. Verify producer gate and any post-absorption methanol adjustment; preserve the native percentage ambiguity rather than assuming 10–12 wt% or imposing an invented tolerance. Declare actual HCHO-equivalent, methanol, carrier water and impurities; exclude crude reaction gas, methanol-free solutions, urea precondensates, solid paraformaldehyde and recovered-solvent sales.

- Selected flow: Formalin (`a7fad773-b7f9-4027-8488-4108c2c41d45`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_product`
- Sources: jrc-lvoc-2017, hexion-formalin

###### Net exported steam heat (`out_steam`)

Conditional net exported useful steam heat after own process use and measured losses. Keep separate gross generation, internal use, imported heat and export meters; retain actual steam mass, pressure, temperature, dryness, condensate return and receiver enthalpy reference. Do not subtract export from input or assign an avoided-energy credit automatically. A compatible net heat identity/provider remains unresolved.

- Selected flow: Net exported steam heat
- Flow property / unit: Net delivered thermal energy (property/unit group pending compatible provider) / MJ
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: jrc-lvoc-2017

##### Waste flows

###### Spent crystalline silver catalyst to metal recovery (`w_catalyst`)

Spent crystalline silver catalyst crossing the gate to a documented external metal reclaimer. Weigh the actual wet/contaminated charge, silver fraction and recipient acceptance; retain returned metal/service separately. Generic disposal catalyst waste does not establish this specific recycling interface. No recovery percentage or negative virgin-silver credit is prescribed.

- Selected flow: Spent crystalline silver catalyst to metal recovery
- Flow property / unit: Mass / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: jrc-lvoc-2017

###### Collected paraformaldehyde deposit waste (`w_paraform`)

Conditional collected paraformaldehyde deposits removed from filters, pipes or cold spots and sent outside the gate. Weigh each consignment, water, organic contamination and receiving treatment. Internal dissolution/rework is an equal-endpoint internal link, not this waste output or a marketed paraformaldehyde coproduct.

- Selected flow: Collected paraformaldehyde deposit waste
- Flow property / unit: Mass / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: jrc-lvoc-2017

###### Formaldehyde-bearing aqueous effluent to external treatment (`w_aqueous`)

Conditional formaldehyde-bearing aqueous purge/cleaning liquor sent to external treatment. Measure volume and density or wet mass, HCHO assay definition, methanol, formate, COD/TOC, salts and receiver. Keep each different composition/source stream separately in the site record; aggregate only compatible receiver interfaces. Waste water reworked internally is not an external output; this row is not direct discharge to nature.

- Selected flow: Formaldehyde-bearing aqueous effluent to external treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: jrc-lvoc-2017

###### Excess biological-treatment sludge (`w_sludge`)

Conditional excess biological-treatment sludge if wastewater treatment is inside the foreground. Collect wet mass, dry solids, retained formaldehyde/methanol, mineral fraction and receiver acceptance. Return activated sludge is internal; chemical precipitate and screening residues require separate actual rows, not this identity.

- Selected flow: Excess biological-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: jrc-lvoc-2017

##### Elementary flows

###### formaldehyde (`air_formaldehyde`)

Formaldehyde to outdoor air, CAS 50-00-0. Quantify final stack, storage/loading vents, fugitives and abnormal releases after actual controls; not raw absorber gas subsequently burnt. Use a validated Method0011 sampling/8315A analysis implementation with matrix recovery, blanks and wet/dry flow correspondence, or another demonstrated compatible method.

- Selected flow: formaldehyde (`08a91e70-3ddc-11dd-941b-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: jrc-lvoc-2017, epa-carbonyl-8315a

###### methanol (`air_methanol`)

Methanol to outdoor air, CAS 67-56-1, from final stack and measured handling/fugitive releases. Use species-specific analysis and compatible gas flow, not TVOC carbon-equivalent mass.

- Selected flow: methanol (`fe0acd60-3ddc-11dd-a935-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: jrc-lvoc-2017

###### methyl formate (`air_methylformate`)

Conditional measured methyl formate, CAS 107-31-3, to outdoor air; separate from formic acid and methanol. A trace in process gas is not a default positive gate release.

- Selected flow: methyl formate (`fe0acd60-3ddc-11dd-afcf-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: jrc-lvoc-2017

###### dimethoxymethane (`air_methylal`)

Conditional measured dimethoxymethane, CAS 109-87-5, to outdoor air; not formaldehyde or dimethyl ether. Verify final controls and compound-specific mass.

- Selected flow: dimethoxymethane (`4d9a8790-3ddd-11dd-9c6a-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: jrc-lvoc-2017

###### carbon dioxide (fossil) (`air_co2`)

Fossil CO2 to outdoor air from over-oxidation and dedicated off-gas/support-fuel combustion; reconcile measured stack carbon with fossil feed/fuel and stocks. Do not add an untreated tail-gas CO2 amount to a final-stack amount that already includes it. Carbon origin is measured/disclosed; any actual biogenic carbon requires its own CO2 row and remains in LCI regardless of greenhouse-gas reporting conventions.

- Selected flow: carbon dioxide (fossil) (`08a91e70-3ddc-11dd-923d-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: jrc-lvoc-2017

###### carbon monoxide (fossil) (`air_co`)

Fossil CO to outdoor air, CAS 630-08-0, remaining after oxidation/combustion. Measure the final released species; raw process gas sent to the oxidiser remains internal.

- Selected flow: carbon monoxide (fossil) (`08a91e70-3ddc-11dd-924e-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: jrc-lvoc-2017

###### hydrogen (`air_hydrogen`)

Molecular hydrogen, CAS 1333-74-0, actually released to outdoor air after recovery/control or during abnormal modes. Measure residual hydrogen; hydrogen internally combusted is not an external sale or emission. Do not use acidity as H+ or hydrogen-sulfide records.

- Selected flow: hydrogen (`08a91e70-3ddc-11dd-949c-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: jrc-lvoc-2017

###### Nitrogen oxides (`air_nox`)

Conditional NOx from the dedicated combustion unit. Record the monitoring convention and LCIA quantity definition; kg alone does not prove NO2-equivalent mass. Link this aggregate only after measured NO/NO2 composition or the provider definition establishes compatibility; otherwise the quantity/background link is pending. Exclude N2O and do not also total separately entered NO/NO2. A result reported as NO2 equivalent is an analytical/impact convention, not automatically the physical mass of NO plus NO2; use separately measured species/speciation for the elemental and physical ledger.

- Selected flow: Nitrogen oxides (`f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: jrc-lvoc-2017

###### sulfur dioxide (`air_so2`)

Conditional actual sulfur dioxide, CAS 7446-09-5, from the combustion unit; verify measured sulfur/speciation and final controls. Do not substitute a sulfur-oxide aggregate or invent positive sulfur emissions for sulfur-free supplies.

- Selected flow: sulfur dioxide (`fe0acd60-3ddc-11dd-ac48-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: jrc-lvoc-2017

###### particles (PM2.5) (`air_pm25`)

Conditional final outdoor-air particles no larger than PM2.5. Obtain a compatible particle-size measurement at the dedicated combustion/handling outlets; this disjoint fraction is not added to an overlapping total PM10.

- Selected flow: particles (PM2.5) (`08a91e70-3ddc-11dd-9293-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: jrc-lvoc-2017

###### particles (PM2.5 - PM10) (`air_pm2510`)

Conditional final outdoor-air particles larger than PM2.5 and no larger than PM10. Derive only from compatible size-resolved measurements, distinguishing captured dust and inventory time; no guessed size fractions.

- Selected flow: particles (PM2.5 - PM10) (`08a91e70-3ddc-11dd-9501-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: jrc-lvoc-2017

###### particles (> PM10) (`air_pmover10`)

Conditional final outdoor-air particles larger than PM10. Keep this fraction separate from PM2.5 and PM2.5–PM10. Collected dust sent to a receiver is a separate waste exchange, and internally returned dust is not another emission.

- Selected flow: particles (> PM10) (`fe0acd60-3ddc-11dd-a70a-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: jrc-lvoc-2017

###### water vapour (`air_water_vapour`)

Water vapour actually released to outdoor air from final gas and cooling/steam losses. Retain actual humidity/condensate measurements and phase; do not map liquid freshwater discharge to vapour or double count process water already retained in formalin. This row is H2O vapour mass, not whole wet vent-gas mass, bound hydrogen/oxygen totals or steam heat. Track generated combustion/reaction water, intake humidity, evaporation, condensed water and actual emitted vapour separately; constituent species do not add another whole carrier stream.

- Selected flow: water vapour (`fe0acd60-3ddc-11dd-ac04-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: jrc-lvoc-2017

###### methane (fossil) (`air_methane`)

Conditional fossil methane, CAS 74-82-8, actually escaping from pipeline support-fuel handling or final combustion exhaust. Verify leak tests/species mass and final-control boundary; gas input does not imply a methane emission factor.

- Selected flow: methane (fossil) (`08a91e70-3ddc-11dd-9610-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: jrc-lvoc-2017

###### formaldehyde (`water_formaldehyde`)

Conditional formaldehyde actually discharged to fresh surface water after included treatment. Match free-carbonyl 8315A results, any validated total-HCHO-equivalent result, sampling recovery and the LCI/LCIA definition; do not silently equate free monomer, hydrated/oligomeric formaldehyde and total organic carbon. Assess the unmeasured portion and use an appropriate validated assay before a complete release inventory.

- Selected flow: formaldehyde (`fe0acd60-3ddc-11dd-9ee6-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: jrc-lvoc-2017, epa-carbonyl-8315a

###### methanol (`water_methanol`)

Conditional methanol, CAS 67-56-1, actually discharged to fresh surface water. Measure final outfall species mass; wastewater handed to an external treatment provider is represented by the waste interface, with no duplicate untreated elementary release here.

- Selected flow: methanol (`fe0acd60-3ddc-11dd-a939-0050c2490048`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: jrc-lvoc-2017

###### formic acid (`water_formic`)

Conditional free formic acid, CAS 64-18-6, in final freshwater discharge, only when actual species/assay definition and pH support this identity. Sodium formate, total formate reported as acid equivalent and COD are different quantities; keep them in the analytical ledger and add appropriate atomic exchanges rather than converting silently.

- Selected flow: formic acid (`d86c88e9-6555-11dd-ad8b-0800200c9a66`)
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: jrc-lvoc-2017

###### Water (`water_discharge`)

Conditional liquid water actually discharged to fresh surface water, including uncontaminated cooling blowdown and treated outfall carrier water. Meter actual discharge volume; do not use a resource-withdrawal or water-vapour record. The native water flow represents the liquid-water constituent, not every component of wet effluent. Product overall-water assay does not establish free carrier-water quantity at an outfall. Retain whole effluent volume/wet mass separately for sampling integration; establish carrier-water volume from measured composition and compatible water density/state, without assigning a default density or equating contaminated effluent volume with pure-water volume. Pollutant species and carrier water are components of that same discharge, not additional physical outfall mass.

- Selected flow: Water (`5e50fc01-19c6-4377-a1cc-bc65a12498ea`)
- Flow property / unit: Volume (`93a60a56-a3c8-22da-a746-0800200c9a66`); unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Measured period boundary quantity from the linked collection protocol divided by accepted net formalin supply mass for the same period; no default
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: jrc-lvoc-2017

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_hierarchy | formalin_train | First investigate stage subdivision and system expansion; report any expanded system as that system, not a silently credited single-product result. Use a demonstrated causal physical relationship for inseparable joint burdens where avoidance is impossible. If that cannot be established, justify economic allocation using actual same-period gate quantities and prices, disclose rejected alternatives and sensitivity. Do not assign a fixed share or infer allocation from formalin/steam mass ratios, sale labels or process-gas heating value. | eu-ef-2021-allocation |
| a_accounts | physical_ledger, burden_account | Keep actual unallocated formalin, exported steam, catalyst waste and effluent quantities and their physical links unchanged. Only the environmental burden account is partitioned: retain each dedicated burden plus the evidenced share of each joint burden, normalized to accepted formalin supply mass. Record shares, included joint stages and evidence; shares sum to one for the joint pool. Never multiply co-product physical output by the allocation share. | eu-ef-2021-allocation, jrc-lvoc-2017 |
| a_recovery | formalin_train | Internal methanol/formalin/condensate returns are internal transfers, with no coproduct credit. Identify useful exported steam by actual receiver acceptance and measured net heat. Treat spent silver and paraformaldehyde deposits according to actual waste/product status and receiver; a recycling intention does not automatically make either a co-product or justify avoided virgin production. Do not combine allocation and substitution for the same burden. | eu-ef-2021-allocation, jrc-lvoc-2017 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

All protocols use the same site and declared production period, include start-up/shutdown, maintenance, spills, stocks and off-spec rework, and retain raw stage records before aggregation. Quantities on inventory cards are physical boundary totals per 1 kg reference flow; the separate product burden account follows Section 7. No factory measurements are supplied by this PCR.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | formalin_train | Accepted net formalin and composition | Delivery and laboratory records | SKU; lot; net loading mass; beginning/end stocks; acceptance; rejected/rework mass; HCHO-equivalent assay method; methanol; water; impurities; temperature | Calibrated net loading scale/mass meter and actual tare/stock reconciliation. ISO2227 Sections4–8: clear/slightly cloudy25–45% HCHO; prompt sealed sampling, no precipitate; fresh neutral sulphite, weighed sample/sample neutralisation, covered handling,2min mixing and standardised acid endpoint. w_HCHO = 30.03 × c × V / (1000 × m_sample), c mol/L, V mL, m_sample g, with actual dilution/titer and demonstrated blank. Breitkreuz Section2.4.3:0.2g sample+1g dry methanol, condition≥24h, volumetric KF repeated≥2, weighed dilution/reagent blank corrections; validate comparable impurity matrix/time response. w_MeOH = 1 - w_HCHO - w_water_overall - sum(w_distinct_impurities), using independently measured distinct impurities; propagate uncertainty. Check phase coverage, interfering carbonyl/acid/redox constituents, recovery and dilution consistency. Never borrow the study’s omitted acid or numerical errors; unknown impurities/interferences prevent closure. Overall composition is not free-species mass; whole product remains1kg. | kg; mass fractions | Each delivery/lot; stock census at period ends | Same declared period, all relevant operating modes | Actual plant loading gate | per 1 kg reference flow | Calibration, signed acceptance, CoA/raw assay, stocks and mass closure |
| cp_material | formalin_train | Fresh methanol reaction and stabiliser inputs | Receipt, meter, stock and assay records | Supplier route/carbon origin; grade; delivered mass; purity/water; stage dosing; stock changes; internal recovery | Calibrated weighing or matched density/temperature volume-to-mass conversion; separate fresh reaction and finishing additions from internal returns; distinguish whole industrial methanol supply mass from its CH3OH component mass and accompanying water/impurities; reconcile the provider reference with the supplied basis | kg | Each receipt and dosing campaign; period-end reconciliation | Same declared period | Methanol receipt, vaporiser and finishing | per 1 kg reference flow | Supplier certificate, meter/scale calibration, stage balance |
| cp_catalyst | formalin_train | Fresh/regenerated silver charge | Weighing and service records | Crystalline grade; metal/contamination/water assay; installed/removed mass; stock; reclaimer return; service period | Calibrated charge/removal weighing and metal assays; link each actual regeneration shipment/return; distribute measured campaign use over production served without assuming lifetime or recovery | kg | Each charge/change/return; period reconciliation | Actual catalyst campaigns spanning the same declared production allocation | Actual catalyst bed and receiving service | per 1 kg reference flow | Charge log, assays, receiver/service receipts, stock closure |
| cp_water | formalin_train | External demineralised make-up | Water meter and quality records | Source; treatment grade; density; absorption/dilution/cleaning/boiler meter readings; composition water; recycles | Calibrated purpose meters with actual density/temperature when mass conversion is needed; identify carrier/reaction water separately | kg | Continuous or batch meters; period reconciliation | Same declared period | Supply and purpose boundaries | per 1 kg reference flow | Calibration, water-quality results and unallocated water balance |
| cp_energy | formalin_train | Electricity, imported/exported steam heat and natural gas | Separate meter and utility records | kWh; voltage/grid/location; gas m3/T/absolute P/wet-dry/composition/Z; heating basis; steam mass/P/T/dryness; condensate mass/enthalpy; own use; export; receiver basis | Separate calibrated electricity/fuel/steam/condensate meters with synchronised intervals. Collect actual absolute P (gauge plus measured ambient P), T, phase and wet quality x. Use IAPWS-IF97 valid regions for ordinary-water h(p,T), or h=(1-x)h_liquid+x h_vapour at saturation; P/T alone cannot establish x. Verify implementation against release test values/common datum and include state/meter uncertainty. For the actual mass-closed steam-to-condensate interface apply c_heat; unequal returns, non-returned condensate, make-up, drains, leaks, residual steam/storage require a complete mass/enthalpy-port account including material loss/work/kinetic/potential terms. Contaminated mixtures need separate thermodynamic qualification. Reconcile supplier/receiver accepted net heat with dedicated oxidiser/boiler; kg/state water and MJ service are different ledgers, counted once each, not NCV/GCV conversion. | MJ; m3; steam kg as raw records | Meter interval and each start-up/export; period reconciliation | Same declared period including abnormal operation | Actual utility supply, reactor heat recovery and dedicated boiler | per 1 kg reference flow | Meter calibration, fuel certificate, steam state/receiver evidence, full heat balance |
| cp_air | formalin_train | Fresh atmospheric resource input | Air meter and composition records | Fresh flow; recirculated flow; T/P/humidity/O2/N2; mass conversion; combustion air | Calibrated fresh-air flow and measured state/composition; retain recycled gas as internal link | kg | Meter interval; representative mode-specific composition | Same declared period | Fresh intake boundaries | per 1 kg reference flow | Calibration, gas state record and oxygen/carrier-gas balance |
| cp_emission | formalin_train | Each outdoor-air species and size fraction | Stack/fugitive sampling and operating records | Outlet; species/CAS; concentration; flow; time; T/P; wet-dry/O2 corrections; detection limits; recovery; control modes; leak/load events; NOx definition; size bins | Species-specific validated sampling/analysis and compatible gas flow after final controls; integrate actual operating modes and measured handling/LDAR releases. Carbonyl sampling/analysis must demonstrate matrix recovery; occupational concentration alone is not a plant release inventory | kg; gas volume as raw record | Representative tests for each operating mode plus continuous/event records where needed | Same period; include starts/stops, loading, relief and maintenance | Final stack, loading vents and actual fugitives | per 1 kg reference flow | Laboratory QA blanks/spikes, flow calibration, sampling recovery, leak/event log, uncertainty |
| cp_waste | formalin_train | Each external residual interface | Weighbridge, assay and receiver records | Stream/source; consignment; wet mass/volume/density; solids; Ag or organic fractions; actual pollutants; internal rework; recipient; treatment/product status | Calibrated weighing/volume measurement and representative composition tests; separate catalyst, paraformaldehyde deposits, aqueous waste and biological sludge; document receiver acceptance | kg; volume/density as raw records | Every shipment or discharge; period reconciliation | Same period including episodic cleaning | Actual external receiver interfaces | per 1 kg reference flow | Waste transfer receipts, assay/solids basis, receiver and treatment evidence |
| cp_effluent | formalin_train | Each final freshwater species and carrier water | Outfall flow and analytical records | Whole effluent volume/wet mass; measured carrier-water fraction/density/state; temperature; species/CAS; free/total HCHO definition; methanol; pH/formic acid/formate; COD/TOC; solids; treatment performance; recovery; detection limits | Calibrated final outfall flow with time-matched samples; matrix-validated free-carbonyl analysis, supplemented where needed for total HCHO-equivalent. Retain COD/TOC/salt diagnostics separately; track all measured additional species; preserve total effluent sampling volume separately from the verified water-constituent exchange | kg species; m3 water | Flow interval, representative mode-specific composites and every episodic discharge | Same declared period | Actual final surface-freshwater boundary only | per 1 kg reference flow | Laboratory QA/recovery/speciation, calibrated flow, destination and treatment logs |
| cp_allocation | formalin_train | Joint and dedicated environmental burdens | Stage/receiver/market records | Stage meters; dedicated/joint burden pools; accepted formalin; useful net steam; receiver function; physical relationship; actual prices/quantities; uncertainty | Investigate subdivision/expanded-system option first; verify causal relationship or gather comparable same-period gate revenue records; retain physical ledger separately | kg formalin; MJ useful heat; actual currency and unit prices | Same-period records; update when outputs/markets change | Same declared period | Declared joint stages and actual receivers | per 1 kg reference flow | Stage causality, functional/price evidence, rejected alternatives and sensitivity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_reference | all inventory rows | B = accepted net formalin supply mass for the period in kg; each measured period boundary quantity is divided by B. The reference product amount is 1 kg; all stage internal links retain both endpoints and are not additional boundary outputs. | cp_product; each row's linked protocol | Physical inventory per 1 kg reference flow | jrc-lvoc-2017, hexion-formalin |
| c_composition | out_formalin, in_methanol, w_aqueous | Constituent mass = measured supply/stream mass × measured mass fraction on the same basis. Report HCHO-equivalent, methanol, water and impurities separately; total HCHO-equivalent is not free gas mass or TOC. Use the measured overall water convention and derive methanol only after separately measured non-overlapping impurities; propagate all measurement uncertainty. This analytical ledger and true molecular-species ledger are alternatives, not additive physical outputs. No default assay or density. | cp_product; cp_material; cp_waste | Component ledger in kg, alongside full mixture mass | jrc-lvoc-2017, hexion-formalin, iso-formalin-assay-1972, breitkreuz-formalin-analysis-2023 |
| c_release | elementary outputs | Released species mass = sum over measured operating intervals of compatible species concentration × actual gas/liquid flow × time, after unit/state/recovery corrections; add independently measured event/fugitive releases without overlap. NOx and particle intervals must have verified compatible definitions. The whole sampled gas/liquid volume belongs to the concentration integration; its component water or air exchange is not another independent carrier mass. | cp_emission; cp_effluent | Actual released species kg; carrier water m3 separately | jrc-lvoc-2017, epa-carbonyl-8315a |
| c_heat | in_steam, out_steam | For a mass-closed steam-to-condensate service interval, Q_net = m × (h_supply - h_condensate) / 1000, with m in kg, h from iapws-if97-2012 in kJ/kg and Q_net in MJ. Integrate actual intervals. For unequal returns, include every documented water/steam port and storage change on a common enthalpy reference; a mass imbalance cannot be hidden in this formula. Reconcile gross generation = actual own use + useful export + measured losses and inventory change, with imports separate. Do not use a mass-to-MJ constant or assume the provider reference is net heat. | cp_energy | Separate imported/exported useful heat in MJ | jrc-lvoc-2017, iapws-if97-2012 |
| c_burden | burden_account | For each evidenced joint pool, product-assigned burden = dedicated product burden + joint burden × justified product share; divide by B for product reporting. Keep actual coproduct physical outputs unchanged and show shares summing to one; an expanded-system model is disclosed separately. | cp_allocation; cp_product; stage meters | Allocated formalin environmental-burden account | eu-ef-2021-allocation |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all rows | Verify name/CAS, route/state, origin, actual mixture composition, medium, reference property/unit and provider definition separately. A confirmed flow UUID is not a complete dataset; incompatible identity or quantity basis remains open. | Supplier/receiver declarations; direct identity and native property/unit chain; lab method |
| q_closure | physical_ledger | Close mass, water, carbon, hydrogen, oxygen and heat using measured stocks/returns; disclose residual and uncertainty without an invented tolerance, conversion, yield or concentration. Include atmospheric carriers and reaction water in the unallocated physical ledger. Reconcile molecular hydrogen production, internal combustion/recycle, residual emissions and any actual external recovery separately; add verified sale rows if an actual recovery crosses the boundary. Do not suppress an actual product to fit the minimum checklist. | Stage meters, independent assays and reconciliation |
| q_sources | all source-based rules | Retain each source's route and conditions. BREF historical/2013–2014 observations are not present-site values, universal ratios or default emissions. Hexion supports supply state only; EPA 8315A supports free-carbonyl analysis with matrix limits, not commercial total assay. ISO2227 supplies the industrial HCHO-equivalent procedure; the reactive-mixture study supplies overall-water analysis and composition convention; IAPWS supplies water/steam state properties. Their matrix, phase, time and validity limits remain binding, and reported research uncertainties are not universal acceptance thresholds. | Original locators and actual collection evidence |
| q_coverage | dataset | Every conditional row is measured, demonstrated absent or explicitly unresolved. Unknown is not zero. Add actual exchanges outside the minimum checklist, including actual products and recovered streams, and retain treatment/site/provider completeness and operating-mode representativeness. | Site flow diagram, monitoring/stock/receiver records and omissions register |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | dataset | Require one accepted out_formalin reference output at 1 kg full supply mixture; collect all qualifiers and actual assay/state. Internal same-solution staging is not another reference output. Reject a pure-HCHO, different mixture or excluded-route substitution. | jrc-lvoc-2017, hexion-formalin |
| v_measurement | all inventory rows | Require the same per 1 kg supply-mass denominator in inventory, collection and calculation; verify all unit conversions, steam state/provider bases and gas volume conventions. A missing utility UUID/provider alone does not invalidate the defined mass/state/enthalpy method, but the actual dataset link remains incomplete until quantity compatibility is verified. | jrc-lvoc-2017, iapws-if97-2012 |
| v_environment | elementary outputs | Check exact final media/species/origin/phase, carbonyl assay coverage, NOx definition and disjoint particle intervals. Exclude correction flows and avoid untreated/final or aggregate/species duplication. Retain actual biogenic CO2 in LCI if present, with a separate origin row. | jrc-lvoc-2017, epa-carbonyl-8315a |
| v_balances | physical_ledger, burden_account | Require unallocated physical closure, equal internal endpoints, separate external treatment interfaces and final nature releases, and transparent allocated joint pools. Physical coproduct outputs cannot be scaled by burden shares or netted away. | jrc-lvoc-2017, eu-ef-2021-allocation |
| v_gaps | dataset | A blank UUID retains one specific exchange and a review gap; resolve its identity/provider before a complete usable dataset. Preserve unresolved assays, unsupported monitoring/quantity bases and missing streams as incomplete findings. Candidate methodology and structural checks do not establish independent scientific approval. | jrc-lvoc-2017 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Composition- and route-compatible purchased formalin input, after complete foreground collection and independent review |
| allowed_use | The declared actual aqueous methanol-stabilised grade, silver high-conversion route, bulk gate and dedicated thermal-oxidiser/heat-recovery configuration |
| excluded_use | Section 1 exclusions; assuming 1 kg pure HCHO; other product concentrations/provider quantity bases; automatic steam displacement credits; claiming PEF compliance solely from the allocation hierarchy |
| required_metadata | All reference qualifiers; geography/time; process map; component and internal link ledger; provider/receiver references; operating modes; allocation method and shares |
| required_quality_disclosure | Measurement/assay/closure uncertainty; temporal and route representativeness; incomplete identity/provider links; additional/absent exchanges; historical source limitations; scientific and translation state |
| update_trigger | Product grade/composition, methanol origin/provider, catalyst form, process/control configuration, utility pressure/reference, waste receiver, treatment or allocation/market change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-lvoc-2017 | official_guidance | European Commission JRC, LVOC BREF 2017, JRC109279, DOI 10.2760/77304; [official original](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/JRC109279_LVOC_Bref.pdf), Chapter 6, printed pp.335–348 and 350–353 (PDF372–385,387,389–390), especially 6.2.2.1/Fig6.1, 6.3.1–6.3.5, 6.4.1.1.1, 6.4.1.3 and 6.4.2.1 | Silver-route decomposition, tail-gas control/heat recovery, solution/carrier-water distinction, measured final species, episodic wastewater/rework, catalyst/deposit streams and monitoring conditions. Other routes and historical plant quantities remain excluded from defaults. |
| hexion-formalin | literature | Hexion, [Formalin product original](https://www.hexion.com/products/formalin), “Confidence built into every delivery”, aqueous solution concentrations and tailored methanol inhibition; dated source snapshot 2026-10-13 | Producer evidence of aqueous supplied mixtures and actual grade diversity only; no process attribution or standard recipe. |
| epa-carbonyl-8315a | method_factor | US EPA, [Method 8315A, Revision1, December1996](https://www.epa.gov/sites/default/files/2015-07/documents/epa-8315a.pdf), Sections1–3, procedure1; aqueous/waste samples and Method0011 stack samples | Free-carbonyl HPLC/derivatisation scope, unfamiliar-matrix confirmation, method recovery/interference requirements. It does not establish total commercial formalin assay or a universal emissions factor. |
| eu-ef-2021-allocation | official_guidance | European Commission, [Recommendation (EU)2021/2279 AnnexesI–II](https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf), AnnexI Section4.5, PDF/printed pp.63–64 | General multifunctionality hierarchy and justification of causal/economic allocation only. Sector-specific exceptions and recycling formulas are not imported; no full PEF compliance claim. |
| iso-formalin-assay-1972 | method_factor | ISO2227:1972, Formaldehyde solutions for industrial use — Determination of formaldehyde content, Sections 1–9, printed pp.1–2; [publisher](https://www.iso.org/standard/7032.html), [complete method preview](https://cdn.standards.iteh.ai/samples/7032/c62779bef47d456f90f7fa483c8ad37e/ISO-2227-1972.pdf) | Industrial solution HCHO-equivalent mass-fraction assay, weighed sampling, neutral sulphite/acid titration; clear/slightly cloudy 25–45% applicability, precipitation and prompt-sampling limits. No pure-gas denominator or default factory composition. |
| breitkreuz-formalin-analysis-2023 | literature | Christian Frederik Breitkreuz, Thermodynamic Properties of Formaldehyde Solutions and Poly(oxymethylene) dimethyl ether (OME) Production, Scientific Report Series41, ISBN978-3-944433-34-9, 2023; [original](https://kluedo.ub.rptu.de/files/7238/_230413%2BOnline-Version-1.pdf), Sections2.3–2.4.3, AppendixA.1–A.2, printed pp.7–12,137–138 | Overall versus true-species convention, sulphite overall-HCHO assay, conditioned volumetric KF overall-water assay and ternary methanol closure. Phase, time, impurity and matrix limitations retained; no OME manufacture, equilibrium parameters, research uncertainty or ignored-acid assumption imported. |
| iapws-if97-2012 | method_factor | IAPWS R7-97(2012), Revised Release on the IAPWS Industrial Formulation1997 for the Thermodynamic Properties of Water and Steam; [official original](https://iapws.org/technical-guidance/release/IF97-Rev.download), Sections2–3,5–9,12, including Tables3/12/31 and saturation equations | Ordinary water/steam state enthalpy and validity/uncertainty reference for actual mass/state heat measurement. No utility pressure, dryness, provider quantity, calorific-value conversion or constant kg-to-MJ factor. |
