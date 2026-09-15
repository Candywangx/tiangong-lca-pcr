---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-not-further-worked-than-cold-rolled-of-a-width-649bcce4
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 宽度为600毫米及以上、除冷轧外未经进一步加工的非合金钢平板轧材

## 1. 范围与适用性

本 PCR 适用于宽度不小于600毫米、在报告出厂边界处除冷轧外未经进一步加工的未涂镀非合金钢平板轧材。声明钢种、尺寸、表面、平整状态和交付形态后，可涵盖卷材和定尺板。联合钢厂和独立冷轧厂均可采用，但外购中间产品必须链接兼容的上游从摇篮到大门数据集。

不包括宽度小于600毫米的产品、合金钢、不锈钢、硅电工钢、高速钢、热轧产品以及包覆、镀层、涂层或其他进一步加工产品。下游制品制造、使用和报废不计入参考结果。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-not-further-worked-than-cold-rolled-of-a-width-649bcce4 |
| classification_refs | CPC 3.0: 41221 (exact) |
| covered_products | 宽度 >= 600 mm、未涂镀、除冷轧外未经进一步加工的非合金钢冷轧卷或定尺板 |
| excluded_products | 宽度 < 600 mm；合金钢、不锈钢、硅电工钢或高速钢；仅热轧、包覆、镀层、涂层或其他进一步加工产品 |
| representative_product | 钢铁厂或冷轧厂出厂边界处的可销售未涂镀非合金钢冷轧卷 |
| production_route | BOF 或 EAF 炼钢，经铸造、热轧带钢、酸洗、冷轧减薄及声明适用的退火、平整/光整和精整 |
| market_state | 干燥可销售卷材或定尺板；未涂镀；声明钢种、宽度、厚度、平整、表面、边部和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应处于冷轧状态的可销售未涂镀非合金钢平板产品 |
| How much | 1,000 kg 净可销售产品 |
| How well | 符合声明钢种和尺寸，宽度 >= 600 mm，未涂镀，且未超出声明冷轧状态进一步加工 |
| How long or cycle | 一个生产批次或报告期汇总；无使用阶段持续时间 |
| reference_flow_link | `cold_rolled_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 宽度为600毫米及以上、除冷轧外未经进一步加工的非合金钢平板轧材 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 非合金钢钢种；BOF/EAF 路线份额；宽度；厚度；卷材或板材；退火状态；平整/光整状态；表面和边部；未涂镀状态；地域；技术；参考年；包装纳入情况 |

所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。参考产品 UUID 尚未解决：混合检索后对返回候选项逐项直读，未发现与该产品名称及边界完全匹配的天工产品流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品与质量行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用净干基可销售质量，并将所有清单量归一化到1,000 kg `cold_rolled_product`. |
| `electricity_measurement` | 电力行 | Energy | kWh | 在源记录中区分外购和自发电力；报告核对后的净耗电。 |
| `gas_volume_basis` | 天然气和氧气 | Volume | m3 | 声明温度和压力基准；不得合并不兼容的标准体积条件。 |
| `mass_balance_basis` | 中间产品、产品和废物质量 | Mass | kg | 在一致基准上核对投入、产出、内部返回、库存变化和损失。 |

## 5. 系统边界

要求从摇篮到大门结果。外购物料、能源和钢铁中间产品必须采用兼容的上游数据集。前景始于报告组织控制的第一个过程，止于符合要求的产品达到可发运状态。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | 参考数据集 | 纳入上游生产以及至产品出厂的所有受控炼钢、铸造、热轧、酸洗、冷轧、适用退火与精整、公用工程、治理、场内运输和废物管理。 | `worldsteel-2021-lci-study`; `worldsteel-2017-lci-methodology`; `ec-jrc-2022-fmp-bref` |
| `boundary_purchased_intermediate` | 外购板坯或热轧卷 | 外购中间产品仅记录一次并链接兼容的从摇篮到大门上游数据集；不得重复供应商阶段。 | `worldsteel-2021-lci-study`; `worldsteel-2017-lci-methodology` |
| `boundary_product_exclusions` | 产品识别 | 排除涂镀、包覆、下游制造、使用和嵌入式报废回收信用。 | `un-cpc-v3-41221`; `china-mof-2024-tariff-7209`; `worldsteel-2023-cold-rolled-coil-global` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在首个受控钢铁过程接收的原料、废钢或外购钢铁中间产品，并附上游从摇篮到大门数据集 |
| starting_condition_建模角色 | 从摇篮到大门产品系统内的前景控制边界 |
| product_classification_scope | 宽度 >= 600 mm、冷轧终态、未涂镀非合金钢平板产品 |
| recursive_input_rule | 同类别或上游钢铁中间产品仅记录一次，并省略其上游数据集已表示的过程 |
| upstream_dataset_requirement | 所有外购投入采用地域、技术、钢种、时间和分配边界兼容的从摇篮到大门数据集 |
| disclosure | BOF/EAF 份额；受控阶段；中间产品；电力；气体条件；钢种尺寸；退火精整；分配；内部废钢；包装；地域；技术；期间 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `steelmaking_and_casting` | 炼铁、炼钢、精炼与铸造 | conditional | 由场址控制时作为前景纳入；否则在上游表示。路线行仅适用于声明的 BOF/EAF 配置。 | 非合金钢板坯生产 | kg slab |
| `hot_strip_production` | 板坯再加热与热连轧生产 | conditional | 由场址控制时作为前景纳入；否则采用兼容的上游热轧卷数据集。 | 热轧进料卷生产 | kg hot-rolled coil |
| `cold_rolling_and_finishing` | 酸洗、冷轧减薄及适用的精整 | required | 必须纳入酸洗和冷轧减薄；退火、平整/光整及精整仅在出厂边界前实际实施时纳入。 | 合格冷轧产品生产 | 1,000 kg saleable product |

### 过程： 炼铁、炼钢、精炼与铸造 (`steelmaking_and_casting`)

#### 输入

##### 产品流

###### 烧结点火用天然气 (`sinter_ignition_natural_gas`)

仅在纳入范围的烧结机点火实际消耗时记录。

- 选定流： 气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则： 声明条件下的计量体积
- 数值来源模式： `foreground_record`
- 适用范围： `technology_specific`
- 归一化基准： 每1,000 kg可销售参考产品
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_steelmaking_inventory`
- 来源： `worldsteel-2017-lci-methodology`

