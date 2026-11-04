---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.recovered-waste-and-scrap-paper-or-paperboard-of-unbleached-kraft-paper-or-paperboard-o-e5074f17
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Dry-sorted baled old corrugated containers for papermaking

## 1. Scope and Applicability

This attributional PCR covers separately collected used corrugated boxes and sheets (OCC) recovered as papermaking feedstock. Start at the original holder’s actual release/collection interface, retain the applicable historical paper-material burden, include collection-point work and contracted inbound collection, receipt/weighing, dry negative sorting, removal of non-paper objects and wrong paper grades, electric conveying/handling, hydraulic compression and steel-wire baling, identification, first quality release, and attributable finished-stock storage/rebaling/loading through the ex-works gate. It is a full feedstock-supply method, not a purchased finished-bale packing service. No factory measurements, recipe, yield or emission default is supplied.

The representative route uses a sheltered dry sorting/baling yard, electrically driven machinery/handling, purchased whole mineral hydraulic fluid and paper tie-on tags, and external contracted collection transport. This is a transparent synthesis of documented operations, not a claim about one contemporary SKU or factory. The US facility case supports separate OCC sorting/baling; it does not establish CN utilities or quantities. CN low-voltage electricity is a qualified identity option only for a matching actual site. No steam, boiler, intentional drying, pulping, washing, deinking, bleaching, pelletising or on-site combustion is assumed. A real additional operation/flow must be added and reviewed, never suppressed to fit the route.

The only production denominator Q is newly first-released net as-received OCC after the actual receiver-specification checks. Wire, tags, separate liquid and removed contamination are excluded. Retain measured moisture/dry solids; no artificial water addition, universal commercial moisture deduction or bale count creates Q. Accepted closing FG is already included in Q. Shipment, reinspection and return/rebaling of an already accepted lot never create Q again.

UN 39241 includes unbleached kraft paper/board and corrugated paper/board waste in all such forms; this method deliberately covers only the used-corrugated subset. It does not cover loose unbleached kraft sacks as the reference output, new paper/board, pulp, mainly bleached chemical-pulp paper (39242), mainly mechanical-pulp newspapers (39243), or mixed unsorted/other recovered paper (39249). Separate wrong-grade contaminants are rejects, not pooled reference product. A commercial grade name or Product UUID alone is no legal end-of-waste, methodology or mapping approval. A separately supplied waste-treatment service has its own function/reference and cannot be called 1 kg OCC supply.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.recovered-waste-and-scrap-paper-or-paperboard-of-unbleached-kraft-paper-or-paperboard-o-e5074f17` |
| classification_refs | CPC 3.0 39241; narrower used-corrugated subset; mapping acceptance is separate |
| covered_products | Separately collected used corrugated boxes/sheets; dry-sorted and steel-wire baled; receiver-specified papermaking feedstock |
| excluded_products | New board; pulp; loose kraft sacks as reference output; bleached-office paper; mechanical-pulp newspapers; mixed unsorted paper; treatment service |
| representative_product | Sheltered-yard dry-sorted OCC bale with actual moisture and receiver grade/contamination limits |
| production_route | Holder collection → inbound collection transport → receipt and dry negative sorting → removal of wrong grades/non-paper objects → hydraulic compression and wire baling → identification and first release → cohort gate services |
| market_state | Baled as-received recovered corrugated paper at ex-works gate before repulping; legal state and receiver acceptance declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply dry-sorted baled OCC as papermaking feedstock |
| How much | 1 kg net as-received OCC at first quality release |
| How well | Actual receiver-agreed grade and bale integrity; measured moisture and unwanted-material composition; no pulping/deinking/bleaching |
| How long or cycle | One traceable first-release cohort plus its declared actual gate-service horizon |
| reference_flow_link | finished_occ |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Recovered (waste and scrap) paper or paperboard, of unbleached kraft paper or paperboard or corrugated paper or paperboard `55b83f36-bbd0-4e88-9fac-77e1a9bd24db` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | used corrugated origin and holder; source-separated collection system; actual input grade and composition; unbleached-kraft or corrugated physical identity; absence of bleached-office/newsprint/unsorted product pooling; dry sorting and baler configuration; wire alloy and coating; tag supply form and composition; gross scale and actual tare records; measured moisture and dry solids method; receiver grade and contamination limits; bale dimensions density integrity and identification; acceptance or conditional acceptance and resolution; legal product or waste status; first-release lot and Q register; opening and closing WIP vectors by exchange; opening and closing FG original Q and vectors; collection transport boundary payload and empty runs; geography electricity voltage and provider; historical paper burden and recycling-boundary allocation; packaging article stocks and transfers including first external nonpurchase receipts; returns reverse attribution and real rework; service horizon and unobserved future work; actual waste destinations and emission compartments |

Declare every qualifier in original dataset metadata, process notes, reference-flow context or equivalent fields. Missing qualifiers make that data package incomplete. The native reference Product is broader than this methodology; every UUID-bearing use below retains the same restrictions in its description.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is newly first-released net as-received OCC under cp_release after final receiver-spec checks. Subtract measured wire/tag tare and separated liquid/contamination. Retain measured dry solids and moisture; invoice moisture deductions are monetary, not new physical mass. No Q for reinspection/rebaling. |
| raw_before_normalization | all inventory rows | Original physical property | original unit | Collect raw unnormalized records. Convert each numerator to its native row unit once before attribution. Integrated volume is a total; integrate only real rates. Use independent substance-specific density at its actual state, never a secondary flow coefficient. The only division by Q is unit_result. |
| electric_energy | recovery_electricity; gate_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Use 1 kWh = 3.6 MJ once. This is CN user-side grid AC below 1 kV, not on-site fuel; retain charging losses once. |
| oil_volume | hydraulic_oil | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Preserve whole-formulation supplied volume. Use 1 L = 0.001 m3 once; independently measure the actual formulation density for kg physical reconciliation, with temperature/configuration and no invented value. |
| physical_water_species | physical balances | Mass | kg | Independently reconcile wet mass, dry solids, free water and relevant measured C/other elements at production, FG and combined gates. No reaction or structural-water transformation is asserted. Separate real evaporation, free liquid and moisture in each output; do not solve two unknowns with one residual. COD/TOC/VOC are indicators, not named species mass. |
| pack_mass | each packaging article | Mass | kg | Weigh each actual wire and tag article separately. Counts require measured article mass for that configuration; no assumed kg/item. Exclude all packaging from Q and net OCC; follow attached packaging through gross physical dispatch and all WIP/FG stocks. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Original holder’s separately collected used corrugated boxes/sheets before recovery-yard sorting; actual received loose/baled state and inherited burden declared |
| starting_condition_role | Recovered-paper Waste input at collection interface; legal and LCA allocation classifications separately documented |
| product_classification_scope | Used-corrugated subset of 39241; not every unbleached-kraft form and not 39242/39243/39249 output |
| recursive_input_rule | Same-category purchased prepared OCC carries its original supply vector; include only uncompleted recovery work. Repacking, internal circulation and external return never create new first-release Q. Do not recur into another full supply dataset and count the same collection/sorting twice. |
| upstream_dataset_requirement | Require compatible historical paper-material allocation and incoming supply state; utilities, whole hydraulic formulation, packaging, collection transport and external waste treatment enter once. Identify true co-producing stage, recycling loops/quality and market-value boundary under allocation rules; never set history to zero solely because the input is waste. |
| disclosure | Holder/source state; receipt and receiver contracts; foreground/upstream division; actual legal/market-value state; physical/burden ledgers; Q and service horizon; failures/returns; exclusions and unresolved data |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_complete | production chain | Include collection-point work, every inbound collection leg, receipt, sorting, removal of actual wrong-grade/non-paper objects, electric handling/conveying, hydraulic wire baling, tagging and first release, then cohort gate services. Upstream originals and incomplete work are distinguished; no purchased-finished-bale shortcut. | `jrc-paper-bref-2015`; `bramidan-b30-wide`; `pa-recovered-material-2005` |
| sb_route | all inventory rows | This dry electric yard assumes no steam/boiler or on-site combustion. Contracted collection uses one compatible transport provider per segment, including its actual fuel/emissions once; add omitted loading/stop effort. If self-operated fuel, heat, chemicals, refrigerants, adsorbents, extra packages or other materials/species occur, add each concrete atomic input/output and protocol with evidence before claiming completeness. Exclusion is not permission to erase real activity. | `jrc-paper-bref-2015`; `bramidan-b30-wide` |
| sb_physical | production; FG; combined gates | Keep grossV physical crossings independent from A attribution and Q. Production: opening WIP + real external feed/additions = closing WIP + paired first-release transfer Q + actual rejects/samples/emissions and independently evidenced water changes. FG: opening released FG + Q + external product returns = closing FG + gross dispatch H + external return-out + real service losses. Internal Q cancels in the combined gate; qualified closing FG already in Q cannot be added as another production output. Packaging has its own material balances. | `jrc-ilcd-2010` |
| sb_stock | all lots and exchanges | Preserve per-exchange inherited vectors for opening/closing WIP, raw/auxiliary stocks and original accepted FG. Include failed/zero-output/start-stop/idle/cleanup and real rework loads. Attribute a later service to its original Q cohort, including opening historical FG; do not divide by current shipments. External returns reverse original delivery attribution once and retain their original burden plus actual incremental work. At a declared cutoff retain unobserved future services as an explicit limit, never a zero claim. | `jrc-ilcd-2010` |
| sb_quality | finished_occ | Release only the declared OCC product after receiver-agreed grade, unwanted-material, moisture and bale-condition checks, with conditional acceptance resolved. Physical mass, commercial deductions and payment are separate. The CEPI guidance illustrates receiver-agreed specifications; no universal 10% moisture, bale weight, percentage tolerance or EN certification is imposed here. | `cepi-recovered-paper-quality` |
| sb_single_outlet | emissions; waste treatment | At a mixed outlet use either the actual outlet total or reconciled non-overlapping source partitions, never both. Whole transferred waste/effluent has one receiving provider; contained species stay in its composition account and are not also elementary emissions. Actual final elementary releases are separate species/media with control and source evidence; no emissions factor comes from a UUID. | `jrc-ilcd-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_recovery | Collection through OCC first release | required | Every scoped first-release cohort; include failed and zero-output activity | Integrated collection/receipt/sorting/removal/baling/identification production account; retain stage meters in protocols | finished_occ |
| p_gate | Released-cohort stock and gate services | required | Actual storage/handling/loading and conditional returns/rebaling; preserve original cohort | FG/service account; paired Q transfer cancels in combined gate | gross_occ_dispatch |

