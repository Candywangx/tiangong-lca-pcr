---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cinnamon-canella-processed
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 肉桂（桂皮），加工

## 1. 范围与适用性

本 PCR 规定加工厂门口交付的干燥、清洁、分级整段 `Cinnamomum cassia` 桂皮散装产品的前景数据生产规则。锁定的代表路线接收新鲜剥取内皮，经干式清理、45 °C 电加热强制通风干燥、分级切整（不粉碎）、常温干燥储存后出厂。整皮与粉末路线不得平均。

肉桂粉、研磨肉桂、供粉碎或提油的碎片、精油、提取物、其他声明物种的组合桂皮卷、种植、采茎、剥皮、蒸汽杀菌、熏蒸、辐照、燃料加热干燥、桂皮湿洗、冷藏、零售包装和下游运输均不属于锁定路线。含任何排除操作的前景包必须单独声明路线特定数据集，不得并入本路线平均。

## 2. 产品类别标识

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cinnamon-canella-processed |
| classification_refs | CPC 3.0: 23925 — Cinnamon (canella), processed |
| covered_products | 保留可识别树皮形态、作为食品香辛料以散装纸箱销售的干燥、清洁、分级整段 `Cinnamomum cassia` 桂皮。 |
| excluded_products | 粉末、研磨肉桂、供粉碎或提取的碎片、桂皮油、提取物、混合物种产品、组合锡兰肉桂卷、湿或未干桂皮及零售成品包装。 |
| representative_product | 湿基含水率不高于 14%，以瓦楞纸箱加聚丙烯内衬散装的整段桂皮。 |
| production_route | 新鲜剥取内皮接收；干式清理；45 °C 电加热强制通风干燥；分级切整；散装包装；常温干燥储存；出厂。 |
| market_state | 食品级干燥完整树皮段；声明物种、来源、等级、段长、含水率结果、批次、包装配置和未粉碎状态。 |

## 3. 参考流

### 功能单位

| 字段 | 值 |
| --- | --- |
| What | 在加工厂门口提供干燥、清洁、分级整段 `Cinnamomum cassia` 桂皮。 |
| How much | 1 kg 产品净重。 |
| How well | 湿基含水率 ≤14%；保持可识别整皮形态；声明物种、来源、等级、段长、批次、包装和未粉碎状态；符合适用食品安全规范。 |
| How long or cycle | 一个生产批次，归一化至 1 kg 出厂产品。 |
| reference_flow_link | `reference_whole_cinnamon_bark` |

### 天工参考流对象

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cinnamon (canella), processed `3955425f-128e-48d4-b46e-04bf9ee70c22` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species=`Cinnamomum cassia`; product_form=`whole_bark_sticks`; drying_route=`electric_forced_air_45C`; moisture_basis=`wet_basis`; moisture_percent; grade; stick_length_mm; origin; batch_id; packaging=`corrugated_carton_with_pp_liner`; grinding=`none` |

## 4. 计量与单位规则

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品以及所有材料或废物流质量行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将净输出及全部质量流归一化至 1 kg 参考产品，并保留未取整批次总量。 |
| `moisture_wet_basis` | 来料和干燥桂皮 | Mass fraction | % wet basis | 按 `moisture_percent = 100 * water_mass / wet_sample_mass` 计算；湿基与干基结果不得混用。 |
| `electricity_metering` | 干燥机、分级机、包装机、清洁和常温仓电力 | Electrical energy | kWh | 按单元操作分表记录 kWh；共享计量仅按有记录的运行时间或吞吐量分配。 |
| `packaging_net_mass` | 纸箱、PP 内衬、标签和打包带 | Mass | kg | 各包装材料分别依据发票质量、件数乘实测单件质量或领料记录。 |
| `wastewater_mass` | 清洁废水 | Mass or volume | kg or m3 | 保留实测单位与密度假设；废水不得与直接入水环境排放合并。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | `fresh_peeled_inner_bark_received` |
| starting_condition_role | 第一个前景受控状态：新鲜剥取的 `Cinnamomum cassia` 内皮在干式清理前送达加工厂。 |
| product_classification_scope | CPC 3.0 23925，仅由锁定的整段桂皮路线代表。 |
| recursive_input_rule | 任何已属 CPC 23925 的外购加工肉桂投入须作为独立同类别产品投入，并携带供应商数据集与形态限定；不得改称新鲜剥皮或并入前景得率。 |
| upstream_dataset_requirement | 供应商数据集或披露种植、采收、剥皮、来源、物种、来料含水率及交付鲜皮质量。 |
| disclosure | 披露物种、来源、来料和成品含水率、干燥设定温度、拒收桂皮、粉尘控制、清洁方法、包装质量、储存条件及所有偏离锁定路线的事项。 |

### 规范性边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_locked_product_form` | 整个数据集 | 仅纳入整段桂皮。粉末、粉碎、供提取碎片和精油生产均在边界外，且不得与本数据集平均。 | `unido-postharvest-spices-2006`; `arifin-et-al-2021-koerintji` |
| `boundary_same_day_drying` | 接收与干燥 | 尽量缩短接收到干燥的间隔；记录任何暂存及霉变桂皮去向。 | `codex-cxc-78-2017` |
| `boundary_no_route_substitution` | 干燥与后处理 | 代表路线为 45 °C 电加热强制通风干燥，无蒸汽、燃料燃烧、辐照、熏蒸、制冷或桂皮湿洗；出现排除操作时必须另建路线特定数据集。 | `li-et-al-2024-cassia-drying`; `codex-cxc-78-2017` |
| `boundary_supporting_operations` | 工厂操作 | 纳入可归属批次的清洁、包装、常温干燥储存、废水、固废及直接排放。 | `codex-cxc-1-1969`; `unido-postharvest-spices-2006` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `bark_receipt_and_dry_cleaning` | 桂皮接收与干式清理 | required | 始终纳入。 | 核验来料标识，不湿洗并移除异物和不合格桂皮。 | kg accepted fresh peeled bark |
| `electric_hot_air_drying` | 45 °C 电热风干燥 | required | 锁定路线始终纳入。 | 降低含水率并保持整皮形态。 | kg dried bark |
| `grading_and_stick_cutting` | 分级与切段 | required | 始终纳入。 | 对完整桂皮分级并切至声明长度，不研磨。 | kg graded whole bark sticks |
| `bulk_carton_packaging` | 散装纸箱包装 | required | 始终纳入。 | 用瓦楞纸箱和 PP 内衬包装并标识批次。 | kg net packed product |
| `ambient_dry_storage` | 常温干燥储存与出厂 | required | 始终纳入；锁定路线禁止机械制冷。 | 保持产品干燥、防虫并放行参考流。 | kg reference product |
| `facility_sanitation` | 厂房与设备清洁 | conditional | 纳入可归属批次或报告期的清洁；桂皮湿洗仍排除。 | 锁定路线的卫生支持。 | kg 参考产品 |

