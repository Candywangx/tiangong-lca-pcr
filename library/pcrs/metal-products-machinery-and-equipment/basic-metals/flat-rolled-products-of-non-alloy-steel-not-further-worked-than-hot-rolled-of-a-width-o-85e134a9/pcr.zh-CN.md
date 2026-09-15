---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-not-further-worked-than-hot-rolled-of-a-width-o-85e134a9
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 宽度小于600毫米、除热轧外未经进一步加工的非合金钢平板轧材

## 1. 范围与适用性

本 PCR 适用于成品宽度小于 600 mm、冶金状态除热轧外未经进一步加工的非合金钢平板轧材，包括以卷材形式交付的热轧窄带钢以及以定尺形式交付的热轧扁平产品。生产路线可以由半成品钢直接轧至声明宽度，也可以在不冷减薄且不改变冶金状态的前提下，对较宽的非合金钢热轧产品进行切边、纵切或横切。前景数据包必须声明参考产品采用的路线及所含单元过程。

冷轧产品；包覆、镀层、涂层、酸洗涂油、抛光或以其他方式进一步加工的产品；合金钢、不锈钢和电工钢；长材；钢管；以及成品宽度为 600 mm 及以上的产品均不在本 PCR 范围内。包装、出厂后的外运、下游制品加工、使用及报废阶段不在本 PCR 范围内；若研究明确增加这些阶段，必须作为独立下游模块报告。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-not-further-worked-than-hot-rolled-of-a-width-o-85e134a9 |
| classification_refs | CPC 3.0：41212，精确的产品分类语境（`un-cpc-3-0-structure-2025`） |
| covered_products | 非合金钢平轧带材、卷材、薄板或定尺材；成品宽度 < 600 mm；除热轧外未经进一步加工 |
| excluded_products | 宽度 >= 600 mm；合金钢、不锈钢或电工钢；冷减薄、包覆、镀层、涂层、酸洗涂油、抛光或其他进一步加工的产品；长材或钢管 |
| representative_product | 在生产厂或精整厂门口交付的非合金钢热轧窄带卷 |
| production_route | 声明的半成品钢直接热轧路线，或声明的较宽非合金钢热轧产品切边、纵切、横切路线，且不进行冷减薄或表面处理 |
| market_state | 交付状态的干燥卷材、带材、薄板或定尺材；无涂层，参考数量不含包装质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合要求的非合金钢平板轧材，成品宽度 < 600 mm，除热轧外未经进一步加工 |
| How much | 1,000 kg 净合格产品，不含包装 |
| How well | 声明钢号、厚度、宽度、尺寸公差、边缘状态、表面状态以及卷材或定尺形式；不进行冷减薄、包覆、镀层、涂层、酸洗涂油、抛光或其他被排除的进一步加工 |
| How long or cycle | 无使用周期；以声明的代表性核算期表征生产 |
| reference_flow_link | `reference_product_narrow_hot_rolled_non_alloy_steel` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 除热轧外未经进一步加工的宽度小于600毫米的非合金钢平板轧材 `9705bbad-51bd-4ee8-af46-21324f57c577` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 非合金钢钢号；成品宽度和厚度；尺寸公差；卷材、带材、薄板或定尺形式；边缘和表面状态；直接轧制或宽带精整路线；适用时的加热炉和轧机配置；燃料组合；电力供应商或电网地域；水系统边界；场址和地域；生产期；分配方法；内部循环及外运氧化铁皮和废钢的处理方式 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品以及所有钢坯料、氧化铁皮和废钢行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告交付状态的干燥产品质量，排除包装，并将核算期总量归一化至 1,000 kg 合格参考产品。 |
| `fuel_volume_conditions` | 气态天然气投入 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 报告计量气体体积时须同时报告温度、压力和计量参考条件；未经记录在案的换算，不得合并不同参考条件下测得的体积。 |
| `electricity_energy_basis` | 交流电投入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 有分项计量时须按过程阶段保留电能数据；记录向 MJ 的任何换算以及上游采用的供应商特定、区域或国家电力数据集。 |
| `makeup_water_mass_balance` | 除鳞和冷却补充水行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅记录跨边界的工艺水净质量。校准体积计量记录只有在采用有记录的核算期特定密度时方可换算为质量；内部循环流量不得重复计作新鲜水投入。 |
| `wastewater_volume_balance` | 处理后废水行 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 仅记录跨边界的处理后净排放量；内部循环流量不得重复计作排放。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 可供加热和热轧的非合金钢半成品，或仅供切边、纵切或横切的较宽非合金钢热轧平板产品；须声明选定的起始状态和上游数据集 |
| starting_condition_role | 第一项前景单元过程的外购或转入技术系统投入 |
| product_classification_scope | 成品宽度 < 600 mm、除热轧及允许的尺寸精整外未经进一步加工的非合金钢平板轧材 |
| recursive_input_rule | 不得将上游热轧钢投入并入输出参考流。该投入须作为独立技术系统投入记录，并关联自身上游数据集及宽度/产品状态限定信息。 |
| upstream_dataset_requirement | 每项半成品钢或较宽热轧钢投入，以及燃料、电力和供水，都须关联地域和技术具有代表性的上游数据集，并防止重复计算任何上游热轧阶段。 |
| disclosure | 声明起始状态、直接轧制或宽带精整路线、所含阶段、热装做法、炉型和轧机型式、精整操作、内部循环、废水处理、场址、地域、核算期及全部排除项。 |

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_stage_inclusion` | foreground_gate_to_gate_boundary | 纳入将声明的钢材起始状态转化为合格产品所采用的全部厂内阶段：搬运与调质、适用时的加热、除鳞、粗轧和精轧、受控冷却、卷取及尺寸精整；相关水处理和辅助能源计入其服务的阶段。 | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `boundary_exchange_completeness` | foreground_gate_to_gate_boundary | 按所含阶段记录所有跨边界材料、燃料、电力、净用水、实测或计算排放、废物和回收物输出；不得以合并的公用工程、燃料、废物或排放行替代原子交换。 | `worldsteel-lci-methodology-2017` |
| `boundary_route_exclusivity` | route_selection | 仅当前景场址实际实施时，才纳入加热和热轧阶段。对于仅纵切/横切的路线，较宽热轧投入须关联上游数据集，且其已建模的热轧负荷不得再次计入前景转换阶段。 | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `boundary_excluded_operations` | downstream_and_further_work | 冷减薄、酸洗涂油、包覆、镀层、涂层、抛光、下游制品加工、包装、出厂外运、使用和报废均不计入参考边界；若另行纳入，须在本参考结果之外单独报告。 | `un-cpc-3-0-structure-2025`; `ec-jrc-fmp-bref-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `reheating_and_conditioning` | 坯料搬运、调质与加热 | conditional | 当前景场址对半成品钢进行热轧时纳入；若转换厂仅接收已完成热轧的较宽投入并进行纵切/横切，则不纳入。 | 将坯料制备并加热至轧制状态。 | 装炉并转入轧制的半成品钢质量。 |
| `hot_rolling_and_descaling` | 除鳞与热轧 | conditional | 当前景场址实施热轧时纳入；若该阶段完全由上游宽带数据集表示，则不纳入。 | 去除氧化铁皮，并将钢轧至要求的热轧尺寸和性能。 | 离开精轧机组的热轧带钢质量。 |
| `cooling_and_finishing` | 受控冷却、卷取与尺寸精整 | required | 始终纳入；仅记录实际实施的冷却、卷取、切边、纵切和横切操作。 | 在工厂门口生产并放行合格参考产品。 | 1,000 kg 净合格参考产品。 |