Every conditional card requires actual occurrence evidence or a documented absence; missing data is not zero. These concrete minimum cards do not authorize pooling unlisted real exchanges. All descriptions and inherited section context are normative, including native identity/provider restrictions.

### Process: Recovery production (`p_recovery`)

#### Inputs

##### Product flows

###### Recovery electricity (`recovery_electricity`)

CN grid-average consumption mix supplied to the user below 1 kV; use only that geography/voltage/supply boundary. Its native Net calorific value property denotes energy, not fuel burned on site. Meter kWh then convert to MJ once. A different supply needs another compatible identity/provider; retain charging and charger losses once. Include collection-point compaction when performed, conveying, sorting, electric handling, hydraulic baler drive, extraction, lighting and all failed/idle/cleanup periods.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_utilities_recovery; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities_recovery`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `pa-recovered-material-2005`

###### Contracted road collection transport (`collection_transport`)

Native Freight Truck is a Product freight service with goods transport mass*distance, not purchase of one vehicle or a fuel. Record every real load leg, gross transported mass including attached packaging, distance, payload, empty running, stops and contracted collection/loading scope. Use one compatible provider per service segment; its fuel/emissions are upstream once. Generic route establishes no truck size, diesel grade, country or collection energy factor. Add collection-point/loading effort absent from the provider separately.

- Selected flow: Freight Truck `d55f1329-cd61-44c0-8000-9367d38d5634`
- Flow property / unit: Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_transport; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `pa-recovered-material-2005`

###### Recovery cleaning water (`recovery_water`)

Supplied treated potable municipal water at plant; not reservoir raw water, direct natural-water extraction or a fixed Hong Kong/Brazil provider. Native reference is Mass/kg; a secondary volume factor is not a measured density. Weigh or use metered volume and independently evidenced tap-water density at the measured state. This dry route uses water only for actual cleaning/dust control, not pulping.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_utilities_recovery; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities_recovery`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`

###### Supplied mineral hydraulic fluid (`hydraulic_oil`)

Native Hydraulic Fluid allows mineral or synthetic base oil plus additives; this card is the whole purchased mineral-oil formulation for the baler/electric handling hydraulics. Purchase once, never purchase its base oil/additives again. Native Volume/m3 is mandatory; preserve measured volume and independently measured formulation density for the physical mass ledger. Reconcile reservoir opening/closing stocks, top-up, change-out and leakage. No default density, replacement rate, virgin/refined route or provider is supplied.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_oil; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_oil`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`

###### Production baling wire purchase (`wire_purchase`)

One supplied iron or non-alloy steel baling wire article used on OCC bales. Current native CPC41263 identifies iron or non-alloy steel wire for baling and material binding; the former fencing classification is historical. Exact grade, coating, strength, diameter, supplier and wire mass per bale are unspecified; declare these and select a compatible provider. Exclude wire from Q; procurement and physical attached-wire ledgers are separate. This is P_recovery only; a purchase used in service belongs to P_service, never both.

- Selected flow: Baling wire, iron or non-alloy steel `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_packaging_recovery; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_recovery`
- Sources: `cepi-recovered-paper-quality`

###### Production bale identification tag purchase (`tag_purchase`)

One whole purchased uncoated paper tie-on tag for bale identification; record actual printed/coated composition and supply form. Purchased finished tag includes its manufacturing/printing upstream once; no separate procurement of embodied ink or paper. Attach by the existing bale wire; an actual separate fastener/adhesive needs its own card. Bottled-food/retail-label native candidates do not establish this identity.

- Selected flow: Uncoated paper tie-on identification tag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_packaging_recovery; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_recovery`
- Sources: `cepi-recovered-paper-quality`

##### Waste flows

###### Collected source-separated used corrugated boxes (`received_occ`)

The Waste identity has unspecified name and no route/grade restriction; its 39249 classification is a broader classification placement, not a claim that this stream is mixed unsorted paper. Bind the concrete single paper stream named in this card with measured composition, moisture, origin, legal state and destination. Do not choose it by classification alone or use it as the qualified reference Product. Weigh the whole actual OCC consignment at the holder/collection interface; keep paper, free moisture, incidental tape, staples and other contamination in a composition subledger, not additional purchased inputs. Separate packaging tare and its own ledger; no new board purchase. Positive/negative market value does not change the native Waste type or establish burden-free input. First external nonpurchase attached wire or paper tags enter N through separate atomic receipt events under cp_packaging_recovery; preserve their measured wet mass and inherited vectors once outside net OCC/Q. A tare observation alone is not that receipt record.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_receipt; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_receipt`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `pa-recovered-material-2005`; `jrc-ilcd-2010`

#### Outputs

##### Product flows

###### First-released OCC papermaking feedstock (`finished_occ`)

This generic Product family is production mix at plant with unspecified treatment. Bind only the separately collected used corrugated boxes/sheets of this PCR, dry-sorted and wire-baled to the declared papermaking receiver specification; never new board, pulp, bleached-office grades, newspapers or mixed unsorted paper. No native grade, bale quality, moisture, legal status, geography or compatible provider is established; carry the actual lot and receiver evidence. Q is newly first-released accepted net as-received OCC mass after sorting and actual wire baling, excluding wire, tags, separately removed non-paper material and free liquid. Moisture and dry solids are measured companion values; commercial moisture discounts do not rewrite physical mass. Qualified closing FG is already in Q.

- Selected flow: Recovered (waste and scrap) paper or paperboard, of unbleached kraft paper or paperboard or corrugated paper or paperboard `55b83f36-bbd0-4e88-9fac-77e1a9bd24db`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `identity_reference`
- Collection protocol: `cp_release`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

##### Waste flows

###### Unqualified OCC reject (`rejected_occ`)

The Waste identity has unspecified name and no route/grade restriction; its 39249 classification is a broader classification placement, not a claim that this stream is mixed unsorted paper. Bind the concrete single paper stream named in this card with measured composition, moisture, origin, legal state and destination. Do not choose it by classification alone or use it as the qualified reference Product. Only segregated corrugated paper rejected for contamination/quality or failed processing; no reclassification of accepted stock as new Q. Retain failure loads and actual destination.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_rejects; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_rejects`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### Bleached chemical-pulp paper reject (`bleached_reject`)