### 过程：桂皮接收与干式清理（`bark_receipt_and_dry_cleaning`）

#### 输入

##### 产品流

###### 新鲜剥取桂皮内皮（`fresh_peeled_cassia_bark_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`fresh_peeled_cassia_inner_bark`
- 选定流：`fresh_peeled_cassia_inner_bark`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`inputs`
- 流类型：`product`
- 计量基准：`measured_received_wet_mass_per_batch`
- 单位：kg
- 数量规则：拒收前实测来料湿重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bark_mass_moisture`
- 质量证据：`calibrated_receiving_scale_delivery_record_species_origin_and_moisture_sample`
- 数量范围：暂定鲜皮投入筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1.1
  - 上限：3.0
  - 单位：kg/kg reference product
  - 基准：场址得率证据形成前的宽泛初始范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无废物流进入本过程。

##### 基本流

无基本流进入本过程。

#### 输出

##### 产品流

###### 接收的清洁桂皮（`accepted_cleaned_bark_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`accepted_dry_cleaned_cassia_bark`
- 选定流：`accepted_dry_cleaned_cassia_bark`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`product`
- 计量基准：`received_mass_minus_separately_weighed_rejects`
- 单位：kg
- 数量规则：`accepted_cleaned_bark_kg = fresh_peeled_cassia_bark_input_kg - foreign_matter_kg - mould_damaged_bark_kg`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按来料批次，再归一化至每 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bark_mass_moisture`
- 质量证据：`signed_batch_mass_balance`

##### 废物流

###### 移除异物（`removed_foreign_matter_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`foreign_matter_from_bark_dry_cleaning`
- 选定流：`foreign_matter_from_bark_dry_cleaning`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`waste`
- 计量基准：`separately_weighed_removed_material`
- 单位：kg
- 数量规则：实测石块、泥土、植物残余、绳、塑料及其他异物；原始记录按去向分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接收的清洁桂皮
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_solid_waste_dust`
- 质量证据：`labelled_waste_container_scale_ticket_and_fate_record`

###### 霉变或不合格桂皮（`mould_damaged_bark_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`mould_damaged_or_nonconforming_cassia_bark`
- 选定流：`mould_damaged_or_nonconforming_cassia_bark`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`waste`
- 计量基准：`separately_weighed_rejected_bark`
- 单位：kg
- 数量规则：实测拒收桂皮；记录处理或处置并禁止返料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接收的清洁桂皮
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_solid_waste_dust`
- 质量证据：`rejection_log_scale_ticket_and_disposition_record`
- 来源：`codex-cxc-78-2017`

##### 基本流

###### 接收环节逸散桂皮粉尘入空气（`receipt_bark_dust_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`cinnamon_bark_dust_to_air_at_receipt`
- 选定流：`cinnamon_bark_dust_to_air_at_receipt`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`elementary`
- 计量基准：`measured_or_mass_balance_uncontrolled_dust_release`
- 单位：kg
- 数量规则：实测排放或 `generated_dust_kg - collected_dust_kg`；结果不得为负。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接收的清洁桂皮
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_reject_solid_waste_dust`
- 质量证据：`dust_collection_mass_and_control_device_operating_record`
- 数量范围：暂定逸散粉尘筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.01
  - 单位：kg/kg accepted cleaned bark
  - 基准：场址实测形成前的宽泛初始范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：45 °C 电热风干燥（`electric_hot_air_drying`）

#### 输入

##### 产品流

###### 接收清洁桂皮投入（`accepted_cleaned_bark_input_to_dryer`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`accepted_dry_cleaned_cassia_bark`
- 选定流：`accepted_dry_cleaned_cassia_bark`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`inputs`
- 流类型：`product`
- 计量基准：`measured_dryer_charge_mass`
- 单位：kg
- 数量规则：实测入干燥机桂皮质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每干燥批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bark_mass_moisture`
- 质量证据：`dryer_charge_scale_record_and_batch_link`

###### 电阻加热用电（`dryer_heater_electricity`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`grid_electricity_for_resistive_dryer_heating`
- 选定流：`grid_electricity_for_resistive_dryer_heating`
- 流属性/单位：Electrical energy / kWh
- 流 UUID：
- 方向：`inputs`
- 流类型：`product`
- 计量基准：`dedicated_electricity_meter`
- 单位：kWh
- 数量规则：批次加热元件实测用电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 干燥桂皮
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_operation_electricity`
- 质量证据：`calibrated_submeter_start_end_readings_and_batch_time`
- 数量范围：暂定加热用电筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.2
  - 上限：5.0
  - 单位：kWh/kg dried bark
  - 基准：宽泛初始电加热范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 风机与控制用电（`dryer_fan_control_electricity`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`grid_electricity_for_dryer_fans_and_controls`
- 选定流：`grid_electricity_for_dryer_fans_and_controls`
- 流属性/单位：Electrical energy / kWh
- 流 UUID：
- 方向：`inputs`
- 流类型：`product`
- 计量基准：`dedicated_or_panel_submeter`
- 单位：kWh
- 数量规则：不含加热元件的风机、输送、传感器和控制系统实测用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 干燥桂皮
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_operation_electricity`
- 质量证据：`submeter_or_power_runtime_record_reconciled_to_site_bill`
- 数量范围：暂定风机与控制用电筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：1.0
  - 单位：kWh/kg dried bark
  - 基准：宽泛初始辅助用电范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无废物流进入本过程。

