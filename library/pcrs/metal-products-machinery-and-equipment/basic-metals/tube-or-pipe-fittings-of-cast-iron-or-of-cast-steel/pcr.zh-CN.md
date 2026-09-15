---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tube-or-pipe-fittings-of-cast-iron-or-of-cast-steel
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 铸铁或铸钢制管子附件

## 1. 范围与适用性

本 PCR 适用于承载主体由铸铁或铸钢铸造而成的成品管子附件，通常亦称管件。所涵盖形式包括承载主体为铸件的弯头、弯管、三通、四通、异径管、接头、管套、管帽、管塞及法兰。灰铸铁、球墨铸铁或可锻铸铁，以及碳素、低合金或高合金铸钢均可纳入，但必须声明牌号、连接形式、尺寸、压力或使用等级、热处理、涂层及验收规范。

前景边界始于外购金属炉料及其他生产投入到达铸造厂大门，止于验收合格的管件离开工厂大门。边界包括炉料准备、熔炼与金属处理、铸型和型芯制造、浇注、冷却、落砂、清理、浇冒口去除、精整、检验，以及适用的热处理和工厂涂装。上游生铁、厂外废钢预处理、铁合金、砂、粘结剂、燃料、电力、气体及涂料的生产不属于前景过程，但必须连接上游数据集。分销、安装、使用、维护和寿命终止不在边界内。