The Waste identity has unspecified name and no route/grade restriction; its 39249 classification is a broader classification placement, not a claim that this stream is mixed unsorted paper. Bind the concrete single paper stream named in this card with measured composition, moisture, origin, legal state and destination. Do not choose it by classification alone or use it as the qualified reference Product. A separately weighed bleached office-paper contaminant removed from OCC; excluded from the reference product and not credited as a fixed coproduct.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_rejects; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_rejects`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### Mechanical-pulp newspaper reject (`newsprint_reject`)

The Waste identity has unspecified name and no route/grade restriction; its 39249 classification is a broader classification placement, not a claim that this stream is mixed unsorted paper. Bind the concrete single paper stream named in this card with measured composition, moisture, origin, legal state and destination. Do not choose it by classification alone or use it as the qualified reference Product. A separately weighed newspaper contaminant; not 39241 output. Do not pool with the bleached-paper row.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_rejects; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_rejects`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### Removed polyethylene film (`pe_film_reject`)

One identified PE film contaminant, mechanically removed without washing or regranulation. Verify polymer and actual outlet. PET or already-cleaned PE candidates cannot identify this stream. No automatic recycling credit.

- Selected flow: Unwashed waste polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_rejects; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_rejects`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### Removed polypropylene strap (`pp_strap_reject`)

One identified polypropylene homopolymer strap removed from the incoming OCC, consistent with native CAS 9003-07-0. Filled or copolymer alternatives need identity/grade review. Native PP waste is a plant production mix for mechanical recycling; use only the mechanically separated PP waste sent on that route, not PET/PE or a cleaned pellet. No implied recycling efficiency or provider.

- Selected flow: Polypropylene Wastes `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_rejects; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_rejects`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### Removed steel staples (`steel_reject`)

One segregated steel staple/wire contaminant sent for recycling. Native Waste steel scrap has no grade/route restriction beyond recycling; it does not mean wafer-production wire or melting service. Keep alloy/coating contamination and destination; packaging offcuts are a different ledger row.

- Selected flow: Steel scrap `6b1343f5-929b-4a1b-8459-f741ed19ebd2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_rejects; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_rejects`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### Removed solid wood fragment (`wood_reject`)

One solid wood fragment contaminant; no agglomerated wood, fibreboard, sawdust or energy credit is assumed. Retain actual treatment and hazardous-coating determination.

- Selected flow: Untreated solid wood fragment waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_rejects; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_rejects`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### Removed soda-lime container-glass fragment (`glass_reject`)

One identified container-glass fragment stream, not float cullet, wafer scrap, ceramic or a mixed frangible collection. Add other actual materials separately.

- Selected flow: Unwashed soda-lime container-glass fragment waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_rejects; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_rejects`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### Captured OCC fibre dust (`captured_paper_dust`)

The Waste identity has unspecified name and no route/grade restriction; its 39249 classification is a broader classification placement, not a claim that this stream is mixed unsorted paper. Bind the concrete single paper stream named in this card with measured composition, moisture, origin, legal state and destination. Do not choose it by classification alone or use it as the qualified reference Product. Only captured dry corrugated-paper fibre dust weighed from the collector, not wet pulp or atmospheric dust. Account actual entrained foreign matter separately; no double counting with released particles.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_rejects; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_rejects`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### Removed used hydraulic oil (`used_hydraulic_oil`)

One used mineral hydraulic-oil formulation drained from machinery, with contamination and hazardous status declared. Native used-lubricating-oil Waste identity admits petroleum/synthetic lubricants at generation and leaves treatment unspecified; actual mineral hydraulic lubricant fits only with that documented function. No default regeneration, combustion, landfill or credit.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_oil; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_oil`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### Recovery cleaning effluent (`recovery_effluent`)

One captured cleaning effluent sent to actual external treatment, not a direct elementary discharge, municipal sewage surrogate or manganese-slag wash. Measure water and suspended/dissolved constituents independently. External treatment receives the whole effluent once; separately measured contained pollutants are not emitted again at this transfer.

- Selected flow: Captured OCC-yard cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_water_balance_recovery; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_balance_recovery`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### Production baling-wire offcuts (`wire_production_waste`)

Only scrap of the single steel baling wire from cutting/breakage, sent to recycling. Native steel-scrap Waste type is compatible only with that actual ferrous material and recycling destination. P purchases, used-wire physical transfers and waste are different legs; no automatic coproduct credit.

- Selected flow: Steel scrap `6b1343f5-929b-4a1b-8459-f741ed19ebd2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_packaging_recovery; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_recovery`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

###### Production paper-tag offcuts (`tag_production_waste`)

The Waste identity has unspecified name and no route/grade restriction; its 39249 classification is a broader classification placement, not a claim that this stream is mixed unsorted paper. Bind the concrete single paper stream named in this card with measured composition, moisture, origin, legal state and destination. Do not choose it by classification alone or use it as the qualified reference Product. Only the one uncoated tie-on paper tag discarded in this phase. Whole tag includes embodied print; no imaginary ink purchase or release.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_packaging_recovery; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_recovery`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`

##### Elementary flows

###### Recovery particles emitted to air (`recovery_particles`)

Mass of actual particles emitted to air with unspecified subcompartment and particle-size fraction. Native elementary definition permits this use; its clinker example supplies no OCC factor or composition. Measure/scope the actual source; do not substitute PM10, PM2.5, captured dust or both a size total and its nested fractions. No LCIA coverage is implied.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_emissions_recovery; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions_recovery`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`

###### Recovery water evaporation (`recovery_vapour`)

Actual ordinary H2O vapour emitted to unspecified air; CAS 7732-18-5 agrees with the primary identity despite polluted isotope/ice synonyms in the native list. Do not bind heavy/tritiated water, liquid discharge, purchased steam or an assumed evaporation residual. Measure moisture/air-state evidence; no reaction water is asserted for dry sorting/baling.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_water_balance_recovery; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_balance_recovery`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`

### Process: Finished-stock gate service (`p_gate`)

#### Inputs

##### Product flows

###### Paired first-release receipt (`released_occ_transfer`)

This generic Product family is production mix at plant with unspecified treatment. Bind only the separately collected used corrugated boxes/sheets of this PCR, dry-sorted and wire-baled to the declared papermaking receiver specification; never new board, pulp, bleached-office grades, newspapers or mixed unsorted paper. No native grade, bale quality, moisture, legal status, geography or compatible provider is established; carry the actual lot and receiver evidence. Paired internal receipt of exactly the production Q lot; cancels with finished_occ in the combined physical gate and is not a second purchase or production output.

- Selected flow: Recovered (waste and scrap) paper or paperboard, of unbleached kraft paper or paperboard or corrugated paper or paperboard `55b83f36-bbd0-4e88-9fac-77e1a9bd24db`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_ledger_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ledger_gate`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `jrc-ilcd-2010`

###### External return of previously released OCC (`returned_occ`)

This generic Product family is production mix at plant with unspecified treatment. Bind only the separately collected used corrugated boxes/sheets of this PCR, dry-sorted and wire-baled to the declared papermaking receiver specification; never new board, pulp, bleached-office grades, newspapers or mixed unsorted paper. No native grade, bale quality, moisture, legal status, geography or compatible provider is established; carry the actual lot and receiver evidence. Conditional actual external return only. Link the original shipment, original acceptance and historical burden vector; reverse the original delivery attribution once. Sorting/rebaling adds only real incremental work to the original cohort; reinspection/release never creates new Q.

- Selected flow: Recovered (waste and scrap) paper or paperboard, of unbleached kraft paper or paperboard or corrugated paper or paperboard `55b83f36-bbd0-4e88-9fac-77e1a9bd24db`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_ledger_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ledger_gate`
- Sources: `cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### Finished-stock and dispatch electricity (`gate_electricity`)

CN grid-average consumption mix supplied to the user below 1 kV; use only that geography/voltage/supply boundary. Its native Net calorific value property denotes energy, not fuel burned on site. Meter kWh then convert to MJ once. A different supply needs another compatible identity/provider; retain charging and charger losses once. Cohort-attributed storage, electric handling, rework, loading, idle and cleanup remain after release.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_utilities_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities_gate`
- Sources: `cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### Finished-stock cleaning water (`gate_water`)

Supplied treated potable municipal water at plant; not reservoir raw water, direct natural-water extraction or a fixed Hong Kong/Brazil provider. Native reference is Mass/kg; a secondary volume factor is not a measured density. Weigh or use metered volume and independently evidenced tap-water density at the measured state. This dry route uses water only for actual cleaning/dust control, not pulping.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_utilities_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities_gate`
- Sources: `cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### Service replacement baling-wire purchase (`wire_service_purchase`)

One supplied iron or non-alloy steel baling wire article used on OCC bales. Current native CPC41263 identifies iron or non-alloy steel wire for baling and material binding; the former fencing classification is historical. Exact grade, coating, strength, diameter, supplier and wire mass per bale are unspecified; declare these and select a compatible provider. Exclude wire from Q; procurement and physical attached-wire ledgers are separate. P_service is only a disjoint partition of actual procurement; internal reuse is not purchase.

- Selected flow: Baling wire, iron or non-alloy steel `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_packaging_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_gate`
- Sources: `cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### Service replacement paper-tag purchase (`tag_service_purchase`)