### 过程：坯料搬运、调质与加热（`reheating_and_conditioning`）

#### 输入

##### 产品流

###### 非合金钢半成品坯料（`semi_finished_non_alloy_steel_feedstock`）

记录进入前景热轧路线的板坯或其他已声明非合金钢半成品质量。炼钢和铸造负荷归属于所关联的上游数据集。

- 选定流：用于平轧的连铸钢板坯 `fa93b446-0340-4d7b-9f4d-e3f78789ea94`
- 流属性/单位：Mass / kg
- 数量规则：装入加热工序的净称量质量，经库存变动核对后归一化至 1,000 kg 合格参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reheating_inputs`
- 来源：`ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### 加热用天然气（`reheating_natural_gas`）

记录所含加热炉或均热炉消耗的计量气态天然气，并声明供应地域和气体体积参考条件。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：归属于核算期的加热炉天然气计量体积，归一化至 1,000 kg 合格参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reheating_inputs`
- 来源：`ec-jrc-fmp-bref-2022`

###### 加热用交流电（`reheating_electricity`）

记录分配给本过程的坯料搬运、加热炉辅助设备及调质设备所用的计量交流电。

- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分项计量电量，或依据共享电表形成的有记录工程分配量，归一化至 1,000 kg 合格参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reheating_inputs`
- 来源：`worldsteel-lci-methodology-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 从加热钢材去除的炉生氧化铁皮（`reheating_furnace_scale`）

将加热和初始调质阶段收集的氧化铁皮实测质量记录为本过程输出，并说明净输出是内部循环、外部回收还是处置。

- 选定流：氧化铁皮 `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- 流属性/单位：Mass / kg
- 数量规则：经含水率修正并扣除内部返回量后的净氧化铁皮实测输出，归一化至 1,000 kg 合格参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reheating_outputs`
- 来源：`ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