##### 基本流

无基本流进入本过程。锁定干燥路线禁止蒸汽、热水、燃料和制冷剂。

#### 输出

##### 产品流

###### 干燥整皮（`dried_whole_bark_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`dried_whole_cassia_bark_before_grading`
- 选定流：`dried_whole_cassia_bark_before_grading`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`product`
- 计量基准：`measured_dryer_discharge_mass_and_final_moisture`
- 单位：kg
- 数量规则：达到湿基含水率 ≤14% 后实测出料质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每干燥批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bark_mass_moisture`
- 质量证据：`calibrated_discharge_scale_moisture_test_temperature_time_log`
- 来源：`sri-lanka-cinnamon-postharvest`; `li-et-al-2024-cassia-drying`

##### 废物流

预计无废物输出；任何焦糊或污染桂皮须以带干燥阶段标签的 `mould_damaged_bark_waste` 单独记录。

##### 基本流

###### 桂皮水分蒸发入空气（`bark_water_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`water_to_air_from_cinnamon_bark_drying`
- 选定流：`water_to_air_from_cinnamon_bark_drying`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`elementary`
- 计量基准：`wet_basis_moisture_mass_balance`
- 单位：kg
- 数量规则：`bark_water_to_air_kg = dryer_charge_kg * incoming_moisture_fraction - dried_bark_kg * final_moisture_fraction`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 干燥桂皮
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_bark_mass_moisture`
- 质量证据：`paired_mass_and_moisture_results_with_nonnegative_mass_balance`
- 来源：`mass-balance-identity`

### 过程：分级与切段（`grading_and_stick_cutting`）

#### 输入

##### 产品流

###### 干燥桂皮投入（`dried_bark_input_to_grading`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`dried_whole_cassia_bark_before_grading`
- 选定流：`dried_whole_cassia_bark_before_grading`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`inputs`
- 流类型：`product`
- 计量基准：`measured_grader_feed_mass`
- 单位：kg
- 数量规则：实测进入分级切段的干燥桂皮质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每分级批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade_cut_yield`
- 质量证据：`batch_link_and_calibrated_feed_scale`

###### 分级切段用电（`grader_cutter_electricity`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`grid_electricity_for_grading_and_stick_cutting`
- 选定流：`grid_electricity_for_grading_and_stick_cutting`
- 流属性/单位：Electrical energy / kWh
- 流 UUID：
- 方向：`inputs`
- 流类型：`product`
- 计量基准：`submeter_or_power_runtime`
- 单位：kWh
- 数量规则：分级机、输送设备和切段机的实测或功率乘运行时间用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 分级整段桂皮
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_operation_electricity`
- 质量证据：`submeter_or_nameplate_runtime_record_reconciled_to_operating_log`
- 数量范围：暂定分级用电筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：0.2
  - 单位：kWh/kg graded whole bark sticks
  - 基准：宽泛初始分级切段范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无废物流进入本过程。

##### 基本流

无基本流进入本过程。

#### 输出

##### 产品流

###### 分级整段桂皮（`graded_whole_bark_sticks`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`graded_whole_cassia_bark_sticks`
- 选定流：`graded_whole_cassia_bark_sticks`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`product`
- 计量基准：`measured_accepted_grade_mass`
- 单位：kg
- 数量规则：实测符合声明等级和长度的整段桂皮质量；不含粉末部分。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每分级批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade_cut_yield`
- 质量证据：`grade_sheet_length_check_no_grinding_declaration_and_scale_record`
- 来源：`arifin-et-al-2021-koerintji`

##### 废物流

###### 桂皮切边残余（`bark_trimming_residue_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`cinnamon_bark_trimming_residue_not_sold`
- 选定流：`cinnamon_bark_trimming_residue_not_sold`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`waste`
- 计量基准：`separately_weighed_trim_mass`
- 单位：kg
- 数量规则：实测不可销售切边；如销售，应建独立副产品并执行分配规则。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 分级整段桂皮
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_solid_waste_dust`
- 质量证据：`labelled_trim_container_scale_ticket_and_fate_record`
- 数量范围：质量平衡 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg dried bark input
  - 基准：分级投入中的切边残余比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 收集的桂皮粉尘（`collected_bark_dust_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`collected_cinnamon_bark_dust`
- 选定流：`collected_cinnamon_bark_dust`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`waste`
- 计量基准：`weighed_dust_collection_container`
- 单位：kg
- 数量规则：实测分级切段捕集粉尘；不得计入整段产品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 分级整段桂皮
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_solid_waste_dust`
- 质量证据：`dust_container_tare_gross_mass_and_disposition_record`

##### 基本流

###### 分级逸散粉尘入空气（`grading_bark_dust_to_air`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`cinnamon_bark_dust_to_air_from_grading`
- 选定流：`cinnamon_bark_dust_to_air_from_grading`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`elementary`
- 计量基准：`measured_or_generated_minus_collected_dust`
- 单位：kg
- 数量规则：实测排放或有文件支持的粉尘质量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 分级整段桂皮
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_reject_solid_waste_dust`
- 质量证据：`dust_control_inspection_collection_mass_and_nonnegative_balance`
- 数量范围：暂定逸散粉尘筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.01
  - 单位：kg/kg graded whole bark sticks
  - 基准：场址实测形成前的宽泛初始范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：散装纸箱包装（`bulk_carton_packaging`）

#### 输入

##### 产品流

