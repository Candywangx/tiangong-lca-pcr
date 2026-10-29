---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.railway-or-tramway-sleepers-cross-ties-of-wood-impregnated
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Coal-tar creosote pressure-impregnated solid wood railway sleepers

## 1. Scope and Applicability

This manufacturing methodology covers new solid wood railway or tramway sleepers pressure-impregnated with an identified coal-tar creosote mixture, delivered after documented draining and acceptance. The bounded route receives manufactured untreated sleeper blanks, performs any site seasoning and pre-treatment machining, pressure treatment, final vacuum/recovery and contained drip-pad storage, then releases the accepted product at the treating-plant gate. All stages form one foreground unit with independent stage records and one final product output. The wood species and treatment conditions remain product-specific [usda-wood-handbook-2021; epa-wood-preserving-1999].

This inventory covers electrically operated equipment and electric or externally supplied hot-water heating, with air seasoning, indirect kiln conditioning or Boulton conditioning when present. Live-steam conditioning, onsite fuel combustion, thermal oxidizers, onsite wastewater discharge, co-treatment with borates, added coal tar or petroleum diluent, other preservative systems, surface-only painting/dipping, laminated/composite ties, concrete/steel ties, used ties and in-service maintenance require a separate reviewed route extension. They cannot be represented by this bounded inventory without additional atomic exchanges and evidence. Electricity for resistance heating is recorded once, not also as purchased heat.

The unimpregnated blank is an input of a different state from the impregnated final product. A manufacturing mass declaration does not establish service life, a rail-transport service functional unit, replacement interval, or equivalence with another sleeper material. Installation, operation, in-service leaching and end-of-life lie outside this foreground unit; a downstream lifecycle study specifies them independently.

Preserve the declared wood species and whole solid-sawn impregnated sleeper. RailExim documents beech running-line sleepers and oak turnout/bridge members using one Type C creosote; Impregnatsiya 2000 documents actual Rueping/Lowry autoclave treatment. These primary industrial examples support the product form, single whole-preservative route and railway receiver function, not a default species, dimension, recipe, retention, service life or this plant's utility configuration. Their standard identifiers are specification qualifiers; this PCR does not claim to have read the paywalled standards. [railexim-sleepers; impregnacia-sleepers]

Each dataset selects the actual logged cycle: Rueping uses initial compressed air, filling at maintained air pressure, increased liquid pressure, liquid return and final vacuum; Lowry omits initial air pressurization and initial vacuum before filling; Bethell starts with vacuum and fills without breaking it before pressurization and return. Record any second Rueping cycle separately without producing another sleeper. Never average these pressure curves or relabel Figure15-5's initial vacuum as Rueping. Boulton is hot-oil vacuum conditioning, not a second formulation. Collect actual time, pressure, temperature, penetration and retention with the applicable buyer specification, without adopting handbook numbers. USDA describes some BMPs with final steaming: this no-live-steam inventory applies only where actual operations and specifications support omission; otherwise add the real steam/condensate and other exchanges through reviewed adaptation. [usda-wood-handbook-2021 15-8,15-15-17,15-22-23; epa-wood-preserving-1999 10.8.1]

Coal-tar creosote impregnation retains the solid wood article while introducing the actual whole oil mixture into its pores; seasoning/conditioning removes water and can also release organic constituents. USDA describes these oil preservatives as practically inert to wood, unlike reactive waterborne salt systems. Do not invent a stoichiometric curing reaction, generated water, a pure-PAH recipe or a fixed mixture composition. This qualitative description does not prove zero chemical change or zero loss at a plant: independently collect any actual degradation, emitted species, condensate, retained composition and rejects. Type C is an industrial example, not an assigned formulation for every dataset; supplier/SDS/assay and receiver records must identify the actual commercial mixture and acceptance state. [usda-wood-handbook-2021 15-8,15-17; epa-wood-preserving-1999 10.8.2; railexim-sleepers]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.railway-or-tramway-sleepers-cross-ties-of-wood-impregnated |
| classification_refs | CPC 3.0 31320; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | New solid wood sleepers, identified coal-tar creosote pressure route, contained recovery, no added diluent/co-treatment |
| excluded_products | Untreated sleepers; surface-only treatment; other preservative systems; composite ties; used ties; railway transport services |
| representative_product | One accepted product specification, wood species, dimensions, moisture state and formulation lot; no default species or retention |
| production_route | Received untreated blanks → seasoning/pre-machining → pressure impregnation → final vacuum/recovery → contained dripping/storage → acceptance |
| market_state | New impregnated sleeper at treating-plant gate after declared draining/storage; net mass includes retained preservative and residual water, excludes packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of the declared manufactured impregnated solid wood sleeper product |
| How much | 1 kg accepted net impregnated sleeper output |
| How well | Declared species, dimensions, grade, moisture state, formulation, retention basis and penetration acceptance; supplier/customer specification and edition recorded, no invented threshold |
| How long or cycle | One manufacturing and acceptance cycle; service duration not assigned |
| reference_flow_link | sleepers_out |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | wood species and origin; dimensions and grade; untreated blank delivery/conditioning state; moisture method and dry basis; actual mixture identity and batch/SDS/composition evidence; full/empty-cell route; treatment/conditioning/vacuum temperatures, pressures and times; penetration and retention test basis, analyte and sampled zone; net product mass/time; installed anti-splitting component material/grade/form/net mass or verified absence; drip-pad recovery and storage duration; heating supply; packaging exclusion; site, geography and period |