##### 基本流

###### 加热产生的化石源二氧化碳（`reheating_fossil_carbon_dioxide_to_air`）

记录所含加热炉直接排放的化石源二氧化碳，采用烟气实测值或有记录的燃料碳计算，不得叠加上游燃料供应排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测或经核实计算的直接化石源 CO2 排放质量，归一化至 1,000 kg 合格参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_reheating_outputs`
- 来源：`worldsteel-lci-methodology-2017`

###### 加热产生的氮氧化物（`reheating_nitrogen_oxides_to_air`）

按照设施的报告口径记录加热烟气中的直接氮氧化物；仅在记录该口径的情况下，才换算为以 NO2 计的质量。

- 选定流：排放至空气的氮氧化物（以NO2计）
- 流属性/单位：Mass / kg
- 数量规则：烟气连续监测或测试结果乘以干烟气流量和运行时间，归一化至 1,000 kg 合格参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_reheating_outputs`
- 来源：`ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### 加热产生的二氧化硫（`reheating_sulfur_dioxide_to_air`）

当有实测值或可依据实际炉用燃料硫平衡计算时，记录直接二氧化硫排放；不得用通用燃料组合值替代。

- 选定流：排放至空气的二氧化硫
- 流属性/单位：Mass / kg
- 数量规则：实测或经核实计算的直接 SO2 排放质量，归一化至 1,000 kg 合格参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_reheating_outputs`
- 来源：`ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

### 过程：除鳞与热轧（`hot_rolling_and_descaling`）

#### 输入

##### 产品流

###### 热轧用交流电（`hot_rolling_electricity`）

记录分配给本过程的除鳞泵、粗轧和精轧机架、传动装置、辊道及过程控制所用交流电。

- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分项计量电量，或依据共享电表形成的有记录工程分配量，归一化至 1,000 kg 合格参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_rolling_inputs`
- 来源：`ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### 高压除鳞补充水（`descaling_makeup_water`）

仅记录进入除鳞水系统的新鲜补充水或外部供水净量；内部循环水不得再次计作边界投入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：进入除鳞系统的外部补充水净称量质量，或采用有记录的核算期特定密度将校准体积换算所得的质量，归一化至 1,000 kg 合格参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_rolling_inputs`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 轧钢氧化铁皮（`rolling_mill_scale`）

将在除鳞喷淋、氧化铁皮坑和工艺水处理过程中分离出的氧化铁皮，作为本过程一项净废物或回收物输出记录。实测质量须同时报告含水率和含油率。

- 选定流：轧制氧化铁皮 `763bdad1-b443-428a-89b6-371a6807fc6c`
- 流属性/单位：Mass / kg
- 数量规则：经含水率修正并扣除内部返回量后的净氧化铁皮实测输出，归一化至 1,000 kg 合格参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_rolling_outputs`
- 来源：`ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### 热轧废钢（`hot_rolling_steel_scrap`）