###### 精炼用工业氧气 (`industrial_oxygen`)

仅在采用吹氧精炼时记录。

- 选定流： 工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位： Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则： 声明标准状态下的计量体积
- 数值来源模式： `foreground_record`
- 适用范围： `technology_specific`
- 归一化基准： 每1,000 kg可销售参考产品
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_steelmaking_inventory`
- 来源： `worldsteel-2017-lci-methodology`

###### 炼钢与铸造用电 (`steelmaking_electricity`)

记录纳入的生产、公用工程和污染治理的核对后用电量。

- 选定流： 钢铁厂使用点电力
- 流属性/单位： Energy / kWh
- 数量规则： 核对后的电表耗电量
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每1,000 kg可销售参考产品
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_steelmaking_inventory`
- 来源： `worldsteel-2021-lci-study`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 精炼产生的化石源二氧化碳 (`fossil_carbon_dioxide`)

仅记录精炼直接排放；不含上游电力排放。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 直接测量或有记录的碳平衡计算
- 数值来源模式： `calculated_value`
- 适用范围： `technology_specific`
- 归一化基准： 每1,000 kg可销售参考产品
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_steelmaking_inventory`
- 来源： `worldsteel-2021-lci-study`

### 过程： 板坯再加热与热连轧生产 (`hot_strip_production`)

#### 输入

##### 产品流

###### 热轧带钢生产用电 (`hot_strip_electricity`)

记录除鳞、轧制、冷却、卷取、公用工程和污染治理用电。

- 选定流： 钢铁厂使用点电力
- 流属性/单位： Energy / kWh
- 数量规则： 核对后的电表耗电量
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每1,000 kg可销售参考产品
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_hot_strip_inventory`
- 来源： `ec-jrc-2022-fmp-bref`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未涂镀热轧卷 (`hot_rolled_coil`)

记录送往酸洗的进料卷。

