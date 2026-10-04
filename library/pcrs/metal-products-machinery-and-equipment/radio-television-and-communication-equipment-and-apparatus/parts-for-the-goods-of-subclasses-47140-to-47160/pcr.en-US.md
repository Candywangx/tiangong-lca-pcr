---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47140-to-47160
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Dedicated parts for electronic tubes, semiconductor devices and integrated circuits

## 1. Scope and Applicability

This methodology covers externally supplied, dedicated constituent parts for electronic valves/tubes, semiconductor devices including photosensitive/LED devices and mounted piezoelectric crystals, and electronic integrated circuits. Product identity requires a host-use drawing, part number, delivered state and evidence of independent supply. It includes tube electrodes, dispenser cathodes and getters; IC/device leadframes, package substrates and qualified package/feedthrough subassemblies. Functionality or an active surface does not itself exclude a part.

Exclude complete tubes, devices and ICs, generic raw wafers/stock, generic printed circuit boards and manufacturing/test equipment. An unmounted die or wafer is not automatically a part: review whether a completed semiconductor/IC function already exists. Incomplete functional elements remain eligible only with specific part-boundary evidence. Standalone glass envelopes/preforms may belong to a separate glass category; distinguish them from an accepted glass-metal electrical subassembly. Ambiguous glass, die, package substrate/printed circuit, interposer or resonator identities require individual classification and completion-state review, not scope deletion or assumed mapping. Dedicated host fit or SHINKO sale alone does not establish parts-category membership; a substrate that is independently a printed circuit follows its own category. Sources: unsd-cpc3-parts; unsd-cpc21-correspondence; census-semiconductor-state; shinko-package; saes-cathodes.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47140-to-47160 |
| classification_refs | CPC 3.0:47173 |
| covered_products | Dedicated parts for electronic tubes, semiconductor devices and integrated circuits |
| excluded_products | Completed host devices; generic stock; machinery; independently classified articles |
| representative_product | Drawing-defined accepted IC leadframe; other qualified part types use their own declared identity |
| production_route | Actual metal, laminate/ceramic, powder/getter/cathode or hermetic route with conditional surface operations |
| market_state | One independently supplied accepted part state at factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Dedicated parts for electronic tubes, semiconductor devices and integrated circuits |
| How much | 1 kg |
| How well | host product family and principal dedicated use; part number and drawing revision; delivered completion state; material grade and assay; geometry, finish and tolerances; electrical/thermal/vacuum requirements applicable to this part; accepted lot and count; net mass; make/buy route; supplier completed operations; site, period and gate |
| How long or cycle | One supply at manufacturing gate; no host service life or use-stage performance claim |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted drawing-defined dedicated electronic part |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | host product family and principal dedicated use; part number and drawing revision; delivered completion state; material grade and assay; geometry, finish and tolerances; electrical/thermal/vacuum requirements applicable to this part; accepted lot and count; net mass; make/buy route; supplier completed operations; site, period and gate |