The same one purchased tag article as tag_purchase, restricted to service replacements. Split the invoice P into disjoint production/service use; do not repurchase returned or internally reused tags. No bottle-label UUID is asserted.

- Selected flow: Uncoated paper tie-on identification tag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_packaging_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_gate`
- Sources: `cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### Externally returned baling wire received (`wire_external_received`)

One supplied iron or non-alloy steel baling wire article used on OCC bales. Current native CPC41263 identifies iron or non-alloy steel wire for baling and material binding; the former fencing classification is historical. Exact grade, coating, strength, diameter, supplier and wire mass per bale are unspecified; declare these and select a compatible provider. Exclude wire from Q; procurement and physical attached-wire ledgers are separate. ER includes loose and attached returns, each actual crossing once. Its prior procurement vector is inherited; ER is not P. Require the same article/lot trace to its actual prior outward crossing and receipt; first external nonpurchase entry, even if used elsewhere, is N rather than ER. Do not invent outward history.

- Selected flow: Baling wire, iron or non-alloy steel `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_packaging_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_gate`
- Sources: `cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### Externally returned paper tag received (`tag_external_received`)

ER of the same one tag article, loose or attached to externally returned goods. Exclude its mass from product returns and Q; inherit its original vector without repurchase. Trace this same article/lot to its actual prior outward crossing and receipt. A first external nonpurchase tag, including one used elsewhere, is a separate N event under the actual phase protocol, never ER or I.

- Selected flow: Uncoated paper tie-on identification tag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_packaging_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_gate`
- Sources: `cepi-recovered-paper-quality`; `jrc-ilcd-2010`

#### Outputs

##### Product flows

###### Gross physical OCC dispatch (`gross_occ_dispatch`)

This generic Product family is production mix at plant with unspecified treatment. Bind only the separately collected used corrugated boxes/sheets of this PCR, dry-sorted and wire-baled to the declared papermaking receiver specification; never new board, pulp, bleached-office grades, newspapers or mixed unsorted paper. No native grade, bale quality, moisture, legal status, geography or compatible provider is established; carry the actual lot and receiver evidence. H is gross actual net OCC physically dispatched, including historical stock and repeat shipments. Record original cohort; not necessarily Q and never a second new output. The receiver-spec gate is ex works ready for dispatch; off-site outbound transport is separately disclosed downstream, not silently included.

- Selected flow: Recovered (waste and scrap) paper or paperboard, of unbleached kraft paper or paperboard or corrugated paper or paperboard `55b83f36-bbd0-4e88-9fac-77e1a9bd24db`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_ledger_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ledger_gate`
- Sources: `cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### OCC returned externally to prior owner (`occ_external_returnout`)

This generic Product family is production mix at plant with unspecified treatment. Bind only the separately collected used corrugated boxes/sheets of this PCR, dry-sorted and wire-baled to the declared papermaking receiver specification; never new board, pulp, bleached-office grades, newspapers or mixed unsorted paper. No native grade, bale quality, moisture, legal status, geography or compatible provider is established; carry the actual lot and receiver evidence. Actual return-out to the prior owner; pair its original receipt/delivery and burden reversal once. It is distinct from H deliveries to the papermaking customer and never Q.

- Selected flow: Recovered (waste and scrap) paper or paperboard, of unbleached kraft paper or paperboard or corrugated paper or paperboard `55b83f36-bbd0-4e88-9fac-77e1a9bd24db`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_ledger_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ledger_gate`
- Sources: `cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### Baling wire attached to gross dispatch (`wire_shipped`)

One supplied iron or non-alloy steel baling wire article used on OCC bales. Current native CPC41263 identifies iron or non-alloy steel wire for baling and material binding; the former fencing classification is historical. Exact grade, coating, strength, diameter, supplier and wire mass per bale are unspecified; declare these and select a compatible provider. Exclude wire from Q; procurement and physical attached-wire ledgers are separate. S follows all actual gross goods dispatch H, including repeat shipment and historical stock. Attached-wire mass is not net OCC or new wire procurement.

- Selected flow: Baling wire, iron or non-alloy steel `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_packaging_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_gate`
- Sources: `cepi-recovered-paper-quality`

###### Paper tag attached to gross dispatch (`tag_shipped`)

S of this one tag follows H, not Q; its pre-existing procurement vector leaves with the same article. No extra print or paper input at dispatch.

- Selected flow: Uncoated paper tie-on identification tag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_packaging_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_gate`
- Sources: `cepi-recovered-paper-quality`

###### Baling wire returned externally (`wire_external_out`)

One supplied iron or non-alloy steel baling wire article used on OCC bales. Current native CPC41263 identifies iron or non-alloy steel wire for baling and material binding; the former fencing classification is historical. Exact grade, coating, strength, diameter, supplier and wire mass per bale are unspecified; declare these and select a compatible provider. Exclude wire from Q; procurement and physical attached-wire ledgers are separate. EO is actual return-out, distinct from wire shipped with H. A crossing cannot be both S and EO; internal reuse I cancels.

- Selected flow: Baling wire, iron or non-alloy steel `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_packaging_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_gate`
- Sources: `cepi-recovered-paper-quality`

###### Paper tag returned externally (`tag_external_out`)

EO is the actual external return-out of this one tag, distinct from S; I cancels within the article ledger.

- Selected flow: Uncoated paper tie-on identification tag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_packaging_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_gate`
- Sources: `cepi-recovered-paper-quality`

##### Waste flows

###### OCC lost or rejected after release (`gate_occ_loss`)

