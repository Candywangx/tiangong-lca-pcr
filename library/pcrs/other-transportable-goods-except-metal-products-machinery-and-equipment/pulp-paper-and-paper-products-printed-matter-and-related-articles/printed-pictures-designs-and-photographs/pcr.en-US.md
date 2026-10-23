---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.printed-pictures-designs-and-photographs
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Unlaminated sheetfed offset single-sheet paper image prints

## 1. Scope and Applicability

This method covers flat, unbound single-sheet image prints on purchased finished coated art paper, made by conventional wet sheetfed offset, absorption/oxidative ink setting, trimming, inspection and actual transport packing. The physical boundary is an accepted loose sheet with retained paper coating and ink, without added varnish or film layers. EXCARD offers actual litho-offset loose-sheet posters and selectable finishing; EPA independently describes sheetfed poster/artwork printing and its ink-setting route. These originals establish route capability and distinctions, not a claim about EXCARD’s actual ink recipe, plate supplier, electricity or emissions. [excard-offset-sheet; epa-eiip-2002]

Picture/photograph content is not a new method identity. A structurally matching flat map, leaflet or unvarnished flat card can reuse the manufacturing rules after its own finished-product UUID and mapping review; this image-print UUID is not relabelled as those products. Books requiring EVA binding, heatset stitched magazines, coldset reel-fed folded newspapers, paper-gore globes, creased/folded uncoated greeting cards (with or without UV varnish), unprinted glued envelopes and PSA-on-glassine flexographic labels do not have this complete delivery structure.

Wet photographic RA-4 development/bleach-fix/rinse of emulsion paper, inkjet droplet deposition, digital toner, waterless/UV/EB/heatset/web/flexographic/gravure printing, folded/bound or adhesive-mounted products, plastic/synthetic-paper media, foil, relief and protective coating/lamination are excluded. Photographic subject matter cannot imply wet development; “gloss paper” cannot imply post-print varnish or film. No source’s historic factor, single-factory quantity or stock grammage is a universal default. Actual extra ingredients, species and auxiliaries require their own atomic cards. [fujifilm-ra4; excard-offset-sheet; epa-offset-ctg-2006]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.printed-pictures-designs-and-photographs |
| classification_refs | CPC 3.0 32540; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Flat coated-paper image prints of the stated wet-sheetfed/no-added-finish construction |
| excluded_products | All incompatible physical routes and constructions in section1; no whole-leaf coverage |
| representative_product | Accepted unbound single-sheet paper image print, rectilinearly trimmed |
| production_route | Coated sheets and imaged plates received → make-ready/wet offset → absorption/oxidation → trim/QC → removable transport packing |
| market_state | Accepted dry flat print at printer gate; packaging excluded from reference mass |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared printed visual information on one flat paper sheet |
| How much | 1 kg net accepted flat paper prints |
| How well | Actual size/grammage/moisture, image resolution/coverage/colour and trim acceptance; no universal equivalence per mass across image content |
| How long or cycle | One declared production campaign through factory-gate acceptance; no assumed display/service lifetime |
| reference_flow_link | `finished_print` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Printed pictures, designs and photographs `9447e663-8e42-4f8e-943e-0470b136b638` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Site/campaign/product; flat/unbound single-sheet state; paper furnish/coating/binder/grammage/moisture/provider; explicit absence of post-print varnish/lamination; dimension/print-side/CMYK or spot-colour acceptance; each ink/concentrate/wash/powder grade/SDS/CAS/carbon origin; imaged-plate handoff and upstream route; actual utility voltage/provider; accepted net mass and packing tare; process controls; physical waste/species recipients; allocation and data gaps |