D is the positive measured accepted net mass of the same drawing revision and delivered completion state for the reporting period. Exclude shipping carriers, rejected units, test consumables and packaging. Retained metallization, sealing glass and constituent subparts belong in D. One dataset never averages incompatible part identities by mass. A count-based order is converted using measured lot net mass and matched accepted count; no assumed per-part weight is allowed. Reference-product UUID must be resolved for the actual part before interoperable publication.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | final_product | Mass | kg | cp_final_product measures D on calibrated balance; normalize every attributable interval exchange by D. |
| count_crosscheck | final_product | Mass | kg | Record accepted count and measured mass for the identical lot/drawing/completion state. Divide lot net mass by its accepted count for order conversion; never use package gross mass or a different part revision. |
| species_basis | material and species mass balances | Mass | kg | Distinguish solution/powder/product mass from contained element; retain assay, moisture and active content for every balance term. Preserve electricity energy units; 1 kWh = 3.6 MJ. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received stock/powder/laminate/preform or dedicated purchased subpart; disclose completed supplier operations |
| starting_condition_role | Explicit supplier-to-foreground interface |
| product_classification_scope | Dedicated parts for electronic tubes, semiconductor devices and integrated circuits |
| recursive_input_rule | Purchased same-family parts carry upstream provider burdens once; internal transfers cancel, without deleting repeated processing consumption |
| upstream_dataset_requirement | Trace every feed and purchased utility to actual provider, state, geography/year and represented operations; unresolved links are gaps, never zero |
| disclosure | host product family and principal dedicated use; part number and drawing revision; delivered completion state; material grade and assay; geometry, finish and tolerances; electrical/thermal/vacuum requirements applicable to this part; accepted lot and count; net mass; make/buy route; supplier completed operations; site, period and gate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_make_buy | all processes | Create a make/buy matrix by part/BOM revision: purchased complete subpart includes embedded materials and supplier operations; in-house route instead collects actual constituent inputs and operations. Outsourced processing includes transport and provider service exactly once. | `shinko-package`; `saes-cathodes` |
| boundary_routes | all processes | Include actual forming, cleanroom/vacuum, deposition/plating, firing/sealing, rework, part acceptance and controls through gate. Semiconductor wafer fabrication is included only for a proven dedicated-part route or linked upstream provider, never forced onto all leadframes or tube parts. | `shinko-business`; `saes-metallurgy` |
| boundary_later_use | all processes | Host assembly, host operation, customer activation/firing and end of life are outside factory production unless actually performed to deliver the stated part. Disclose capital/maintenance and transport treatment. Add each actual omitted chemical, fuel, gas, waste and species as a separate atomic exchange before dataset completion. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receipt | Dedicated identity, make/buy and receipt | required | Trace each purchased subpart or raw feed through its drawing and supplier interface. | Foreground production | per 1 kg reference flow |
| metal_form | Metal forming and patterning | conditional | Actual leadframe/electrode/cap: stamping, etching, machining, drawing, cleaning and internal rework. | Foreground production | per 1 kg reference flow |
| substrate | Package substrate and insulating body | conditional | Actual organic multilayer or ceramic body: laminate or powder preparation, forming, drilling, patterning and firing; distinguish a purchased finished substrate. | Foreground production | per 1 kg reference flow |
| tube_part | Tube cathode, getter and sealed component | conditional | Actual electrode/getter powder forming, sintering, impregnation/coating, glass preform forming/annealing, glass-metal joining and vacuum preparation as applicable to delivered part. | Foreground production | per 1 kg reference flow |
| finish | Surface metallization, plating and joining | conditional | Only actual part-state operations: deposition, plating, rinse, drying, cure, braze or weld. Record recipe and abatement, not a universal wafer-fabrication chain. | Foreground production | per 1 kg reference flow |
| acceptance | Part acceptance and dispatch | required | Dimensional/finish, conductivity, continuity/insulation, hermeticity or emission tests specified for the part; segregate rejects, test consumption and packaging. | Foreground production | per 1 kg reference flow |
| utilities | Factory utilities and pollution controls | required | Attributable purchased energy, water loops, ventilation, vacuum, treatment and maintenance; reconcile shared meters. | Foreground production | per 1 kg reference flow |

### Process: Dedicated identity, make/buy and receipt (`receipt`)

#### Inputs

##### Product flows

###### Leadframe (`purchased_leadframe`)

Only externally purchased IC-packaging leadframe matching the declared drawing/material/finish. GLO product identity is not a site provider. Do not adopt a database suggested mass-share estimate or use this UUID for cathodes/substrates.

- Selected flow: Leadframe `7246f723-e925-4cb4-a861-02b5368fac6d`
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_purchased_leadframe
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_leadframe`
- Sources: `shinko-package`

###### Purchased fired alumina ceramic IC-package body (`purchased_alumina_body`)

Purchase path: supplier already provides forming/firing; add supplier burden and transport once, bypass only completed operations.

- Selected flow: Purchased fired alumina ceramic IC-package body
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_purchased_alumina_body
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_alumina_body`
- Sources: `shinko-business`

###### Purchased dispenser cathode for microwave tube (`purchased_cathode`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Purchased dispenser cathode for microwave tube
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_purchased_cathode
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_cathode`
- Sources: `saes-cathodes`

###### Alternating current (`receipt_electricity`)

Qualified example for China 1–35 kV consumption mix supplied to user only. Use actual region, voltage and year provider; other interfaces require another verified identity. Never substitute source-specific incinerator or biomass power.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collected attributable period quantity divided by D; cp_receipt_electricity
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_receipt_electricity`
- Sources: `shinko-business`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Metal forming and patterning (`metal_form`)