The Waste identity has unspecified name and no route/grade restriction; its 39249 classification is a broader classification placement, not a claim that this stream is mixed unsorted paper. Bind the concrete single paper stream named in this card with measured composition, moisture, origin, legal state and destination. Do not choose it by classification alone or use it as the qualified reference Product. Only actual service-stage OCC loss/rejection, preserving original Q/vector and incremental work. Do not fabricate new production or discard inherited burdens.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_ledger_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ledger_gate`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### Service baling-wire waste (`wire_service_waste`)

Same steel wire article discarded during storage/rebaling/loading and actually sent to recycling; distinguish from incoming contaminant staples. No second purchase, avoided-steel credit or overlap with EO/S.

- Selected flow: Steel scrap `6b1343f5-929b-4a1b-8459-f741ed19ebd2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_packaging_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_gate`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### Service paper-tag waste (`tag_service_waste`)

The Waste identity has unspecified name and no route/grade restriction; its 39249 classification is a broader classification placement, not a claim that this stream is mixed unsorted paper. Bind the concrete single paper stream named in this card with measured composition, moisture, origin, legal state and destination. Do not choose it by classification alone or use it as the qualified reference Product. Only the same tag discarded after release; include attached packaging stocks and original tag vector.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_packaging_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_gate`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`; `jrc-ilcd-2010`

###### Finished-stock cleaning effluent (`gate_effluent`)

Same single actual captured cleaning effluent, service-stage partition only, sent to external treatment once. No direct water emission is asserted; test actual contaminants and retain receiving-provider interface.

- Selected flow: Captured OCC-yard cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_water_balance_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_balance_gate`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`; `cepi-recovered-paper-quality`; `jrc-ilcd-2010`

##### Elementary flows

###### Service particles emitted to air (`gate_particles`)

Mass of actual particles emitted to air with unspecified subcompartment and particle-size fraction. Native elementary definition permits this use; its clinker example supplies no OCC factor or composition. Measure/scope the actual source; do not substitute PM10, PM2.5, captured dust or both a size total and its nested fractions. No LCIA coverage is implied. Service-stage source partition only; do not add a mixed outlet total to its source components.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_emissions_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions_gate`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`

###### Service water evaporation (`gate_vapour`)

Actual ordinary H2O vapour emitted to unspecified air; CAS 7732-18-5 agrees with the primary identity despite polluted isotope/ice synonyms in the native list. Do not bind heavy/tritiated water, liquid discharge, purchased steam or an assumed evaporation residual. Measure moisture/air-state evidence; no reaction water is asserted for dry sorting/baling. Distinguish release-stage moisture from later evaporation; retain historical product mass and stock vectors.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Retain the unnormalized numerator for this row and phase under cp_water_balance_gate; reference the same sole per-reference calculation in section 8 after conversion and attribution.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_balance_gate`
- Sources: `jrc-paper-bref-2015`; `bramidan-b30-wide`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| al_order | each shared exchange | This is attributional material supply where allocation is required, not a consequential substitution model. First assign dedicated measured work and subdivide real or virtual operations. Then test an exchange-specific determining physical causal relationship to each function. Only the truly inseparable residual uses contemporaneous market values at the same actual process gate and material state. Do not arbitrarily choose mass/economics, impose a fixed fraction, or infer causal allocation from an industrial process diagram. Retain drivers and sensitivity. | `jrc-ilcd-2010` |
| al_history | received_occ; historical paper material | Record actual value at origin independently from legal/native Waste status. For valuable OCC at origin apply the ILCD attributional recycling treatment: identify the true co-producing stage with technically comparable recovered material, retain relevant primary/recycling/final-loss inventories and quality/loop assumptions, and allocate under al_order. Do not attach every historic packaging-use service merely because the box existed, or drop relevant paper manufacture by calling it waste. Use a compatible independently documented upstream vector; if absent, disclose the missing historical vector and withhold a complete cradle-to-gate result. No universal recycling rate or infinite-loop factor is supplied. | `jrc-ilcd-2010` |
| al_negative_origin | negative-value incoming material | If a real treatment fee/negative-value state occurs, locate the actual process where valuable secondary goods first arise, preserving physical/material quality and comparable true co-producing history. ILCD Annex14 distinguishes preceding treatment responsibility from the joint boundary process. Retain preceding treatment in its responsible system and apply the same subdivision/causality/residual-value order at the boundary process, including the absolute negative gate value only for the remaining service/value calculation. Do not charge all historic treatment to OCC or silently give all collection a zero burden. Zero/ambiguous values need documented review; uncertainty is not a default cut-off. | `jrc-ilcd-2010` |
| al_outputs | other separated material; collection service | Other separately saleable paper grades, PP, steel or other real outputs require their own measured quantities/state, destination and genuine co-function test. Exclusive sorting/baling work is assigned to them; only shared residual is allocated under al_order. Physical rejects remain in grossV even when their attributed load differs. Recycling potential, waste diversion and future avoided virgin paper/steel/energy are not automatic credits. Waste treatment and material supply must not use incompatible service/product providers for one transferred load. | `jrc-ilcd-2010` |
| al_stock | all inventory rows | Keep physical V, attributed exchange vectors A and original first-release Q separate. Carry each lot’s WIP/FG burdens through production and gate services, reversing original delivery only once on return; rework contributes only truly new F. X may remove only an exact documented same-side duplicate already in OTHER, never an independent historic burden, real export or material loss. No stock-allocation fraction changes physical V or turns service dispatch into Q. | `jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

The aggregation_rule cells below declare the final reporting basis only. Every protocol collects and sums unnormalized raw records by row/stage/cohort; it performs no division by Q. Convert and attribute these original numerators first, then reference only the single unit_result calculation. The same computed value is reported on the declared per-reference basis without a second quotient.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_receipt | p_recovery | received_occ | weighing | holder; lot; origin grade; gross mass; actual tare; composition fractions; moisture; input value and fee; legal state; collection-point work; upstream vector | Calibrated collection/receipt scales and representative unpacked sorting/moisture samples; reconcile holder and yard tickets with losses and external packaging separately. Retain whole consignment and non-additive component subledger. Collect and sum unnormalized raw records by row/stage/cohort. The per-reference aggregation label is only the final report basis; conversion and attribution precede the single division in section 8. | kg | each consignment | Complete declared production and cohort service horizon including failures and no-output intervals | Named holder/yard plus each contracted interface and original cohort | per 1 kg reference flow | Calibration; tickets; signed lot logs; receiver/specification evidence; uncertainty; original units; gap and absence evidence |
| cp_release | p_recovery | finished_occ | acceptance | unique first-release id; lot; prior acceptance flag; gross bale mass; measured wire/tag tare; net as-received OCC; moisture/dry solids; contamination; bale integrity; receiver limits; acceptance decision; Q | Weigh on calibrated scales after actual sorting/baling; check grade, bale condition, moisture and unwanted materials against recorded receiver agreement; resolve conditional acceptance before Q. Moisture sampling/oven or calibrated instrument method retains sample basis; no universal wet-weight discount. Collect and sum unnormalized raw records by row/stage/cohort. The per-reference aggregation label is only the final report basis; conversion and attribution precede the single division in section 8. | kg | each first-release lot | Complete declared production and cohort service horizon including failures and no-output intervals | Named holder/yard plus each contracted interface and original cohort | per 1 kg reference flow | Calibration; tickets; signed lot logs; receiver/specification evidence; uncertainty; original units; gap and absence evidence |
| cp_utilities_recovery | p_recovery | electricity; water | metering | meter id; stage; cohort; raw beginning/end reading; raw unit; rate/time if applicable; voltage; site/provider; allocation driver; actual idle/cleanup/rework interval; measured water density if needed | Separate electricity and tap-water meters with stage/cohort logs and calibrated instruments; retain integrated readings versus rates. Close against bills and add failed/idle/start-stop/cleaning loads; charging is counted once. This protocol is the recovery phase partition only; reconcile its paired transfer with the other phase. Collect and sum unnormalized raw records by row/stage/cohort. The per-reference aggregation label is only the final report basis; conversion and attribution precede the single division in section 8. | MJ; kg | each reading interval | Complete declared production and cohort service horizon including failures and no-output intervals | Named holder/yard plus each contracted interface and original cohort | per 1 kg reference flow | Calibration; tickets; signed lot logs; receiver/specification evidence; uncertainty; original units; gap and absence evidence |
| cp_utilities_gate | p_gate | electricity; water | metering | meter id; stage; cohort; raw beginning/end reading; raw unit; rate/time if applicable; voltage; site/provider; allocation driver; actual idle/cleanup/rework interval; measured water density if needed | Separate electricity and tap-water meters with stage/cohort logs and calibrated instruments; retain integrated readings versus rates. Close against bills and add failed/idle/start-stop/cleaning loads; charging is counted once. This protocol is the gate phase partition only; reconcile its paired transfer with the other phase. Collect and sum unnormalized raw records by row/stage/cohort. The per-reference aggregation label is only the final report basis; conversion and attribution precede the single division in section 8. | MJ; kg | each reading interval | Complete declared production and cohort service horizon including failures and no-output intervals | Named holder/yard plus each contracted interface and original cohort | per 1 kg reference flow | Calibration; tickets; signed lot logs; receiver/specification evidence; uncertainty; original units; gap and absence evidence |
| cp_transport | p_recovery | collection_transport | trip_record | leg id; holder/site; load mass; attached packaging; distance; payload; empty running; stops; collection/loader coverage; fuel/vehicle provider scope; invoice | Use actual route/trip and weighbridge evidence, not assumed truck class. Retain load-distance in original units and disjoint service segments; show collection-point activity absent from the provider separately, one provider per segment. Collect and sum unnormalized raw records by row/stage/cohort. The per-reference aggregation label is only the final report basis; conversion and attribution precede the single division in section 8. | t*km | each trip leg | Complete declared production and cohort service horizon including failures and no-output intervals | Named holder/yard plus each contracted interface and original cohort | per 1 kg reference flow | Calibration; tickets; signed lot logs; receiver/specification evidence; uncertainty; original units; gap and absence evidence |
| cp_oil | p_recovery | hydraulic_oil; used_hydraulic_oil | maintenance | whole formulation; grade; mineral base; oil reservoir opening/closing; purchase/top-up/change-out; original volume; temperature; independently measured density; drained waste mass; contained spills; site phase | Measure whole oil formulation volume and independent state-specific density; reconcile reservoir and purchase records with drain weights and actual captured losses. Separate prior-fill stock burden from new purchases; add real spill sorbents and elementary releases atomically if present. Collect and sum unnormalized raw records by row/stage/cohort. The per-reference aggregation label is only the final report basis; conversion and attribution precede the single division in section 8. | m3; kg | each purchase/top-up/change and period close | Complete declared production and cohort service horizon including failures and no-output intervals | Named holder/yard plus each contracted interface and original cohort | per 1 kg reference flow | Calibration; tickets; signed lot logs; receiver/specification evidence; uncertainty; original units; gap and absence evidence |
| cp_rejects | p_recovery | each separate reject | sorting_record | individual material/polymer; actual grade; source lot; gross/tare mass; moisture; dry solids; destination; recovery/treatment contract; sampled composition; captured versus released dust | Weigh segregated rejects per physical material and paper grade; use measured representative composition only with uncertainty and no additive double count of whole load and constituents. Verify polymer/glass/wood state independently; add actual unlisted materials. Collect and sum unnormalized raw records by row/stage/cohort. The per-reference aggregation label is only the final report basis; conversion and attribution precede the single division in section 8. | kg | each batch and outlet | Complete declared production and cohort service horizon including failures and no-output intervals | Named holder/yard plus each contracted interface and original cohort | per 1 kg reference flow | Calibration; tickets; signed lot logs; receiver/specification evidence; uncertainty; original units; gap and absence evidence |
| cp_packaging_recovery | p_recovery | each wire or tag leg | article_ledger |one article specification; original unit; measured article mass; opening empty/attached WIP/attached FG/reusable; P_recovery; P_service; ER; I; closing empty/attached WIP/attached FG/reusable; S on gross H; EO; W; original vector; N_recovery; unique article receipt event id; article/lot identity; actual source and supply state; cohort; gate; phase; period; independently measured current wet mass; inherited exchange vector and one burden owner; ER prior outward/receipt links; same-side OTHER/X proof |Separate full ledger for steel wire and paper tag; count and weigh actual configuration. P partitions are disjoint, ER is external return received, I internal reuse, S with gross dispatch, EO external return-out, W actual waste. Transfer attached packaging at Q between gates with paired records. Retain prior stock and returned-article vectors; no repurchase or Q credit. Apply the same ledger to every actual added package, including reusable articles. This protocol is the recovery phase partition only; reconcile its paired transfer with the other phase. Collect and sum unnormalized raw records by row/stage/cohort. The per-reference aggregation label is only the final report basis; conversion and attribution precede the single division in section 8. For each actual first external nonpurchase inlet in this phase, create a separate atomic input event row wire_n_recovery_<event_id> for the single steel baling-wire article (Baling wire 56ddb6db-1bf1-4c3c-b3db-bb00063774a8), or tag_n_recovery_<event_id> for the single uncoated paper tie-on tag (UUID unresolved as declared); retain each article's existing native restrictions. Each uses Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg, actual process p_recovery, source/cohort/gate/phase/period and one burden owner. Its complete Amount has expression = independently measured unnormalized current-wet kg under cp_packaging_recovery followed by raw_units, attributed_vector and the sole unit_result; value_mode calculated_value; specificity site_specific; basis per 1 kg reference flow / reference_flow; evidence calculated_from_collection with collection_protocol_id cp_packaging_recovery and source_ids cepi-recovered-paper-quality and jrc-ilcd-2010; no invented range. Before dataset use, keep each real event's distinct row/event ID, concrete identity and complete Amount, resolving the tag identity or disclosing incompleteness. Add any other actual material as its own concrete atomic event. Record N_recovery once at the actual external interface, not again on internal transfer. N is not P, traced same-article ER, or internal reuse I; an article previously used elsewhere is still N on first nonpurchase entry. Paid/bundled acquisition already in P is not N. Measure wet mass independently, not a balancing residual; retain inherited history without a second manufacture/purchase burden or assumed zero. Closing retention remains in the full article stock account. | kg | each movement and stocktake | Complete declared production and cohort service horizon including failures and no-output intervals | Named holder/yard plus each contracted interface and original cohort | per 1 kg reference flow | Calibration; tickets; signed lot logs; receiver/specification evidence; uncertainty; original units; gap and absence evidence |
| cp_packaging_gate | p_gate | each wire or tag leg | article_ledger |one article specification; original unit; measured article mass; opening empty/attached WIP/attached FG/reusable; P_recovery; P_service; ER; I; closing empty/attached WIP/attached FG/reusable; S on gross H; EO; W; original vector; N_gate; unique article receipt event id; article/lot identity; actual source and supply state; cohort; gate; phase; period; independently measured current wet mass; inherited exchange vector and one burden owner; ER prior outward/receipt links; same-side OTHER/X proof |Separate full ledger for steel wire and paper tag; count and weigh actual configuration. P partitions are disjoint, ER is external return received, I internal reuse, S with gross dispatch, EO external return-out, W actual waste. Transfer attached packaging at Q between gates with paired records. Retain prior stock and returned-article vectors; no repurchase or Q credit. Apply the same ledger to every actual added package, including reusable articles. This protocol is the gate phase partition only; reconcile its paired transfer with the other phase. Collect and sum unnormalized raw records by row/stage/cohort. The per-reference aggregation label is only the final report basis; conversion and attribution precede the single division in section 8. For each actual first external nonpurchase inlet in this phase, create a separate atomic input event row wire_n_gate_<event_id> for the single steel baling-wire article (Baling wire 56ddb6db-1bf1-4c3c-b3db-bb00063774a8), or tag_n_gate_<event_id> for the single uncoated paper tie-on tag (UUID unresolved as declared); retain each article's existing native restrictions. Each uses Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg, actual process p_gate, source/cohort/gate/phase/period and one burden owner. Its complete Amount has expression = independently measured unnormalized current-wet kg under cp_packaging_gate followed by raw_units, attributed_vector and the sole unit_result; value_mode calculated_value; specificity site_specific; basis per 1 kg reference flow / reference_flow; evidence calculated_from_collection with collection_protocol_id cp_packaging_gate and source_ids cepi-recovered-paper-quality and jrc-ilcd-2010; no invented range. Before dataset use, keep each real event's distinct row/event ID, concrete identity and complete Amount, resolving the tag identity or disclosing incompleteness. Add any other actual material as its own concrete atomic event. Record N_gate once at the actual external interface, not again on internal transfer. N is not P, traced same-article ER, or internal reuse I; an article previously used elsewhere is still N on first nonpurchase entry. Paid/bundled acquisition already in P is not N. Measure wet mass independently, not a balancing residual; retain inherited history without a second manufacture/purchase burden or assumed zero. Closing retention remains in the full article stock account. | kg | each movement and stocktake | Complete declared production and cohort service horizon including failures and no-output intervals | Named holder/yard plus each contracted interface and original cohort | per 1 kg reference flow | Calibration; tickets; signed lot logs; receiver/specification evidence; uncertainty; original units; gap and absence evidence |
| cp_ledger_recovery | p_recovery | physical and inherited vectors | lot_ledger | lot; grossV by each material; opening/closing WIP; original accepted FG; original Qc; inherited exchange vector; Q transfer; H dispatch; return original-delivery link and reversal; actual F; exact duplicate X in OTHER; service time; losses | Reconcile production, FG and combined physical gates separately from per-exchange attribution. Preserve every inherited vector and original cohort. Reverse returns once; add actual incremental rework only. Retain zero-output/failed/idle/start-stop/cleanup records and service cutoff; historical FG uses its original Qc. This protocol is the recovery phase partition only; reconcile its paired transfer with the other phase. Collect and sum unnormalized raw records by row/stage/cohort. The per-reference aggregation label is only the final report basis; conversion and attribution precede the single division in section 8. | kg; native exchange units | each movement and period close | Complete declared production and cohort service horizon including failures and no-output intervals | Named holder/yard plus each contracted interface and original cohort | per 1 kg reference flow | Calibration; tickets; signed lot logs; receiver/specification evidence; uncertainty; original units; gap and absence evidence |
| cp_ledger_gate | p_gate | physical and inherited vectors | lot_ledger | lot; grossV by each material; opening/closing WIP; original accepted FG; original Qc; inherited exchange vector; Q transfer; H dispatch; return original-delivery link and reversal; actual F; exact duplicate X in OTHER; service time; losses | Reconcile production, FG and combined physical gates separately from per-exchange attribution. Preserve every inherited vector and original cohort. Reverse returns once; add actual incremental rework only. Retain zero-output/failed/idle/start-stop/cleanup records and service cutoff; historical FG uses its original Qc. This protocol is the gate phase partition only; reconcile its paired transfer with the other phase. Collect and sum unnormalized raw records by row/stage/cohort. The per-reference aggregation label is only the final report basis; conversion and attribution precede the single division in section 8. | kg; native exchange units | each movement and period close | Complete declared production and cohort service horizon including failures and no-output intervals | Named holder/yard plus each contracted interface and original cohort | per 1 kg reference flow | Calibration; tickets; signed lot logs; receiver/specification evidence; uncertainty; original units; gap and absence evidence |
| cp_emissions_recovery | p_recovery | actual particles to air | monitoring | source; stage; control; compartment; particle-size basis; measured concentration; actual gas volume or rate/time; stack/fugitive scope; mixed-outlet partition; uncertainty | Measure actual discharge or use an independently evidenced source-specific method; never infer mass from captured dust or a generic UUID example. Integrated sampled volume is not multiplied by time again; temperature/pressure/moisture bases must agree. Species or size-total and subfractions cannot be added twice. This protocol is the recovery phase partition only; reconcile its paired transfer with the other phase. Collect and sum unnormalized raw records by row/stage/cohort. The per-reference aggregation label is only the final report basis; conversion and attribution precede the single division in section 8. | kg | each monitored source/interval | Complete declared production and cohort service horizon including failures and no-output intervals | Named holder/yard plus each contracted interface and original cohort | per 1 kg reference flow | Calibration; tickets; signed lot logs; receiver/specification evidence; uncertainty; original units; gap and absence evidence |
| cp_emissions_gate | p_gate | actual particles to air | monitoring | source; stage; control; compartment; particle-size basis; measured concentration; actual gas volume or rate/time; stack/fugitive scope; mixed-outlet partition; uncertainty | Measure actual discharge or use an independently evidenced source-specific method; never infer mass from captured dust or a generic UUID example. Integrated sampled volume is not multiplied by time again; temperature/pressure/moisture bases must agree. Species or size-total and subfractions cannot be added twice. This protocol is the gate phase partition only; reconcile its paired transfer with the other phase. Collect and sum unnormalized raw records by row/stage/cohort. The per-reference aggregation label is only the final report basis; conversion and attribution precede the single division in section 8. | kg | each monitored source/interval | Complete declared production and cohort service horizon including failures and no-output intervals | Named holder/yard plus each contracted interface and original cohort | per 1 kg reference flow | Calibration; tickets; signed lot logs; receiver/specification evidence; uncertainty; original units; gap and absence evidence |
| cp_water_balance_recovery | p_recovery | free water and effluent | water_ledger | tap water; incoming/outgoing lot moisture; opening/closing material water; cleaning effluent mass/volume; independent density; measured dissolved/suspended composition; evaporation measurement; rain/condensation if real; actual destination | Reconcile water independently from total mass and measured elements at all gates. Measure effluent and evaporation separately or retain unknowns; never fit both from one residual. Add real rainwater/condensate flows specifically if present; no assumed steam loop or structural/reaction water. Whole wastewater crosses external-treatment interface once. This protocol is the recovery phase partition only; reconcile its paired transfer with the other phase. Collect and sum unnormalized raw records by row/stage/cohort. The per-reference aggregation label is only the final report basis; conversion and attribution precede the single division in section 8. | kg | each lot/cleaning event and stocktake | Complete declared production and cohort service horizon including failures and no-output intervals | Named holder/yard plus each contracted interface and original cohort | per 1 kg reference flow | Calibration; tickets; signed lot logs; receiver/specification evidence; uncertainty; original units; gap and absence evidence |
| cp_water_balance_gate | p_gate | free water and effluent | water_ledger | tap water; incoming/outgoing lot moisture; opening/closing material water; cleaning effluent mass/volume; independent density; measured dissolved/suspended composition; evaporation measurement; rain/condensation if real; actual destination | Reconcile water independently from total mass and measured elements at all gates. Measure effluent and evaporation separately or retain unknowns; never fit both from one residual. Add real rainwater/condensate flows specifically if present; no assumed steam loop or structural/reaction water. Whole wastewater crosses external-treatment interface once. This protocol is the gate phase partition only; reconcile its paired transfer with the other phase. Collect and sum unnormalized raw records by row/stage/cohort. The per-reference aggregation label is only the final report basis; conversion and attribution precede the single division in section 8. | kg | each lot/cleaning event and stocktake | Complete declared production and cohort service horizon including failures and no-output intervals | Named holder/yard plus each contracted interface and original cohort | per 1 kg reference flow | Calibration; tickets; signed lot logs; receiver/specification evidence; uncertainty; original units; gap and absence evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_units | all inventory rows | Preserve original readings; convert each raw numerator once to the native row unit before attribution. MJ = 3.6 * kWh; m3 = 0.001 * L; transport t*km = sum(actual gross transported kg * actual leg km / 1000). Density-based conversion uses independent measured density for that substance/state; only real rates are integrated. | raw readings; native units; measured density; cp_utilities_recovery; cp_utilities_gate; cp_transport; cp_oil | converted raw row totals | `jrc-ilcd-2010` |
| gross_balance | all inventory rows | For each material at each physical gate: opening stock + external receipts + paired internal receipts = closing stock + actual external outflows + paired internal transfers + independently evidenced transformations. Production Q and FG receipt Q cancel only at combined gate. Packaging, wet mass, dry solids, water and relevant elements each reconcile independently; never apply allocation fractions to grossV. | grossV; cp_receipt; cp_ledger_recovery; cp_ledger_gate; cp_water_balance_recovery; cp_water_balance_gate | reconciled physical gates | `jrc-ilcd-2010` |
| first_release | finished_occ | Q = sum newly first-released net as-received OCC under cp_release, after actual packaging tare and separated contamination/free-liquid exclusion. Newly qualified closing FG is already included once. Exclude reinspection, prior released returns and H gross dispatch. If Q = 0 retain real loads and no unit result. | cp_release; unique original acceptance register | Q | `cepi-recovered-paper-quality`; `jrc-ilcd-2010` |
| attributed_vector | all inventory rows | Construct A_j from the legitimately attributed converted raw exchange load, applicable upstream history, inherited opening WIP and cohort services. Deduct closing WIP or unused-stock vectors only when already inside that same numerator; do not deduct stocks again from already-net consumption. Preserve historical FG original vector/Qc; returns reverse original delivery once and add only actual new work F. Subtract X only for an exact same-side duplicate already in OTHER. Carry physical V_j separately with no allocation multiplier. | converted raw row totals; cp_ledger_recovery; cp_ledger_gate; origin allocation evidence; F; X; OTHER | A_j; V_j | `jrc-ilcd-2010` |
| unit_result | all inventory rows | For Q > 0 the sole unit calculation is x_j = A_j / Q. Report v_j = V_j / Q separately as a physical companion, not an additive attributed exchange. Historical-cohort services use original Qc instead of Q and append that same quotient once, never shipment H. The reference output itself is exactly 1 kg. Cards and protocol aggregation reference this one quotient and never divide it again. | A_j; V_j; Q; Qc; cp_release; cp_ledger_recovery; cp_ledger_gate | x_j; v_j | `jrc-ilcd-2010` |
| packaging_balance |wire_purchase; tag_purchase; wire_service_purchase; tag_service_purchase; wire_external_received; tag_external_received; wire_shipped; tag_shipped; wire_external_out; tag_external_out; wire_production_waste; tag_production_waste; wire_service_waste; tag_service_waste; wire_n_recovery_<event_id>; tag_n_recovery_<event_id>; wire_n_gate_<event_id>; tag_n_gate_<event_id> |For each one article: opening empty + opening attached WIP + opening attached FG + opening reusable + P + N + ER = closing empty + closing attached WIP + closing attached FG + closing reusable + S + EO + W. P = disjoint P_recovery + P_service; ER external return received; S follows all gross dispatch H; EO external return-out; W actual waste. I internal reuse cancels, as does paired attached packaging at Q. No leg is new OCC Q, repurchase or automatic coproduct. N = disjoint N_recovery + N_gate, measured current-wet first external nonpurchase receipts of each article, whether new or previously used elsewhere; P includes actual paid/bundled procurement once and is disjoint from N. ER requires the same article/lot's actual prior outward crossing and receipt; I remains internal reuse only. Instantiate each steel-wire/tag N event with its own row/event ID and complete Amount under the actual phase protocol. Carry its physical inlet and applicable inherited vector once; no zero-history assumption, second manufacture or credit. Preserve wet opening/closing empty, attached WIP/FG and reusable stocks, including receipts still closing. OTHER/X removes only an evidenced same-side exact duplicate where that same article mass is already included; tare observation, closing retention, an opposite flow or mere card presence never cancels the real inlet. Reconcile whole OCC/packaging component accounts as nonadditive views with one burden owner. | cp_packaging_recovery; cp_packaging_gate; P; N; ER; I; S; EO; W; H; Q | one reconciled ledger per article | `jrc-ilcd-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all UUID-bearing rows | Verify actual product/waste/elementary type, all name facets, synonyms/comments, CAS where relevant, route/form/geography/media, full properties and exact reference-property/unit-group chain. Generic identity does not validate a provider. Keep every native restriction in consumable row context. | Full direct records; exact unit references; supply-state and provider documents |
| dq_complete | all inventory rows | Complete actual materials, utility, packaging, waste and elementary exchanges; conditionally absent rows need evidence. No hidden other/zero bucket. Auxiliary UUID/provider gaps remain precise named gaps; a missing core identity or actual endpoint/method evidence blocks completeness. | Stage walkdown; contracts; stock and destination reconciliation; explicit gap register |
| dq_sampling | finished_occ; received_occ | Actual receiver-spec sampling, contamination and moisture evidence must represent the lot, preserve sample basis and uncertainty, and distinguish visual acceptance from quantitative assay. No copied universal threshold/yield from a case or old grade presentation. | Receiver agreement; random sample and moisture records; calibrated scale/instrument |
| dq_history | cp_ledger_recovery; cp_ledger_gate; attribution | Preserve actual original units and all failed/Q0/idle/cleanup intervals, every opening/closing WIP exchange vector and historical FG/Qc. Show allocation sensitivity, value gate/state and missing origin vector rather than declaring a complete product footprint. | Original lot ledgers; origin chain model; reconciled physical/burden stock tables |
| dq_source | all sources | UN establishes classification scope; JRC/PA establish operations, not universal quantities; CEPI is industry guidance, not the complete licensed EN standard; ILCD supports attributional allocation only under its conditions. Multiple extracts of one publication are one source. | Complete source context and actual foreground evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| vr_scope | finished_occ | Reject new paper/pulp, mixed unsorted product, bleached chemical-pulp paper or mechanical-pulp newspaper substituted as OCC. Verify product state, legal/receiver gate and all qualifiers before methodological use. | `un-cpc-39241`; `cepi-recovered-paper-quality` |
| vr_denominator | all inventory rows | Both languages use 1 kg first-release Q and finished_occ. Require raw records without pre-division, legitimate A, single unit_result A/Q, Q0 load retention and no closing-FG/shipment/reinspection double production. Retain original Qc for historical services and complete return reversals. | `jrc-ilcd-2010` |
| vr_balances | production; FG; combined; packaging |Independently close gross physical mass, water, relevant elements and each article’s complete article ledger at all gates; cancel internal Q and attached-pack transfers only at combined gate. Preserve each exchange stock vector, failed activity and real incremental rework; do not use a residual to invent several species or unknown losses. Require disjoint P/N/ER/I evidence and all real N inlet event rows, including N still in closing stocks. Check per-article wet mass, source/cohort/gate/phase/period, complete Amount, inherited vector and one burden owner; require actual same-article prior-outward/receipt links for ER. Reject residual N, untraced first receipt called ER, duplicated paid/bundled P, repurchase/zero-history assumptions and unsupported X deductions. | `jrc-ilcd-2010` |
| vr_sources | each material; utility; species | Check complete native identity facets and precise units, original source applicability and actual one-provider interface. Missing auxiliary UUID is explicit; no incompatible UUID may disguise it. No duplicated mixed-outlet partitions, assumed physical/economic allocation, automatic recovery credit or discarded historical paper burden. Unresolved actual endpoint/origin method prevents a complete dataset claim. | `jrc-paper-bref-2015`; `bramidan-b30-wide`; `jrc-ilcd-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Receiver-compatible baled OCC supply input to papermaking stock preparation; separate actual downstream transport and pulping |
| allowed_use | Attributional material-supply modelling with declared history, actual receiver grade, input state, collection boundary and measured foreground data |
| excluded_use | Automatic all-39241 coverage; waste-treatment service substitution; avoided virgin-paper credit; new board/pulp/bleached/newsprint/mixed-paper supply; certified EN compliance |
| required_metadata | All reference qualifiers; collection/receiver interface; native/provider limitations; Q cohort and cutoff; upstream origin allocation; individual stock and packaging ledgers |
| required_quality_disclosure | Measured versus missing values; sampling uncertainty; allocation sensitivity; source age/geography; auxiliary identity/provider gaps; unobserved service horizon; incomplete historical vector if any |
| update_trigger | Changed feed grade/collection stream; treatment or utility route; receiver limits; native identity/provider state; origin allocation; sampling; packaging; stock/return method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-39241 | official_guidance | United Nations Statistics Division. CPC Version 3.0, subclass 39241 and adjacent 39242/39243/39249; https://unstats.un.org/unsd/classifications/Econ/Detail/EN/2100/39241 | Classification forms and scope; no manufacturing or LCA allocation factor |
| jrc-paper-bref-2015 | official_guidance | European Commission JRC. Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015), §6.1.1 pp.550–551 (PDF588–589), adjacent §6.1.2; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Collection yards and dry sorting/bales versus downstream pulping; no utility or emissions default |
| pa-recovered-material-2005 | official_guidance | Pennsylvania DEP / R. W. Beck. Pennsylvania Recovered Material Composition Study (February 2005), Appendix A pp.A-1–A-3 (PDF56–58); https://files.dep.state.pa.us/waste/recycling/recyclingportalfiles/documents/rec_mat_comp.pdf | Separate OCC feed, negative sorting and baling as a historical US facility example; exclude its unrelated container line and quantities |
| cepi-recovered-paper-quality | handbook | CEPI. Paper for Recycling Quality Control Guidelines, §§1–6.4.2.3 and quality-control diagram (PDF2–9,12); https://www.cepi.org/wp-content/uploads/2022/02/PaperforRecyclingQuality-Control-GuidelinesWITHANNEX.pdf | Receiver-agreed grade/bale/moisture/unwanted-material checks and conditional acceptance; not universal thresholds, legal advice or the complete EN643 standard |
| bramidan-b30-wide | handbook | Bramidan. B30 Wide, product operation, full technical specifications and FAQ; publisher HTML snapshot 2026-10-26; https://www.bramidan.com/vertical-balers/b30-wide/ | Electric baling, wire-versus-strap option, removal/storage and hydraulic-oil/shelter context; model ratings and capacities are not actual OCC consumption or universal bale requirements |
| jrc-ilcd-2010 | official_guidance | European Commission JRC. ILCD Handbook General guide for LCA—Detailed guidance (March 2010), §7.9.3 pp.257–258 (PDF277–278), Annex14.4 pp.349–354 (PDF369–374), Figure33 and adjacent consequential distinction; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision, exchange-specific determining physical causality, remaining gate-value allocation and recycling-history/value-boundary distinctions; no fixed share, cut-off or substitution credit |
