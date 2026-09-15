---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-except-of-silicon-electrical-steel-not-further-work-ebfccee5
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 宽度不小于600毫米、除热轧外未经进一步加工的合金钢平板轧材（硅电钢除外）

## 1. 范围与适用性

本 PCR 适用于将具有完整记录的合金钢板坯转化为宽度不小于 600 mm、以热轧状态交付的可销售合金钢平板轧材的门到门生产。热轧线前景边界包括实际发生的坯料修整、再加热、高压水除鳞、粗轧与精轧、控制冷却、卷取或板/片分切、切边、直接相关的水与废气治理，以及跨越钢厂大门的包装。将其他合金钢初级形态转化为板坯所需的初轧或铸造仍属于上游数据集。若成品数据集用于从摇篮到大门的研究，必须链接相容的上游板坯数据集，不得遗漏炼钢和铸造过程。

当产品同时满足宽度与加工状态边界时，本类别包括不锈钢和高速钢等合金钢牌号；合金类别和牌号为必需限定信息。本类别不包括硅电钢、宽度小于 600 mm 的产品、冷轧产品，以及经酸洗、涂层、镀层、包覆、抛光、压型或下游制造而进一步加工的产品。产品使用阶段和生命周期终止阶段不在本前景边界内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-except-of-silicon-electrical-steel-not-further-work-ebfccee5 |
| classification_refs | CPC 3.0：41213（exact） |
| covered_products | 宽度不小于 600 mm、以热轧状态交付且未经进一步加工的合金钢卷、带、板和片，包括符合边界的不锈钢与高速钢牌号 |
| excluded_products | 硅电钢；宽度小于 600 mm；非合金钢；冷轧、酸洗、涂层、镀层、包覆、抛光、压型或其他进一步加工的产品；下游制成品 |
| representative_product | 钢厂大门处可销售的热轧宽幅合金钢卷或钢板 |
| production_route | 对具有完整记录的合金钢板坯进行再加热、除鳞、粗轧/精轧、冷却以及卷取或切割；坯料炼钢、铸造及任何初轧路线作为上游数据集限定信息保留 |
| market_state | 热轧、无涂层且未经其他进一步加工；声明卷、板或片形态以及合金牌号、尺寸和表面状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在钢厂大门交付热轧宽幅合金钢平板轧材 |
| How much | 1,000 kg 净可销售产品 |
| How well | 符合所声明的合金牌号和订货规范；宽度不小于 600 mm；不包括热轧之后的加工 |
| How long or cycle | 截止工厂大门放行的一个生产批次或炉批；不规定使用寿命 |
| reference_flow_link | `reference_product_hot_rolled_wide_alloy_steel` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 宽度为600毫米及以上、以热轧状态交付的合金钢平板轧材 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 合金类别和牌号/标识；化学成分或适用产品规范；卷、板或片形态；宽度和厚度；表面状态；未经进一步加工的声明；板坯来源、炼钢、铸造及任何初轧路线；轧机技术；加热炉燃料身份；生产地域；生产期间；再生含量核算；包装纳入情况；工厂大门边界 |