#### Inputs

##### Product flows

###### Copper alloy C19400 strip (`c19400_strip`)

Example concrete feed only when specified by the actual leadframe drawing; not a mandatory grade or proxy for Alloy42, nickel or molybdenum. Add each actual grade separately.

- Selected flow: Copper alloy C19400 strip
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_c19400_strip
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_c19400_strip`
- Sources: `shinko-business`

###### Iron-nickel Alloy42 strip (`alloy42_strip`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Iron-nickel Alloy42 strip
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_alloy42_strip
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_alloy42_strip`
- Sources: `shinko-business`

###### Nickel sheet for tube electrode (`nickel_sheet`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Nickel sheet for tube electrode
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_nickel_sheet
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_nickel_sheet`
- Sources: `shinko-business`

###### Ferric chloride aqueous etchant (`ferric_chloride`)

Ferric-chloride etch route only; declare solution concentration, dissolved copper/nickel loading and regeneration. Another etchant needs its own chemical row.

- Selected flow: Ferric chloride aqueous etchant
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_ferric_chloride
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ferric_chloride`
- Sources: `shinko-business`

###### Alternating current (`metal_form_electricity`)

Qualified example for China 1–35 kV consumption mix supplied to user only. Use actual region, voltage and year provider; other interfaces require another verified identity. Never substitute source-specific incinerator or biomass power.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collected attributable period quantity divided by D; cp_metal_form_electricity
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_metal_form_electricity`
- Sources: `shinko-business`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Copper-alloy C19400 stamping scrap (`metal_scrap`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Copper-alloy C19400 stamping scrap
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_metal_scrap
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_metal_scrap`
- Sources: `shinko-business`

##### Elementary flows

### Process: Package substrate and insulating body (`substrate`)

#### Inputs

##### Product flows

###### Alumina powder for ceramic package body (`alumina_powder`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Alumina powder for ceramic package body
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_alumina_powder
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_alumina_powder`
- Sources: `shinko-business`

###### Copper-clad epoxy glass laminate for IC package substrate (`epoxy_glass_laminate`)

Purchased laminate includes supplier copper/resin/glass production; in-house layup replaces it with separate actual copper foil, resin and reinforcement inputs. No duplicate embedded-material entries.

- Selected flow: Copper-clad epoxy glass laminate for IC package substrate
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_epoxy_glass_laminate
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_epoxy_glass_laminate`
- Sources: `shinko-business`

###### Copper foil for package substrate wiring (`copper_foil`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Copper foil for package substrate wiring
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_copper_foil
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_copper_foil`
- Sources: `shinko-business`

###### Epoxy resin for package substrate dielectric (`epoxy_resin`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Epoxy resin for package substrate dielectric
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_epoxy_resin
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_epoxy_resin`
- Sources: `shinko-business`

###### Alternating current (`substrate_electricity`)

Qualified example for China 1–35 kV consumption mix supplied to user only. Use actual region, voltage and year provider; other interfaces require another verified identity. Never substitute source-specific incinerator or biomass power.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collected attributable period quantity divided by D; cp_substrate_electricity
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_substrate_electricity`
- Sources: `shinko-business`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Tube cathode, getter and sealed component (`tube_part`)

#### Inputs

##### Product flows

###### Tungsten powder for porous cathode body (`tungsten_powder`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Tungsten powder for porous cathode body
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_tungsten_powder
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tungsten_powder`
- Sources: `saes-metallurgy`

###### Zirconium-vanadium-iron getter alloy powder (`getter_alloy`)

Only if actual getter formulation specifies this alloy; record constituent fractions and oxygen contamination; barium-based evaporative getter is a separate route and flow.

- Selected flow: Zirconium-vanadium-iron getter alloy powder
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_getter_alloy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_getter_alloy`
- Sources: `saes-metallurgy`

###### Barium-calcium aluminate cathode impregnant (`barium_aluminate`)

Only supplier-defined formulated impregnant in actual dispenser-cathode recipe; obtain assay, binder and batch composition rather than guessing stoichiometry.

- Selected flow: Barium-calcium aluminate cathode impregnant
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_barium_aluminate
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_barium_aluminate`
- Sources: `saes-metallurgy`

###### Borosilicate glass sealing preform (`glass_preform`)