Wood material is a foreground mass-based physical locator whose formal Product record explicitly leaves species, product form, treatment, moisture, route and provider unspecified. Here the qualified reference is the whole impregnated sleeper, including retained creosote, residual water and actual installed anti-splitting components, excluding transport packaging. Positive physical evidence is the solid-sawn wood member that remains the structural sleeper through pressure impregnation and acceptance for railway use: USDA Ch.6/15 describes that article and oil-treatment sequence, and the industrial primary examples describe its manufacture, retained preservative treatment, end clamps and railway receiver function. Together with the native Product/Mass definition, this supports the qualified whole-article locator; a generic name or absence of an exclusion alone would not. Keep wood_in and sleepers_out as different physical states even when they share this UUID. This locator establishes no exact species, railway compliance, supplier/background match, quantity, recipe or lifetime. Declare every physical and release qualifier. A treatment service, Waste, Elementary flow, raw roundwood or individual preservative species cannot replace this Product reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use accepted net mass after declared draining/storage. Weigh on calibrated scales and subtract measured packaging tare. Maintain separate untreated wood, residual water and retained preservative estimates; do not convert from count using an invented mass. |
| denominator | all inventory rows | accepted net product mass | kg | Every exchange uses per 1 kg reference flow; collection totals for the same accepted lot are divided by its measured net output mass in kg. Count and wood volume are ancillary, not alternative inventory denominators. |
| retention_basis | creosote_in; sleepers_out | mixture mass; analyte mass; sampled wood volume | kg; m3 | Identify whether retention is gross solution uptake, net solution retention, total creosote mass or a named analyte in a specified assay zone. Record density/temperature and volume basis. Tank uptake cannot be equated to assay-zone kg/m3 or whole-product loading without measured conversion. |
| moisture_basis | wood_in; sleepers_out | wood water mass; oven-dry wood mass | kg | For untreated blanks only, use validated dry-basis moisture measurements. After oil impregnation, oven mass loss can include preservative volatiles; use a validated matrix-specific water assay and separate preservative measurement, never call all oven loss water. |
| energy_interface | electricity_in; heat_in | delivered electrical/thermal energy | MJ | Convert metered kWh to MJ using 3.6. The selected electricity database property is named Net calorific value but is its MJ energy interface, not combustion of electricity. Purchased hot-water heat requires the supplier boundary and measured supply/return enthalpy; do not infer net delivery from an MJ property alone. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Manufactured untreated solid wood sleeper blanks received at treating plant, with species, dimensions, moisture, upstream drying/machining and delivery recorded |
| starting_condition_role | boundary_input |
| product_classification_scope | CPC 31320 subset: new coal-tar creosote pressure-treated solid wood sleepers within the scoped utility/recovery route |
| recursive_input_rule | Purchased already-impregnated ties are not untreated blank inputs; reject this starting condition and review a distinct re-treatment route. Internal recovered solution is an internal circulation, not fresh purchase or coproduct. |
| upstream_dataset_requirement | Link received blanks, actual mixture, utilities, adsorbent and packaging to compatible upstream datasets. Document forestry, sawing, drying, transport and chemical manufacturing coverage; this unit alone is not a complete cradle-to-gate product system. |
| disclosure | Actual stage ownership, acceptance condition, storage duration, upstream processes included, outsourced wastewater treatment, recovered-liquid stocks, site-specific emissions and all excluded route changes |

Include incoming material handling, attributable site conditioning/machining, pumps/compressors, treatment/liquid tanks, final vacuum, drip pads, contained storage, pollution-control operation and dispatch packaging. Retain upstream transport coverage through delivered inputs; if missing, add a verified transport service in a reviewed extension. Do not count shipping packaging in product mass. Reusable cars, retorts and buildings are excluded from this operating unit and disclosed separately. Actual uncontained leaks require measured component-specific receiving-medium exchanges and review; a capture requirement does not prove zero emissions.

### Physical stages and source-stock inheritance

Map the actual forest/harvest source → sawmill sawing to solid sleeper stock → actual seasoning/kiln drying, sizing/adzing/boring/incising → actual hot-oil conditioning → selected pressure cycle → liquid return, condensation and vacuum → contained draining/storage → testing/release → finished custody and actual railway receiver. Declare site, ownership, period and material state per stage. Inherit supplier-completed forestry/sawing/drying/machining and transport once through the state-matched blank provider and its exchange-by-exchange vector. Collect only remaining onsite operations. A complete blank provider must not also receive a second roundwood-manufacture burden. Missing upstream coverage remains an explicit stage gap, not zero and not a complete lifecycle inferred from purchasing finished articles and packaging. [usda-wood-handbook-2021 Ch.6/13/15; wegland-sleepers]

Keep unallocated physical V independently of burden account A. For each stage or stock account and each source/form/phase/unit, opening + external_in + internal_in + actual_formation = closing + external_out + internal_out + actual_consumption. external_in/external_out cross the foreground unit boundary; internal_in/internal_out are the paired receiving/sending ends within that unit. Same-state store or stage transfers use internal_in/internal_out, not formation. Match both ends and vectors of every internal handoff; in whole-unit aggregation these paired internal transfers cancel. Track dry wood, water, whole preservative and independent constituent analyses, installed metal, each package, energy and each emission species separately. Each raw, WIP, new/old FG and reusable stock carries its original provider and exchange-by-exchange inherited burden vector b; a single carbon-footprint scalar is insufficient. Allocation fractions in A never multiply physical wood/water/preservative/coproduced mass or internal handoffs. actual_formation and actual_consumption pair a real change of tracked state with the corresponding withdrawal from the preceding state, never creation of conserved material mass or an extra addition on top of receipts. Do not also record that same state-conversion event as an internal transfer; when consolidating states, cancel its paired formation/consumption only on the independently reconciled conserved-material basis, retaining actual external losses and nonconserved species changes. Independently close dry wood, water, whole preservative and measured constituent partitions; machining and first acceptance create no wood mass.

B is first-accepted new net sleeper kg (firstQ) of the same species/configuration/state/route over the complete period, including new closing FG once. grossDispatch is actual external dispatch and is not firstQ: distinguish opening old FG, new production, purchased FG, same-article returns, scrapping and closing FG. Original Qc service and rework of the same article create no new B or second wood provider; carry the prior vector and add only newly measured service burdens. True external return needs the same item's previous outward event. Subdivide cohorts before attribution. Preserve failed Q0, idle, startup/shutdown, cleanup and storage quantities and burdens. Inseparable burdens remain an explicitly reviewed pool, not a success-only mean. For B=0 retain the pool without division or zero intensity.

Whole wood, whole commercial preservative and each wet mixed waste stream each connect once to their provider/receiving interface. Dry wood/water, preservative constituents and wet-waste solid/liquid analyses are partitions of the same physical flow, never additional input totals. Keep raw external preservative receipts and supplier-return legs separately from the net-use diagnostic opening tank + additions - returns - closing tank. Pumping, returned drips and reused bath throughput are internal circulation, not fresh manufacture. Independently measure retained loading, water, air species/phase, waste composition and heat. One residual cannot determine several unknowns. Unknown is not zero.

### Packaging receipts, custody and outward

For every actual component retain material, form/type, single-use/reusable role, direction, original amount/unit, receipt, owner/custodian, same-item id and prior exchange vector. P is actual purchased receipt, including bulk purchases without a separate package invoice. N_ext is true first external nonpurchase, including verified loan/rental, entrusted or nonpurchased accompanying packaging. ER is true same-item external return with a previous outward event. These entrances are exclusive. Internal reuse is none of them. An existing X explicitly defining a real new entrance may remain; changing letters or deleting duplicate OTHER creates no new receipt interface.