构建前景数据包时，`必需限定信息` 中的每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品及以质量计量的输入/输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明一致使用干基或收到状态质量；剔除未作为产品放行的不合格产出后，将所有清单值归一化到 1,000 kg 净可销售产品。 |
| `electricity_energy` | 交流电 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留以 kWh 记录的电表读数，并按精确恒等式 1 kWh = 3.6 MJ 转换；声明供应商、地域、电压、交付边界和所含线损。 |
| `metered_gas_volume` | 天然气、工艺煤气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按供应商或场址采用的温度、压力、水分基准和标准换算气体体积；不得混用实际立方米和标准立方米。 |
| `water_volume` | 外供工艺水和废水 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按水源或去向报告跨越前景边界的水；声明循环水是否为内部流，不得把内部循环同时计为输入和输出。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 热轧线接收的、具有完整记录的合金钢板坯，包括实测质量、合金身份、尺寸、温度/热装状态、生产路线、上游数据集和运输交接信息 |
| starting_condition_role | 前景从轧制坯料开始，使同一热轧规则可覆盖实质不同的合金类别以及上游 BF-BOF、EAF、重熔或特种精炼路线，而不进行隐含平均 |
| product_classification_scope | CPC 3.0 子类 41213：硅电钢除外、宽度不小于 600 mm、除热轧外未经进一步加工的合金钢平板轧材 |
| recursive_input_rule | 若同类别热轧产品用作进料，仅作为具有自身数据集的上游产品输入记录一次，不得在同一前景过程中递归重复应用本 PCR |
| upstream_dataset_requirement | 将板坯链接至地域、时间、技术和合金类别相容的上游数据集，该数据集应覆盖原料生产、炼钢、二次冶金、铸造以及板坯接收前的任何初轧；任何代理均须披露 |
| disclosure | 声明产品形态、合金牌号、宽度、厚度、表面状态、炉用燃料、热装/冷装、轧机配置、水处理边界、内部循环处理、包装、地域、年份、分配方法和每项排除的操作 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_hot_rolling_line` | 前景过程 | 纳入再加热、除鳞、粗轧与精轧、冷却、精整、直接相关的治理、厂内运输和现场水处理，但仅限于服务于所声明产品的操作。 | `eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017` |
| `boundary_upstream_feedstock` | 合金钢板坯 | 仅在链接相容的上游数据集时，才可将板坯接收前的炼钢、铸造及任何初轧留在热轧前景之外；否则成品数据集为门到门数据，不得表述为从摇篮到大门。 | `worldsteel-lci-methodology-2017` |
| `boundary_actual_operations` | 产品状态 | 只纳入工厂大门放行前实际发生的操作；排除酸洗、冷轧、涂层、镀层、包覆、压型、下游制造、使用和生命周期终止。 | `un-cpc-v3-structure-2025`; `eu-ferrous-metals-bat-2022` |
| `boundary_cutoff` | 前景交换 | 记录复现质量、水、能量和碳平衡所需的每项能源输入及全部材料、废物、共产品和基本流交换；对任何排除给出理由并保留筛选记录。 | `worldsteel-lci-methodology-2017` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `hot_rolling_line` | 合金钢热轧线 | `required` | 始终纳入；各燃料、氧气、润滑剂、包装、残余物和废水行按实际操作有条件纳入 | 将有记录的合金钢板坯经修整、再加热、除鳞、轧制、冷却、精整、治理和发运转化为成品的前景过程 | 所有交换归一化到 1,000 kg 净可销售参考产品 |

### 过程：合金钢热轧线（`hot_rolling_line`）

#### 输入

##### 产品流

###### 合金钢轧制坯料（`input_alloy_steel_slab`）

记录进入热轧线的具体合金钢板坯的实测质量、牌号、尺寸和热装状态。

- 选定流：热轧用合金钢板坯
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：热轧线接收的坯料实测毛质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_and_yield_records`
- 来源：`un-cpc-v3-structure-2025`; `worldsteel-lci-methodology-2017`

###### 热轧线外购交流电（`input_alternating_current_electricity`）

记录热轧线及其直接相关治理设施消耗的电表计量交流电。

- 选定流：热轧线电表计量的外购交流电
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：电表计量用电量，必要时由 kWh 转换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：`eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017`

###### 直接火焰再加热用天然气（`input_natural_gas`）

仅纳入直接火焰加热或直接相关燃烧装置实际消耗的天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：供应商或仪表记录的天然气体积，采用已披露的参考条件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：`eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017`

###### 直接火焰再加热用焦炉煤气（`input_coke_oven_gas`）

仅纳入跨越所声明热轧线能源边界的焦炉煤气。

- 选定流：煤气 `c7d45c5f-9cab-4706-bde4-38a6ce2914da`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：在已披露参考条件下计量的焦炉煤气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：`eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017`

###### 直接火焰再加热用高炉煤气（`input_blast_furnace_gas`）

仅纳入跨越所声明热轧线能源边界的高炉煤气。