管子和管道主体、空心型材、离心铸管、以非铸钢坯料锻造、轧制、焊接或机加工的管件，以及阀门、泵、垫片、密封件和可拆卸紧固件均不属于本 PCR。分销包装默认排除，除非其为所声明可销售参考产品的组成部分；纳入包装时，前景数据包必须将各包装材料分别建模为原子流。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tube-or-pipe-fittings-of-cast-iron-or-of-cast-steel |
| classification_refs | CPC 3.0：41292，精确映射语境 |
| covered_products | 承载主体为铸件的铸铁或铸钢成品管子附件，包括所声明的机加工、热处理和工厂涂层 |
| excluded_products | 管子和管道主体；空心型材；离心铸管；轧制、锻造、焊接或装配制成的非铸管件；阀门；泵；垫片；密封件；可拆卸紧固件 |
| representative_product | 工厂大门处一件验收合格的铸铁或铸钢成品管件 |
| production_route | 炉料准备；熔炼与金属处理；铸型/型芯制造；铸造、冷却、落砂、清理和精整；条件性热处理；条件性工厂涂装 |
| market_state | 已完成并通过检验的管件，已声明合金牌号、尺寸、连接形式、压力或使用等级、热处理状态、涂层状态及所含附件；处于分销前状态，但明确纳入的一体化包装除外 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供用于连接、分支、改变方向或管径，或封闭管子或管道系统的成品管件 |
| How much | 1 kg 验收合格的成品管件 |
| How well | 满足所声明材料牌号、尺寸和连接规范、压力或使用等级、表面状态、热处理状态、涂层状态及验收试验要求 |
| How long or cycle | 一次工厂大门处的合格产品交付；使用寿命不属于本从摇篮到工厂大门参考 |
| reference_flow_link | `casting_and_finishing` 输出的 1 kg 合格参考产品；包含声明的永久性工厂涂层，不包含可拆卸分销包装 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 铸铁或铸钢管件或管件 `39f3bbea-17e4-4e7b-9e89-9fbf72f5937d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 铸铁或铸钢材料族；合金或材料牌号；管件形式；公称尺寸和壁厚等级；连接形式；压力或使用等级；适用产品规范；热处理状态；涂层材料和厚度或无涂层状态；泄漏或压力试验状态；所含附件；场址；地理范围；生产期；熔炉技术；铸型和型芯系统；参考产品净质量基准 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息的数据包，其参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | 验收合格的参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准秤具称量合格管件。计入声明属于参考产品的永久性工厂涂层和不可分离部件；排除可拆卸分销包装、临时试验介质、浇口、冒口及不合格铸件。 |
| `measurement_electricity` | 各交流电行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 有分表时按过程保留计量电量。使用 1 kWh 等于 3.6 MJ 的精确换算，并在只有共用电表时披露分配方法。 |
| `measurement_gas_volume` | 气态天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按仪表所声明的温度、压力、含湿量及标准或实际基准条件报告气体体积。不同条件的记录汇总前必须进行有文件支持的换算。 |
| `measurement_water_mass` | 工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用实测质量，或用场址和温度适用的密度将实测体积换算为质量；披露水源、水质、交付边界及换算。 |
| `measurement_mass_balance` | 金属炉料、内部返回料、产品和外排废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将外购金属与合格产品、外排含金属废物、实测库存变化，以及单列的内部浇口、冒口、返回料和不合格品进行核对。内部返回料不跨越系统边界，不得作为外购投入或外排废物重复计算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购金属炉料、铸型/型芯材料、能源载体、气体、水及适用涂层材料到达报告铸造厂大门，并已声明数量、供应商身份、来源、成分或牌号及交付状态 |
| starting_condition_role | 从场址大门到工厂大门的前景生产系统之上游产品投入 |
| product_classification_scope | 与 CPC 3.0 子类 41292 一致的铸铁或铸钢成品管子附件；分类引用仅作为语境，不能取代语义边界 |
| recursive_input_rule | 同一产品类别的外购管件仅作为外部产品投入记录一次并连接独立上游数据集；不得在同一前景系统内用本 PCR 递归展开 |
| upstream_dataset_requirement | 每项外购材料、电力、燃料、气体、水、涂层及厂外处理废物都必须连接在地理、技术、时间和成分方面具有代表性的上游数据集 |
| disclosure | 声明场址、地理范围、生产期、铸造材料族和牌号、熔炉技术、炉料组成、铸型/型芯系统、内部砂和金属返回料处理、排放控制、热处理、机加工、涂层、合格率，以及排除或外包的工序 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_site_gate_to_factory_gate` | 前景系统 | 纳入从外购投入接收和搬运至合格管件到达工厂大门的全部场内作业，包括内部物料搬运和污染控制设施运行。 | `eu-jrc-sf-bref-2024`; `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995` |
| `boundary_upstream_inputs` | 外购投入 | 上游生产不纳入前景系统，但每项跨越场址大门的外购投入必须连接一个具有代表性的上游数据集。 | `eu-jrc-sf-bref-2024` |
| `boundary_internal_returns` | 内部浇口、冒口、直浇道、不合格品和回收砂 | 完全在报告系统内部循环的材料作为内部回路处理。为质量平衡透明度报告循环量，但不得建立外部产品流或废物流。 | `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995` |
| `boundary_conditional_routes` | 热处理和涂层 | 仅在对所声明参考产品实施时纳入热处理或工厂涂层；否则将该过程记为不适用，并披露外包工序及所连接的供应商数据集。 |  |
| `boundary_exclusions` | 下游阶段 | 排除分销、安装、使用、维护和寿命终止。不得仅依据本 PCR 声称从摇篮到坟墓的结果。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `charge_and_melt` | 炉料准备、熔炼与金属处理 | `required` | 始终纳入；路线特定行仅在所声明熔炉或材料牌号使用该交换时适用 | 生产成分受控铸铁或铸钢熔液的前景生产 | 每 1 kg 合格管件输出 |
| `mould_and_core` | 铸型和型芯制造 | `required` | 始终纳入；各粘结剂、型芯、烘炉和湿砂行仅对所声明铸型/型芯系统适用 | 制造外形型腔和内部型芯的前景生产 | 每 1 kg 合格管件输出 |
| `casting_and_finishing` | 浇注、冷却、落砂、清理、机加工和检验 | `required` | 始终纳入；为所声明管件实施的各精整工序均须记录 | 将熔融金属转化为合格成品管件的前景生产 | 1 kg 合格管件输出 |
| `heat_treatment` | 铸后热处理 | `conditional` | 所声明牌号或验收规范要求退火、正火、淬火、回火、固溶或其他场内热循环时纳入 | 前景调质处理 | 每 1 kg 经热处理的合格管件 |
| `surface_coating` | 工厂熔结环氧粉末涂装 | `conditional` | 对所声明参考产品在场内施加熔结环氧粉末涂层时纳入 | 前景表面防护 | 每 1 kg 涂层合格管件 |

### 过程：炉料准备、熔炼与金属处理（`charge_and_melt`）

#### 输入

##### 产品流

###### 外购废钢炉料（`melt_scrap_steel`）

记录跨越场址大门并称量的外购废钢。声明废钢牌号、来源、污染控制及用于铸铁或铸钢。

- 选定流：钢铁废碎料 `6cb5e364-ba39-4009-8b40-a76fdc88bc42`
- 流属性/单位：Mass / kg
- 数量规则：实测外购废钢装料量，扣除库存变化且不含内部返回料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_materials`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### 外购生铁炉料（`melt_pig_iron`）

仅在生铁属于所声明铸铁熔炼炉料时记录；否则将本原子行记为不适用。

- 选定流：生铁 `439daa27-1495-4a1b-8dec-d9adabba0269`
- 流属性/单位：Mass / kg
- 数量规则：实测生铁装料量并扣除库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_materials`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`

###### 硅铁添加剂（`melt_ferrosilicon`）

用于成分调整或孕育时记录硅铁，并声明其牌号和硅含量。

- 选定流：硅铁合金 `33cf9edf-84e6-41c7-8986-2983e91391d8`
- 流属性/单位：Mass / kg
- 数量规则：实测加入熔炉或钢包的硅铁量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_materials`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### 锰铁添加剂（`melt_ferromanganese`）