- 选定流： 热轧钢卷 `4f1a1835-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 计量的放行卷材质量
- 数值来源模式： `calculated_value`
- 适用范围： `product_specific`
- 归一化基准： 每1,000 kg可销售参考产品
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_hot_strip_inventory`
- 来源： `worldsteel-2017-lci-methodology`; `ec-jrc-2022-fmp-bref`

##### 废物流

##### 基本流

### 过程： 酸洗、冷轧减薄及适用的精整 (`cold_rolling_and_finishing`)

#### 输入

##### 产品流

###### 进入酸洗的热轧卷 (`pickling_feed_coil`)

记录冷轧边界处的未涂镀进料卷。

- 选定流： 热轧钢卷 `4f1a1835-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 称量的进料卷质量
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
- 归一化基准： 每1,000 kg可销售参考产品
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_cold_rolling_inventory`
- 来源： `worldsteel-2023-cold-rolled-coil-global`; `ec-jrc-2022-fmp-bref`

###### 冷轧与精整用电 (`cold_rolling_electricity`)

记录酸洗、冷轧减薄及声明适用精整工序的用电。

- 选定流： 钢铁厂使用点电力
- 流属性/单位： Energy / kWh
- 数量规则： 核对后的电表耗电量
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每1,000 kg可销售参考产品
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_cold_rolling_inventory`
- 来源： `ec-jrc-2022-fmp-bref`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格冷轧产品 (`cold_rolled_product`)

本行是与参考流定义匹配的产品输出。其天工产品流 UUID 明确处于未解决状态；仅记录符合声明边界的净可销售产品。

- 选定流： 宽度为600毫米及以上、除冷轧外未经进一步加工的非合金钢平板轧材
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则： 净可销售质量归一化为恰好1,000 kg
- 数值来源模式： `calculated_value`
- 适用范围： `product_specific`
- 归一化基准： 1,000 kg可销售参考产品
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_cold_rolling_inventory`
- 来源： `un-cpc-v3-41221`; `worldsteel-2023-cold-rolled-coil-global`

##### 废物流

##### 基本流


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | foreground burdens | Use direct metering, process subdivision and internal-transfer tracing before allocation. | `worldsteel-2017-lci-methodology` |
| `allocation_internal_scrap` | internal scrap | Treat internal returns as transfers, not external input, final waste or recycling credit. | `worldsteel-2023-cold-rolled-coil-global` |
| `allocation_co_products` | exported co-products | Use system expansion only with a defensible substitute and displacement ratio; disclose assumptions and sensitivity. | `worldsteel-2023-cold-rolled-coil-global`; `worldsteel-2017-lci-methodology` |
| `allocation_end_of_life` | recycling | Report end-of-life recycling separately and prevent double counting. | `worldsteel-2021-lci-study`; `worldsteel-2023-cold-rolled-coil-global` |

## 8. Foreground Data Collection, Calculation, and Quality 规则s

### 数据采集协议