将切头切尾、轧废及其他钢质切除物离开本过程的净质量记录为一项化学性质一致的非合金钢废料流。内部返回量须单独平衡，不得重复计入抵扣。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：扣除内部返回量后的废钢净称量输出，归一化至 1,000 kg 合格参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_rolling_outputs`
- 来源：`ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

##### 基本流

###### 热轧产生的颗粒物（`hot_rolling_particulate_to_air`）

按照设施声明的粒径指标和收集边界，记录除鳞、粗轧、轧制和精整过程直接释放的颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：有组织排放实测质量加经量化的无组织颗粒物质量，归一化至 1,000 kg 合格参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_hot_rolling_outputs`
- 来源：`ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

### 过程：受控冷却、卷取与尺寸精整（`cooling_and_finishing`）

#### 输入

##### 产品流

###### 较宽的非合金钢热轧坯料（`wider_hot_rolled_non_alloy_steel_feedstock`）

对于仅切边、纵切或横切的路线，记录进入本过程的已完成热轧的较宽非合金钢平板产品质量。直接热轧窄带路线不得使用本行。

- 选定流：非合金钢板，卷 `ce3ac926-5d6f-4558-9edc-67179d93dde4`
- 流属性/单位：Mass / kg
- 数量规则：投入称量质量，经库存变动核对后归一化至 1,000 kg 合格参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_inputs`
- 来源：`ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### 冷却与精整用交流电（`finishing_electricity`）

记录声明产品路线实际使用的冷却泵、输出辊道、卷取机、剪切机、纵切机和横切设备的计量交流电。

- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分项计量电量，或依据共享电表形成的有记录工程分配量，归一化至 1,000 kg 合格参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_inputs`
- 来源：`ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### 受控冷却补充水（`cooling_makeup_water`）