Declare every required qualifier in traceable dataset metadata or collection records. Identity resolution alone does not establish a complete linked dataset.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg accepted net finished print including every actual retained ink/coating/water and anti-setoff powder constituent. Weigh calibrated accepted lots through cp_output; exclude packaging and rejects. |
| `common_denominator` | reference product and shared normalization denominator | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | This Mass/kg requirement applies only to the accepted print reference and each row's normalization denominator. Preserve each exchange numerator's native property/unit: electricity remains Net calorific value/MJ; mass exchanges remain kg. Every row and collection aggregation uses the same campaign/site/configuration and measured accepted net print kg. Zero or missing accepted mass blocks normalization; count/area cannot replace it. |
| `formulation_water` | wet formulations and water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve wet as-supplied quantity, composition and mass basis; active/solids values require actual assay. Volume conversion needs measured density/temperature; carrier water and recycled liquid are not new purchases. |
| `electricity_units` | `electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Meter actual below1kV supply; 1 kWh = 3.6 MJ. Native Net calorific value property does not prove heat/steam delivery. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received finished coated art-paper sheets and prepared imaged aluminium plates, supplied formulations and actual packing |
| starting_condition_role | Disclosed supplied-material/plate foreground handoff, with prior production linked once |
| product_classification_scope | Route-constrained single-sheet image-print subset of CPC3.0:32540 |
| recursive_input_rule | Purchased already printed sheets require their prior printing background and overprint-route review; do not recurse into the output or treat printed stock as blank. Internal rework retains its physical history. |
| upstream_dataset_requirement | Actual amount-compatible pulp/papermaking/coating, plate imaging/development, formulations, cloth/powder, packing, utility and transport providers; complete receiving waste treatment |
| disclosure | Physical configuration, foreground/background handoffs, excluded/extended stages, provider bases, site/time, controls, data/identity gaps and downstream study assumptions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_scope` | physical applicability | Require coated cellulose paper, wet conventional sheetfed offset with absorption/oxidative setting, and a flat trimmed unbound output with no post-print protective coating/laminate. Excluded constructions require separate reviewed extension; subject labels never change method identity. | `epa-eiip-2002`; `excard-offset-sheet`; `fujifilm-ra4` |
| `b_foreground` | p_print | Include make-ready, wet offset, actual air/handling/cleaning, setting, trimming, inspection, packing and attributable utilities/wastes/net outdoor releases. No dryer burner, boiler, purchased steam, onsite pulp/coating, UV lamp or photochemistry is presumed. Actual onsite imaging, fuel/heat or additional stages must be measured atomically and assessed as an explicit extension. | `epa-eiip-2002`; `epa-offset-ctg-2006` |
| `b_upstream` | purchased inputs | Include actual pulp/paper furnish, stock preparation, sheet formation/drying/coating/calendering/cutting, broke, energy and effluent providers. Paper BREF supports these paper processes, not wood/plywood recipes or printer emission factors. Supplied-plate upstream includes actual imaging/development; bring onsite work into foreground by replacing corresponding provider stages. | `jrc-paper-bref-2015`; `epa-eiip-2002` |
| `b_links` | physical and burden ledgers | Aggregate print/trim/pack into one reported foreground unit while retaining separate stage meters and physical diagrams. Internal printed-sheet transfers have identical mass/moisture/ink on both endpoints, not extra product reference outputs. Keep unallocated material/water/fossil-and-biogenic-carbon balances and allocated environmental-burden ledgers separately. Transport packing is tracked in physical shipped mass but excluded from net print reference. |  |
| `b_releases` | nature boundary | Record outdoor releases after actual controls, segregated collected dust/wastes and liquid to receiving treatment distinctly. Indoor exposure is not outdoor LCI. Species/medium must match, and additional actual VOCs need separate cards. Preserve real biogenic CO2 in upstream/receiving-treatment LCI even if a greenhouse-gas metric excludes it; no combustion CO2 is invented for this non-fired foreground. | `epa-eiip-2002` |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_print` | Wet-sheetfed print, set, trim and pack | required | Declared unbound/no-added-finish route | foreground | `finished_print` |

Physical stages: supplied coated paper and plates → make-ready and print → set → trim → QC → transport pack. Stage ledgers retain paper/ink/water and waste at each handoff; report one quantitative reference output. Conditional cards are a survey of precisely named exchanges, not positive default flows; absent exchanges require evidence of non-use.

### Process: Single-sheet print finishing (`p_print`)

#### Inputs

##### Product flows

###### coated printing, writing and packaging paper (`paper`)

Purchased finished mineral-coated art-paper sheets, not photographic silver-halide paper or film-faced stock. Record furnish, coating/binder, moisture, grammage and provider mass basis. The broad coated-paper identity includes this grade; the comment also discusses printing varnish but does not establish that this selected stock has one. Supplier records must distinguish papermill coating from excluded post-print varnish/lamination.

- Selected flow: coated printing, writing and packaging paper `faaae1a8-97af-4a26-bdb2-198abfc0d8e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_materials divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `excard-offset-sheet`; `jrc-paper-bref-2015`

###### Cyan conventional sheetfed offset paste ink (`ink_cyan`)

One as-supplied non-UV paste-ink formulation of this colour, separately weighed even where backgrounds share a family. Record SKU, SDS/CAS constituents, pigment/binder/oil/solvent/wax, wet mass, retained solids and fossil/biogenic carbon. No soybean-only, UV-curing, water-based or evaporative solvent ink is substituted. Each actual extra spot colour requires its own atomic card; no default composition or ink coverage.

The broad nonwater oil/solvent-based planographic ink record has offset/lithographic synonyms and no hard heatset route. Use only for this colour's actual conventional sheetfed paste SKU whose supplier confirms nonwater vehicle, absorption/oxidative setting, complete pigment/binder/oil/solvent/wax/SDS and compatible provider mass basis. The comment's optional glycol-ester examples and heat-based classification do not prescribe a recipe, heater or VOC fraction. UV/EB, aqueous, inkjet or predominantly volatile heatset/solvent-evaporation formulations require another identity/route. Preserve four separate colour charges, returns, stocks, retained film and waste without collapsing them.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_materials divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-eiip-2002`; `epa-offset-ctg-2006`

###### Magenta conventional sheetfed offset paste ink (`ink_magenta`)

One as-supplied non-UV paste-ink formulation of this colour, separately weighed even where backgrounds share a family. Record SKU, SDS/CAS constituents, pigment/binder/oil/solvent/wax, wet mass, retained solids and fossil/biogenic carbon. No soybean-only, UV-curing, water-based or evaporative solvent ink is substituted. Each actual extra spot colour requires its own atomic card; no default composition or ink coverage.

The broad nonwater oil/solvent-based planographic ink record has offset/lithographic synonyms and no hard heatset route. Use only for this colour's actual conventional sheetfed paste SKU whose supplier confirms nonwater vehicle, absorption/oxidative setting, complete pigment/binder/oil/solvent/wax/SDS and compatible provider mass basis. The comment's optional glycol-ester examples and heat-based classification do not prescribe a recipe, heater or VOC fraction. UV/EB, aqueous, inkjet or predominantly volatile heatset/solvent-evaporation formulations require another identity/route. Preserve four separate colour charges, returns, stocks, retained film and waste without collapsing them.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_materials divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-eiip-2002`; `epa-offset-ctg-2006`

