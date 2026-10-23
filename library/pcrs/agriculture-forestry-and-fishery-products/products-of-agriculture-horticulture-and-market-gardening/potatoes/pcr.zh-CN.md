---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.potatoes
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 马铃薯

## 1. 范围与适用性

本 PCR 适用于马铃薯（`Solanum tuberosum`）初级生产，覆盖播种、田间管理、收获、干式去土、分选以及鲜品未加工块茎在农场门装载。露地和设施栽培均可适用，但必须声明生产路线、地理范围、作物周期、种薯来源、灌溉条件和农场门准备方式。

默认边界不包括商品种薯繁育、农场门交付后的清洗、愈伤或储存、零售包装、加工、冷冻、干燥、熟制、农场门后的运输和消费阶段。只有通过单独声明且清单及定量参考可区分的扩展，才能纳入上述活动。

下列流卡规定如何获得前景清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.potatoes |
| classification_refs | CPC 3.0：01510 Potatoes; mapping relation: narrower |
| covered_products | 以食用、饲用或其他非种用目的收获并在农场门交付的新鲜、未加工马铃薯块茎 |
| excluded_products | 认证或商品种薯；甘薯；木薯；山药；芋头；加工、腌制、冷冻、干燥、熟制、去皮或零售包装的马铃薯 |
| representative_product | 可销售的新鲜马铃薯块茎 |
| production_route | 种植材料接收；土壤和作物管理；收获；干式去土和分选；农场门装载 |
| market_state | 农场门处新鲜、未加工、按收到状态湿重计 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场门处可销售的新鲜、未加工马铃薯块茎 |
| How much | 按收到状态湿重计 1,000 kg |
| How well | 符合生产者声明的销售或转移规格，参考数量不含附着土壤、淘汰品、严重损伤品和不可销售物料 |
| How long or cycle | 一个声明的马铃薯作物周期，直至农场门装载 |
| reference_flow_link | reference_potatoes_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | 马铃薯 `65443696-51af-4ba8-8f73-06d434a36605` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 地理范围；品种或品种组；作物年份和周期；预定用途；生产系统；灌溉条件；收获面积；产量；水分或收到状态基准；农场门准备；产品等级；分配处理 |
| 绑定模式 | `fixed` |

该绑定流仍采用“新鲜、未加工；生产混合、农场门”的身份限定；本卡的实际批次与前景边界按既有要求记录。

构建前景数据包时，必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明全部必需限定信息。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考马铃薯 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部前景交换归一化到按声明收到状态计的 1,000 kg 合格马铃薯；未经记录的换算不得混用干物质和湿重基准。 |
| `area_and_yield` | 田间活动和产量 | 面积和质量 | ha 和 kg | 采用相同收获面积和同一作物周期产出计算产量，并归一化以面积计的投入和排放。 |
| `nutrient_product_and_content` | 养分产品 | 产品质量和声明的养分含量 | kg 产品和 kg N、kg P2O5、kg K2O 或明确声明的等效基准 | 保留每种实际肥料或土壤改良剂的产品质量；另行计算养分含量，不得用养分质量替代产品身份。 |
| `energy_carrier_preservation` | 电力和燃料 | 载能体数量和能量 | 视情况采用 kWh、L、kg 或 MJ | 保留计量的载能体单位和换算因子；每条实际交换完成身份解析前不得汇总不同载能体。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在声明作物建立前，种植块茎和购买投入跨入农场生产边界 |
| starting_condition_role | 前景作物周期起点 |
| product_classification_scope | CPC 3.0 01510 新鲜马铃薯；分类仅提供映射语境，不能替代语义产品边界 |
| recursive_input_rule | 留种或购入的种植块茎作为独立种植材料投入，并声明种用品质和来源；不得计入本周期参考产出。 |
| upstream_dataset_requirement | 每项具体种植材料、养分产品、植保产品、供水和能源载体均采用地理及技术上有代表性的上游数据集 |
| disclosure | 声明作物周期、地理范围、生产系统、种薯来源、灌溉条件、田块面积、产量、残余物和淘汰物去向以及任何收获后扩展 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start_end` | 前景系统 | 当种植材料和购买投入进入所表示作物周期时开始；当合格鲜块茎完成干式去土或田间分选并在农场门装载时结束。 | `fao-root-tuber-concepts-2003`；`ilcd-handbook-2010` |
| `boundary_input_completeness` | 田间管理 | 使用时纳入实际种植材料、养分和土壤改良产品、植保产品、灌溉供水和作业能源；只有记录支持时才报告零值。 | `fao-save-and-grow-2011` |
| `boundary_soil_emissions` | 管理土壤 | 采用一种声明方法，纳入由氮投入、作物残余物、尿素和石灰施用造成的适用直接及间接土壤排放；防止与上游数据集重复。 | `ipcc-2019-managed-soils` |
| `boundary_land_change` | 土地转化 | 土地利用变化默认不属于作物周期清单；研究规则要求纳入时，应单独声明方法、时间范围、土地历史和分配。 | `ilcd-handbook-2010` |
| `boundary_post_gate` | 下游活动 | 排除农场门交付后的运输、储存、清洗、包装和加工，除非声明独立扩展。 | `ilcd-handbook-2010` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `potato_cultivation_and_farm_gate_preparation` | 马铃薯种植与农场门准备 | `required` | 始终 | 前景生物生产和农场门交付 | 1,000 kg 合格鲜马铃薯 |

### 过程：马铃薯种植与农场门准备（`potato_cultivation_and_farm_gate_preparation`）

#### 输入
##### 产品流

###### 投入的种植块茎（`planting_tubers_input`）

将购入或农场留存的种植块茎作为独立物理投入，记录来源、品种、品质状态和储存条件。最终数据包必须解析实际种植材料 Flow；“农业投入品，未指定”的候选 Flow 不能作为合格身份。

- 选定流：种用品质马铃薯种植块茎；需要前景身份
- 流属性/单位：质量 / kg
- 数量规则：计量进入声明作物周期的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每个声明作物周期及每 1,000 kg 合格马铃薯.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 来源：`fao-save-and-grow-2011`

###### 尿素肥料投入（`potato_cultivation_and_farm_gate_preparation_agricultural_nutrient_inputs`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个声明作物周期及每 1,000 kg 合格马铃薯.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`