###### 进入包装的分级桂皮（`graded_sticks_input_to_packaging`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`graded_whole_cassia_bark_sticks`
- 选定流：`graded_whole_cassia_bark_sticks`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`inputs`
- 流类型：`product`
- 计量基准：`measured_net_product_mass_before_packaging`
- 单位：kg
- 数量规则：实测进入包装的分级桂皮质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_mass`
- 质量证据：`calibrated_net_scale_and_batch_link`

###### 瓦楞纸箱（`corrugated_carton_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`corrugated_fibreboard_carton`
- 选定流：`corrugated_fibreboard_carton`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`inputs`
- 流类型：`product`
- 计量基准：`carton_count_times_measured_unit_mass`
- 单位：kg
- 数量规则：纸箱件数乘核验单件质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_material_mass`
- 质量证据：`purchase_record_item_count_and_unit_mass_sample`
- 数量范围：暂定纸箱质量筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：0.30
  - 单位：kg/kg net packed product
  - 基准：宽泛散装纸箱估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 来源：`unido-postharvest-spices-2006`

###### 聚丙烯纸箱内衬（`polypropylene_liner_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`food_grade_polypropylene_carton_liner`
- 选定流：`food_grade_polypropylene_carton_liner`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`inputs`
- 流类型：`product`
- 计量基准：`liner_count_times_measured_unit_mass`
- 单位：kg
- 数量规则：内衬件数乘核验单件质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_material_mass`
- 质量证据：`supplier_specification_item_count_and_unit_mass_sample`
- 数量范围：暂定 PP 内衬筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：0.05
  - 单位：kg/kg net packed product
  - 基准：宽泛散装内衬估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 来源：`unido-postharvest-spices-2006`

###### 纸质批次标签（`paper_batch_label_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`paper_batch_label`
- 选定流：`paper_batch_label`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`inputs`
- 流类型：`product`
- 计量基准：`label_count_times_measured_unit_mass`
- 单位：kg
- 数量规则：标签件数乘核验单件质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_material_mass`
- 质量证据：`label_issue_record_and_unit_mass_sample`
- 来源：`unido-postharvest-spices-2006`

###### 聚丙烯打包带（`polypropylene_strap_input`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`polypropylene_carton_strap`
- 选定流：`polypropylene_carton_strap`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`inputs`
- 流类型：`product`
- 计量基准：`issued_length_times_measured_linear_density`
- 单位：kg
- 数量规则：领用长度乘核验线密度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_material_mass`
- 质量证据：`strap_issue_record_length_and_linear_density_test`

###### 纸箱成型封箱用电（`packaging_electricity`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`grid_electricity_for_carton_forming_and_sealing`
- 选定流：`grid_electricity_for_carton_forming_and_sealing`
- 流属性/单位：Electrical energy / kWh
- 流 UUID：
- 方向：`inputs`
- 流类型：`product`
- 计量基准：`submeter_or_power_runtime`
- 单位：kWh
- 数量规则：包装设备实测或功率乘运行时间用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 包装产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_operation_electricity`
- 质量证据：`submeter_or_nameplate_runtime_record`

##### 废物流

无废物流进入本过程。

##### 基本流

无基本流进入本过程。

#### 输出

##### 产品流

###### 包装整段桂皮（`packed_whole_bark_output`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`bulk_packed_whole_cassia_bark_sticks`
- 选定流：`bulk_packed_whole_cassia_bark_sticks`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`product`
- 计量基准：`net_mass_gross_minus_tare`
- 单位：kg
- 数量规则：包装毛重减单独核验的包装皮重。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_material_mass`
- 质量证据：`gross_tare_net_reconciliation_and_batch_label_check`

##### 废物流

###### 瓦楞纸箱边角料（`corrugated_carton_offcut_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`corrugated_fibreboard_carton_offcuts`
- 选定流：`corrugated_fibreboard_carton_offcuts`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`waste`
- 计量基准：`separately_weighed_offcuts`
- 单位：kg
- 数量规则：实测瓦楞纸边角料及破损纸箱。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_mass`
- 质量证据：`material_specific_bin_scale_ticket_and_fate_record`

###### 聚丙烯内衬边角料（`polypropylene_liner_offcut_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`polypropylene_liner_offcuts`
- 选定流：`polypropylene_liner_offcuts`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`waste`
- 计量基准：`separately_weighed_offcuts`
- 单位：kg
- 数量规则：实测废弃内衬及内衬边角料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_mass`
- 质量证据：`material_specific_bin_scale_ticket_and_fate_record`

###### 纸标签离型纸废物（`paper_label_release_liner_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`silicone_coated_paper_label_release_liner`
- 选定流：`silicone_coated_paper_label_release_liner`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`waste`
- 计量基准：`separately_weighed_release_liners`
- 单位：kg
- 数量规则：实测离型纸废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_mass`
- 质量证据：`material_specific_bin_scale_ticket_and_fate_record`

###### 聚丙烯打包带边角料（`polypropylene_strap_offcut_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`polypropylene_strap_offcuts`
- 选定流：`polypropylene_strap_offcuts`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`waste`
- 计量基准：`separately_weighed_offcuts`
- 单位：kg
- 数量规则：实测打包带边角料及废弃打包带。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_mass`
- 质量证据：`material_specific_bin_scale_ticket_and_fate_record`

##### 基本流

包装预计无直接基本流输出；如发现实测排放，须另建原子行。

### 过程：常温干燥储存与出厂（`ambient_dry_storage`）

#### 输入

##### 产品流

###### 进入常温仓的包装桂皮（`packed_bark_input_to_storage`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`bulk_packed_whole_cassia_bark_sticks`
- 选定流：`bulk_packed_whole_cassia_bark_sticks`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`inputs`
- 流类型：`product`
- 计量基准：`measured_net_mass_entering_storage`
- 单位：kg
- 数量规则：进入常温干燥仓的产品净重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每储存批次
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ambient_storage_release`
- 质量证据：`warehouse_receipt_batch_location_and_net_mass_record`