使用块状锰铁时记录，并声明碳等级和锰含量。

- 选定流：锰铁合金，块状 `2f5d9ece-fe82-4e6d-a12d-47366582ec48`
- 流属性/单位：Mass / kg
- 数量规则：实测加入熔炉或钢包的锰铁量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_materials`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### 石灰石熔剂（`melt_limestone`）

仅对使用石灰石熔剂的熔炉路线记录。

- 选定流：石灰石 `09f44589-83dc-441d-9a89-f15f1bfa1bec`
- 流属性/单位：Mass / kg
- 数量规则：实测作为熔剂加入的石灰石量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_materials`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### 冲天炉焦炭（`melt_coke`）

仅对所声明冲天炉路线记录焦炭，并披露外购牌号、灰分、水分和硫基准。

- 选定流：焦炭 `a5a31215-d01f-454a-8f28-16f5154709d8`
- 流属性/单位：Mass / kg
- 数量规则：实测加入冲天炉的外购焦炭量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_materials`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`

###### 熔炼电力（`melt_electricity`）

记录炉料准备、电炉、保温、钢包及熔炼相关控制设施消耗的交流电，不得计入已分配给其他过程的电力。

- 选定流：交流电 `0e0b235d-9043-11d3-b2c8-0080c8941b49`
- 流属性/单位：Net calorific value / MJ
- 数量规则：熔炼区域计量或分配电量换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_charge_utilities`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### 熔炼天然气（`melt_natural_gas`）

仅记录场内炉料准备、燃气熔炼或保温装置、钢包加热或熔炼区域控制设备消耗的气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按声明参考条件计量或分配的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_utilities`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### 吹氧或金属处理用氧气（`melt_oxygen`）

仅在吹氧或其他所声明金属处理操作消耗外购或场内供应氧气时记录工业氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：按声明纯度、压力和参考条件计量的氧气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_charge_utilities`
- 来源：`us-epa-ap42-steel-foundries-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 外运铸造熔炼炉渣（`melt_foundry_slag`）

扣除场内再利用后记录离开报告场址的炉渣。在获得精确状态为 100 的流之前，保留铸造特定废物身份未解决状态。

- 选定流：铸造熔炼炉渣
- 流属性/单位：Mass / kg
- 数量规则：实测外运铸造熔炼炉渣，扣除场内再利用和库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melt_outputs`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

##### 基本流

###### 熔炼燃料和碳质炉料产生的化石二氧化碳（`melt_co2_fossil`）

记录场内熔炼、保温、钢包加热及碳氧化产生的直接化石二氧化碳，不计入上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：综合直接测量，或采用所采集燃料和碳质炉料记录进行场址特定碳平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_melt_emissions`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`

###### 熔炼产生的化石一氧化碳（`melt_co_fossil`）

记录经过适用场内控制后排入空气的直接化石一氧化碳。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：报告期内综合测量或计算的控制后排放量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_melt_emissions`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### 熔炼燃烧产生的二氧化氮（`melt_nitrogen_dioxide`）

仅在作为独立物种定量时记录排入空气的二氧化氮。不得用亚硝酸根或水体/土壤区室替代；Tiangong UUID 尚未解决。

- 选定流：排入空气的二氧化氮
- 流属性/单位：Mass / kg
- 数量规则：综合测量或分物种计算的适用控制后直接排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_melt_emissions`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### 熔炼燃烧产生的二氧化硫（`melt_sulfur_dioxide`）

记录控制后排入室外空气的二氧化硫，不得采用室内空气、高层大气或水体区室 UUID。

- 选定流：排入未特指空气的二氧化硫
- 流属性/单位：Mass / kg
- 数量规则：综合测量或燃料硫平衡得到的适用控制后直接排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_melt_emissions`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### 熔炼颗粒物（`melt_particulate`）

记录炉料搬运、熔炉运行、合金化、扒渣和出铁过程中控制后排入室外空气的粒径未特指总颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：分配给熔炼的控制后烟囱和已捕集无组织排放综合量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_melt_emissions`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

### 过程：铸型和型芯制造（`mould_and_core`）

#### 输入

##### 产品流

###### 原生硅砂（`mould_silica_sand`）

记录加入铸型/型芯系统的外购硅砂，不含内部循环的回用砂。

- 选定流：硅砂 `854527a0-1a8f-43af-b7c5-8c20d22e61ff`
- 流属性/单位：Mass / kg
- 数量规则：实测原生硅砂投入并扣除库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mould_materials`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### 湿型砂用膨润土（`mould_bentonite`）

仅在膨润土作为所声明湿型砂粘土粘结剂时记录。