For each component/source/unit: opening_empty/raw/WIP/FG/reusable + P + N_ext + ER = closing_empty/raw/WIP/FG/reusable + each_actual_external_outward + waste. The listed stock states are disjoint physical custody locations; classify each item once at each instant. A reusable item already on raw/WIP/FG is not also counted in free reusable stock. Match internal issues/store returns at both ends. Retain incoming raw-material packaging, first external dunnage and dispatch packaging, not only issue losses. Every dispatch-with-goods, owner-return and waste leg has its own receiver, direction, quantity and prior vector, with receipt time, origin and cohort. Reconcile grossDispatch packaging tare separately from sleeper mass. Preserve gross transport on incoming, dispatch and return legs; never net return transport against outward transport. Where a reviewed extension requires tkm, convert the actual carried kg to tonnes once by dividing by 1,000, then multiply by that leg's actual km; reuse no invented distance or empty-leg mass. Manufacturing provider occurs once for the actual acquired/newly produced share; a whole supplied container/component must not also receive duplicate constituent manufacture. Loans and returns retain real prior vectors and new handling/cleaning burdens; no zero burden for missing invoices, new Q, infinite reuse count or avoided-production credit. Add one specific card for every actual additional film, paper, pallet or contaminated package; the conditional cards here do not proxy them.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| treatment | Integrated sleeper preparation, pressure impregnation, recovery and dispatch | required | Scoped new coal-tar creosote sleeper route | foreground_unit_process | 1 kg accepted net sleeper output; sleepers_out |

Retain the physical stage map received blanks → preparation → retort → vacuum → drip pad/storage → dispatch. Tank → retort → tank recirculation and drip pad → recovery tank are closed internal links, with equal measured amounts at both ends. Preserve this physical mass/water/carbon ledger separately from any allocated environmental burden ledger. No intermediate finished-product output repeats the final reference identity. Each card below is one actual atomic exchange; conditional cards require an explicit occurrence/absence decision and new actual materials or species require additional individually verified cards.

### Process: Integrated sleeper treatment (`treatment`)

#### Inputs

##### Product flows

###### Unimpregnated solid wood railway sleeper blank, at treating plant (`wood_in`)

Required manufactured blank; record wood species, dimensions, moisture and any upstream machining/seasoning, with net received mass. No roundwood substitution.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_wood.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### Alternating current (`electricity_in`)

This UUID admits only China user-side 1–35 kV grid-average AC. Verify geography, voltage, consumption mix and provider per meter. Meter preparation, pumps, compressors, vacuum, storage, controls and actual electric heat, including failed/idle/cleanup. Other geography/voltage requires a verified replacement identity; industrial examples do not establish supply compatibility.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value (electrical energy interface) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: This row's complete-period measured MJ, attributed using cp_stock including failed/idle/cleanup/storage burdens, divided by B; cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### Purchased hot-water heat delivered to sleeper conditioning and retort heating (`heat_in`)

Conditional external hot-water heating; measure net supply/return enthalpy energy at the declared supplier interface and reconcile the upstream heat definition. Do not also count electricity for this purchased heat in the foreground.

- Selected flow: Purchased hot-water heat delivered to sleeper conditioning and retort heating
- Flow property / unit: Net delivered thermal energy; supplier property identity unresolved / MJ
- Amount rule: This row's complete-period measured MJ, attributed using cp_stock including failed/idle/cleanup/storage burdens, divided by B; cp_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### Deionised water (`water_in`)

Conditional actual deionised make-up water for a utility loop; meter fresh supply, separately retaining recirculation. It is not dilution water for coal-tar creosote. Other actual water grades require their own exact input row.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### Coal-tar creosote wood-preservative commercial mixture (`creosote_in`)

Required actual commercial mixture; preserve supplier trade grade, lot, SDS, constituents/assay and process suitability. Collect opening/closing circulating tank stocks, fresh additions and external returns; total pumped circulation is not fresh input. One naphthalene/phenol/PAH flow cannot replace this mixture.

- Selected flow: Coal-tar creosote wood-preservative commercial mixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain actual external whole-formulation receipt kg using cp_solution, with cp_stock prior vectors/opening/closing; supplier returns are creosote_supplier_return and circulation is not receipt. Divide the amount attributable to this first-acceptance cohort by B; The separate stock-adjusted diagnostic is never a second input.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solution`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### Activated carbon (`carbon_in`)

Conditional fresh activated-carbon adsorption material; weigh the fresh charge, identify supplier grade/origin and capture stage, and reconcile replacement stocks. This is not the amount of captured PAH.

- Selected flow: Activated carbon `5cad53b5-252a-4e2f-8197-8be465707405`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### Steel packaging strap for sleeper dispatch (`strap_in`)

Actual steel strap only: record material/form/type, receipt direction, original amount/receipt/custody/owner/prior vector, including raw-material accompanying straps. Prove P, N_ext and ER separately. Bulk purchase without a separate strap invoice is P; internal store return adds no external receipt. Bind a UUID only after steel grade/manufacture/recycling match; product net mass excludes packaging.

- Selected flow: Steel packaging strap for sleeper dispatch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### Steel sleeper end anti-splitting clamp (`end_clamp_in`)

Conditional actual installed steel end clamp, as in impregnacia-sleepers; specify grade, component form and installation stage, weigh receipts and installed mass. It is a product component included in net sleeper mass, not transport strapping. Link whole-component manufacture once, without adding another steel provider.

- Selected flow: Steel sleeper end anti-splitting clamp
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this row's complete-period raw physical kg per receipt/outward leg and opening/closing vectors using cp_components and cp_stock; divide the amount attributable to the same first-acceptance cohort by B. Physical V does not take A shares; carry original Qc/old-stock vectors separately, without replacing B by purchases or dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`; `impregnacia-sleepers`


###### Untreated solid wood transport dunnage block (`dunnage_in`)

Only this actual discrete component, with species, geometry, untreated state and receipt/custody/owner/prior vector recorded. Separately measure P, N_ext and ER; first nonpurchase loan/rental/entrusted/accompanying receipt is N_ext. This card does not establish occurrence or cover a pallet, plastic block or treated block.

- Selected flow: Untreated solid wood transport dunnage block
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this row's complete-period raw physical kg per receipt/outward leg and opening/closing vectors using cp_packaging and cp_stock; divide the amount attributable to the same first-acceptance cohort by B. Physical V does not take A shares; carry original Qc/old-stock vectors separately, without replacing B by purchases or dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

#### Outputs

##### Product flows

###### Coal-tar creosote pressure-impregnated solid wood railway sleeper, at treating-plant gate (`sleepers_out`)