###### 磷酸一铵肥料投入（`potato_cultivation_and_farm_gate_preparation_agricultural_nutrient_inputs_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个声明作物周期及每 1,000 kg 合格马铃薯.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`

###### 氯化钾肥料投入（`potato_cultivation_and_farm_gate_preparation_agricultural_nutrient_inputs_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个声明作物周期及每 1,000 kg 合格马铃薯.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`

###### 施用的牛粪肥投入（`potato_cultivation_and_farm_gate_preparation_agricultural_nutrient_inputs_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个声明作物周期及每 1,000 kg 合格马铃薯.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`

###### 农业石灰石投入（`potato_cultivation_and_farm_gate_preparation_agricultural_nutrient_inputs_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个声明作物周期及每 1,000 kg 合格马铃薯.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`

###### 投入的灌溉水（`irrigation_water_input`）

仅对灌溉生产记录供应的灌溉水。田间证据确认没有灌溉水跨越产品投入边界时，雨养生产可记录零灌溉。

- 选定流：灌溉供水
- 流属性/单位：体积 / m3
- 数量规则：计量、交付记录或核算后施用于所表示田块的体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个声明作物周期及每 1,000 kg 合格马铃薯.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_energy_records`
- 来源：`fao-save-and-grow-2011`

###### 中压电力投入（`operational_energy_input`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个声明作物周期及每 1,000 kg 合格马铃薯.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_energy_records`

###### 柴油投入（`operational_energy_input_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个声明作物周期及每 1,000 kg 合格马铃薯.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_energy_records`

作物保护必需记录：完成前景数据包前，逐项列明实际施用的每一种制剂，保留商品名、有效成分、盐或化学形态、浓度、必要时的密度、施用量、日期和处理面积。每项交换选用一个物理上明确的产品身份；有效成分释放按物质及接收区室另行计算。缺少配方身份属于完整性缺口，不得用通用农药、虚构示例或假定为零替代。

##### 废物流

##### 基本流

###### 土地占用（`land_occupation_input`）

记录归属于所表示作物周期的净种植面积和持续时间。

- 选定流：马铃薯种植土地占用
- 流属性/单位：面积-时间 / m2*a 或场址支持的等效单位
- 数量规则：收获田块面积乘以声明占用时间，并按合格产量归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个声明作物周期及每 1,000 kg 合格马铃薯.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_and_harvest_records`
- 来源：`fao-root-tuber-concepts-2003`

#### 输出
##### 产品流

###### 可销售鲜马铃薯（`reference_potatoes_output`）

这是唯一的终端定量参考。数量不含附着土壤、田间残余物、淘汰品、严重损伤品和销售或转移规格以外的物料。

该绑定流仍采用“新鲜、未加工；生产混合、农场门”的身份限定；本卡的实际批次与前景边界按既有要求记录。

- 选定流：马铃薯 `65443696-51af-4ba8-8f73-06d434a36605`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
原始产出计量与核对要求：归一化后恰为 1,000 kg

- 数量规则：1000 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
原始活动或阶段基准：PCR 参考流.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

###### 转移的可利用次级马铃薯（`secondary_potato_product_output`）

只有小薯或等外品具有记录的有益去向或销售时，才作为独立产品输出。保留等级、去向和收到状态质量，不得静默并入参考数量。

- 选定流：马铃薯；新鲜未加工产品；生产混合，农场门
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按记录的有益去向计量收到状态质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每个声明作物周期及每 1,000 kg 合格马铃薯.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_and_harvest_records`
- 来源：