| protocol_id | process_id | flow_建模角色 | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_steelmaking_inventory` | `steelmaking_and_casting` | listed rows | meters, stack data, production records | quantity; unit; time; route; gas condition; boundary | reconcile process and meter records | row-specific | monthly | >= 12 representative months | controlled steelmaking and abatement | normalize after stock and transfer reconciliation | calibration; route balance |
| `cp_hot_strip_inventory` | `hot_strip_production` | listed rows | coil scales and meters | quantity; unit; time; coil; boundary | reconcile campaigns to released coil | row-specific | monthly | >= 12 representative months | controlled hot-strip operations | normalize after transfer reconciliation | calibration; genealogy |
| `cp_cold_rolling_inventory` | `cold_rolling_and_finishing` | listed rows | feed/product scales and meters | quantity; unit; time; coil; grade; dimensions; finishing flags | trace feed through saleable output | row-specific | monthly | >= 12 representative months | cold rolling and applicable finishing | normalize to net saleable output | genealogy; calibration; inspection |

### Calculation 规则s

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every row | normalized quantity = verified row quantity / net saleable product mass x 1,000 kg | row quantity; product mass | quantity per 1,000 kg |  |
| `calc_gas_basis` | gas rows | Convert after recording actual and target temperature, pressure and factor; retain original reading. | volume; conditions; factor | m3 at declared conditions |  |
| `calc_route_weighting` | multi-route dataset | Aggregate separately complete BOF and EAF inventories using verified saleable-mass shares. | route inventories; shares | weighted inventory | `worldsteel-2021-lci-study` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Retain grade, dimensions, form, surface, temper, uncoated status and genealogy. | specification; inspection |
| `dq_route` | route | Report BOF/EAF shares and controlled stages versus purchased intermediates. | production ledger; dataset map |
| `dq_temporal` | foreground | Use >= 12 representative months or justify a shorter campaign. | dated meters and logs |
| `dq_completeness` | all processes | Account for listed rows and add every significant actual atomic exchange without umbrella labels. | balances; signed checklist |
| `dq_upstream` | purchased inputs | Select upstream datasets compatible with geography, technology, state, time and allocation. | metadata and rationale |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference product | Fail for alloy steel, width < 600 mm, coating, further working beyond cold rolling, or missing qualifiers. | `un-cpc-v3-41221`; `china-mof-2024-tariff-7209` |
| `validation_reference_amount` | reference flow | Require one `cold_rolled_product` output normalized to 1,000 kg. | `worldsteel-2023-cold-rolled-coil-global` |
| `validation_route_boundary` | boundary | Require a complete cradle-to-gate chain without duplicated stages. | `worldsteel-2021-lci-study`; `worldsteel-2017-lci-methodology` |
| `validation_process_sequence` | cold rolling | Require pickling and cold reduction plus applicable/not-applicable finishing declarations. | `ec-jrc-2022-fmp-bref` |
| `validation_inventory_atomicity` | inventory | Require one exchange, direction, flow type, amount rule, unit, basis, evidence and protocol per row. |  |
| `validation_allocation` | co-products | Require documented system expansion and separate end-of-life reporting. | `worldsteel-2017-lci-methodology`; `worldsteel-2023-cold-rolled-coil-global` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_建模角色 | `secondary_dataset`; `background_dataset` |
| downstream_use | Cradle-to-gate LCA for uncoated non-alloy cold-rolled flat steel, width >= 600 mm |
| allowed_use | Studies compatible with declared grade, dimensions, route, geography, technology, period and allocation |
| excluded_use | Coated, alloy or stainless products; width < 600 mm; downstream fabrication; undisclosed route mixing |
| required_metadata | PCR id; CPC; grade; dimensions; form; surface; temper; route shares; stages; intermediates; geography; technology; period; allocation; packaging |
| required_quality_disclosure | data coverage; calibration; balance; upstream selection; missing UUIDs; gaps; allocation; recycling; representativeness |
| update_trigger | Change in grade, width, coating/further working, route, technology, energy, allocation, upstream data or period |

## 11. 数据源

| 来源id | Type | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-v3-41221` | `official_guidance` | UNSD, CPC Version 3.0 structure, code 41221, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-03) | classification identity and boundary |
| `china-mof-2024-tariff-7209` | `official_guidance` | Ministry of Finance of China, 2024 tariff schedule, heading 72.09, https://gss.mof.gov.cn/gzdt/zhengcefabu/202312/P020231221537512029907.pdf (retrieved 2026-09-03) | Chinese terminology and uncoated boundary |
| `worldsteel-2017-lci-methodology` | `method_factor` | World Steel Association, Life Cycle Inventory Methodology Report, 2017, https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf (retrieved 2026-09-03) | routes, process chain, boundary and allocation |
| `worldsteel-2021-lci-study` | `dataset` | World Steel Association, Life Cycle Inventory Study: 2020 Data Release, May 2021, https://worldsteel.org/wp-content/uploads/Life-Cycle-Inventory-study-report-2020-data-release.pdf (retrieved 2026-09-03) | boundary, route coverage, collection and quality |
| `worldsteel-2023-cold-rolled-coil-global` | `dataset` | World Steel Association, Global Cold Rolled Coil LCA Eco-profile, June 2023, https://worldsteel.org/wp-content/uploads/Cold-rolled-coil-Global-Other.pdf (retrieved 2026-09-03) | product state, declared unit, routes and allocation |
| `ec-jrc-2022-fmp-bref` | `official_guidance` | European Commission JRC, Ferrous Metals Processing Industry BREF, 2022, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry (retrieved 2026-09-03) | hot-strip steps and cold-rolling sequence |