###### 通风与照明用电（`ambient_storage_electricity`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`grid_electricity_for_ambient_store_ventilation_and_lighting`
- 选定流：`grid_electricity_for_ambient_store_ventilation_and_lighting`
- 流属性/单位：Electrical energy / kWh
- 流 UUID：
- 方向：`inputs`
- 流类型：`product`
- 计量基准：`warehouse_submeter_allocated_by_mass_time`
- 单位：kWh
- 数量规则：常温仓实测用电按 `kg_product * storage_days` 分配；禁止制冷负荷。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_ambient_storage_release`
- 质量证据：`warehouse_submeter_inventory_days_and_allocation_sheet`
- 数量范围：暂定常温仓用电筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.2
  - 单位：kWh/kg reference product
  - 基准：声明储存期的宽泛常温仓范围
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无废物流进入本过程。

##### 基本流

禁止基本流投入。锁定常温储存路线不使用制冷剂 `R-134a`、`R-410A`、`R-32`、氨、二氧化碳、丙烷及任何其他制冷剂；如使用必须另建数据集。

#### 输出

##### 产品流

###### 参考整段桂皮（`reference_whole_cinnamon_bark`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`Cinnamon (canella), processed`
- 选定流：Cinnamon (canella), processed `3955425f-128e-48d4-b46e-04bf9ee70c22`
- 流属性/单位：Mass / kg
- 流 UUID：`3955425f-128e-48d4-b46e-04bf9ee70c22`
- 方向：`outputs`
- 流类型：`product`
- 计量基准：`released_net_mass_at_facility_gate`
- 单位：kg
- 数量规则：1 kg 满足全部必需限定的出厂产品净重。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：标识引用（`identity_reference`）
- 采集协议：`cp_ambient_storage_release`
- 质量证据：`release_scale_certificate_of_analysis_batch_label_and_route_conformance_check`

##### 废物流

预计无默认废物；储存破损的纸箱、内衬或桂皮须使用对应材料特定废物行并加储存阶段标签。

##### 基本流

锁定路线采用常温非制冷储存，预计无默认基本流输出。

### 过程：厂房与设备清洁（`facility_sanitation`）

#### 输入

##### 产品流

###### 冷饮用清洁水（`cold_sanitation_water`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`potable_water_for_floor_and_equipment_sanitation`
- 选定流：`potable_water_for_floor_and_equipment_sanitation`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`inputs`
- 流类型：`product`
- 计量基准：`water_submeter_or_tank_volume`
- 单位：kg
- 数量规则：实测厂房和设备清洁冷水；不得记为桂皮洗涤水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有记录批次分配至每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs`
- 质量证据：`water_meter_start_end_readings_and_sanitation_log`
- 数量范围：暂定清洁用水筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5.0
  - 单位：kg/kg reference product
  - 基准：宽泛初始厂房清洁范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 来源：`codex-cxc-1-1969`

###### 热饮用清洁水（`hot_sanitation_water`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`hot_potable_water_for_equipment_sanitation`
- 选定流：`hot_potable_water_for_equipment_sanitation`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`inputs`
- 流类型：`product`
- 计量基准：`hot_water_submeter_or_tank_volume`
- 单位：kg
- 数量规则：实测供清洁的热水；另记供应温度和上游公用工程数据集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有记录批次分配至每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs`
- 质量证据：`hot_water_meter_temperature_and_sanitation_log`
- 来源：`codex-cxc-1-1969`

###### 氢氧化钠清洗剂（`sodium_hydroxide_cleaner`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`sodium_hydroxide_cleaning_agent_as_supplied`
- 选定流：`sodium_hydroxide_cleaning_agent_as_supplied`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`inputs`
- 流类型：`product`
- 计量基准：`issued_product_mass_and_active_concentration`
- 单位：kg
- 数量规则：仅使用时记录实测配方清洗剂质量和声明 NaOH 浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有记录批次分配至每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs`
- 质量证据：`chemical_issue_log_supplier_sds_concentration_and_dosing_record`

###### 次氯酸钠消毒剂（`sodium_hypochlorite_sanitizer`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`sodium_hypochlorite_sanitizer_as_supplied`
- 选定流：`sodium_hypochlorite_sanitizer_as_supplied`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`inputs`
- 流类型：`product`
- 计量基准：`issued_product_mass_and_available_chlorine_concentration`
- 单位：kg
- 数量规则：仅使用时记录实测配方消毒剂质量和声明有效氯浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有记录批次分配至每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_inputs`
- 质量证据：`chemical_issue_log_supplier_sds_concentration_and_dosing_record`

###### 清洁设备用电（`sanitation_equipment_electricity`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`grid_electricity_for_sanitation_equipment`
- 选定流：`grid_electricity_for_sanitation_equipment`
- 流属性/单位：Electrical energy / kWh
- 流 UUID：
- 方向：`inputs`
- 流类型：`product`
- 计量基准：`submeter_or_power_runtime`
- 单位：kWh
- 数量规则：泵、吸尘器和清洁设备的实测或功率乘运行时间用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有记录批次分配至每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_operation_electricity`
- 质量证据：`submeter_or_nameplate_runtime_and_sanitation_log`

##### 废物流

无废物流进入本过程。

##### 基本流

无基本流进入本过程。本锁定路线无蒸汽和燃料；外购热水是唯一热清洁公用工程。

#### 输出

##### 产品流

清洁过程不产生产品输出。

##### 废物流