该行的实际中间状态或联产品等级须独立核实 UUID，不使用参考输出 UUID 代替。

##### 废物流

###### 作为废物移出的马铃薯生物质（`removed_potato_biomass_waste`）

仅记录作为废物离开前景的地上茎叶、受损块茎或淘汰块茎，分别保留物料身份和去向。当前候选为食品工厂修整废料，与本农场门行不构成精确身份。

- 选定流：移出的马铃薯生物质废物；需要前景身份和去向
- 流属性/单位：质量 / kg
- 数量规则：按物料和去向计量或核算湿重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：每个声明作物周期及每 1,000 kg 合格马铃薯.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_and_harvest_records`
- 来源：`ipcc-2019-managed-soils`

##### 基本流

###### 排放到环境空气的一氧化二氮（`soil_nitrous_oxide_output`）

采用一种声明且地理适用的方法，根据采集的氮投入、残余物、土壤、气候、挥发和淋溶活动数据计算直接及适用的间接一氧化二氮排放。

- 选定流：排放到环境空气的一氧化二氮
- 流属性/单位：质量 / kg N2O
- 数量规则：将所选 IPCC 层级或地理适用方法应用于肥料氮、有机氮、还田残余物氮、挥发和淋溶路径
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个声明作物周期及每 1,000 kg 合格马铃薯.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_soil_emission_activity`
- 来源：`ipcc-2019-managed-soils`

计算方法对应第 8 节规则：`calc_managed_soil_n2o`。

###### 尿素或石灰施用产生的二氧化碳（`soil_carbon_dioxide_output`）

仅在施用尿素或碳酸盐类石灰材料且所选方法要求该路径时记录。

- 选定流：排放到环境空气的二氧化碳
- 流属性/单位：质量 / kg CO2
- 数量规则：将所选尿素或石灰碳含量方法应用于采集的施用记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个声明作物周期及每 1,000 kg 合格马铃薯.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_soil_emission_activity`
- 来源：`ipcc-2019-managed-soils`

###### 释放到水体的硝酸盐（`nitrate_to_water_output`）

只有所选养分损失方法和场址条件支持水体路径时才计算硝酸盐损失，并保留受纳水体语境。

- 选定流：排放到水体的硝酸盐
- 流属性/单位: Mass / kg NO3-
- 数量规则：将所选养分损失方法应用于采集的氮活动数据和场址条件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个声明作物周期及每 1,000 kg 合格马铃薯.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_soil_emission_activity`
- 来源：`ipcc-2019-managed-soils`

最终交换质量为 kg NO3-；按 N 计的活动量、因子和筛查保留在独立台账。仅对归属于该化学物种的 N 质量乘 62/14，换算一次后按合格参考产出归一化一次。不得将养分总平衡、土壤留存或不明差额当作该排放。各实际接收环境分别记录；气体体积记录须有实测温压及有据质量换算，不能与化合物质量互换。

###### 释放到水体的磷酸盐（`phosphate_to_water_output`）

只有侵蚀、径流、排水或其他所选方法支持该路径时才计算磷酸盐损失，并保留磷基准和受纳水体语境。