- 选定流：膨润土 `93806a54-46f5-409c-99c5-4144a1e73b5d`
- 流属性/单位：Mass / kg
- 数量规则：实测外购膨润土添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mould_materials`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`

###### 酚醛树脂型芯粘结剂（`core_phenolic_resin`）

仅在所声明铸型或型芯配方使用酚醛树脂时记录；其他粘结剂化学品须在前景数据包中另列原子行。

- 选定流：酚醛树脂 `9f10798f-ffb5-402d-b805-27d2db4e2caf`
- 流属性/单位：Mass / kg
- 数量规则：实测以供应状态计的酚醛树脂消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mould_materials`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### 铸型制备用工艺用水（`mould_process_water`）

记录加入湿型砂或直接用于本过程的工艺用水；闭路冷却水仅记录跨越场址边界的净补水量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测工艺用水投入并扣除循环水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mould_materials`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`

###### 型芯或铸型烘干用天然气（`core_natural_gas`）

仅在场内型芯炉或铸型烘干机消耗天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按声明参考条件计量或分配的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mould_utilities`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### 铸型和型芯用电（`mould_electricity`）

记录砂处理、混砂、造型、制芯、烘干、再生及过程控制用电。

- 选定流：交流电 `0e0b235d-9043-11d3-b2c8-0080c8941b49`
- 流属性/单位：Net calorific value / MJ
- 数量规则：铸型/型芯计量或分配电量换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_mould_utilities`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废铸造型砂和芯砂（`mould_spent_foundry_sand`）

记录内部再生和库存变化后离开场址的废硅质铸造砂，不得以一般废磨料替代。

- 选定流：废铸造型砂和芯砂
- 流属性/单位：Mass / kg
- 数量规则：实测外运废铸造砂，扣除场内再生和库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mould_outputs`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

##### 基本流

###### 型芯或铸型加热产生的化石一氧化碳（`mould_co_fossil`）

记录粘结剂反应及燃料型型芯或铸型加热过程中控制后排入空气的化石一氧化碳。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：分配给铸型和型芯制造的控制后排放综合量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_mould_emissions`
- 来源：`us-epa-ap42-steel-foundries-1995`

###### 铸型和型芯颗粒物（`mould_particulate`）

记录砂搬运、混合、成型、再生及型芯炉控制后排入室外空气的颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：分配给铸型/型芯制造的控制后烟囱和已捕集无组织排放综合量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_mould_emissions`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

### 过程：浇注、冷却、落砂、清理、机加工和检验（`casting_and_finishing`）

#### 输入

##### 产品流

###### 铸造和精整用电（`finishing_electricity`）

记录分配给本过程的浇注辅助、冷却输送、落砂、切割、打磨、抛丸、机加工、检验、通风及控制设施用电。

- 选定流：交流电 `0e0b235d-9043-11d3-b2c8-0080c8941b49`
- 流属性/单位：Net calorific value / MJ
- 数量规则：铸造和精整计量或分配电量换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_inputs`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

###### 铸钢抛丸磨料（`finishing_cast_steel_shot`）

仅在场内抛丸消耗铸钢丸时记录。外购量应扣除内部回收介质；具名状态为 100 的候选分类不相容，因此 UUID 尚未解决。

- 选定流：铸钢抛丸磨料
- 流属性/单位：Mass / kg
- 数量规则：实测外购钢丸消耗量，扣除库存变化和回收介质库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_inputs`
- 来源：`us-epa-ap42-steel-foundries-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的成品管件（`finished_fitting`）

该输出为实现参考流的验收合格管件，适用时包含所声明永久性涂层。

- 选定流：铸铁或铸钢管件或管件 `39f3bbea-17e4-4e7b-9e89-9fbf72f5937d`
- 流属性/单位：Mass / kg
- 数量规则：按参考流定义恰为 1 kg 合格成品管件
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc-3-0-structure-2025`

##### 废物流

###### 捕集的含铁铸造精整粉尘（`finishing_foundry_dust`）

记录切割、打磨、抛丸、机加工及精整空气控制系统产生并离开场址的含铁粉尘，不得以一般生活垃圾粉尘或软木粉尘替代。

- 选定流：捕集的含铁铸造精整粉尘
- 流属性/单位：Mass / kg
- 数量规则：实测外运精整粉尘，扣除库存变化和场内回收
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_outputs`
- 来源：`us-epa-ap42-steel-foundries-1995`

##### 基本流

###### 精整颗粒物（`finishing_particulate`）

记录落砂、切割、打磨、抛丸和机加工过程中控制后排入室外空气的颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：分配给精整的控制后烟囱和已捕集无组织排放综合量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格管件输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_emissions`
- 来源：`us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995`

### 过程：铸后热处理（`heat_treatment`）

#### 输入

##### 产品流

###### 热处理用电（`heat_electricity`）

仅记录适用于所声明管件的场内热处理循环用电。