###### 清洁废水（`sanitation_wastewater`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`facility_sanitation_wastewater_to_treatment`
- 选定流：`facility_sanitation_wastewater_to_treatment`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`waste`
- 计量基准：`effluent_meter_or_input_minus_retained_water_balance`
- 单位：kg
- 数量规则：实测转交处理的废水；排除单独实测的直接入水环境排放。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有记录批次分配至每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_water_emissions`
- 质量证据：`effluent_meter_treatment_manifest_and_sampling_record`
- 数量范围：暂定废水筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5.0
  - 单位：kg/kg reference product
  - 基准：宽泛初始清洁废水范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干式清洁扫除物（`dry_sanitation_sweepings_waste`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`dry_sanitation_sweepings_from_cinnamon_processing`
- 选定流：`dry_sanitation_sweepings_from_cinnamon_processing`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`waste`
- 计量基准：`separately_weighed_sweepings`
- 单位：kg
- 数量规则：实测地面和设备干式扫除物，与桂皮切边和捕集粉尘分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按有记录批次分配至每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_solid_waste_dust`
- 质量证据：`labelled_sweepings_container_scale_ticket_and_fate_record`

##### 基本流

###### 化学需氧量入水环境（`cod_to_water`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`chemical_oxygen_demand_to_water_from_direct_discharge`
- 选定流：`chemical_oxygen_demand_to_water_from_direct_discharge`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`elementary`
- 计量基准：`discharge_volume_times_laboratory_concentration`
- 单位：kg
- 数量规则：`cod_to_water_kg = direct_discharge_m3 * cod_mg_per_L / 1000`；全部废水转交处理且无直接排放时为零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_water_emissions`
- 质量证据：`accredited_laboratory_result_discharge_meter_and_sampling_chain_of_custody`

###### 五日生化需氧量入水环境（`bod5_to_water`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`biochemical_oxygen_demand_5d_to_water_from_direct_discharge`
- 选定流：`biochemical_oxygen_demand_5d_to_water_from_direct_discharge`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`elementary`
- 计量基准：`discharge_volume_times_laboratory_concentration`
- 单位：kg
- 数量规则：`bod5_to_water_kg = direct_discharge_m3 * bod5_mg_per_L / 1000`；全部废水转交处理且无直接排放时为零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_water_emissions`
- 质量证据：`accredited_laboratory_result_discharge_meter_and_sampling_chain_of_custody`

###### 总悬浮固体入水环境（`tss_to_water`）

将该具名流作为本单元过程的独立原子交换记录；保留其声明的路线、来源或去向，不得与其他流合并。

- 流名称：`total_suspended_solids_to_water_from_direct_discharge`
- 选定流：`total_suspended_solids_to_water_from_direct_discharge`
- 流属性/单位：Mass / kg
- 流 UUID：
- 方向：`outputs`
- 流类型：`elementary`
- 计量基准：`discharge_volume_times_laboratory_concentration`
- 单位：kg
- 数量规则：`tss_to_water_kg = direct_discharge_m3 * tss_mg_per_L / 1000`；全部废水转交处理且无直接排放时为零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_water_emissions`
- 质量证据：`accredited_laboratory_result_discharge_meter_and_sampling_chain_of_custody`

## 7. 分配与副产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 全部单元操作 | 分配前按批次或计量操作拆分接收、干燥、分级、包装、储存和清洁。 | `iso-14044-2006` |
| `allocation_whole_vs_powder_prohibited` | 整段桂皮与可能供粉碎的残余 | 整段桂皮不得与粉末、研磨香辛料、粉碎原料或提取原料平均负荷。 | `boundary_locked_product_form` |
| `allocation_saleable_trim` | 可销售桂皮切边 | 单独销售切边作为独立副产品记录质量和去向；优先物理拆分，无法拆分时按干物质量分配共享分级负荷并披露价格敏感性。 | `iso-14044-2006` |
| `allocation_waste_no_credit` | 拒收物、粉尘、废水和包装边角料 | 除非有可核验买方和独立产品规范，否则按废物处理；本前景数据集内不计避免负荷收益。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bark_mass_moisture` | `bark_receipt_and_dry_cleaning`; `electric_hot_air_drying` | 桂皮质量、含水率、干燥进出料 | 称量与实验室记录 | `batch_id; timestamp; species; origin; wet_mass_kg; reject_mass_kg; sample_id; wet_sample_mass_g; dry_sample_mass_g; moisture_percent; dryer_setpoint_C; drying_time_h` | 校准秤与有方法声明的代表性含水率取样。 | kg; g; % wet basis; °C; h | 每批 | 从接收到干燥出料的完整批次 | 所有生产声明产品的产线 | 按批汇总质量；只用统一湿基含水率；批次关闭后归一化。 | 校准证书、样品链、检测报告、签署批次质量平衡。 |
| `cp_reject_solid_waste_dust` | `bark_receipt_and_dry_cleaning`; `grading_and_stick_cutting`; `facility_sanitation` | 拒收物、切边、捕集粉尘、扫除物、逸散粉尘 | 废物与控制设备记录 | `batch_id; material_id; gross_kg; tare_kg; net_kg; stage; fate; generated_dust_kg; collected_dust_kg` | 去皮重的材料特定容器及去向记录。 | kg | 每批或每次换容器 | 与生产相同报告期 | 全厂并归属生产线 | 每种材料和去向分开；仅生成和捕集量均实测时计算逸散粉尘。 | 称量检查、容器标签、照片或联单、非负平衡。 |
| `cp_operation_electricity` | `electric_hot_air_drying`; `grading_and_stick_cutting`; `bulk_carton_packaging`; `facility_sanitation` | 原子电力行 | 电表或运行记录 | `meter_id; start_kWh; end_kWh; equipment_id; rated_kW; runtime_h; batch_id; operation` | 优先专用分表，否则核验功率乘运行时间。 | kWh | 每批 | 可用时为连续代表性 12 个月 | 各命名单元操作 | 加热、风机/控制、分级切段、包装和清洁用电分别保留。 | 电表校准、照片、运行日志、厂区电费账单核对。 |
| `cp_grade_cut_yield` | `grading_and_stick_cutting` | 投料、合格桂皮、切边、粉尘 | 称量与分级记录 | `batch_id; feed_kg; accepted_sticks_kg; trim_kg; dust_kg; grade; stick_length_mm; grinding_used` | 称量各部分并检查声明整皮形态。 | kg; mm | 每批 | 完整分级批次 | 全部分级机和切段机 | 要求 `feed_kg = accepted_sticks_kg + trim_kg + dust_kg + unexplained_loss_kg` 并调查不明损失。 | 校准秤、分级单、长度抽样、`grinding_used=false`。 |
| `cp_packaging_material_mass` | `bulk_carton_packaging` | 产品及每种包装材料 | 领料、计数、称量、发票 | `batch_id; net_product_kg; carton_count; carton_unit_kg; liner_count; liner_unit_kg; label_count; label_unit_kg; strap_length_m; strap_kg_per_m; gross_kg; tare_kg` | 各材料件数乘单件质量或直接称量。 | kg; count; m | 每包装批次 | 与包装产品同期间 | 所有包装线 | 各材料独立计算并核对毛重、皮重、净重。 | 供应商规范、单件质量抽样、称量记录、批次标签。 |
| `cp_packaging_waste_mass` | `bulk_carton_packaging` | 材料特定边角料 | 废物记录 | `batch_id; waste_material_id; gross_kg; tare_kg; net_kg; fate` | 去皮重材料特定废物容器。 | kg | 每次换容器 | 与包装同期间 | 所有包装线 | 禁止包装废物集合行；仅相同材料 id 和去向可汇总。 | 称量单、容器标签、回收或处置凭证。 |
| `cp_ambient_storage_release` | `ambient_dry_storage` | 库存日、用电、放行 | 仓储与计量记录 | `batch_id; entry_date; release_date; net_kg; storage_location; temperature_C; relative_humidity_percent; meter_start_kWh; meter_end_kWh; refrigeration_used; release_moisture_percent` | 仓储记录、环境记录仪、分表、放行检测。 | kg; day; °C; %; kWh | 每批次及每月计量期 | 完整声明储存期 | 存放产品的常温仓区域 | 共享用电按 kg-day 分配；要求 `refrigeration_used=false`。 | 库存核对、记录仪数据、电表记录、放行授权。 |
| `cp_sanitation_inputs` | `facility_sanitation` | 冷水、热水、NaOH 清洗剂、NaOCl 消毒剂 | 计量与化学品领用记录 | `sanitation_event_id; batch_ids; cold_water_kg; hot_water_kg; hot_water_temperature_C; naoh_product_kg; naoh_concentration_percent; naocl_product_kg; available_chlorine_percent; area_m2; duration_h` | 公用工程计量及受控化学品领用/投配日志。 | kg; °C; %; m2; h | 每次清洁事件 | 与可归属生产相同期间 | 命名设备与地面区域 | 按因果驱动分配，优先设备时间或清洁面积；不得称为桂皮洗涤水。 | 计量读数、清洁签字、SDS、浓度检查。 |
| `cp_wastewater_water_emissions` | `facility_sanitation` | 废水及 COD、BOD5、TSS 直接排放 | 排水与实验室记录 | `event_id; wastewater_kg; transferred_to_treatment_kg; direct_discharge_m3; cod_mg_per_L; bod5_mg_per_L; tss_mg_per_L; sample_id; destination` | 排水计量或平衡，加代表性认可实验室取样。 | kg; m3; mg/L | 每次排放或代表性监测活动 | 与清洁相同期间 | 每个排放去向 | 处理废水与直接排放分开；浓度仅乘匹配的直接排放体积。 | 样品链、实验室认可、电表校准、处理联单。 |