First-accepted new whole impregnated sleeper, qualified by net-mass time/species/geometry/preservative/water and installed components, excluding transport packaging. B includes new closing FG once; normalized output is 1 kg. cp_stock separately records grossDispatch, old FG and original Qc service, never added to this first-acceptance output as a second production total.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed reference (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_product`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### Steel packaging strap leaving the site (`strap_out`)

The same actual strap form as strap_in, with dispatch-with-product and owner-return legs separately measured and receipted. Retain direction, receiver and prior vector per leg. It is neither new strap manufacture nor a second sleeper output.

- Selected flow: Steel packaging strap leaving the site
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this row's complete-period raw physical kg per receipt/outward leg and opening/closing vectors using cp_packaging and cp_stock; divide the amount attributable to the same first-acceptance cohort by B. Physical V does not take A shares; carry original Qc/old-stock vectors separately, without replacing B by purchases or dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`


###### Untreated solid wood transport dunnage block leaving the site (`dunnage_out`)

Usable same-form blocks actually dispatched or returned to their owner; measure each leg, carry original vectors and reconcile custody stocks. Internal reuse is not outward. No new sleeper Q or avoided-production credit.

- Selected flow: Untreated solid wood transport dunnage block leaving the site
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this row's complete-period raw physical kg per receipt/outward leg and opening/closing vectors using cp_packaging and cp_stock; divide the amount attributable to the same first-acceptance cohort by B. Physical V does not take A shares; carry original Qc/old-stock vectors separately, without replacing B by purchases or dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`


###### Coal-tar creosote commercial preservative returned to supplier (`creosote_supplier_return`)

Conditional actual usable whole-formulation return at supplier interface, separate from tank recirculation and spent liquid waste. Preserve supplier receipt, whole-mixture grade/composition and original vector; no substitution credit or negative extra manufacturing input.

- Selected flow: Coal-tar creosote commercial preservative returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this row's complete-period raw physical kg per receipt/outward leg and opening/closing vectors using cp_solution and cp_stock; divide the amount attributable to the same first-acceptance cohort by B. Physical V does not take A shares; carry original Qc/old-stock vectors separately, without replacing B by purchases or dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solution`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

##### Waste flows

###### sawdust waste (`sawdust_out`)

Conditional untreated sawdust collected from pre-treatment machining and sent for external combustion/recovery; segregate from treated dust, never count captured dust as an air emission.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### Untreated solid wood sleeper offcut waste (`offcuts_out`)

Conditional segregated untreated solid wood offcuts leaving for waste handling; weigh each consignment and record moisture and destination. If sold as an actual coproduct, revise its flow type and verified identity and retain the unallocated physical mass.

- Selected flow: Untreated solid wood sleeper offcut waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### Coal-tar creosote-treated solid wood sleeper reject waste (`rejects_out`)

Conditional treated rejects leaving the unit; retain wood/moisture/preservative loading and destination. Do not route as clean sawdust or assign untreated-wood treatment identity. Internal rework is retained in the unit ledger and is not an external waste output.

- Selected flow: Coal-tar creosote-treated solid wood sleeper reject waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### Creosote-contaminated process wastewater sent for external treatment (`effluent_out`)

Conditional collected condensate, drip-pad water or utility blowdown forming one segregated wastewater stream; measure wet mass, contaminants and receiver. Captured water sent offsite is waste, not direct emission to water.

- Selected flow: Creosote-contaminated process wastewater sent for external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### Creosote retort and recovery-tank sludge waste (`sludge_out`)

Conditional physically segregated sludge; weigh wet sludge and determine water, dry solids and preservative loading separately. It is not an assumed petroleum-refinery oil sludge.

- Selected flow: Creosote retort and recovery-tank sludge waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### spent activated carbon (`carbon_waste_out`)

Conditional spent adsorption carbon sent for external treatment/regeneration; measure carbon plus contaminant mass and moisture with replacement timing. Captured PAH remains here and is not also emitted to air.

- Selected flow: spent activated carbon `aff33890-3f08-40f9-9310-a7f77213de05`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### Spent coal-tar creosote preservative liquid waste (`creosote_waste_out`)

Conditional unreusable treatment liquid removed from the circulating stock for external waste handling; record mass, actual composition and destination. Recoverable drips returned to the same system are internal circulation, not waste.

- Selected flow: Spent coal-tar creosote preservative liquid waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### Waste steel packaging strap (`strap_waste_out`)

Actual unpacked, damaged or failed-issue steel straps externally consigned. Include incoming-material straps and cleanup; record contamination, wet/net kg, receiver and prior vector per leg. Creosote-contaminated strap cannot use a clean-scrap identity.

- Selected flow: Waste steel packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this row's complete-period raw physical kg per receipt/outward leg and opening/closing vectors using cp_packaging and cp_stock; divide the amount attributable to the same first-acceptance cohort by B. Physical V does not take A shares; carry original Qc/old-stock vectors separately, without replacing B by purchases or dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`


###### Waste untreated solid wood transport dunnage block (`dunnage_waste_out`)

Only actual externally consigned uncontaminated waste blocks; weigh moisture-state-matched mass and preserve destination/prior vector. Contaminated, composite or treated material requires a separate actual waste identity. Do not classify internal reuse as waste.

- Selected flow: Waste untreated solid wood transport dunnage block
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this row's complete-period raw physical kg per receipt/outward leg and opening/closing vectors using cp_packaging and cp_stock; divide the amount attributable to the same first-acceptance cohort by B. Physical V does not take A shares; carry original Qc/old-stock vectors separately, without replacing B by purchases or dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`


###### Steel scrap from sleeper end anti-splitting clamps (`end_clamp_scrap_out`)

Actual installation trimming or damaged-clamp scrap sent outside; declare grade/form and inherited vector. Installed clamp mass remains in the product and is not this waste. Exclude internal rework.

- Selected flow: Steel scrap from sleeper end anti-splitting clamps
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain this row's complete-period raw physical kg per receipt/outward leg and opening/closing vectors using cp_components and cp_stock; divide the amount attributable to the same first-acceptance cohort by B. Physical V does not take A shares; carry original Qc/old-stock vectors separately, without replacing B by purchases or dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`; `impregnacia-sleepers`

##### Elementary flows

###### water vapour (`vapour_air`)

Conditional net water vapour leaving conditioning/storage to outdoor air; reconcile wood moisture, captured condensate and utility water. Do not include condensed collected wastewater in this emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### particles (PM2.5) (`pm25_air`)

Conditional residual particulate emissions with diameter ≤2.5 µm after control; use measured source-specific size fractions, not captured dust.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### particles (PM2.5 - PM10) (`pmcoarse_air`)

Conditional residual particulate emissions with diameter >2.5 and ≤10 µm; this is an exclusive interval, not total PM10.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### particles (> PM10) (`pmover10_air`)

Conditional residual particulate emissions with diameter >10 µm; reconcile non-overlapping size fractions and exclude all ≤10 µm material.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### acenaphthene (`acenaphthene_air`)

Screen this exact chemical species in vacuum/tank vents, hot-charge unloading and contained storage. Quantify measured residual release to outdoor air after capture; retain phase, sampling, detection limits and source coverage. No emission factor or whole-mixture substitution is assigned.

- Selected flow: acenaphthene `08a91e70-3ddc-11dd-9a04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### acenaphthylene (`acenaphthylene_air`)

Screen this exact chemical species in vacuum/tank vents, hot-charge unloading and contained storage. Quantify measured residual release to outdoor air after capture; retain phase, sampling, detection limits and source coverage. No emission factor or whole-mixture substitution is assigned.

- Selected flow: acenaphthylene `fe0acd60-3ddc-11dd-ad00-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### anthracene (`anthracene_air`)

Screen this exact chemical species in vacuum/tank vents, hot-charge unloading and contained storage. Quantify measured residual release to outdoor air after capture; retain phase, sampling, detection limits and source coverage. No emission factor or whole-mixture substitution is assigned.

- Selected flow: anthracene `fe0acd60-3ddc-11dd-a300-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### benzo[a]anthracene (`benzo_a_anthracene_air`)

Screen this exact chemical species in vacuum/tank vents, hot-charge unloading and contained storage. Quantify measured residual release to outdoor air after capture; retain phase, sampling, detection limits and source coverage. No emission factor or whole-mixture substitution is assigned.

- Selected flow: benzo[a]anthracene `fe0acd60-3ddc-11dd-a2b0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### benzo[b]fluoranthene (`benzo_b_fluoranthene_air`)

Screen this exact chemical species in vacuum/tank vents, hot-charge unloading and contained storage. Quantify measured residual release to outdoor air after capture; retain phase, sampling, detection limits and source coverage. No emission factor or whole-mixture substitution is assigned.

- Selected flow: benzo[b]fluoranthene `fe0acd60-3ddc-11dd-b0de-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### benzo[k]fluoranthene (`benzo_k_fluoranthene_air`)

Screen this exact chemical species in vacuum/tank vents, hot-charge unloading and contained storage. Quantify measured residual release to outdoor air after capture; retain phase, sampling, detection limits and source coverage. No emission factor or whole-mixture substitution is assigned.

- Selected flow: benzo[k]fluoranthene `4d9a8790-3ddd-11dd-94a1-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### benzo[a]pyrene (`benzo_a_pyrene_air`)

Screen this exact chemical species in vacuum/tank vents, hot-charge unloading and contained storage. Quantify measured residual release to outdoor air after capture; retain phase, sampling, detection limits and source coverage. No emission factor or whole-mixture substitution is assigned.

- Selected flow: benzo[a]pyrene `08a91e70-3ddc-11dd-9221-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### carbazole (`carbazole_air`)

Screen this exact chemical species in vacuum/tank vents, hot-charge unloading and contained storage. Quantify measured residual release to outdoor air after capture; retain phase, sampling, detection limits and source coverage. No emission factor or whole-mixture substitution is assigned.

- Selected flow: carbazole `fe0acd60-3ddc-11dd-9fd3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### Chrysene, CAS 218-01-9 (`chrysene_air`)

Screen this exact chemical species in vacuum/tank vents, hot-charge unloading and contained storage. Quantify measured residual release to outdoor air after capture; retain phase, sampling, detection limits and source coverage. No emission factor or whole-mixture substitution is assigned.

- Selected flow: chrysene `fe0acd60-3ddc-11dd-a7b1-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### dibenzofuran (`dibenzofuran_air`)

Screen this exact chemical species in vacuum/tank vents, hot-charge unloading and contained storage. Quantify measured residual release to outdoor air after capture; retain phase, sampling, detection limits and source coverage. No emission factor or whole-mixture substitution is assigned.

- Selected flow: dibenzofuran `8f295189-36e1-4748-b1b2-52ddacea58c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### fluoranthene (`fluoranthene_air`)

Screen this exact chemical species in vacuum/tank vents, hot-charge unloading and contained storage. Quantify measured residual release to outdoor air after capture; retain phase, sampling, detection limits and source coverage. No emission factor or whole-mixture substitution is assigned.

- Selected flow: fluoranthene `fe0acd60-3ddc-11dd-9ee1-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### fluorene (`fluorene_air`)

Screen this exact chemical species in vacuum/tank vents, hot-charge unloading and contained storage. Quantify measured residual release to outdoor air after capture; retain phase, sampling, detection limits and source coverage. No emission factor or whole-mixture substitution is assigned.

- Selected flow: fluorene `fe0acd60-3ddc-11dd-a5e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### naphthalene (`naphthalene_air`)

Screen this exact chemical species in vacuum/tank vents, hot-charge unloading and contained storage. Quantify measured residual release to outdoor air after capture; retain phase, sampling, detection limits and source coverage. No emission factor or whole-mixture substitution is assigned.

- Selected flow: naphthalene `fe0acd60-3ddc-11dd-a682-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### phenanthrene (`phenanthrene_air`)

Screen this exact chemical species in vacuum/tank vents, hot-charge unloading and contained storage. Quantify measured residual release to outdoor air after capture; retain phase, sampling, detection limits and source coverage. No emission factor or whole-mixture substitution is assigned.

- Selected flow: phenanthrene `fe0acd60-3ddc-11dd-9fdc-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

###### pyrene (`pyrene_air`)

Screen this exact chemical species in vacuum/tank vents, hot-charge unloading and contained storage. Quantify measured residual release to outdoor air after capture; retain phase, sampling, detection limits and source coverage. No emission factor or whole-mixture substitution is assigned.

- Selected flow: pyrene `4d9a8790-3ddd-11dd-9a3c-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: This row's complete-period raw measured kg, attributed by source/stock/cohort using cp_stock, divided by B; physical V does not take A shares; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `usda-wood-handbook-2021`; `epa-wood-preserving-1999`

## 7. Allocation and Co-product Handling

This bounded unit normally has one accepted product and separately handled wastes. Preserve original units and integrate actual rates over their measured time/scope once before conversion or attribution. Subdivide unrelated production and trace actual lots first; allocate shared utilities by metered causal use (retort cycle, measured heating duty or machine operation), with the physical basis recorded for each exchange. Waste handling is attributable to the producing lot; no avoided-disposal or energy credit is assumed. Internal recovered preservative is not a coproduct and earns no replacement credit.

Keep the unallocated physical process ledger intact: received wood, product, offcuts, rejects, moisture, retained preservative, stocks and internal transfers. Environmental burdens may be allocated only in a separate account after subdivision. Never multiply physical coproduct output mass or both sides of an internal link by a burden allocation fraction. If saleable clean wood coproducts or mixed product campaigns occur, revise flow classification and separately review the causal/economic allocation and sensitivity; do not silently relabel a waste or impose a default fraction. Economic allocation may address only the evidenced inseparable residual shared by the same coproduct family after actual subdivision and exchange-specific causal attribution, using contemporaneous measured quantities and actual prices/revenues on the same basis. Record that residual, prices, period and sensitivity; unknown prices or causal scope remain unresolved. Carry inherited exchange vectors and new attributed burdens into A for the same cohort, then divide by its B once. Original Qc service, rework and re-delivery inherit their prior vector and acquire only actual new service burdens, without a second product denominator. These are foreground collection rules, not transferred lumber-survey yields or allocation percentages.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Raw collection retains batch/charge/period totals; the aggregation column states the final reporting basis. Apply lot_normalization to measured exchange totals and solution_balance independently to inventory-adjusted mixture use, always using B from cp_product. Preserve raw stage totals and balance accounts separately. All selected elementary UUIDs are emissions to outdoor air, unspecified submedium; specific actual local release heights/locations require a matching reviewed identity.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | treatment | accepted product | foreground_record | lot_id; species; grade; count; measured dimensions; pretreatment and final solid volume; gross_mass; packaging_tare; accepted_net_mass; weighing time; draining/storage hours; retention assay/analyte/zone; residual water | Calibrated gross-minus-tare weighing after specified drain/storage; traceable dimensions and penetration/retention assay. Record each measured volume state and water method; same accepted lot throughout. | kg; m3; h | each accepted lot | Same declared production/inventory period including storage and downtime | Declared treating plant and accepted lots | per 1 kg reference flow | Calibrations; supplier/lot records; QA tests; balances; uncertainty; coverage |
| cp_wood | treatment | received blank | foreground_record | lot_id; species; blank_mass; blank_volume_state; moisture_dry_basis; oven_dry_wood_mass; upstream machining/drying; rejects/offcuts | Weigh received manufactured blanks; measure dimensions/moisture before impregnation by a validated untreated-wood method; identify matching upstream supplied state. | kg; m3 | each received/processed lot | Same declared production/inventory period including storage and downtime | Declared treating plant and accepted lots | per 1 kg reference flow | Calibrations; supplier/lot records; QA tests; balances; uncertainty; coverage |
| cp_solution | treatment | actual mixture and circulating stock | foreground_record | trade_grade; supplier; lot; SDS; constituent assay; composition completeness; density_temperature; opening_stock; closing_stock; fresh_added; supplier_return; tank_to_retort; retort_return; captured_drips; recovered_reuse; waste_liquid; sludge_load; retained_load; emitted_species | Calibrated weighing or tank levels with actual density at recorded temperature. Follow charge and recovery tank logs; independently reconcile inventory-adjusted net consumption, retention assays and waste/emission loads. Audit the real mixture identity against supplier grade and pressure process. | kg; m3; degC | every charge and inventory-period boundary | Same declared production/inventory period including storage and downtime | Declared treating plant and accepted lots | per 1 kg reference flow | Calibrations; supplier/lot records; QA tests; balances; uncertainty; coverage |
| cp_utilities | treatment | electricity, water, carbon and strap records kept separately | foreground_record | lot_id; stage; utility/material identity; meter_start/end; delivered_voltage; fresh_quantity; inventory_start/end; purchase; issued_mass; recovered/reused; calibration; supplier grade | Meter electricity and water separately; weigh adsorbent and packaging independently. Reconcile stocks and attributable stages; distinguish internal recirculation from purchased resources. | MJ; kg | each lot or attributable period | Same declared production/inventory period including storage and downtime | Declared treating plant and accepted lots | per 1 kg reference flow | Calibrations; supplier/lot records; QA tests; balances; uncertainty; coverage |
| cp_heat | treatment | external hot-water heat | foreground_record | supplier_boundary; matched_background; heat_meter; supply_return_mass; temperatures; pressures; enthalpies; losses_included; lot_id | Use calibrated net heat meter or water mass and supply/return enthalpies; obtain supplier definition of net energy delivery and included losses. Unknown basis remains unresolved. | MJ; kg; degC | each lot or attributable period | Same declared production/inventory period including storage and downtime | Declared treating plant and accepted lots | per 1 kg reference flow | Calibrations; supplier/lot records; QA tests; balances; uncertainty; coverage |
| cp_waste | treatment | each segregated waste stream | foreground_record | stream_id; lot_id; wet_mass; dry_solids; water; mixture/constituent_loading; before_after_treatment_state; internal_rework; receiver; destination; manifest | Weigh each segregated consignment and sample moisture/contaminant loading; reconcile waste liquid, sludge, treated rejects and spent carbon separately against stocks and captured mass. | kg | each consignment and lot attribution | Same declared production/inventory period including storage and downtime | Declared treating plant and accepted lots | per 1 kg reference flow | Calibrations; supplier/lot records; QA tests; balances; uncertainty; coverage |
| cp_air | treatment | each emission species and size interval | foreground_record | species; CAS; source; stage; sample_phase; gas_flow; concentration; test_duration; operation_hours; capture_fraction; outlet_mass; detection_limit; non_detects; size_interval; outdoor_medium | Source-specific residual-outlet and fugitive measurements for conditioning, vacuum/tank vents, unloading and storage; use representative operating logs with qualified laboratory species/size methods. Include vapour/aerosol phases as applicable; avoid overlapping sources and total VOC. Record uncertainty and uncovered sources, not assumed zeros. | kg; concentration; gas volume; h | representative tests plus each lot operating logs | Same declared production/inventory period including storage and downtime | Declared treating plant and accepted lots | per 1 kg reference flow | Calibrations; supplier/lot records; QA tests; balances; uncertainty; coverage |
| cp_stock | treatment | Per-atomic-row source/stock vectors | foreground_record | period;lot;SKU;stage;row_id;flow_type;original_amount/unit/form/phase;receipt/outward_time;provider_and_exchange_b;opening/closing_raw/WIP/newFG/oldFG/reusable;firstQ;grossDispatch;original_Qc;Q0;return_prior_outward;idle;cleanup;A_attribution_pool | Trace calibrated measurements and receipt/custody/operation/acceptance records per cohort; inventory stocks and carry original provider exchange vectors to the next period. Internal ends have equal amounts/vectors. Keep V and A separate; unknown is not zero. | original row units;kg;MJ | each exchange and opening/closing/first acceptance | Complete same period including failure/idle/cleanup/storage | Same species/configuration/state/route and supply chain | per 1 kg reference flow | Calibration, receipts, counts, original provider vectors, event chain and attribution evidence |
| cp_packaging | treatment | Each specific package receipt and every outward leg | foreground_record | material/form/type;single-use/reusable;direction;item_id;original_amount/unit;receipt;owner/custodian;priorvector;P;N_ext;ER;prior_outward;opening/closing_empty/raw/WIP/FG/reusable;issue/store_return;grossdispatch;externaloutward;waste;contamination;receiver | Weigh each component; reconcile actual purchase/loan/rental/entrusted/accompanying receipts and custody. Separately prove first nonpurchase receipts and same-item returns; close each leg vector and stock counts without invented cycles or credits. | kg;count is a check only | each receipt/internal transfer/outward/count | Complete same period including unpacking/failure/storage/cleanup | Receiving yard/store/process/FG and external owners | per 1 kg reference flow | Receipts, same-item outward/return, scales, ownership/custody, prior vector and physical closure |
| cp_components | treatment | Actual anti-splitting clamp and separate scrap | foreground_record | steel_grade;component_form;supplier_receipt;weighed_mass;opening;closing;installed;trimmed/damaged_scrap;lot;priorvector;installation_stage | Weigh individual components and reconcile installation logs. Installed mass enters product net mass; scrap has an independent destination. Whole-component provider occurs once. Actual absence needs evidence. | kg | each receipt/installation/waste consignment/count | Same new-production period | Actual sleeper and installation stage | per 1 kg reference flow | Installation bill, supplier, scales and outward receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| net_output | sleepers_out | B = complete-period first-accepted new whole-sleeper gross mass - measured transport packaging tare, including water/retained preservative/installed components. cp_stock excludes original Qc/purchased FG/same-item repeated acceptance and includes closing_new_FG once. Normalize only for B>0; retain pools for B=0. | cp_product | B | usda-wood-handbook-2021 |
| lot_normalization | all inventory rows | Normalized exchange = attributable measured lot total / B; B is accepted net impregnated sleeper kg of the same lot. Final product output = B / B = 1 kg. Do not normalize by untreated dry kg, total produced rejects, count or assay-zone volume. | cp_product; cp_wood; cp_solution; cp_utilities; cp_heat; cp_waste; cp_air | exchange unit per kg reference flow | usda-wood-handbook-2021 |
| solution_balance | creosote_in | Net-use diagnostic = opening circulating stock + actual external additions - actual supplier returns - closing circulating stock; preserve raw receipt/return legs and prior vectors separately; the diagnostic is not a second inventory input. Reconcile with mixture retained in accepted wood, treated rejects, exported spent liquid, sludge and adsorbent load, individual emissions and unexplained difference. Retort returns and reused drips cancel internally; do not add total pumping to fresh consumption. Match the same stock period and accepted lots. | cp_solution; cp_product; cp_waste; cp_air | actual mixture kg per kg reference flow | usda-wood-handbook-2021; epa-wood-preserving-1999 |
| retention_conversion | creosote_in; sleepers_out | For whole-product total-mixture retention only: retained_mixture_kg = R_pre × V_pre or R_post × V_post, using the corresponding measured solid wood volume before or after treatment in m3 and retention in mixture kg/m3. Normalize retained_mixture_kg / B. A named active/analyte mass uses its own measured mass fraction and stated dry/wet wood basis; sampled-zone retention cannot be extrapolated to the whole tie without independently justified representative-volume and composition conversion. | cp_solution; cp_product | retained mixture or named analyte kg per kg reference flow | usda-wood-handbook-2021 |
| heat_balance | heat_in | At the declared supplier interface, determine net thermal service from separately integrated delivered hot-water mass times supply specific enthalpy minus separately integrated returned-water mass times return specific enthalpy, in consistent units. Reconcile every actual other carrier-water inlet/outlet, leakage, loss and thermal storage change on that same boundary and time interval before calling the result delivered net heat; unresolved carrier balance or enthalpy leaves the result unresolved. The shortcut delivered mass × (supply enthalpy - return enthalpy) is valid only when equal delivered and returned masses are demonstrated on that boundary/interval. Divide the supported net heat by B once. Metered electricity MJ = kWh × 3.6; no duplicate purchased heat for electric heating. | cp_heat; cp_utilities; cp_product ; actual_supply_mass; actual_return_mass; actual_carrier_state; other_mass_heat_legs; thermal_stock_change | MJ per kg reference flow | epa-wood-preserving-1999 |
| emission_species | all elementary output rows | Residual species mass = integral of c_out(t) × gas_volume_rate(t) over the actual operating time, with matched concentration/flow reference conditions and units. Integrate each duration once; a measured mass total is not multiplied by hours again. c_out is after control, so do not apply capture efficiency to it a second time; an inlet-derived estimate needs independently measured capture and disclosure of its different basis. Attribute each source/cohort using cp_stock, then divide by B once. Keep each CAS, phase and source distinct. PAH/VOC aggregate screens are diagnostic only, not extra inventory exchanges. PM2.5, PM2.5–10 and PM>10 are exclusive; derive interval differences from compatible cumulative measurements, never sum total PM10 with PM2.5. | cp_air; cp_stock; cp_product | individual species or size-interval kg per kg reference flow | epa-wood-preserving-1999 |
| physical_balance | treatment | Reconcile oven-dry wood, water and preservative independently across input stocks, accepted product, rejects, separated wastes and emissions; include inventory changes and internal transfers once. Wood-derived carbon and coal-tar preservative fossil carbon remain separate; no carbon-storage credit or species-independent carbon fraction is assumed. If a route extension includes combustion, retain physical biogenic CO2 in LCI regardless of impact-category accounting. | cp_wood; cp_solution; cp_product; cp_waste; cp_air | unallocated physical balances; residuals | usda-wood-handbook-2021 |
| stock_vectors | all inventory rows | Per stage or stock account and source/form/phase/unit V: opening+external_in+internal_in+actual_formation=closing+external_out+internal_out+actual_consumption. external_in/external_out cross the foreground unit boundary; internal_in/internal_out pair equal amounts/vectors within it, including same-state transfers, which are not formation. Whole-unit aggregation cancels matched internal transfers. Pair actual_formation/actual_consumption for real state conversion with withdrawal from the preceding state, without creating conserved mass, adding again to receipts or recording the same conversion also as an internal transfer; cancel these state terms only on the independently reconciled conserved-material basis, retaining actual external losses and nonconserved species changes. Inherited b and new measured burdens form A; A does not rewrite V. firstQ includes closing_new_FG once, separate from grossDispatch/Qc. Unresolved cohorts/pools are not success-only means. | cp_stock;cp_product | Exchange physical/burden dual accounts | usda-wood-handbook-2021 |
| packaging_balance | strap_in;strap_out;strap_waste_out;dunnage_in;dunnage_out;dunnage_waste_out | Per component/source: opening_empty/raw/WIP/FG/reusable+P+N_ext+ER=closing_empty/raw/WIP/FG/reusable+each actual externaloutward+waste; match internal issue/store_return. ER needs same-item previous outward; P is actual purchase, N_ext first external nonpurchase. Carry each leg vector, manufacture once, with no new Q/zero burden/credit. | cp_packaging;cp_stock | Package original amounts and every leg vector | usda-wood-handbook-2021 |
| components | end_clamp_in;end_clamp_scrap_out;sleepers_out | opening+actual receipt=closing+installed+external scrap; installed enters B once; whole-component provider does not also take a steel provider. | cp_components;cp_stock;cp_product | Installed and scrap kg | impregnacia-sleepers |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | treatment | Verify actual product/mixture routes and individual chemical identity/medium/property/unit. Missing exact identities remain unresolved. Species-specific discharge cannot use correction flows, total PAH or neighbouring species. | cp_product; cp_solution; cp_air |
| retention | sleepers_out | Document solid-volume before/after state, sample zone, mixture/active/analyte basis, dry/wet wood basis and kg normalization. Full SDS alone may not expose all constituents; disclose missing composition evidence. | cp_solution; cp_product |
| coverage | treatment | No default yields, retention, service duration or emission factors. Historic E-rated EPA factors and northern-softwood survey quantities are not industry defaults for sleepers. Document non-detect handling, extra actual species, stock mismatch and uncertainty. | cp_air; cp_solution |
| physical_and_burden | treatment | Balance physical mass, water and carbon before burden allocation; equal internal link ends; no multiplication of coproduct physical mass by allocation shares. | cp_wood; cp_solution; cp_waste |
| bilingual | treatment | Both languages have the same rows, reference quantity, denominator, collection aggregation, formulas and source IDs. Official Chinese selected names preserve verified UUID identity. | cp_product |

## 9. Validation Rules

Require positive accepted net output mass, a single final product row linked by sleepers_out, declared product/blank state and species, verified exact reference identity, and all required qualifiers. Check the same kg denominator for every card and protocol in both languages. Reject circular fresh consumption from pumped throughput, undefined retention volume/mass bases, untreated identity for impregnated wood, and unqualified post-treatment oven-loss-as-water conversion.

Reconcile all tank and recovery stocks with retained mixture and measured waste/emission loads; flag unexplained differences and missing assay representation. Check phase/species/receiving medium and non-overlapping sources. Do not sum aggregate VOC or PAH with species exchanges, stack inlet with outlet, or captured contamination with residual air release. PM intervals are exclusive. Unknown heat supplier basis, unavailable flow identity or unmeasured relevant source remains incomplete, not zero or passing. Changed actual chemicals, supply grades, direct emissions to water/soil or out-of-scope fuel/steam routes require individually verified extensions before application.

Before normalization verify every atomic row's source/provider, original amount/unit, form/phase, collection protocol, and raw/WIP/new/old FG/reusable opening/closing vectors. Compare firstQ and closing_new_FG once against grossDispatch, original Qc service, true returns and failed Q0/idle/cleanup. Close physical V before independently reviewing A. No manufacturer webpage supplies an allocation approval or factory numerical recipe. Report actual sample count, period, range/statistic and uncertainty; no default weight, density, yield, retention, price, factor or credit is assigned. Missing ranges are future measured evidence, not zero or AI-estimated limits.

Validate actual gas/aerosol phase, species/CAS and receiving compartment independently. totalPM, COD, NOx and total metal are their own analytical indicators, not one molecular weight or a way to fit several unknowns from one balance residual. Captured contaminants belong once to their mixed waste stream; measure residual release separately. Non-air receiving media require separate specific matching exchanges. Conditional nonoccurrence needs evidence; unknown remains incomplete. An unbound whole-preservative UUID is an upstream identity/provider gap on creosote_in and its actual return interface, like other unresolved supplied exchanges; it does not by itself invalidate the physically supported sleeper methodology or its independently assessed reference. Numeric upstream linkage stays incomplete until a compatible whole formulation/provider is verified, without pure-PAH substitution. Missing actual-mixture formation/composition, product/receiver evidence or logged-route applicability is a separate substantive gap and must be reported specifically. Missing auxiliary UUIDs likewise remain row-specific in metadata. A finite check or command exit zero never establishes scientific, translation, factory-data or publication approval.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | After exact identity and completeness checks: manufacturing inventory of the declared coal-tar creosote sleeper route; link compatible upstream and downstream systems |
| excluded_use | Service life prediction; railway transport function equivalence; all-preservative or all-wood industry averages; installation/use/end-of-life without separate study; unknown formulation or unverified final identity |
| required_metadata | Product/wood/formulation lot; exact net kg state; volume and retention assay basis; treatment/conditioning route; heat supply; site/period; stock/recovery balance; upstream and waste destination |
| required_quality_disclosure | Foreground coverage, missing identities/species, assay limitations, measured-vs-modelled amounts, detection limits, allocation, uncertainty and excluded routes |
| update_trigger | Changed species/specification/formulation, treatment route, utilities, capture/recovery, stock basis, assay method, source evidence or exact flow identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| usda-wood-handbook-2021 | handbook | USDA Forest Service, Forest Products Laboratory. Wood handbook—wood as an engineering material. FPL-GTR-282 (2021). [Official original](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf). Chapters 4, 6, 13 and 15; pp. 4–1, 6–19–23, 13–2–6, 15–8, 15–15–17, 15–22–23. | Untreated moisture definition; variable coal-tar mixture composition; pressure treatment/recovery; species, penetration and retention distinctions. No numerical recipe, retention target, service life, generic density or industry range adopted. |
| epa-wood-preserving-1999 | official_guidance | US EPA. AP-42 Section 10.8, Wood Preserving (August 1999). [Official original](https://www.epa.gov/sites/default/files/2020-10/documents/c10s08.pdf). §§10.8.1–10.8.3, Figs.10.8–1/2, Table10.8–1 and footnotes, pp.10.8–1–9. | Conditioning, pressure route, tanks/vacuum/treated-charge emission points and individually identified organic species screening. Table factors are uncontrolled empty-cell, E-rated, wood-volume based; VOC as propane. No default factor adopted; PAH list is not a full mixture composition. |
| railexim-sleepers | literature | RailExim. Wooden Sleepers. [Industrial primary page](https://www.railexim.hu/wooden-sleepers), observed 2026-10-27. | Whole sleeper form, beech/oak examples, single Type C creosote and autoclave route; no transferred dimensions/retention/lifetime/recipe. |
| impregnacia-sleepers | literature | Impregnatsiya 2000. Impregnated wooden sleepers. [Industrial primary page](https://impregnacia2000.com/en/products/impregnated-wooden-sleepers/), observed 2026-10-27. | Actual Rüping/Lowry route and end metal clamps, railway receiver function; not this factory configuration/numbers/allocation approval. |
| wegland-sleepers | literature | Wegland Alpin. Railway sleepers. [Industrial primary page](https://www.weglandalpin.ro/en/sleepers.php), observed 2026-10-27. | Actual named-log to sawn/processed/impregnated/plated/grouped/stored product example, distinct from garden use; no yield/recipe transfer. |