- 选定流：交流电 `0e0b235d-9043-11d3-b2c8-0080c8941b49`
- 流属性/单位：Net calorific value / MJ
- 数量规则：热处理计量或分配电量换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经热处理的合格管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_heat_treatment`
- 来源：

###### 热处理天然气（`heat_natural_gas`）

仅对场内燃气热处理循环记录气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按声明参考条件计量或分配的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经热处理的合格管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 热处理产生的化石二氧化碳（`heat_co2_fossil`）

仅对燃料型场内热处理记录直接化石二氧化碳，不计入上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：综合直接测量，或采用所采集热处理燃料记录进行场址特定碳平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经热处理的合格管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_heat_treatment`
- 来源：

### 过程：工厂熔结环氧粉末涂装（`surface_coating`）

#### 输入

##### 产品流

###### 熔结环氧粉末（`coating_epoxy_powder`）

仅在场内施涂时记录供应状态的熔结环氧粉末。声明树脂体系、颜色、固体分、施涂厚度和过喷粉回收做法；精确 Tiangong UUID 尚未解决。

- 选定流：熔结环氧粉末涂料
- 流属性/单位：Mass / kg
- 数量规则：实测发放至生产线的新粉末量，扣除退回的未开封材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 涂层合格管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_coating`
- 来源：

###### 涂装线用电（`coating_electricity`）

记录分配给涂装线表面准备、粉末施涂、回收设备、固化、通风和控制设施的电力。

- 选定流：交流电 `0e0b235d-9043-11d3-b2c8-0080c8941b49`
- 流属性/单位：Net calorific value / MJ
- 数量规则：涂装线计量或分配电量换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 涂层合格管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_surface_coating`
- 来源：

###### 涂层固化炉天然气（`coating_natural_gas`）

仅在场内涂层固化炉以天然气为燃料时记录气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按声明参考条件计量或分配的固化炉天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 涂层合格管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_coating`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 粉末涂装废弃物（`coating_powder_waste`）

扣除场内回收再用的过喷粉后，记录离开场址的粉末涂装废弃物。声明废物为固化或未固化状态及其树脂和颜料体系。

- 选定流：粉末涂装废弃物 `9aa53a82-5462-400e-9096-efab7718201f`
- 流属性/单位：Mass / kg
- 数量规则：实测外运粉末涂装废弃物，扣除场内回收和库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 涂层合格管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_coating`
- 来源：

##### 基本流

###### 涂层固化产生的化石二氧化碳（`coating_co2_fossil`）