###### Yellow conventional sheetfed offset paste ink (`ink_yellow`)

One as-supplied non-UV paste-ink formulation of this colour, separately weighed even where backgrounds share a family. Record SKU, SDS/CAS constituents, pigment/binder/oil/solvent/wax, wet mass, retained solids and fossil/biogenic carbon. No soybean-only, UV-curing, water-based or evaporative solvent ink is substituted. Each actual extra spot colour requires its own atomic card; no default composition or ink coverage.

The broad nonwater oil/solvent-based planographic ink record has offset/lithographic synonyms and no hard heatset route. Use only for this colour's actual conventional sheetfed paste SKU whose supplier confirms nonwater vehicle, absorption/oxidative setting, complete pigment/binder/oil/solvent/wax/SDS and compatible provider mass basis. The comment's optional glycol-ester examples and heat-based classification do not prescribe a recipe, heater or VOC fraction. UV/EB, aqueous, inkjet or predominantly volatile heatset/solvent-evaporation formulations require another identity/route. Preserve four separate colour charges, returns, stocks, retained film and waste without collapsing them.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_materials divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-eiip-2002`; `epa-offset-ctg-2006`

###### Black conventional sheetfed offset paste ink (`ink_black`)

One as-supplied non-UV paste-ink formulation of this colour, separately weighed even where backgrounds share a family. Record SKU, SDS/CAS constituents, pigment/binder/oil/solvent/wax, wet mass, retained solids and fossil/biogenic carbon. No soybean-only, UV-curing, water-based or evaporative solvent ink is substituted. Each actual extra spot colour requires its own atomic card; no default composition or ink coverage.

The broad nonwater oil/solvent-based planographic ink record has offset/lithographic synonyms and no hard heatset route. Use only for this colour's actual conventional sheetfed paste SKU whose supplier confirms nonwater vehicle, absorption/oxidative setting, complete pigment/binder/oil/solvent/wax/SDS and compatible provider mass basis. The comment's optional glycol-ester examples and heat-based classification do not prescribe a recipe, heater or VOC fraction. UV/EB, aqueous, inkjet or predominantly volatile heatset/solvent-evaporation formulations require another identity/route. Preserve four separate colour charges, returns, stocks, retained film and waste without collapsing them.

- Selected flow: Solvent-based Flat Printing Ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_materials divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-eiip-2002`; `epa-offset-ctg-2006`

###### Prepared imaged aluminium offset printing plate (`plate`)

Supplied finished imaged plate ready to print; record aluminium/coating mass, imaging/development route and supplier upstream coverage. Bare cut/grained aluminium lacks the finished image/coating; the PS-plate candidate has conflicting polystyrene thermoplastic fields. Neither is adopted. If imaging/development occurs at the reporting site, explicitly add its atomic inputs and outputs and replace corresponding upstream coverage.

- Selected flow: Prepared imaged aluminium offset printing plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_materials divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-eiip-2002`

###### Offset fountain-solution concentrate (`fountain_concentrate`)

One supplied wet regular-offset concentrate, with its whole composition/SDS, carrier water and solids recorded. The regular working-solution candidate does not establish concentrate identity or dose. Count separately purchased dilution water and separately purchased IPA only once; do not count ingredients again when already included in a complete formulation background.

- Selected flow: Offset fountain-solution concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_materials divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-offset-ctg-2006`

###### Isopropanol (`ipa`)

Conditional separately purchased isopropanol, CAS 67-63-0, for actual fountain/cleaning use. Broad IPA physical identity is confirmed from bilingual names and synonyms; the selected row lacks a CAS field and labels China production mix. Obtain actual CAS, purity/water, wet versus active mass and supplier provenance/reference basis before linking a background. The optical-assembly/antiseptic-mixture candidate is rejected. No concentration default; IPA already in purchased formulation is not another input.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_materials divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-offset-ctg-2006`

###### Tap water (`water`)

Separately supplied tap water actually entering fountain preparation or cleaning; quantify by weighing or metered volume with measured density/temperature. Do not adopt a secondary database mass coefficient as density; supplied carrier water and internal reuse are not new purchases.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_water divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-offset-ctg-2006`

###### Alternating current (`electricity`)