Purchased preform for actual hermetic component; declare glass grade, expansion compatibility and supplier completed melting/forming. If made on site, replace with each actual batch ingredient and retain melt/anneal burdens. Standalone glass envelope is not automatically a mapped device part.

- Selected flow: Borosilicate glass sealing preform
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_glass_preform
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_glass_preform`
- Sources: `saes-metallurgy`

###### Iron-nickel-cobalt Kovar pin for hermetic feedthrough (`kovar_pin`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Iron-nickel-cobalt Kovar pin for hermetic feedthrough
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_kovar_pin
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_kovar_pin`
- Sources: `saes-metallurgy`

###### Alternating current (`tube_part_electricity`)

Qualified example for China 1–35 kV consumption mix supplied to user only. Use actual region, voltage and year provider; other interfaces require another verified identity. Never substitute source-specific incinerator or biomass power.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collected attributable period quantity divided by D; cp_tube_part_electricity
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_tube_part_electricity`
- Sources: `saes-metallurgy`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Surface metallization, plating and joining (`finish`)

#### Inputs

##### Product flows

###### Nickel sulfate aqueous plating solution (`nickel_sulfate`)

Only actual nickel plating; separate nickel salt, additives and anode when supplied separately; measure nickel species balance without equating solution mass with nickel.

- Selected flow: Nickel sulfate aqueous plating solution
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_nickel_sulfate
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_nickel_sulfate`
- Sources: `shinko-business`

###### Silver deposition target (`silver_target`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Silver deposition target
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_silver_target
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_silver_target`
- Sources: `shinko-business`

###### Hydrochloric acid aqueous cleaning solution (`hydrochloric_acid`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Hydrochloric acid aqueous cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_hydrochloric_acid
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_hydrochloric_acid`
- Sources: `shinko-business`

###### Isopropanol cleaning solvent (`isopropanol`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Isopropanol cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_isopropanol
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_isopropanol`
- Sources: `shinko-business`

###### Nitrogen process gas (`nitrogen`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Nitrogen process gas
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_nitrogen
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_nitrogen`
- Sources: `shinko-business`

###### Alternating current (`finish_electricity`)

Qualified example for China 1–35 kV consumption mix supplied to user only. Use actual region, voltage and year provider; other interfaces require another verified identity. Never substitute source-specific incinerator or biomass power.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collected attributable period quantity divided by D; cp_finish_electricity
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_electricity`
- Sources: `shinko-business`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Nickel-bearing plating sludge (`plating_sludge`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Nickel-bearing plating sludge
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_plating_sludge
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_plating_sludge`
- Sources: `shinko-business`

##### Elementary flows

###### Isopropanol to air (`ipa_air`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Isopropanol to air
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_ipa_air
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_ipa_air`
- Sources: `shinko-business`

### Process: Part acceptance and dispatch (`acceptance`)

#### Inputs

##### Product flows

###### Helium leak-test gas (`helium`)

Only actual hermetic part tests; include consumed gas and failed/destructively tested parts, not a fictitious complete-tube lifetime test.

- Selected flow: Helium leak-test gas
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_helium
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_helium`
- Sources: `shinko-business`

###### Polyethylene antistatic shipping bag (`polyethylene_bag`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Polyethylene antistatic shipping bag
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_polyethylene_bag
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_polyethylene_bag`
- Sources: `shinko-business`

###### Corrugated fibreboard shipping box (`corrugated_box`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Corrugated fibreboard shipping box
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_corrugated_box
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_corrugated_box`
- Sources: `shinko-business`

###### Alternating current (`acceptance_electricity`)

Qualified example for China 1–35 kV consumption mix supplied to user only. Use actual region, voltage and year provider; other interfaces require another verified identity. Never substitute source-specific incinerator or biomass power.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collected attributable period quantity divided by D; cp_acceptance_electricity
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance_electricity`
- Sources: `shinko-business`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted drawing-defined dedicated electronic part (`final_product`)

Bind this output to exactly one actual drawing-defined part identity and its actual delivered state in the concrete dataset. A leadframe, substrate, electrode/cathode, getter assembly or hermetic subassembly each requires its own verified reference identity. Split different part numbers/completion states into separate output rows and datasets; this row is not a material basket or a licence to use a leadframe UUID for the family.

- Selected flow: Accepted drawing-defined dedicated electronic part
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_final_product`
- Sources: `shinko-package`