仅在场内涂层固化炉燃烧天然气时记录直接化石二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：综合直接测量，或采用所采集固化炉燃料记录进行场址特定碳平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 涂层合格管件
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_surface_coating`
- 来源：

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 共用铸造作业 | 优先采用过程分表、批次记录和产品族细分，使所声明管件直接获得实测材料、能源、废物和排放量而无需分配。 |  |
| `allocation_mass_if_unavoidable` | 不可分离多产品作业 | 无法细分时，按同一报告期验收合格产品实测质量分配共用负荷。披露分配因子、所含产品、不合格质量和敏感性结果；未经审查理由不得采用销售价格。 |  |
| `allocation_internal_returns` | 内部浇口、冒口、直浇道、不合格品和回收砂 | 在质量平衡中保留内部返回量，但不得设置外部产品流或废物流，也不得给予替代产品收益。 | `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995` |
| `allocation_outward_recycling` | 送往回收或资源化的废物 | 纳入收集和场内准备直至场址大门。单独报告下游处理路线，不得从核心工厂大门清单中扣除避免生产收益。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_charge_materials` | `charge_and_melt` | 外购金属、合金、熔剂和焦炭投入 | 称量单；采购和领用记录；库存记录；批次单 | 材料身份；供应商；牌号/成分；毛重和皮重；批次；领用日期；期初期末库存；内部返回料质量 | 经校准地磅、台秤或批次秤，并与采购和库存核对 | kg | 每次收货和每炉批次 | 有代表性的连续生产期，通常不少于 12 个月；生产周期较短时覆盖整个生产期 | 服务于所声明产品的全部炉料准备、熔炉和钢包区域 | 外购量加期初库存减期末库存；排除内部返回料；除以合格产品质量 | 校准记录；供应商证书；库存核对；批次追溯 |
| `cp_charge_utilities` | `charge_and_melt` | 电力、天然气和氧气 | 仪表；账单；生产日志 | 仪表编号；起止读数；能量或体积；参考条件；分配驱动量；运行时间；产品质量 | 优先过程分表；否则从已核对总表进行文件化分配 | MJ; m3 | 连续或每批次，并按月核对 | 与产品输出相同期间 | 全部炉料、熔炼、保温、钢包和熔炼控制设备 | 扣除非生产和无关负荷；应用文件化换算；除以合格产品质量 | 仪表校准；账单核对；分配工作表 |
| `cp_melt_outputs` | `charge_and_melt` | 外运炉渣 | 废物称量单；库存记录；处理联单 | 废物身份；质量；去向；日期；期初期末库存；场内再利用 | 经校准秤具和联单核对 | kg | 每次外运并按月核对 | 与产品输出相同期间 | 服务于所声明产品的全部熔炼和金属处理装置 | 外运量加期末减期初库存；扣除场内循环；除以合格产品质量 | 秤具校准；联单；库存核对 |
| `cp_melt_emissions` | `charge_and_melt` | 熔炼直接排放 | 烟囱测试；连续监测；排气流量；燃料和碳分析；控制日志 | 污染物；浓度；干湿基准；温度；压力；流量；时间；控制状态；燃料用量；碳或硫含量 | 综合代表性浓度和标准化流量；无法测量时仅使用场址特定碳或硫平衡 | kg | 有连续监测时连续采集，并覆盖代表性测试期 | 与产品输出相同运行期，异常期单列 | 炉料、熔炉、合金化、扒渣和出铁的烟囱及有记录无组织源 | 对时间积分后除以合格产品质量，不扣除捕集废物且不计上游排放 | 测试报告；监测 QA/QC；流量校准；控制设施运行率；燃料分析 |
| `cp_mould_materials` | `mould_and_core` | 砂、膨润土、酚醛树脂和工艺用水 | 采购、领用、批次和水表记录 | 材料身份；牌号；粘结剂化学；砂系统；质量或体积；密度；库存；回用砂；产品质量 | 经校准批次秤和专用水表，并与库存核对 | kg | 每批次并按月核对 | 与产品输出相同期间 | 服务于所声明产品的全部造型、制芯和砂再生线 | 外购消耗加期初减期末库存；排除内部回用砂；除以合格产品质量 | 校准；配方单；采购和库存核对 |
| `cp_mould_utilities` | `mould_and_core` | 铸型/型芯电力和天然气 | 仪表；账单；设备日志 | 仪表读数；气体参考条件；运行时间；生产线；产品质量 | 分表或文件化设备工时分配 | MJ; m3 | 连续或每班次并按月核对 | 与产品输出相同期间 | 造型、制芯、烘干和再生设备 | 扣除无关负荷、换算单位并除以合格产品质量 | 仪表校准；账单核对；分配工作表 |
| `cp_mould_outputs` | `mould_and_core` | 外运废铸造砂 | 废物称量、再生、库存和联单记录 | 砂系统；粘结剂；质量；去向；场内再生；库存变化 | 经校准秤具和物料平衡核对 | kg | 每次外运并按月核对 | 与产品输出相同期间 | 服务于所声明产品的全部铸型/型芯系统 | 外运量加期末减期初库存；排除内部再生；除以合格产品质量 | 秤具校准；联单；再生日志 |
| `cp_mould_emissions` | `mould_and_core` | 铸型/型芯直接空气排放 | 烟囱测试；监测；排气流量和控制记录 | 物种；浓度；基准；流量；时间；控制状态；产品质量 | 综合实测浓度和标准化排气流量 | kg | 连续或代表性测试期 | 与产品输出相同期间 | 砂搬运、混合、造型、再生和型芯炉 | 对控制后排放质量积分并除以合格产品质量 | 测试报告；监测 QA/QC；流量校准；控制设施运行率 |
| `cp_finishing_inputs` | `casting_and_finishing` | 精整电力和铸钢丸 | 仪表；账单；钢丸领用和库存记录 | 电力；钢丸采购/领用；回收钢丸；库存变化；设备工时；产品质量 | 分表和经校准材料秤；共用时进行文件化分配 | MJ; kg | 连续或每班次并按月核对 | 与产品输出相同期间 | 浇注辅助、冷却、落砂、切割、打磨、抛丸、机加工和检验 | 净外购钢丸和分配电力除以合格产品质量 | 仪表和秤具校准；库存核对；分配工作表 |
| `cp_finishing_outputs` | `casting_and_finishing` | 合格产品和外运精整粉尘 | 合格产品秤量；不合格记录；废物称量；库存和联单 | 合格质量；不合格质量；粉尘质量；去向；库存变化；日期；产品族 | 经校准产品和废物秤，并进行生产/废物核对 | kg | 每批次和每次废物外运 | 与全部投入相同期间 | 服务于所声明产品的全部精整和验收操作 | 汇总合格产品；计算外运粉尘加期末减期初库存；清单除以合格质量 | 校准；检验放行；不合格记录；联单；核对 |
| `cp_finishing_emissions` | `casting_and_finishing` | 精整直接颗粒物 | 烟囱测试；监测；排气流量和控制记录 | 颗粒物浓度；基准；流量；时间；控制状态；产品质量 | 综合实测浓度和标准化排气流量 | kg | 连续或代表性测试期 | 与产品输出相同期间 | 落砂、切割、打磨、抛丸和机加工排放点 | 对控制后排放质量积分并除以合格产品质量 | 测试报告；监测 QA/QC；流量校准；控制设施运行率 |
| `cp_heat_treatment` | `heat_treatment` | 热处理能源和直接化石二氧化碳 | 工艺配方；批次装载；仪表；燃料分析；排放记录 | 循环；温度；时长；装载质量；电力；天然气；气体条件；碳含量；控制状态 | 批次仪表或炉窑文件化分配；二氧化碳采用直接测量或场址碳平衡 | MJ; m3; kg | 每个热处理批次 | 与热处理产品输出相同期间 | 服务于所声明产品的全部场内热处理炉 | 按实测批次装载分配能源和排放并除以合格热处理产品质量 | 仪表校准；配方；批次追溯；燃料分析 |
| `cp_surface_coating` | `surface_coating` | 环氧粉末、电力、天然气、涂装废物和直接化石二氧化碳 | 配方和领用；厚度测试；仪表；废物联单；燃料分析 | 粉末身份；领用和回收质量；厚度；电力；天然气及条件；废物质量/状态；碳含量；产品质量 | 经校准秤具和仪表；涂层厚度测试；二氧化碳采用直接测量或场址碳平衡 | kg; MJ; m3 | 每个涂装批次并按月核对 | 与涂层产品输出相同期间 | 全部场内表面准备、施涂、回收和固化设备 | 新粉末、分配能源、外运废物和直接二氧化碳除以合格涂层产品质量 | 校准；配方证书；厚度测试；库存核对；联单；燃料分析 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_normalize_reference_mass` | 每项清单行 | `Q_normalized = Q_reporting_period / M_accepted_fitting_reporting_period` | 报告期交换量；按参考产品基准计的合格管件质量 | 每 1 kg 合格管件的交换量 |  |
| `calculation_electricity_conversion` | 各交流电行 | `E_MJ = E_kWh × 3.6`；不得重复换算 | 计量 kWh；共用电表文件化分配 | 每参考流的交流电 MJ |  |
| `calculation_gas_conditions` | 各气体体积行 | 汇总前将仪表体积换算到所声明统一温度、压力和含湿量基准，并保留公式和参数 | 实测体积；温度；压力；含湿状态；重要时的压缩因子 | 每参考流、按声明参考条件计的 m3 |  |
| `calculation_stack_emission` | 直接测量空气排放 | 在统一干湿、含氧量、温度和压力修正后采用 `m = Σ(C_i × V_i × t_i)`，再按合格管件质量归一化 | 浓度；标准化排气流量；时间；控制状态；合格产品质量 | 每参考流的污染物 kg | `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995` |
| `calculation_metal_balance` | 金属系统 | `外购金属 + 期初库存 - 期末库存 = 合格产品 + 外排含金属废物 + 实测过程损失 + 内部回路净库存变化`；内部返回量单列 | 炉料；产品和不合格品；外排废物；库存；内部返回料 | 已核对的质量平衡及闭合差 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和材料投入 | 声明全部必需限定信息，并保留证明材料牌号、管件形式、尺寸、连接、压力/使用等级、热处理、涂层和验收规范的供应商或产品证书。 | 产品放行；图纸/规范；材料证书；供应商声明 |
| `dq_temporal` | 全部前景记录 | 使用统一且有代表性的生产期。分别记录启动、停机、异常、试制和非生产数据，并披露纳入决定。 | 带日期记录清单；运行日历；异常日志 |
| `dq_completeness` | 全部映射过程 | 核对每个必需过程和每项适用条件行；用文件记录零值或不适用，不得静默省略。 | 签署完整性清单；过程图；适用性记录 |
| `dq_measurement` | 秤具、仪表和排放系统 | 校准在报告期内有效，并保留原始读数、单位换算、共用表分配、检出限和 QA/QC 修正。 | 校准证书；原始导出；计算工作簿；测试 QA/QC |
| `dq_mass_balance` | 金属、砂、涂层和废物 | 分别报告库存变化和内部循环，并调查可能实质改变归一化结果的闭合差。 | 已核对平衡；盘点；调查记录 |
| `dq_representativeness` | 上游数据集 | 记录每个上游数据集的地理、技术、期间、成分/牌号、再生含量处理和交付边界，并解释任何代理。 | 数据集元数据；供应商证据；代理理由 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity_complete` | 参考流 | 参考流不是 1 kg 验收合格铸铁或铸钢管件，或缺少任何必需限定信息时，校验失败。 | `unsd-cpc-3-0-structure-2025` |
| `validation_process_coverage` | 过程图 | 必须包含三个必需过程，并对热处理和表面涂层明确作出适用性决定。 | `eu-jrc-sf-bref-2024`; `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995` |
| `validation_atomic_rows` | 过程清单 | 每行必须仅有一个物理、化学、废物或基本交换、一个方向和一个流类型，并有具体中文名称；拒绝集合标签和合并的公用工程、燃料、材料、废物或排放。 |  |
| `validation_uuid_support` | 含 UUID 的行 | 要求公开状态为 100 的流身份及匹配的流类型、分类、属性、单位组和准确 Tiangong 中文 baseName；未解决行必须与清单审查元数据一致。 |  |
| `validation_units` | 计量和清单 | 质量采用 kg，交流电采用 MJ，气体体积采用带声明参考条件的 m3；核查每次换算并防止重复换算。 |  |
| `validation_mass_balance` | 金属系统 | 要求合格产品、外排废物、库存变化和内部返回料分别披露，并报告和调查金属质量平衡闭合差。 |  |
| `validation_no_internal_double_count` | 内部回路 | 若内部浇口、冒口、直浇道、不合格品或回收砂既作为外部投入/输出又作为内部循环计算，则拒绝数据集。 | `us-epa-ap42-gray-iron-foundries-2003`; `us-epa-ap42-steel-foundries-1995` |
| `validation_emission_boundary` | 直接空气排放 | 仅允许场内控制后排放；拒绝将上游电力或供应商排放写成直接前景基本流。 |  |
| `validation_period_and_allocation` | 报告期和共用作业 | 要求统一前景期间、披露共用仪表和多产品分配，并在无法避免质量分配时提供敏感性结果。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个所声明铸铁或铸钢管件产品族的前景生产数据包 |
| downstream_use | 完整性、代表性、UUID 解决情况和不确定性经审查后，可发布为 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 用于与所声明牌号、几何、连接、压力/使用等级、过程路线、热处理、涂层、地理、技术和期间匹配管件的从摇篮到工厂大门产品足迹和生命周期模型 |
| excluded_use | 不得直接用于管子或管道主体、轧制或装配管件、阀门、下游安装/使用/寿命终止、其他合金或涂层体系，亦不得在缺少其他阶段时用于从摇篮到坟墓声明 |
| required_metadata | canonical PCR id；参考流限定信息；场址和地理；报告期；产品和合金牌号；合格质量和合格率；熔炉；铸型/型芯系统；热处理；涂层；污染控制；分配；上游数据集；未解决身份；数据所有者和审查状态 |
| required_quality_disclosure | 初级数据占比；仪表和秤具覆盖；校准；库存及质量平衡闭合；排放测量和控制设施运行率；分配份额和敏感性；上游代理质量；排除项；缺失范围；不确定性局限 |
| update_trigger | 产品牌号或几何、熔炉或铸型技术、炉料组成、供应商、能源系统、合格率、控制设备、热处理、涂层、分配、场址/地理或报告期发生实质变化；或未解决流 UUID 或证据范围得到解决 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | `dataset` | 联合国统计司，*CPC 3.0 结构*，2025-06-30，官方 CSV，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-04） | CPC 41292 官方分类身份，以及与相邻管体和非铸管件的区分 |
| `eu-jrc-sf-bref-2024` | `official_guidance` | 欧盟委员会联合研究中心，*Best Available Techniques Reference Document for the Smitheries and Foundries Industry*，2024，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2024-12/SF_BREF_2024-bref.pdf（检索日期：2026-09-04） | 铸造过程分解和前景边界覆盖 |
| `us-epa-ap42-gray-iron-foundries-2003` | `official_guidance` | 美国环境保护署，*AP-42，第 12.10 节：Gray Iron Foundries*，2003-05，https://www.epa.gov/sites/default/files/2020-11/documents/c12s10.pdf（检索日期：2026-09-04） | 铸铁路线、炉料、铸型/型芯、内部砂回用、铸造/精整、直接排放物种及控制系统清单覆盖；不作为产品特定定量范围 |
| `us-epa-ap42-steel-foundries-1995` | `official_guidance` | 美国环境保护署，*AP-42，第 12.13 节：Steel Foundries*，1995-01，https://www.epa.gov/sites/default/files/2020-11/documents/c12s13.pdf（检索日期：2026-09-04） | 铸钢路线、炉料、铸型/型芯、铸造/精整、直接排放物种及控制系统清单覆盖；不作为产品特定定量范围 |
| `china-mof-2026-tariff-lines-730711-730719` | `official_guidance` | 中华人民共和国财政部，*国别清单及税目税率表*，2026 年税则号列 73071100 和 73071900，https://m.mof.gov.cn/zcfb/202604/P020260428407579725260.pdf（检索日期：2026-09-04） | 核验中文类别标题所用专业术语“铸铁制管子附件”和“铸钢管子附件” |