Actual customer-side below1kV electricity for press, compressed-air equipment, cutting, ventilation, handling and packing, with station and transformer coverage defined. Preserve the native Net calorific value/MJ property; meter kWh and use the exact 3.6 MJ/kWh conversion. Grid identity does not establish a regional provider or a heat/steam basis.

The raw record specifies CN, below1kV grid-average consumption to user. Verify actual site/country/year/provider, delivery voltage, meter gate and losses; EXCARD's commercial route/specification is not an observed CN electricity dataset or a supply match. A different supply/interface needs another verified identity/provider.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable campaign exchange from cp_energy divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Non-UV offset blanket-wash formulation (`wash`)

One actual as-supplied blanket/roller wash, with complete supplier composition and each CAS/VOC documented; no universal hydrocarbon recipe or volatility. Record dilution separately, dirty solvent stock, reusable returns and rag retention. Unrelated fabric and generic detergent candidates do not establish this formulation.

- Selected flow: Non-UV offset blanket-wash formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_materials divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-offset-ctg-2006`

###### Cornstarch (`powder`)

Conditional only when supplier confirms actual unmodified wet-milled corn-starch component used for anti-setoff. Require grade, particle distribution, coating/additive disclosure, moisture and supplier route; this identity is not an entire formulated or modified spray powder. Additional coating/additive components need separate cards and provider coverage. No use rate or emission factor.

- Selected flow: Cornstarch `11077512-b85c-41da-8669-1298c65be402`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_materials divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Cotton fabric (`wipe`)

Actual plain cotton cloth consumed/replaced in manual cleaning, not printed apparel, yarn or a cleaning solvent. Record dry cloth and absorbed liquid separately within physical balances; outside laundering requires its actual service boundary rather than repeated fresh-cloth purchase.

Names and cotton-fabric/cloth/woven-fabric synonyms positively identify a textile, while the plant seed-fibre comment and CPC01921 raw-cotton class are source-quality debt. Require actual finished cloth composition/weave/finish, supplier textile production and delivered dry/reference mass; do not link this cleaning cloth to raw cotton agriculture or the separate water-treatment-qualified cotton record. Missing actual textile/provider compatibility remains unresolved.

- Selected flow: Cotton fabric `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_materials divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `epa-offset-ctg-2006`

###### Polyethylene film (`packing_film`)

Conditional actual polyethylene transport wrap, CAS9002-88-4, separately weighed and excluded from net print mass. It is removable packaging, never a laminated layer of the print. Names/CAS/comment support film identity despite an erroneous luggage classification; require PE grade/additives and actual supplier background.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_packing divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

###### Corrugated fibreboard transport box (`packing_box`)

Conditional supplied finished corrugated box, with actual ply/furnish, moisture, dimensions, coatings and supplier. A fixed-furnish 16.6%/83.4% box identity is not used for unknown composition; optical-assembly cardboard and folding carton are not this box. No packing mass or scrap default.

- Selected flow: Corrugated fibreboard transport box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_packing divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

#### Outputs

##### Product flows

###### Printed pictures, designs and photographs (`finished_print`)

Accepted single flat sheet containing actual retained ink/coating/moisture and anti-setoff powder, with no added varnish, laminate, adhesive mounting, folding or binding. Quantitative reference is exactly 1 kg net finished print; transport packing and rejects excluded. Image/photograph content never changes this manufacturing route.

- Selected flow: Printed pictures, designs and photographs `9447e663-8e42-4f8e-943e-0470b136b638`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `excard-offset-sheet`

##### Waste flows

###### waste paper (unspecified) (`trim_paper`)

Segregated actual cut edges; record whether printed, coating/ink content, moisture and receiving recycling/treatment, without a recovery-rate default.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_waste divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### waste paper (unspecified) (`reject_paper`)

Actual rejected sheets with deposited ink/coating, moisture and receiver; no double count of sheets reintroduced internally. Broad waste-paper identity does not select deinking or treatment.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_waste divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Waste ink (`waste_ink`)

One separated ink residue stream from conventional offset. Record colours/constituents, water/solvent, quantity and receiver; do not duplicate ink already included in dirty rags or waste wash.