### 计算规则

| rule_id | 适用于 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_wet_basis` | 桂皮含水率 | `moisture_percent = 100 * (wet_sample_mass_g - dry_sample_mass_g) / wet_sample_mass_g` | `wet_sample_mass_g; dry_sample_mass_g` | `moisture_percent` | `mass-balance-identity` |
| `calc_bark_water_to_air` | 干燥 | `bark_water_to_air_kg = dryer_charge_kg * incoming_moisture_fraction - dried_bark_kg * final_moisture_fraction` | `dryer_charge_kg; incoming_moisture_fraction; dried_bark_kg; final_moisture_fraction` | `bark_water_to_air_kg` | `mass-balance-identity` |
| `calc_grading_mass_balance` | 分级 | `unexplained_loss_kg = feed_kg - accepted_sticks_kg - trim_kg - collected_dust_kg - fugitive_dust_kg` | named grading masses | `unexplained_loss_kg` | `mass-balance-identity` |
| `calc_packaging_material` | 每种包装投入 | `material_kg = item_count * measured_unit_mass_kg` or `strap_kg = strap_length_m * strap_kg_per_m` | counts, lengths, unit masses | material-specific kg | `mass-balance-identity` |
| `calc_storage_electricity` | 常温仓 | `allocated_kWh = warehouse_kWh * batch_kg_days / total_warehouse_kg_days` | submeter kWh and inventory kg-days | batch storage kWh | `mass-balance-identity` |
| `calc_water_emission` | COD、BOD5 或 TSS | `emission_kg = direct_discharge_m3 * concentration_mg_per_L / 1000` | matched volume and concentration | pollutant-specific kg | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用于 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_route_identity` | 整个数据包 | 证明 `Cinnamomum cassia`、整段桂皮、45 °C 电热强制通风干燥、未粉碎且无排除操作。 | 供应商标识、批次路线单、设备日志、产品照片、放行记录。 |
| `dq_temporal_coverage` | 能源、清洁、废物、储存 | 优先连续代表性 12 个月；更短时至少覆盖三个完整批次并披露季节性。 | 有起止日期的原始记录及产量总计。 |
| `dq_mass_balance` | 接收、干燥、分级、包装 | 不明质量绝对值超过投入 2% 时须调查；水分损失与固体损失分开。 | 签署的阶段质量平衡和含水率结果。 |
| `dq_atomic_flows_v1` | 整个清单 | 每个物理流和角色一张卡；不得使用 energy、materials、chemicals、fuels、refrigerants、packaging、wastes 或 emissions 等集合占位。 | 行清单及原始字段映射。 |
| `dq_uuid_scope` | 流标识 | 本 PCR 仅 `reference_whole_cinnamon_bark` 可带流 UUID；其他流 UUID 字段保持空白，等待独立标识审查。 | UUID 审计及天工 state_code=100 直读证据。 |
| `dq_reasoned_estimates` | 暂定范围 | 推理估算范围不得替代前景数量；只作 QA 筛选，并在关键处发布前用更强证据替换。 | 发现项日志与证据升级记录。 |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求 UUID `3955425f-128e-48d4-b46e-04bf9ee70c22`、名称 `Cinnamon (canella), processed`、CPC 3.0 `23925`、`Product flow` 和 `Mass`。 |  |
| `validate_locked_route` | 过程图 | 如将粉碎、粉末输出、燃料干燥、蒸汽、熏蒸、辐照、制冷、桂皮湿洗或其他物种/产品形态并入平均，则失败。 | `boundary_locked_product_form`; `boundary_no_route_substitution` |
| `validate_moisture_and_temperature` | 干燥与放行 | 要求干燥设定温度 45 °C、最终湿基含水率 ≤14%，并有批次关联实测值。 | `sri-lanka-cinnamon-postharvest`; `li-et-al-2024-cassia-drying`; `arifin-et-al-2021-koerintji` |
| `validate_process_completeness` | 清单 | 要求五个生产过程及可归属清洁；每个 process、row、direction、flow_type、basis、unit、protocol 和 quality_evidence 字段完整。 |  |
| `validate_atomic_flows_v1` | 清单 | 拒绝 energy、materials、chemicals、fuels、refrigerants、packaging、wastes 或 emissions 集合卡；电力用途、包装材料、清洗剂、废水、固废、粉尘及入水排放保持原子行。 |  |
| `validate_no_other_flow_uuid` | 清单 | 除 `reference_whole_cinnamon_bark` 外任何行出现流 UUID 均失败；参考对象中的流属性及单位组 UUID 不属于流 UUID。 |  |
| `validate_mass_balance` | 接收、干燥、分级、包装 | 要求各分量非负及阶段闭合；不明质量超过阶段投入 2% 时调查。 | `mass-balance-identity` |
| `validate_food_safety_records` | 接收、干燥、储存、清洁 | 要求霉变拒收、当日或有理由的干燥、含水率控制、防虫储存、清洁记录及可追溯批次标签。 | `codex-cxc-78-2017`; `codex-cxc-1-1969`; `unido-postharvest-spices-2006` |