- 选定流：高炉煤气 `50bd1eb9-efc2-4e40-928d-5114f74d4fb5`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：在已披露参考条件下计量的高炉煤气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：`eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017`

###### 直接火焰再加热用转炉煤气（`input_basic_oxygen_furnace_gas`）

仅纳入跨越所声明热轧线能源边界的碱性氧气转炉煤气。

- 选定流：碱性氧气转炉煤气
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量体积乘以生产批次特定的低位热值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：`eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017`

###### 富氧或纯氧燃烧用工业氧气（`input_industrial_oxygen`）

仅纳入实际富氧或纯氧燃烧使用且跨越边界的工业氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：按已披露纯度、压力和参考条件计量的氧气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：`eu-ferrous-metals-bat-2022`

###### 外供工艺水（`input_process_water`）

本行记录一个已识别的外部水源；多个水源跨越边界时，数据包应按水源分别建立具体流。

- 选定流：供应热轧线的工艺水
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：外部计量的除鳞、冷却、抑尘和相关处理供水量，不含内部循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-ferrous-metals-bat-2022`

###### 热轧润滑油（`input_hot_rolling_lubricant_oil`）

仅纳入所声明热轧操作实际消耗且跨越前景边界的润滑油。

- 选定流：热轧油 `b6d54639-2da8-49b3-89d2-e14324bb14c8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采购质量按库存变化和有记录的回收量调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_consumable_and_packaging_records`
- 来源：`eu-ferrous-metals-bat-2022`

###### 钢制打包带（`input_steel_strapping`）

仅纳入随所声明产品跨越工厂大门的钢制打包带。

- 选定流：钢打包带 `56fe4f71-b594-4b55-8553-c87f2516737d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放打包带质量减去退回的未用打包带，并分配至发运参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_consumable_and_packaging_records`
- 来源：`worldsteel-lci-methodology-2017`

##### 废物流

本 PCR 不预设废物输入。实际废物输入应按实测数量、成分、来源和处理角色分别记录为一个已识别流。

##### 基本流

本 PCR 不预设基本流输入。场址特定基本流跨越技术圈—环境边界时应分别记录。

#### 输出

##### 产品流

###### 热轧宽幅合金钢参考产品（`reference_product_hot_rolled_wide_alloy_steel`）

本流为在工厂大门放行并与所声明参考流链接的净可销售热轧状态合金钢产品。

- 选定流：宽度为600毫米及以上、以热轧状态交付的合金钢平板轧材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经可销售产品核验后的固定参考产出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1,000 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`un-cpc-v3-structure-2025`; `un-cpc-v3-explanatory-notes-2025`; `worldsteel-lci-methodology-2017`

##### 废物流

###### 合金钢切头与切边废钢（`output_crop_trim_alloy_steel_scrap`）

记录离开热轧线边界的合金钢切头和切边废钢；内部返回量应按毛量追踪，但在所声明边界只净计一次。

- 选定流：合金钢切头与切边废钢
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测外运废钢加经核验的库存增加量，减去有记录的返回同一前景边界的数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mass_and_yield_records`
- 来源：`eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017`

###### 热轧氧化铁皮（`output_mill_scale`）

记录从除鳞和水处理系统分离的氧化铁皮质量，并声明回收或处置去向。

- 选定流：氧化铁皮 `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测外运质量加经核验的库存变化，并按回收或处置去向分别报告
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residue_and_wastewater_records`
- 来源：`eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017`

###### 含油工艺水处理污泥（`output_oily_water_treatment_sludge`）

当轧制水处理产生的含油污泥离开所声明边界时纳入本行。

- 选定流：热轧工艺水处理产生的含油污泥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测湿质量，并披露含水率和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_wastewater_records`
- 来源：`eu-ferrous-metals-bat-2022`

###### 外送处理的热轧废水（`output_hot_rolling_wastewater`）

仅纳入跨越场址边界、交由外部处理的废水；现场循环水应作为内部流记录，不得重复计为外部输出。

- 选定流：外送处理的热轧废水
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：在外部处理交接点计量的废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_wastewater_records`
- 来源：`eu-ferrous-metals-bat-2022`

##### 基本流