- Selected flow: Waste ink `468ac05a-00a0-4153-a4ba-4084ef981e4c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_waste divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent imaged aluminium printing plates (`waste_plate`)

Actual aluminium plate with residual coating and ink, measured and routed to receiver; a waste photopolymer plate is not equivalent.

Broad industrial solid-waste identity applies only to this independently collected actual whole solid stream. Record its stage, handoff phase, actual metal/coating/ink/cloth/starch/solvent contamination as applicable, whole net wet mass, moisture/dry constituents and actual receiver acceptance/treatment. No bare clean aluminium scrap, photopolymer-plate substitution, cleaned textile/recycled grade, hazard class, disposal route or credit is inferred. Components are subledgers, not duplicate external wastes; separated free liquid requires its own stream.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_waste divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Ink-and-wash contaminated cotton rags (`waste_wipe`)

One discarded contaminated cloth stream with dry cloth, retained species, wet mass and receiver. Laundry returns are internal/service circulation, not discarded cloth.

Broad industrial solid-waste identity applies only to this independently collected actual whole solid stream. Record its stage, handoff phase, actual metal/coating/ink/cloth/starch/solvent contamination as applicable, whole net wet mass, moisture/dry constituents and actual receiver acceptance/treatment. No bare clean aluminium scrap, photopolymer-plate substitution, cleaned textile/recycled grade, hazard class, disposal route or credit is inferred. Components are subledgers, not duplicate external wastes; separated free liquid requires its own stream.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_waste divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent aqueous offset fountain bath (`waste_fountain`)

One actual spent working bath exported to treatment, with chemical species, pH, solids and receiver. It is not an elementary freshwater discharge or manganese-slag washwater.

The broad industrial liquid-waste identity locates this one actual independently received whole liquid stream. Confirm liquid handoff phase, full water/solvent/oil/dissolved and suspended composition, weighed whole wet kg or actual volume times representative measured density at stated temperature, stocks and actual receiver acceptance/treatment. H2O and contaminants are subledgers, not second external water/waste exchanges. Non-water mass is not automatically dry solids; measure actual solids and non-water liquids separately. No pure-solvent mass, direct environmental release, hazard class, route or credit is defaulted.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_waste divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Spent offset blanket-wash liquid (`waste_wash`)

One separated liquid wash stream with ink/solvent/water composition and compatible treatment; no double count with ink/rags or internal reuse.

The broad industrial liquid-waste identity locates this one actual independently received whole liquid stream. Confirm liquid handoff phase, full water/solvent/oil/dissolved and suspended composition, weighed whole wet kg or actual volume times representative measured density at stated temperature, stocks and actual receiver acceptance/treatment. H2O and contaminants are subledgers, not second external water/waste exchanges. Non-water mass is not automatically dry solids; measure actual solids and non-water liquids separately. No pure-solvent mass, direct environmental release, hazard class, route or credit is defaulted.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_waste divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Collected coated-paper cutting dust (`captured_dust`)

Actual captured particulate residue; record paper/mineral/ink composition, moisture and receiver. Captured material is waste, not air release; BREF paper-mill cutting supports a dust survey only, no print-shop factor.

Use this captured industrial-dust Waste identity only for the actual collected cutting stream. Confirm paper/mineral/ink/powder composition, whole handoff mass, dry constituents/moisture, stage, collector stock and actual receiver. It is neither an elementary air release nor a generic dust factor. Separate actual powder bins from paper-dust bins; a real combined bin is weighed once with component subledgers.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_waste divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-paper-bref-2015`

###### Collected cornstarch anti-setoff residue (`powder_waste`)

Conditional collected unmodified powder residue; distinguish retained product powder, paper-dust mixing, internal returns and emitted particles. Use a combined actual receiver stream only when its measured composition is retained, without duplicate separate residues.

Broad industrial solid-waste identity applies only to this independently collected actual whole solid stream. Record its stage, handoff phase, actual metal/coating/ink/cloth/starch/solvent contamination as applicable, whole net wet mass, moisture/dry constituents and actual receiver acceptance/treatment. No bare clean aluminium scrap, photopolymer-plate substitution, cleaned textile/recycled grade, hazard class, disposal route or credit is inferred. Components are subledgers, not duplicate external wastes; separated free liquid requires its own stream.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_waste divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Discarded PE transport-film scraps (`packing_film_waste`)

Conditional actual transport wrapping rejects, segregated from paper trim and product laminate; measure grade/contamination and receiver.

Use only for this actual separate PE transport-wrap waste stream: verify packaging origin, polymer/additives, contamination, handoff phase, whole net mass/moisture and receiver. The broad plastic-packaging record does not specify a cleaned/recycled grade or treatment. Exclude product laminate and unrelated packaging; stock/returns and measured shipped film remain separate, with no assumed scrap ratio.

- Selected flow: Packaging waste, plastic `1cc18dac-e06b-424b-98af-b4d25043db56`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_waste divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Packaging waste, cardboard (`packing_box_waste`)

Conditional actual box damage/rejects, with furnish/moisture and receiver. No 2% packaging-waste default or product-print contamination is assumed.

Raw route/comment covers packing-stage cardboard trim and damaged boxes only. Record actual stage, whole mass/coating/moisture and recipient; do not apply its illustrative2% estimate, a recycling credit, or broaden it to all inbound supplier-container waste. Other real incoming-container streams require their own measured atomic identity/receiver before completeness.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_waste divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### isopropanol (`air_ipa`)

CAS67-63-0 only, if actually present; net outdoor release after capture/treatment from fountain and cleaning, reconciled across sources. Indoor exposure and retained IPA in wastes are not this exchange.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_emissions divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-eiip-2002`; `epa-offset-ctg-2006`

###### decane (`air_decane`)

Conditional actual CAS124-18-5 confirmed in supplier formula and emission speciation. A petroleum solvent label never establishes pure decane or its fraction; no VOC mixture is represented by this species.

- Selected flow: decane `08a91e70-3ddc-11dd-929d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_emissions divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-eiip-2002`; `epa-offset-ctg-2006`

###### 2-n-butoxy-1-ethanol (`air_butoxy`)

Conditional actual CAS111-76-2 from verified fountain/cleaner formula and measured release. A glycol-ether family label does not establish this species; no proxy for the whole wash.

- Selected flow: 2-n-butoxy-1-ethanol `fe0acd60-3ddc-11dd-ae31-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_emissions divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-eiip-2002`; `epa-offset-ctg-2006`

###### particles (PM2.5) (`air_pm25`)

Net outdoor particulate mass no greater than2.5 micrometres, from actual cutting/handling/spray-powder release after controls, with matched measurement basis. No universal factor.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_emissions divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-paper-bref-2015`