##### Waste flows

##### Elementary flows

### Process: Factory utilities and pollution controls (`utilities`)

#### Inputs

##### Product flows

###### Alternating current (`utilities_electricity`)

Qualified example for China 1–35 kV consumption mix supplied to user only. Use actual region, voltage and year provider; other interfaces require another verified identity. Never substitute source-specific incinerator or biomass power.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collected attributable period quantity divided by D; cp_utilities_electricity
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities_electricity`
- Sources: `shinko-business`

###### Natural gas for furnace combustion (`natural_gas`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Natural gas for furnace combustion
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collected attributable period quantity divided by D; cp_natural_gas
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_natural_gas`
- Sources: `shinko-business`

###### Purchased process steam (`steam`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Purchased process steam
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collected attributable period quantity divided by D; cp_steam
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_steam`
- Sources: `shinko-business`

###### Purchased deionized process water (`water`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Purchased deionized process water
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_water
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `shinko-business`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Copper-bearing process wastewater to treatment (`wastewater`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Copper-bearing process wastewater to treatment
- Flow property / unit: Volume / m3
- Amount rule: Collected attributable period quantity divided by D; cp_wastewater
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: `shinko-business`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`co2_air`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_co2_air
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `shinko-business`

###### Nitrogen oxides, as NO2, to air (`nox_air`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Nitrogen oxides, as NO2, to air
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_nox_air
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_nox_air`
- Sources: `shinko-business`

###### Carbon monoxide to air (`co_air`)