- 选定流：排放到水体的磷酸盐
- 流属性/单位: Mass / kg PO4
- 数量规则：将一种声明且地理适用的磷损失方法应用于采集的活动数据和场址条件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每个声明作物周期及每 1,000 kg 合格马铃薯.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_soil_emission_activity`
- 来源：`fao-save-and-grow-2011`

最终交换质量为 kg PO4；按 P 计的活动量、因子和筛查保留在独立台账。仅对归属于该化学物种的 P 质量乘 95/31，换算一次后按合格参考产出归一化一次。不得将养分总平衡、土壤留存或不明差额当作该排放。各实际接收环境分别记录；气体体积记录须有实测温压及有据质量换算，不能与化合物质量互换。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 田间和农场门作业 | 应先采用过程细分和直接计量区分作业及产出，再考虑分配。 | `iso-14044-2006`；`ilcd-handbook-2010` |
| `allocation_reference_and_secondary` | 合格和次级可利用马铃薯 | 两类产出承担不可分割的共同负荷时，采用同期农场门价值经济分配；披露等级、水分基准和价格，并以质量分配进行敏感性分析。 | `iso-14044-2006` |
| `allocation_residue_and_waste` | 留田残余物和废物输出 | 不向留在或还入田间的物料以及送作废物的物料分配负荷；其管理和适用排放应纳入前景。 | `ipcc-2019-managed-soils` |
| `allocation_seed_feedback` | 农场留存种植块茎 | 将留存种植块茎记录为下一作物周期投入，并记录为生产周期输出或内部转移；防止跨周期重复计算。 | `ilcd-handbook-2010` |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_activity_records` | `potato_cultivation_and_farm_gate_preparation` | planting material, nutrient products, crop protection | 田间日志、发票、施用记录、产品标签 | field_id; crop_cycle; product_identity; amount; unit; nutrient_or_active_content; date; application_method | 将产品和施用事件核算到所表示田块；原始汇总与分配：保留产品身份，汇总匹配事件，以同周期合格产量归一化 | kg; L; kg nutrient | 每次接收和施用 | 完整作物周期 | 全部所表示田块 | 每声明的参考流 | 发票；标签；校准设备；田间日志 |
| `cp_water_and_energy_records` | `potato_cultivation_and_farm_gate_preparation` | irrigation water and energy carriers | 仪表、交付、发票、油罐、机械或承包商记录 | field_id; meter_or_equipment_id; carrier; amount; unit; date; operation; shared_use_basis | 将直接和承包使用量核算到田块和作物周期；原始汇总与分配：分别保留载能体；按记录的运行时间、面积或实测服务量分配共用记录 | m3; kWh; L; kg; MJ | 每次事件或仪表周期 | 完整作物周期 | 全部纳入设备和田块 | 每声明的参考流 | 仪表校准；发票；油罐核算；承包商说明 |
| `cp_field_and_harvest_records` | `potato_cultivation_and_farm_gate_preparation` | area, accepted potatoes, secondary output, waste, residue fate | 田块登记、称重票、产量监测、等级和去向记录 | field_id; planted_area; harvested_area; harvest_date; gross_tuber_mass; accepted_mass; secondary_mass; waste_mass; residue_fate; destination; moisture_basis | 将收获面积和全部计量产出核算到同一作物周期；原始汇总与分配：按产出类别和去向汇总；归一化到 1,000 kg 合格马铃薯 | ha; kg; percent | 每个田块和收获批次 | 完整作物周期至农场门装载 | 全部所表示田块和批次 | 每声明的参考流 | 校准秤；面积记录；等级规格；转移或废物凭证 |
| `cp_soil_emission_activity` | `potato_cultivation_and_farm_gate_preparation` | managed-soil emissions | 养分、残余物、土壤、天气、灌溉和模型记录 | fertilizer_N; organic_N; residue_N; urea; lime; soil; climate; drainage; factor_set; model_version | 在同一兼容路线/产品/状态内，先逐田块核算应归属原始总量。汇总最终强度=应归属原始数量之和×声明参考量/匹配最终合格产出之和。来源为每公顷率 e_h、y_h 时，先以 e_h×面积、y_h×面积还原原始总量，不能再对田块总量作面积加权。每产品强度按匹配产出加权，不能按面积或不加权平均。原分配仅执行一次，保留期间/吞吐和全部来源单位换算，不兼容路线分开。 | kg N; kg material; kg emission; ha | 每次事件和作物周期计算 | 完整作物周期 | 全部所表示田块 | 每声明的参考流 | 来源记录；因子出处；模型文件；独立单位检查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_to_reference_flow` | 面积计量的流 | 每收获公顷作物周期数量除以每收获公顷合格马铃薯产量，再乘以 1,000 kg | 数量；收获面积；合格质量 | 每 1,000 kg 合格马铃薯的数量 | `fao-root-tuber-concepts-2003` |
| `calc_nutrient_content` | 养分产品 | 实际产品质量乘以声明养分比例；保留磷和钾采用元素态还是氧化物当量 | 产品身份；产品质量；含量；报告基准 | 按产品列示的产品质量和养分质量 |  |
| `calc_energy_carriers` | 作业能源 | 保留实际载能体数量；仅在需要时采用有记录的密度或热值换算 | 载能体身份；数量；单位；换算因子 | 按身份列示的载能体数量和能量 |  |
| `calc_managed_soil_n2o` | 土壤一氧化二氮 | 将所选 IPCC 层级或地理适用方法应用于肥料氮、有机氮、还田残余物氮、挥发和淋溶路径 | 氮活动；残余物去向；土壤和气候；所选因子 | 按路径列示的 kg N2O | `ipcc-2019-managed-soils` |
| `calc_output_balance` | 收获产出 | 收获块茎总质量在声明不确定度内等于合格马铃薯、次级马铃薯、废物和实测处理损失之和 | 匹配的称重和等级记录 | 核算后的产出类别 | `mass-balance-identity` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_soil_emission_activity`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考和次级产出 | 确认产品为马铃薯块茎而非甘薯或其他根茎作物；保留品种、用途、等级、状态和农场门交付。 | 作物、批次和转移记录 |
| `dq_temporal_alignment` | 全部前景行 | 投入、面积、收获产出、残余物去向和排放必须对应同一作物周期；披露代理时期。 | 带日期的田间、仪表和收获记录 |
| `dq_mass_area_reconciliation` | 田块和收获数据 | 归一化前核算收获面积、总产量、合格产出、次级产出、废物和水分基准。 | 面积登记；校准秤或产量监测；等级和水分记录 |
| `dq_conditional_cards` | 养分和能源总括卡 | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 | 施用、发票、仪表和身份解析记录 |
| `dq_identity_resolution` | 未映射卡 | 实际身份和去向已知后，将种植材料、植保制剂和移出废物解析到精确 UUID；不得采用宽泛代理候选。 | 身份审核记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | 终端产品输出 | 必须且只能有一个终端参考输出等于 1,000 kg，并采用 UUID `65443696-51af-4ba8-8f73-06d434a36605` 及全部必需限定信息。 |  |
| `validation_crop_cycle` | 全部清单行 | 田块面积、投入、产出、残余物和排放必须描述相同的声明作物周期和地理范围。 |  |
| `validation_mass_balance` | 收获和分选 | 在声明不确定度内核算收获块茎总质量与合格马铃薯、次级马铃薯、废物和实测处理损失。 | `mass-balance-identity` |
| `validation_nutrient_identity` | 土壤养分投入 | 保留每种产品身份和产品质量；养分基准计算不得替代或合并具体产品交换。 |  |
| `validation_flow_identity_expansion` | 参数化总括卡 | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |
| `validation_soil_emissions` | 管理土壤输出 | 核算氮投入和残余物去向与直接、间接 N2O 路径，并披露所选方法和因子。 | `ipcc-2019-managed-soils` |
| `validation_no_double_count` | 上游和前景清单 | 不得在上游数据集和前景负荷中重复计算灌溉取水、燃料燃烧、肥料生产或土壤排放。 | `ilcd-handbook-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 马铃薯种植与农场门准备前景数据集 |
| downstream_use | `secondary_dataset`；仅经审核和发布后可作为 `background_dataset` |
| allowed_use | 新鲜未加工马铃薯的农场门 LCA，以及保持声明地理范围、作物周期、路线、等级、水分基准、分配和身份解析的下游系统 |
| excluded_use | 种薯繁育、甘薯或其他根茎作物、农场门后清洗或储存、加工、零售或消费阶段，除非有经审核扩展 |
| required_metadata | 地理范围；品种；作物年份和周期；用途；生产系统；灌溉条件；收获面积；产量；水分基准；等级；残余物和废物去向；分配；流身份解析 |
| required_quality_disclosure | 前景覆盖；代理时期；缺失记录；仪表和质量平衡核算；养分基准；排放方法和因子；全部 set-only 展开 |
| update_trigger | 新的已审核马铃薯证据、重大路线或边界变化、土壤排放方法修订、具体流身份核验|

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-root-tuber-concepts-2003` | official_guidance | FAO, Root and Tuber Crops: Concepts and Methods Recommended by FAO and Operational Issues, https://www.fao.org/4/Y9422E/y9422e0d.htm | 马铃薯身份；收获面积、产量和单产概念；参考流边界 |
| `fao-save-and-grow-2011` | official_guidance | FAO, Save and Grow: A policymaker's guide to the sustainable intensification of smallholder crop production, https://www.fao.org/4/i2215e/i2215e.pdf | 种子、土壤管理、养分、水、植保和能源相关田间活动覆盖 |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接和间接 N2O、作物残余物氮、尿素、石灰施用、挥发和淋溶路径 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配层级和披露 |
| `ilcd-handbook-2010` | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, EUR 24708 EN, DOI 10.2788/38479, https://publications.jrc.ec.europa.eu/repository/handle/JRC48157 | 系统边界、过程细分、一致性、数据质量和防止重复计算 |
| `mass-balance-identity` | method_factor | 应用于匹配马铃薯收获和分选记录的质量守恒 | 收获产出平衡计算和校验 |