## 10. 发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 散装整段加工桂皮的前景生产数据集。 |
| downstream_use | `secondary_dataset`; `background_dataset`（审查和发布后）。 |
| allowed_use | 需要锁定加工路线的干燥整段 `Cinnamomum cassia` 桂皮的食品或供应链 LCA。 |
| excluded_use | 肉桂粉、精油或提取物、混合物种、组合桂皮卷、湿皮、燃料或纯太阳能干燥、杀菌或辐照产品、冷藏产品、零售包装、种植和采收。 |
| required_metadata | species; origin; batch; product_form; grade; stick_length_mm; incoming and final moisture; dryer set point and time; no-grinding status; packaging masses; storage days; reporting period; geography. |
| required_quality_disclosure | 来源覆盖；电表和秤校准；取样方法；质量平衡闭合；推理估算替代；废物去向；废水去向；排除操作；分配决策。 |
| update_trigger | 物种、产品形态、干燥技术或热源、含水率规范、清洁路线、包装配置、储存技术、副产品去向或参考流标识变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-78-2017` | `official_guidance` | Codex Alimentarius, CXC 78-2017, Code of Practice for the Prevention and Reduction of Mycotoxins in Spices. https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ | 快速干燥、含水率控制、干式清理、霉变拒收和受保护储存。 |
| `codex-cxc-1-1969` | `official_guidance` | Codex Alimentarius, CXC 1-1969, General Principles of Food Hygiene, revised 2022. https://www.fao.org/fao-who-codexalimentarius/publications/en/ | 清洁、卫生控制、记录和食品安全验证。 |
| `unido-postharvest-spices-2006` | `handbook` | UNIDO, Herbs, Spices and Essential Oils: Post-harvest Operations in Developing Countries, 2006. https://www.unido.org/publications/ot/9656588/pdf | 过程拆分、清理、包装、标签、储存及整皮与粉末路线分离。 |
| `sri-lanka-cinnamon-postharvest` | `official_guidance` | Sri Lanka Department of Cinnamon Development, Post Harvest Technology. https://cinnamon.gov.lk/about-cinnamon/post-harvest-technology/ | 整皮处理、干燥、≤14% 含水率终点、分级和追溯限定。 |
| `li-et-al-2024-cassia-drying` | `literature` | Li et al., Evaluation of different drying methods on the quality of Cinnamomum cassia barks, Heliyon 10 (2024) e34608. https://doi.org/10.1016/j.heliyon.2024.e34608 | 桂皮特定干燥过程及 45 °C 烘干路线选择。 |
| `arifin-et-al-2021-koerintji` | `literature` | Arifin et al., The Effect of Geographical Indications on the Koerintji Cinnamon Sales Price and Information of Origin, Agronomy 11 (2021) 1410. https://doi.org/10.3390/agronomy11071410 | 桂皮干燥至 10–14%、分级、切段、异物去除、包装及整皮/粉末分离。 |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines. https://www.iso.org/standard/38498.html | 分配层级、拆分和披露。 |
| `mass-balance-identity` | `method_factor` | Conservation of mass applied to measured batch inputs, outputs, moisture, and pollutant concentration-volume calculations. | 含水率、得率、粉尘、包装、储存、废水及阶段闭合公式。 |