###### 排放至空气的直接化石二氧化碳（`output_fossil_carbon_dioxide_to_air`）

记录热轧线燃料燃烧产生的直接化石二氧化碳，不包括上游燃料生产排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：有直接实测值时采用实测质量，否则根据采集的燃料量、燃料碳含量和有记录的氧化假设计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emission_records`
- 来源：`eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017`

###### 排放至空气的颗粒物（`output_particulate_matter_to_air`）

按所声明的测量粒径级分和环境介质，记录坯料修整、除鳞、粗轧、精轧及相关收集或治理过程中进入空气的颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据实测浓度和烟气流量计算有组织与无组织排放质量，并声明颗粒物粒径级分
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_air_emission_records`
- 来源：`eu-ferrous-metals-bat-2022`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 生产批次、牌号和产品形态 | 在分配前，优先使用批次、产线或牌号特定的仪表和质量记录进行过程细分；若已有独立记录，不得对不锈钢、高速钢和其他合金类别进行平均。 | `worldsteel-lci-methodology-2017` |
| `allocation_common_burdens` | 无法分离的热轧线共同投入 | 无法细分时，按共生产热轧产品的净可销售产出质量分配共同负荷，并披露所含牌号、产出质量以及结果对分配选择的敏感性。 | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recycling` | 内部循环水、氧化铁皮和金属废钢回路 | 为质量平衡保留内部回收毛量，但清单只计跨越所声明前景边界的净交换；不得对同一内部回路同时计入避免负荷和输入负荷。 | `worldsteel-lci-methodology-2017` |
| `allocation_exported_materials` | 废钢、氧化铁皮和其他外运物料 | 声明每项外运物料属于废物还是有市场的共产品，并说明去向和处理；只有在适用研究方法允许时，才可采用替代法或其他分配，并记录功能等效性和敏感性分析。 | `worldsteel-lci-methodology-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass_and_yield_records` | `hot_rolling_line` | 坯料、可销售产出、切头切边废钢、氧化铁皮 | 地磅、板坯追踪、生产和库存记录 | 时间戳；批次；牌号；板坯质量；可销售产品质量；废钢/氧化铁皮质量；库存变化；热装状态 | 经校准的衡器和经核对的生产记录 | kg | 每批次记录并按月核对 | 有代表性的连续 12 个月 | 服务于所声明产品的全部产线和精整工位 | 按牌号汇总跨边界净质量并归一化到可销售产出 | 校准记录；质量平衡核对；异常日志 |
| `cp_energy_and_gas_records` | `hot_rolling_line` | 电力、天然气、工艺煤气、氧气 | 仪表、发票、气体分析和能量平衡记录 | 仪表编号；期初/期末读数；kWh；气体体积；温度；压力；水分基准；低位热值；氧气纯度；分配键 | 经校准的仪表，并与发票和批次日志核对 | kWh；MJ；m3 | 连续或按批次记录并按月核对 | 有代表性的连续 12 个月 | 热轧线和直接相关的治理/公用设施 | 扣除外供和无关用户，完成单位换算，只分配无法分离的共同用量，并归一化到可销售产出 | 仪表校准；供应商声明；能量平衡；分配记录 |
| `cp_water_records` | `hot_rolling_line` | 外供工艺水 | 水表和水平衡记录 | 水源；仪表读数；补水量；循环水量；排水量；分配键 | 按水源设置仪表并编制年度水平衡 | m3 | 连续或每日记录并按月核对 | 有代表性的连续 12 个月 | 除鳞、冷却、抑尘和相关处理 | 仅计边界处的外部供水并归一化到可销售产出 | 仪表校准；水平衡；取排水许可 |
| `cp_consumable_and_packaging_records` | `hot_rolling_line` | 润滑油和钢制打包带 | 采购、领用、退回、回收和库存记录 | 物料身份；牌号；领用质量；退回质量；回收质量；期初/期末库存；产品归属 | 将库存核对与生产批次和发运记录链接 | kg | 每次领用并按月核对 | 有代表性的连续 12 个月 | 轧机机架和发运包装 | 采购量加库存减少量减退回/回收量，并归属到所声明产品 | 发票；库存核对；包装规范 |
| `cp_residue_and_wastewater_records` | `hot_rolling_line` | 氧化铁皮、含油污泥、外送废水 | 衡器、转移联单、实验室、罐位和流量计记录 | 残余物身份；湿质量；含水率；废水体积；含油量；去向；回收/处置代码；库存变化 | 实测外运量并核对处理记录 | kg；m3 | 每次外运或连续计量并按月核对 | 有代表性的连续 12 个月 | 热轧线和直接相关的水处理 | 按去向分别汇总每个已识别的净输出并归一化到可销售产出 | 废物联单；实验室报告；仪表校准；库存核对 |
| `cp_direct_air_emission_records` | `hot_rolling_line` | 化石二氧化碳和颗粒物 | 连续监测、烟道测试、燃料记录和碳平衡记录 | 排放源编号；运行时间；浓度；烟气流量；颗粒物粒径级分；燃料量；碳含量；氧化因子；生物源/化石源拆分 | 有条件时直接测量，否则由已采集活动数据进行有记录的计算 | kg | 连续或按批次；烟道测试按许可频次 | 有代表性的连续 12 个月，包括正常和异常运行 | 全部相关热轧线及治理设施排放点 | 积分实测排放或逐源计算，扣除无关过程并归一化到可销售产出 | 监测仪校准；认可测试报告；燃料证书；计算工作簿 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 净行数量 × 1,000 / 净可销售参考产品质量 | 跨边界行数量；净可销售产品质量 | 每 1,000 kg 参考产品的行数量 |  |
| `calc_electricity_conversion` | 电力 | 电力（MJ）= 电表电量（kWh）× 3.6 | 电表 kWh | 以 MJ 表示的交付电力 |  |
| `calc_process_gas_energy` | 焦炉煤气、高炉煤气和转炉煤气 | 煤气能量（MJ）= 参考条件下煤气体积（m3）× 批次特定低位热值（MJ/m3） | 换算后的煤气体积；实测或供应商低位热值 | 煤气能量（MJ） | `eu-ferrous-metals-bat-2022` |
| `calc_direct_fossil_co2` | 直接燃料燃烧 | 优先采用直接实测化石 CO2；否则汇总燃料量 × 燃料碳含量 × 氧化因子 × 44/12，并分开化石碳和生物源碳 | 燃料记录；碳含量；氧化因子；可用的 CO2 实测值 | 排放至空气的化石 CO2（kg） | `worldsteel-lci-methodology-2017` |
| `calc_mass_balance` | 合金钢质量输出 | 核对板坯输入与可销售产品、金属废钢、氧化铁皮、污泥固体和有记录的库存变化；调查残差，不得强行闭合 | 全部实测质量输入/输出和库存变化 | 有记录的质量平衡残差 | `worldsteel-lci-methodology-2017` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和坯料 | 从板坯接收到发运，全程保留牌号/标识、化学成分或适用规范、形态、尺寸、表面状态及批次链接。 | 材质证书；订货规范；板坯和钢卷/钢板追踪记录 |
| `dq_temporal_coverage` | 全部前景记录 | 在可行时采用有代表性的连续 12 个月；说明较短期间、停机、异常运行以及超过五年的记录。 | 覆盖汇总；生产日历；偏差日志；`worldsteel-lci-methodology-2017` |
| `dq_meter_and_mass_balance` | 能源、气体、水和物料平衡 | 记录仪表边界、校准、缺失数据处理、分配键、库存变化和核对残差。 | 校准证书；平衡表；核对和异常日志 |
| `dq_geography_technology` | 上游和前景数据集 | 匹配地域、加热炉/轧机技术、合金类别、热装实践、燃料组合和水处理配置；识别并说明每个代理。 | 数据集元数据；工艺流程图；供应商声明 |
| `dq_completeness` | 清单 | 筛查热轧线的每项输入/输出和环境释放；保留排除理由，并证明内部循环未被重复计量。 | 签署的流筛查；质量/水/能量/碳平衡；废物与排放登记册 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 参考产品 | 若不能证明合金钢牌号、非硅电钢身份、宽度不小于 600 mm、热轧状态和未经进一步加工，则拒绝该数据集。 | `un-cpc-v3-structure-2025` |
| `validation_reference_mass` | 参考流 | 确认归一化后净可销售产出恰为 1,000 kg，且每个清单行采用同一分母。 |  |
| `validation_upstream_link` | 板坯输入 | 除非链接了无重叠、无遗漏且相容的上游炼钢、铸造及任何板坯前初轧数据集，否则将数据集报告为门到门。 | `worldsteel-lci-methodology-2017` |
| `validation_energy_water` | 能源、气体、氧气和水 | 将仪表与所声明热轧线边界核对，声明气体参考条件和水的来源/去向，并说明物料残差或共用服务分配。 | `eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017` |
| `validation_residues_emissions` | 废物和基本流输出 | 分别核验废钢、氧化铁皮、污泥、废水、化石 CO2 和颗粒物的身份、数量与去向；不得用合并的残余物或排放行替代。 | `eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017` |
| `validation_allocation` | 多产品批次和外运物料 | 确认已优先尝试过程细分，并记录所有剩余分配、替代、去向和敏感性，且内部回路未重复计量。 | `worldsteel-lci-methodology-2017` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 热轧前景生产数据集；可与相容的上游合金钢板坯数据集组合后发布从摇篮到大门数据 |
| downstream_use | `secondary_dataset`；在代表性、分配和上游链接经独立审查后可作为 `background_dataset` |
| allowed_use | 需要具有明确牌号、宽度不小于 600 mm、以热轧状态交付的合金钢输入，且地域、技术和期间相符的产品足迹与生命周期模型研究 |
| excluded_use | 硅电钢；宽度小于 600 mm；冷轧、酸洗、涂层、镀层、包覆、抛光、压型或制成品；无依据的地域或合金类别代理；未经研究特定审查的公开比较性断言 |
| required_metadata | PCR id 和版本；产品牌号/标识及化学成分/规范；形态和尺寸；表面与进一步加工状态；上游板坯数据集；炼钢、铸造及任何初轧路线；轧机和加热炉技术；燃料身份；地域；期间；分配；水处理边界；包装；UUID 缺口与代理 |
| required_quality_disclosure | 初级数据占比和期间；校准与核对证据；质量/水/能量/碳残差；缺失数据处理；分配敏感性；数据年龄；上游相容性；排除操作；未解决的流身份和范围证据 |
| update_trigger | 合金类别、产品形态、坯料路线、轧机配置、加热炉燃料、热装实践、水处理、分配方法、地域、代表年份、产品规范发生变化，或重大 UUID/证据缺口得到解决 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-v3-structure-2025` | `official_guidance` | 联合国统计司，《产品总分类（CPC）3.0版》结构（2025年6月30日）。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-03） | 正式子类标题和产品身份：合金钢平板轧材、宽度阈值、热轧状态及硅电钢排除 |
| `un-cpc-v3-explanatory-notes-2025` | `official_guidance` | 联合国统计司，《产品总分类（CPC）3.0版》解释性说明（2025年6月30日）。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期：2026-09-03） | 原始解释性说明确认宽度为 600 mm 及以上的热轧高速钢平板产品归入子类 41213 |
| `eu-ferrous-metals-bat-2022` | `standard` | 欧盟委员会实施决定 (EU) 2022/2110（2022年10月11日），黑色金属加工行业最佳可行技术（BAT）结论。https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2110（检索日期：2026-09-03） | 热轧过程分解；能源、水、残余物、排放、监测和直接相关处理要求；BAT 性能水平不作为经验清单范围 |
| `worldsteel-lci-methodology-2017` | `method_factor` | 世界钢铁协会，《生命周期清单方法报告》，2017。https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf（检索日期：2026-09-03） | 工厂大门声明单位、系统边界、初级数据质量、内部回收和共产品核算；该来源明确排除不锈钢，故对不锈钢牌号的直接适用性受限，须另行记录相容的上游方法和前景规则 |