当前景路线实施带钢受控冷却时，仅记录进入冷却系统的外部供给补充水净量；未采用水冷热带钢时不记录本行。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：冷却系统补充水称量质量，或采用有记录的核算期特定密度将校准体积换算所得的质量，扣除有记录的转往其他场址系统的水量后归一化至 1,000 kg 合格参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_inputs`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格非合金钢热轧窄幅产品（`reference_product_narrow_hot_rolled_non_alloy_steel`）

本行是唯一参考产品输出。仅报告符合声明钢号、尺寸、热轧状态且成品宽度小于 600 mm 的产品。

- 选定流：除热轧外未经进一步加工的宽度小于600毫米的非合金钢平板轧材 `9705bbad-51bd-4ee8-af46-21324f57c577`
- 流属性/单位：Mass / kg
- 数量规则：按定义为 1,000 kg 净合格参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`un-cpc-3-0-structure-2025`; `worldsteel-lci-methodology-2017`

##### 废物流

###### 精整废钢（`finishing_steel_scrap`）

记录卷取、切边、纵切或横切产生的边料和切除物净质量。内部返回量须单独平衡，不得重复计入抵扣。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：扣除内部返回量后的精整废钢净称量输出，归一化至 1,000 kg 合格参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_outputs`
- 来源：`ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### 处理后的轧钢废水（`treated_rolling_mill_wastewater`）

记录内部循环之后归属于所含热轧和精整阶段的工艺水处理后净排放量。不得将该排放与氧化铁皮或污泥输出合并。

- 选定流：处理后的轧钢废水
- 流属性/单位：Volume / m3
- 数量规则：分配至所含阶段的处理后净排放计量量，归一化至 1,000 kg 合格参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_outputs`
- 来源：`ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

##### 基本流

## 7. 分配与共产品处理

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_foreground_processes | 对可直接归属的交换，应优先采用分项计量并细分加热、轧制、冷却、精整、水处理和辅助服务，以避免分配。 | `worldsteel-lci-methodology-2017` |
| `allocation_shared_steel_products` | multiple_conforming_steel_products | 完成细分后，对合格热轧钢产品之间剩余的共享前景交换，按同一核算期净产品质量分配，并披露产品、质量和计算过程。 | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recycling` | internal_scale_and_scrap | 将声明系统内返回的氧化铁皮和废钢建模为内部交换，仅报告净边界输出；不得对内部循环给予避免产品抵扣。 | `worldsteel-lci-methodology-2017` |
| `allocation_exported_recovery` | exported_scale_scrap_or_other_coproduct | 对具有经证明市场用途的净外运回收物，优先采用以有记录、功能等同的被替代产品为基础的系统扩展，并在影响显著时报告敏感性；否则仅报告输出和处理，不采用未经验证的替代抵扣。 | `worldsteel-lci-methodology-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reheating_inputs` | `reheating_and_conditioning` | 半成品钢、炉用天然气和加热用电 | 地磅、生产、燃气表和电表记录 | 装炉钢质量；期初与期末库存；天然气体积及参考条件；电量；炉号和生产批次标识 | 将校准计量表与所含加热炉生产批次记录核对。 | kg; m3; MJ | 按批次或班次采集，每月核对 | 连续且具有代表性的 12 个月；较短或异常期间须说明理由 | 服务于声明产品的全部前景加热和调质设备 | 汇总归属记录，实施有记录的共享计量分配，再除以合格参考产品质量并乘以 1,000 kg。 | 校准证书；库存核对；计量表导出；生产台账；分配工作表 |
| `cp_reheating_outputs` | `reheating_and_conditioning` | 炉生氧化铁皮和直接燃烧排放 | 氧化铁皮称量单、烟气监测记录、燃料组成和运行日志 | 氧化铁皮湿重和干重；含水率；内部返回；CO2；NOx 口径；SO2；烟气浓度；干烟气流量；运行时间；燃料碳和硫 | 使用校准称量和烟气数据；计算须保留公式、因子和测量基准。 | kg; kg/Nm3; Nm3; h | 按批次或连续采集，每月核对 | 与产品输出相同的期间 | 所有纳入的加热排放点和氧化铁皮收集点 | 计算核算期归属质量，适用时扣除内部返回，并归一化至 1,000 kg 合格产品。 | 实验室结果；监测 QA/QC；燃料证书；称量单；计算工作簿 |
| `cp_hot_rolling_inputs` | `hot_rolling_and_descaling` | 轧制用电和除鳞补充水 | 电表和水表记录 | 电量；新鲜补充水质量，或体积和密度；转移水量；轧制批次和产品标识 | 使用阶段分项计量；无法分项时，记录共享校准计量的工程分配；水体积只有采用有记录的核算期特定密度时方可换算为质量。 | MJ; kg; m3; kg/m3 | 按班次或每日采集，每月核对 | 与产品输出相同的期间 | 范围内的粗轧、精轧、除鳞泵和辊道设备 | 汇总净归属投入并归一化至 1,000 kg 合格产品。 | 计量表校准；密度记录；趋势记录；分配工作表；生产台账 |
| `cp_hot_rolling_outputs` | `hot_rolling_and_descaling` | 轧钢氧化铁皮、热轧废钢和颗粒物 | 称量单、氧化铁皮坑记录、废钢台账、烟气测试和无组织排放评估 | 氧化铁皮质量、含水率和含油率；废钢质量和内部返回；颗粒物指标、有组织质量、无组织估算、烟气流量和时间 | 将物理输出与生产和水处理记录核对，并记录收集边界。 | kg | 按批次或生产周期采集，每月核对 | 与产品输出相同的期间 | 所有纳入的轧机架、除鳞装置、氧化铁皮坑和排放点 | 按材料计算净边界输出，归一化至 1,000 kg 合格产品，并将回收去向与数量分开记录。 | 称量单；含水率/含油率化验；监测报告；废钢返回台账 |
| `cp_finishing_inputs` | `cooling_and_finishing` | 较宽热轧坯料、精整用电和冷却补充水 | 地磅、钢卷跟踪、电表和水表记录 | 较宽投入质量和尺寸；期初与期末库存；电量；补充水质量，或体积和密度；路线和设备标识 | 通过精整过程关联钢卷或批次身份；使用校准计量和路线特定分配；水体积只有采用有记录的核算期特定密度时方可换算为质量。 | kg; MJ; m3; kg/m3 | 按钢卷、批次或班次采集，每月核对 | 与产品输出相同的期间 | 实际使用的冷却、卷取、切边、纵切和横切设备 | 汇总路线归属记录并归一化至 1,000 kg 合格产品。 | 钢卷谱系；尺寸检验；校准和密度记录；计量表导出 |
| `cp_finishing_outputs` | `cooling_and_finishing` | 合格产品、精整废钢和处理后废水 | 产品称量单、质量放行、废钢台账和排放计量 | 产品质量、钢号、尺寸和处置；废钢质量和内部返回；处理后排放及分配基准 | 核对放行产品、不合格产品、库存变动、废钢和净排水。 | kg; m3 | 按钢卷或批次采集，每月核对 | 与产品输出相同的期间 | 最终产品放行、精整废钢收集及可归属的废水处理 | 汇总合格产品和净输出；将所有非参考输出归一化至 1,000 kg 合格产品。 | 经检定秤具；检验放行；废钢单据；排放计量记录；核对报告 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_period_exchange` | 每项可变清单行 | 归一化数量 = 核算期归属交换量 / 净合格参考产品质量 × 1,000 kg。采用一致核算期并保留未舍入源数据。 | 核算期归属交换量；净合格参考产品质量 | 每 1,000 kg 参考产品的交换量 | `worldsteel-lci-methodology-2017` |
| `reconcile_steel_mass` | 钢坯料、参考产品、氧化铁皮和废钢 | 期初钢库存 + 钢投入 = 期末钢库存 + 合格产品 + 不合格产品 + 内部返回钢 + 净氧化铁皮和废钢输出 + 已记录的残差。解释所有显著残差。 | 库存记录；坯料质量；产品质量；氧化铁皮；废钢；内部返回 | 钢质量平衡核对 | `worldsteel-lci-methodology-2017` |
| `calculate_stack_emission_mass` | 加热 CO2、氮氧化物、二氧化硫及轧制颗粒物 | 有直接质量监测值时优先使用；否则将浓度与口径相容的干烟气量相乘，或采用经核实的燃料组成和氧化数据计算。保留干/湿基、氧修正、报告物种和时间覆盖。 | 浓度；烟气流量；运行时间；燃料组成；修正基准 | 按原子报告交换划分的直接排放质量 | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `calculate_net_water_boundary` | 除鳞水、冷却水和处理后废水 | 净用水投入和排放须排除内部循环，并分别识别转移、蒸发、随氧化铁皮/污泥夹带的水以及计量不平衡。 | 进水计量；排水计量；转移；蒸发估算；夹带记录 | 跨边界净水量 | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和钢投入 | 保留钢号、成品宽度和厚度、热轧状态、形式、边缘/表面状态、路线及钢卷或批次谱系；证明成品宽度 < 600 mm 且未进行被排除的进一步加工。 | 分类和检验记录；`un-cpc-3-0-structure-2025` |
| `dq_temporal_representativeness` | 全部前景记录 | 在可行时使用连续且有代表性的 12 个月期间，并记录停产、异常运行、维护及采用较短期间的理由。 | 期间覆盖报告；生产台账；`worldsteel-lci-methodology-2017` |
| `dq_geography_technology` | 前景和上游数据集 | 识别场址地域、炉型和轧机技术、直接热装做法、精整路线、燃料供应、电力供应商或电网及水处理配置，并说明上游代表性。 | 场址说明；供应商记录；数据集元数据；`worldsteel-lci-methodology-2017` |
| `dq_meter_and_calculation_traceability` | 实测和计算交换 | 保存原始计量表导出、校准状态、公式、分配工作表、换算、报告口径和未舍入值，使有权访问源记录者能够独立复现。 | 校准证书；计算工作簿；QA/QC 记录 |
| `dq_completeness` | 过程清单 | 按所含阶段核算所有已知材料、能源、水、排放、废物和回收物交换；依据研究截断政策记录每项排除流，且不得以截断为由遗漏全部能源。 | 完整性清单和核对；`worldsteel-lci-methodology-2017` |

## 9. 校验规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_product_boundary` | reference_product | 确认非合金钢、热轧状态、成品宽度 < 600 mm、声明的形式和尺寸，并确认未进行被排除的冷减薄或表面处理。 | `un-cpc-3-0-structure-2025`; `ec-jrc-fmp-bref-2022` |
| `validate_reference_amount` | reference_flow | 确认归一化后恰为 1,000 kg 净合格产品，不含包装、不合格材料和内部返回废钢。 | `worldsteel-lci-methodology-2017` |
| `validate_route_and_upstream_link` | route_selection | 确认每项已实施阶段仅纳入一次，每项被省略的上游热轧阶段均由关联投入数据集表示，且未重复计算热轧负荷。 | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `validate_mass_and_water_balances` | foreground_inventory | 对共同核算期执行钢质量平衡和净水边界核对；发布前调查并披露残差。 | `worldsteel-lci-methodology-2017` |
| `validate_uuid_and_atomicity` | inventory_identity | 确认每个选定流均为一个原子交换；对每个已采用的 TianGong UUID 在公开状态 100 下直接复读，并核对名称、流类型、分类、属性、单位组、产品状态、地域、技术和备注。未解决行保持 UUID 为空。 |  |
| `validate_allocation_and_recovery` | shared_burdens_and_recovery_outputs | 确认首先尝试细分、内部返回量未重复抵扣、质量分配采用同期净产品输出，且每项系统扩展抵扣均有功能等同性记录，并在影响显著时进行了敏感性分析。 | `worldsteel-lci-methodology-2017` |
| `validate_bilingual_alignment` | bilingual_pcr_implementation | 确认中英文实施具有相同的过程、行、规则、来源、UUID、受控词元和参考流身份。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完成方法审查、前景核验和发布批准后，可作为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 需要独立识别的非合金钢热轧窄幅产品门到门生产数据集的从摇篮到工厂门或更广生命周期模型 |
| allowed_use | 与声明宽度类别、钢号族、热轧状态、路线、地域、技术、核算期、分配及上游数据集边界一致的产品系统 |
| excluded_use | 冷轧、涂层、包覆、镀层、酸洗涂油、合金钢、不锈钢、电工钢、长材、钢管或宽度 >= 600 mm 的数据集；未采用研究特定功能单位并经审查的对比论断 |
| required_metadata | PCR id；产品身份和尺寸；路线和起始状态；所含过程；场址和地域；期间；炉型和轧机技术；燃料与电力供应；水边界；分配；内部循环及外运去向；来源和数据集版本；未解决 UUID 状态 |
| required_quality_disclosure | 初级数据占比；时间、地域和技术代表性；计量/校准状态；计算和分配方法；质量平衡和水量平衡残差；截断；不确定性；缺失数据；审查状态 |
| update_trigger | 产品分类或状态、路线、炉型或轧机技术、燃料或电力供应、水处理、分配或回收方法、主要投入/输出模式、来源证据、TianGong UUID 身份或代表性生产期发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC 第3.0版结构》，2025年6月30日，代码 41212。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-03） | 正式产品分类身份、非合金钢、热轧状态及宽度阈值 |
| `ec-jrc-fmp-bref-2022` | `official_guidance` | Aries, E. 等，《Best Available Techniques (BAT) Reference Document for the Ferrous Metals Processing Industry》，欧盟委员会联合研究中心，EUR 31321 EN，JRC131649，2022，doi:10.2760/196475。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf（检索日期：2026-09-03） | 热轧窄带定义；热轧工序顺序；加热燃料与排放；除鳞；轧制、冷却、卷取和精整；水系统；氧化铁皮和废物输出 |
| `worldsteel-lci-methodology-2017` | `handbook` | 世界钢铁协会，《Life cycle inventory methodology report for steel products》，2017，ISBN 978-2-930069-89-0。https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf（检索日期：2026-09-03） | 声明单位；门到门边界；初级数据、能源与排放完整性、质量、质量平衡校验、回收和共产品处理 |