###### particles (PM2.5 - PM10) (`air_pm10`)

Net outdoor particles greater than2.5 and no greater than10 micrometres; this disjoint interval is not cumulative PM10. Only matched cumulative measurements may be differenced.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_emissions divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-paper-bref-2015`

###### particles (> PM10) (`air_pmover10`)

Actual net outdoor particles greater than10 micrometres, including uncaptured cutting or powder if present. Disjoint from the two smaller bins and captured residues; no substitution by size-unspecified dust.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_emissions divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-paper-bref-2015`

###### water vapour (`air_water`)

Actual evaporated water from fountain/cleaning discharged outdoors, on measured water-balance basis after controls; distinct from liquid effluent, input water and solvent.

Net outdoor H2O includes actual material/formulation water and changes in wet paper, bath, cloth, waste and packing stocks. Match incoming/outgoing air humidity, capture/condensate and any verified setting-reaction water term. Do not convert an unexplained stock/material-water residual into evaporation, assume generic water density, or equate non-water loss to VOC or solids.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable campaign exchange from cp_emissions divided by accepted net print mass; per 1 kg reference flow.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-eiip-2002`; `epa-offset-ctg-2006`


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_separate` | `p_print` | First investigate subdivision or feasible system expansion to avoid allocation; use actual job/stage/submeter separation and assign make-ready, cleaning and trim to their jobs with stock/reject history. If expansion is justified, include the additional functions and report the expanded system as a whole. Only where those approaches are unavailable use a demonstrated measured causal relationship for shared burdens, such as applicable press time, impression area or cleanup events; mass alone is not a proven driver. Other relationships need explicit justification and sensitivity rather than a default share. | `ec-pef-allocation-2021` |
| `a_ledgers` | `p_print` | Keep physical outputs and stock/transfer balances at actual quantities. Allocate only attributable environmental burdens; never multiply co-product physical mass by a burden share. Share totals must reconcile; disclose method, drivers and sensitivity. | `ec-pef-allocation-2021` |
| `a_waste` | waste streams | Keep waste identity and actual receiving treatment; a scrap sale does not automatically make it a burden-free co-product or justify substitution credit. Any co-product/recycling allocation needs separately declared study method and evidence; no universal credit. | `ec-pef-allocation-2021` |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | `p_print` | finished_print | collected_record | Accepted lot mass; tare; moisture; size; ink/stock/order; rejects; opening/closing output stocks | Calibrated net lot weighing at gate acceptance, paired order/quality records; include every actual retained ink/coating/moisture/powder constituent and exclude independently weighed packing, rejects and removed samples. Reconcile output stocks and shipment with the same job; no fixed per-sheet mass | kg | Each lot/job/event; utilities and emissions time-matched | Complete same production campaign including setup/idle/cleaning | Selected reporting site and declared configuration | per 1 kg reference flow | Calibration, receipts/SDS, lab methods, manifests and uncertainty/coverage records |
| `cp_materials` | `p_print` | paper,inks,plate,fountain,ipa,wash,powder,wipe | collected_record | Each SKU/CAS; supplied wet mass; receipt/issue/return/stocks; solids/carrier; plate/coating; carbon origins; provider native basis | Weigh/stock-reconcile each atomic material and retain supplier SDS/composition/basis; separate ingredients only if not already in complete formula background. Screen actual supplier containers, plate/coating changes, blanket replacement, oils/greases, filters, cleaning and maintenance consumables from receipt/service/issue/return records; document supported absence or add separately measured atomic inputs/spent streams and actual provider/receiver before completeness. No generic per-job consumption. Record actual oxidative-setting chemistry and retained-film O/H uptake/products from supplier and measured constituent/element balances, not an assumed solvent-only drying yield | kg | Each lot/job/event; utilities and emissions time-matched | Complete same production campaign including setup/idle/cleaning | Selected reporting site and declared configuration | per 1 kg reference flow | Calibration, receipts/SDS, lab methods, manifests and uncertainty/coverage records |
| `cp_water` | `p_print` | water | collected_record | Fresh supply meter/weights; density/temperature; carrier water; bath stocks; liquid waste; evaporation; product moisture | Meter external supply and measure density for volume-to-mass; reconcile actual material/formulation H2O, product/cloth/bath/waste/packing moisture and stocks, measured liquids/density, matched ambient inlet/outlet humidity and actual reaction water/capture/condensate. Whole wet liquid and H2O/nonwater/solids subledgers stay separate; nonwater is not automatically dry solids. Missing terms and residuals remain incomplete, not assumed net vapour | kg | Each lot/job/event; utilities and emissions time-matched | Complete same production campaign including setup/idle/cleaning | Selected reporting site and declared configuration | per 1 kg reference flow | Calibration, receipts/SDS, lab methods, manifests and uncertainty/coverage records |
| `cp_energy` | `p_print` | electricity | collected_record | kWh intervals; voltage; press/cut/air/ventilation/pack meter; idle/make-ready time; supplier boundary | Actual circuit/submeter records; separate jobs and avoid double counting in-house compressed-air electricity | MJ | Each lot/job/event; utilities and emissions time-matched | Complete same production campaign including setup/idle/cleaning | Selected reporting site and declared configuration | per 1 kg reference flow | Calibration, receipts/SDS, lab methods, manifests and uncertainty/coverage records |
| `cp_packing` | `p_print` | packing_film,packing_box | collected_record | Packing component SKU/CAS/furnish; receipts/opening/closing stocks; issues/unused external returns; measured shipped tare; scraps/damage; supplier containers; phase/moisture; actual provider/receiver | Weigh each actual packing component; reconcile packing receipts plus opening stock to actual shipped tare, external unused returns, characterized scraps/damage and closing stock, all outside net print mass. Incoming supplier containers and packing-stage wastes are distinct measured origins; no universal scrap/reuse factor | kg | Each lot/job/event; utilities and emissions time-matched | Complete same production campaign including setup/idle/cleaning | Selected reporting site and declared configuration | per 1 kg reference flow | Calibration, receipts/SDS, lab methods, manifests and uncertainty/coverage records |
| `cp_waste` | `p_print` | all waste rows | collected_record | Waste row; wet/dry mass; composition/moisture/species; mixed-stream splits; stock; receiver/transport/treatment | Segregated whole container/stream net weighing and manifests, handoff phase and actual receiver acceptance; liquid volume uses representative measured density/temperature, with water, nonwater liquids, actual solids and retained contaminants distinguished. Constituent subledgers never export the same whole waste again; internal reuse is not external waste | kg | Each lot/job/event; utilities and emissions time-matched | Complete same production campaign including setup/idle/cleaning | Selected reporting site and declared configuration | per 1 kg reference flow | Calibration, receipts/SDS, lab methods, manifests and uncertainty/coverage records |
| `cp_emissions` | `p_print` | all elementary output rows | collected_record | Species/CAS; actual input constituents; retained product/waste/stock; exhaust flow/time; controls/capture/destruction; detection; PM size cumulative/bins; outdoor medium | Matched outlet/stack and fugitive survey with traceable sampling/speciation; reconcile per-species mass balances using measured retention/waste/capture/destruction, never historical default fractions | kg | Each lot/job/event; utilities and emissions time-matched | Complete same production campaign including setup/idle/cleaning | Selected reporting site and declared configuration | per 1 kg reference flow | Calibration, receipts/SDS, lab methods, manifests and uncertainty/coverage records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `campaign_normalization` | all inventory rows | Divide each measured attributable campaign numerator in its native unit by the common measured accepted net print mass in kg; finished_print remains exactly1 kg. | cp_output; cp_materials; cp_water; cp_energy; cp_packing; cp_waste; cp_emissions | Inventory exchange per 1 kg reference flow |  |
| `electricity_conversion` | electricity | Metered kWh multiplied by3.6 gives MJ before campaign normalization. | cp_energy; cp_output | MJ per 1 kg reference flow |  |
| `species_balance` | air_ipa;air_decane;air_butoxy | For each actual species reconcile input and opening stocks with closing stocks, retained product, external liquid/solid waste, destroyed amount and net outdoor release. Internal capture/reuse is circulation, not a destruction credit. Match measured outlets and fugitives; unresolved balance is uncertainty, not zero emission. | cp_materials;cp_waste;cp_emissions | Species-specific reconciled releases | `epa-eiip-2002` |
| `particles_disjoint` | air_pm25;air_pm10;air_pmover10 | Use mutually exclusive <=2.5, >2.5–<=10 and >10 micrometre mass intervals. Difference same-basis cumulative PM10 and PM2.5 only when compatible; do not add cumulative PM10 to its nested PM2.5. Captured dust and reused powder are separate physical destinations. Unknown split remains pending. | cp_waste;cp_emissions | Nonoverlapping outdoor particle quantities |  |
| `physical_campaign_balance` | `p_print` | Receipts plus opening stocks and measured actual physical reaction/intake terms reconcile to accepted net print, shipped packing, external unused returns, full separately characterized wastes/net releases and closing stocks. Paper/coating/ink/powder/water already retained in net product are constituents, not additional outputs. Use receipts/stocks consistently, not stock-adjusted use plus the same stock movements twice. Oxidative setting can redistribute C/H/O and incorporate atmospheric oxygen into retained ink; actual supplier chemistry, constituent/element measurement and matched air/humidity are required. Unknown uptake/reaction/products remain incomplete, never fictitious conservation/emission adjustments or a blanket ink-retention factor. Internal transfers cancel; preserve uncertainty and unallocated physical quantities separately from environmental burdens. | cp_output;cp_materials;cp_water;cp_packing;cp_waste;cp_emissions | Physical material/water/element and packing ledgers | `epa-eiip-2002`; `ec-pef-allocation-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_and_providers` | all inventory rows | Verify exact physical identity/CAS/medium/native property/unit independently from actual supplier/treatment dataset coverage and denominator. Unresolved UUIDs remain named atomic rows; no unrelated substitute or empty-row cutoff. | Raw specifications, provider basis and receiver acceptance |
| `physical_balance` | `p_print` | Retain stage diagrams and unallocated paper/ink/coating/water/fossil-and-biogenic-carbon balances, including make-ready, offcuts, retained powder, wastes and stocks. Match internal endpoints exactly. Reconcile a separate environmental burden ledger. | Raw mass and stock records; equal transfers; driver records |
| `coverage` | `p_print` | Same site/time/configuration and complete event coverage; retain calibrations, SDS/assays, detection limits, size/species split uncertainty and additional actual components. Historic or supplier case quantities are not defaults. | Campaign and lab coverage/uncertainty evidence |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_reference` | `finished_print` | Exactly one product reference output, net1 kg; EN/ZH reference quantity, row IDs, denominator, collection aggregation and calculations agree. |  |
| `v_route` | `p_print` | Verify actual coated stock, plate handoff, conventional wet non-UV setting, flat trim and absence of added varnish/laminate/binding. Expanded or unknown route requires applicability review, not silent inclusion. | `excard-offset-sheet`; `epa-eiip-2002` |
| `v_exchanges` | `p_print` | Confirm atom-by-atom physical identity, CAS, medium/property/unit and provider compatibility. Missing identities, quantities, formulas, provider/receiver or additional actual species prevent a complete dataset claim even when PCR method is authored. |  |
| `v_environment` | `p_print` | Check per-species outdoor balances, controls, disjoint particles, captured dust and wastewater receiver; reject correction flows, generic species substitutions, cumulative-PM double counting and deletion of real biogenic CO2. | `epa-eiip-2002` |
| `v_ledgers` | `p_print` | Verify stage links at equal physical quantities and independently reconcile environmental attribution shares; physical co-product/output mass is never scaled by burden allocation. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-ready single-sheet paper printing process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared same-route unlaminated/unvarnished flat image-print supply with actual linked providers and accepted net basis |
| excluded_use | Universal CPC32540 coverage, wet photographic/inkjet or finished laminated/bound substitutes; visual service equivalence per kg; complete dataset claim with unresolved gaps |
| required_metadata | All reference qualifiers, site/time, physical route/handoffs, provider identities/bases, allocation drivers, emitted media/species, actual receiving treatment and study boundary |
| required_quality_disclosure | Collection and calibration coverage, physical versus burden ledgers, CAS/particle split uncertainty, missing UUIDs/formulas/quantities/providers and scope limitations |
| update_trigger | Changed substrate/coating, ink/plate/fountain/wash/powder, finishing, supplier basis, utility, pollution control, waste route or new species evidence |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `epa-eiip-2002` | official_guidance | EPA EIIP Vol.II Ch.15 May2002; section2.1.1 printed15.2-4/PDF14, Post-Press subsection/PDF24, material balance4.1/PDF31. https://www.epa.gov/sites/default/files/2015-08/documents/ii15_may2002.pdf | Sheetfed poster/artwork route, postpress cutting and species/material accounting; historical factors not adopted |
| `epa-offset-ctg-2006` | official_guidance | EPA-453/R-06-002 September2006; sectionIV.A printed6–8/PDF12–14. https://www3.epa.gov/airquality/ctg_act/200609_voc_epa453_r-06-002_litho_letterpress_printing.pdf | Conventional sheetfed setting, fountain and cleaning distinctions; no regulatory thresholds or retention defaults |
| `jrc-paper-bref-2015` | official_guidance | JRC Production of Pulp Paper and Board BREF2015;7.1.4 printed665/PDF703;7.1.10 printed670/PDF708. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Upstream papermill/broke/cutting and need to inspect cutting dust; no printer emission factor or recipe |
| `excard-offset-sheet` | handbook | EXCARD Flyer/Brochure Offset Bulk Order Print; current product-linked specification PDF1/7, snapshot2026-10-12. https://www.excard.com.my/product/loose-sheet ; https://s3-ap-southeast-1.amazonaws.com/excard/product-spec/1788890353_Flyer_Brochure_LO.pdf | Real loose-sheet poster supply and optional/compulsory finish distinctions; art-card compulsory finish is excluded. No ink/plate/provider/quantity default |
| `fujifilm-ra4` | handbook | Fujifilm RA-4 Processing Chemicals, snapshot2026-10-12. https://www.fujifilm.com/us/en/business/photofinishing/photographic-chemicals/ra-4 | Counterevidence: photographic emulsion developer/bleach-fix/rinse route excluded; no chemical recipe used |
| `ec-pef-allocation-2021` | official_guidance | Commission Recommendation (EU)2021/2279 Annex I4.5, original PDF63–64; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | Subdivision/feasible system expansion before evidenced causal or justified other allocation; no universal driver/share, waste credit or claim of full PEF/CFF conformity. |