Applicable only when present in the actual recipe/BOM; verify absence separately from unknown.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Collected attributable period quantity divided by D; cp_co_air
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co_air`
- Sources: `shinko-business`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | all processes | Separate dedicated lots/operations before allocation. Assign shared furnace, cleanroom, vacuum and treatment demand using measured machine occupancy/load, area-time or pollutant load that explains consumption; disclose causal basis and uncertainty. Avoid mass allocation between unrelated part technologies. |  |
| allocation_rework | all processes | Retain rejects, destructive tests and repeated processing in attributable inputs; only accepted net saleable parts enter D. Recovered metal/solvent is not a burden-free product or automatic avoided-production credit. Declare waste versus co-product status and chosen modelling convention without mixing them. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_purchased_leadframe | receipt | purchased_leadframe | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_purchased_alumina_body | receipt | purchased_alumina_body | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_purchased_cathode | receipt | purchased_cathode | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_c19400_strip | metal_form | c19400_strip | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_alloy42_strip | metal_form | alloy42_strip | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_nickel_sheet | metal_form | nickel_sheet | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_ferric_chloride | metal_form | ferric_chloride | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_alumina_powder | substrate | alumina_powder | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_epoxy_glass_laminate | substrate | epoxy_glass_laminate | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_copper_foil | substrate | copper_foil | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_epoxy_resin | substrate | epoxy_resin | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_tungsten_powder | tube_part | tungsten_powder | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_getter_alloy | tube_part | getter_alloy | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_barium_aluminate | tube_part | barium_aluminate | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_glass_preform | tube_part | glass_preform | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_kovar_pin | tube_part | kovar_pin | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_nickel_sulfate | finish | nickel_sulfate | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_silver_target | finish | silver_target | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_hydrochloric_acid | finish | hydrochloric_acid | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_isopropanol | finish | isopropanol | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_nitrogen | finish | nitrogen | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_helium | acceptance | helium | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_polyethylene_bag | acceptance | polyethylene_bag | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_corrugated_box | acceptance | corrugated_box | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh receipts, issue and return, reconcile opening/closing stocks and lot assay; record actual grade, state and provider. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_receipt_electricity | receipt | receipt_electricity | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Submeter actual operation, idle and rework consumption; reconcile total purchased electricity and allocate measured shared load once. Keep kWh record and convert exactly to MJ. | MJ | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_metal_form_electricity | metal_form | metal_form_electricity | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Submeter actual operation, idle and rework consumption; reconcile total purchased electricity and allocate measured shared load once. Keep kWh record and convert exactly to MJ. | MJ | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_substrate_electricity | substrate | substrate_electricity | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Submeter actual operation, idle and rework consumption; reconcile total purchased electricity and allocate measured shared load once. Keep kWh record and convert exactly to MJ. | MJ | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_tube_part_electricity | tube_part | tube_part_electricity | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Submeter actual operation, idle and rework consumption; reconcile total purchased electricity and allocate measured shared load once. Keep kWh record and convert exactly to MJ. | MJ | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_finish_electricity | finish | finish_electricity | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Submeter actual operation, idle and rework consumption; reconcile total purchased electricity and allocate measured shared load once. Keep kWh record and convert exactly to MJ. | MJ | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_acceptance_electricity | acceptance | acceptance_electricity | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Submeter actual operation, idle and rework consumption; reconcile total purchased electricity and allocate measured shared load once. Keep kWh record and convert exactly to MJ. | MJ | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_utilities_electricity | utilities | utilities_electricity | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Submeter actual operation, idle and rework consumption; reconcile total purchased electricity and allocate measured shared load once. Keep kWh record and convert exactly to MJ. | MJ | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_natural_gas | utilities | natural_gas | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Meter supplier volume at recorded conditions and use measured net calorific value; separate purchased heat from own furnace gas. | MJ | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_steam | utilities | steam | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Measure steam flow and inlet/return enthalpy; retain pressure, temperature and condensate return boundary. | MJ | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_water | utilities | water | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Meter fresh supply and separately record internal circulation, treatment and blowdown; do not multiply loop circulation as purchased demand. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_metal_scrap | metal_form | metal_scrap | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh external scrap by grade, oxidation/coating and destination; internal return cancels in site balance and retains reprocessing burdens. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_plating_sludge | finish | plating_sludge | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh wet sludge; measure dry solids and nickel assay on same moisture basis, destination and treatment. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_wastewater | utilities | wastewater | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Measure external treatment transfer volume and matched copper/chemical assays. If treated on site, record treatment inputs and residuals, then actual elementary discharges separately. | m3 | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_ipa_air | finish | ipa_air | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Species-specific exhaust/fugitive monitoring or validated solvent balance with recovered stocks and controls; do not turn total VOC into this species. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_co2_air | utilities | co2_air | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Use actual fuel carbon assays, oxidation and captured/other carbon streams or matched stack measurements; fossil carbon only. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_nox_air | utilities | nox_air | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Matched concentration, gas flow, operating hours and reporting species after controls; fuel carbon balance cannot establish NOx. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_co_air | utilities | co_air | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Matched species monitoring after controls; fuel carbon balance alone cannot establish CO. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |
| cp_final_product | acceptance | final_product | production_record | lot; drawing revision; completion state; amount; unit; assay/conditions; opening/closing stock; accepted net output D | Weigh accepted net parts on calibrated balance by drawing revision/lot; tare transport carrier/reel/packaging unless physically retained in sold part. Reconcile count and acceptance register. | kg | Each lot and meter interval | Matched representative reporting period with startup, idle, reject and rework coverage | Declared process and attributable shared services | per 1 kg reference flow | Calibration; assay; supplier interface; acceptance and stock reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | Divide each attributable interval exchange by matched positive accepted net output D; output reference is 1 kg. | D; interval quantity; applicable protocol | Exchange per 1 kg reference flow |  |
| count_conversion | final_product | Matched lot net mass / matched accepted count gives order conversion mass; do not use a catalog typical weight. | cp_final_product; count; drawing revision | Measured same-state count-to-mass relation |  |
| element_balance | metal_form; finish; tube_part | For each element: external input plus opening stock equals product retention plus external residues/emissions plus closing stock within measured uncertainty. Use every stream mass times its matched elemental assay; cancel paired internal transfers. For chemical species, include measured reaction consumption/formation and recovered stocks. | mass; matched assay; stocks; reaction; uncertainty | Reviewed elemental/species closure |  |
| energy_conversion | electricity rows | Multiply measured kWh by 3.6 for MJ; separate purchased utilities from in-house generation and allocate own generation fuel/control burdens once. | meter; unit; provider | MJ on declared supply interface |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | final_product | host product family and principal dedicated use; part number and drawing revision; delivered completion state; material grade and assay; geometry, finish and tolerances; electrical/thermal/vacuum requirements applicable to this part; accepted lot and count; net mass; make/buy route; supplier completed operations; site, period and gate | Order; drawing; host use; supplier catalogue; acceptance |
| completeness | all processes | Maintain finite route/flow checklist: applicable measured, applicable unknown, verified not_applicable. Unknown never equals zero; include actual gases, emissions, cleaning and treatment rows beyond examples. | Route traveller; BOM; meter; safety data; discharge audit |
| uncertainty | all exchanges | No universal yield, mass, energy, emissions, lifetime or GWP range is prescribed. Use actual foreground distributions and uncertainty; disclose missing empirical bounds. | Calibrated records and explicit gap register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_part | final_product | Confirm dedicated host/part use, drawing revision and delivered completion state. Review finished die/device and glass/equipment counterexamples individually; reject unresolved classification assumptions for a concrete dataset. | `unsd-cpc3-parts`; `census-semiconductor-state` |
| validate_denominator | all inventory rows | Require positive calibrated accepted D, identical reporting scope and per-kg basis in both languages; reconcile counts, test rejects, carrier tare and retained finish. |  |
| validate_balance | all processes | Check elemental/species/water/stock closure with documented measurement uncertainty; gross sludge or bath mass cannot equal contained metal. Retain reaction and internal-transfer evidence. CO and NOx require independent species evidence. |  |
| validate_provider | all exchanges | Verify product/waste/elementary type, specific identity, property/unit and provider interface; UUID name alone does not justify grade, mass share, geography or process burden. Unresolved actual-part UUID and missing empirical ranges remain disclosed publication gaps. |  |
| validate_route | all processes | Confirm every make/buy operation once, actual part-state tests and factory-only utilities; distinguish verified absence from zero measurement and unknown. A skipped applicable route or missing provider means incomplete data. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production package for one qualified dedicated part |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Supply of same declared part identity/state for host assembly |
| excluded_use | Unqualified category average; completed device production; host lifetime/use impact |
| required_metadata | host product family and principal dedicated use; part number and drawing revision; delivered completion state; material grade and assay; geometry, finish and tolerances; electrical/thermal/vacuum requirements applicable to this part; accepted lot and count; net mass; make/buy route; supplier completed operations; site, period and gate |
| required_quality_disclosure | Provider/UUID, range, route, balance and measurement gaps; source scope; conditional absences; allocation uncertainty |
| update_trigger | Drawing/material/state/route/provider change, measured yield or process-control change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-parts | official_guidance | UNSD CPC 3.0 Explanatory Notes, 30 June 2025, printed pages255–256, classes4714–4717. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; current detail https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/47173 | Current host titles and parts category; PDF and online record contain no detailed inclusion/exclusion prose for47173. |
| unsd-cpc21-correspondence | official_guidance | UNSD CPC 2.1, subclass 47173, correspondence to HS 2012/2017. https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/47173 | Historical parts-heading corroboration, HS854091/854099/854190/854290; not asserted to be a current CPC3 correspondence table. |
| census-semiconductor-state | official_guidance | US Census, Schedule B 2022, Chapter 85, notes and headings 8540–8542. https://www.census.gov/foreign-trade/schedules/b/2022/c85.html | Counterevidence: unmounted chips/dice/wafers can already be devices; standalone glass articles and manufacturing equipment require separate classification. Historical US schedule, not current legal advice. |
| shinko-package | extension_guidance | SHINKO, Semiconductor Package, product catalogue, undated. https://www.shinko.co.jp/english/product/package/ | Sold leadframe, package-substrate and hermetic component interfaces; IC assembly is distinct. |
| shinko-business | extension_guidance | SHINKO, Our Business, products and core technologies, undated. https://www.shinko.co.jp/english/corporate/business/ | Conditional stamping/etching, plating, multilayer, ceramic and sealing routes; chucks are equipment parts, not automatically device parts. No intensity, recipe or universal route inferred. |
| saes-cathodes | extension_guidance | SAES/Spectra-Mat, Thermal Management and Cathodes, undated. https://www.saesgetters.com/industrial-thermal-management-cathodes/ | Independent evidence for functional dispenser cathodes, getter and thermal components with several end uses; tube/semiconductor dedication must be documented. |
| saes-metallurgy | extension_guidance | SAES Industrial, metallurgy capabilities, undated. https://www.saesgetters.com/industrial/ | Conditional powder forming, sintering and alloy routes only; supplier capability does not establish a particular part recipe or firing schedule. |
