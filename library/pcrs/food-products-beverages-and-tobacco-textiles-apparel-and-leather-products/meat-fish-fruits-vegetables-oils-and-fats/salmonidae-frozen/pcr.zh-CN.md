---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.salmonidae-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷冻鲑科鱼类

## 1. 范围与适用性

本 PCR 适用于以整条、去头、去内脏、修整或类似非鱼片形态供应的鲑科冷冻鱼类的前景生产。产品可有冰衣或无冰衣，并可采用散装或零售包装。产品以冻结方式保藏，并在所声明的出厂边界前保持冻结状态。

前景路线从加工设施接收身份明确的鲑科鱼类开始，包括适用的接收、分级、清洗、放血或去内脏、冻结、镀冰衣、包装、冷冻储存和发运作业。水产养殖、捕捞、孵化、饲料生产、渔船作业以及到所声明设施边界的运输，应由关联的上游数据集表示，不得静默并入前景过程。

本 PCR 不包括鲜鱼或冷藏鱼、冷冻鱼片、分离或绞碎鱼肉、熏制、干制、盐渍、熟制、罐藏或其他方式加工的鱼类、非鲑科鱼类，以及主要保藏路线不是冻结的产品。仅对已冷冻鲑科原料进行重新包装的作业必须声明该起始状态，不得声称并未实施的冻结过程。

食品安全与质量控制之所以记录，是因为它们界定有效生产状态以及解释清单所需的记录。符合本 PCR 不等同于获得食品安全认证。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.salmonidae-frozen |
| classification_refs | CPC 3.0: 21212, Salmonidae, frozen |
| covered_products | 以整条、去头、去内脏、修整或其他非鱼片形态供应的冷冻鲑科鱼类；有冰衣或无冰衣；散装或零售包装 |
| excluded_products | 冷冻鱼片；分离或绞碎鱼肉；鲜鱼或冷藏鱼；熏制、干制、盐渍、熟制、罐藏或其他方式保藏的鱼类；非鲑科鱼类 |
| representative_product | 加工厂冷冻库发运边界处经修整并包装的冷冻鲑科鱼类 |
| production_route | 身份明确的鲑科鱼类接收；适用的预处理；速冻；可选镀冰衣；包装；冷冻储存；发运 |
| market_state | 面向进一步加工、批发、餐饮或零售的冷冻产品，并声明产品形态、冰衣、包装和冷链状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 具有所声明非鱼片形态、保持冻结状态并适用于所声明下游市场的冷冻鲑科鱼类 |
| How much | 1 kg 目标冷冻产品净质量 |
| How well | 声明物种或分类单元、野生或养殖来源、产品形态、去内脏和去头状态、冰衣状态、包装形式、冻结路线和发运温度状态 |
| How long or cycle | 在加工厂冷冻库发运边界交付的一个生产批次；冷冻储存时长另行声明 |
| reference_flow_link | `rf_salmonidae_frozen_net` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 目标产品净质量 |
| 参考产品流 | 冷冻鲑科鱼类 `a9f77412-4b2a-4d64-b893-7356d0173ed0` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 鲑科物种或声明的分类单元；野生或养殖来源；整条、去头、去内脏、修整或其他非鱼片形态；带皮和带骨状态；冰衣状态及冰衣比例；包装形式；冻结地点和技术；接收产品状态；发运温度状态；冷冻储存时长；地理范围和生产期间 |

构建前景数据包时，`必需限定信息` 中的所有项目都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少限定信息将使该数据包的参考流定义不完整。

参考数量为目标产品净质量。包装、可移除冰衣、游离水、托盘和运输容器不计入 1 kg 参考数量。骨、皮、头和内脏仅在其保留于所声明销售形态时计入。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部清单结果归一化为发运时 1 kg 冷冻鲑科产品净质量。参考质量不包括包装、可移除冰衣、游离水、托盘和运输容器。 |
| `lot_mass_balance` | 鱼类、产品、共产品和残余物 | Mass | kg | 每批次使用一致的湿质量基准，并使接收鱼质量与参考产品、共产品、废物、留样和测得的质量变化相协调。 |
| `water_ice_separation` | 过程水、冰和冰衣 | Mass | kg | 分别记录过程水、冷却用冰和冰衣用水。不得将冰或冰衣计入目标产品净质量。 |
| `energy_carriers` | 电力和燃料 | Energy | 电力用 kWh；燃料用 MJ 或保留换算因子的实物燃料单位 | 在可行时按过程记录计量数量，并披露共用公用工程的任何分配。不得在不保留各能源载体数量和换算因子的情况下合并电力与热能。 |
| `temperature_time` | 冻结和冷冻储存 | Temperature and time | °C 以及 h 或 d | 保留经校准的温度记录、监测位置、冻结完成判据、储存时长和温度偏离。不得仅凭温度记录推断能源使用量。 |
| `refrigerant_mass` | 制冷剂充注与损失 | Mass | kg | 记录制冷剂类型、补充量、回收量、库存变化和已确认损失；仅依据维护和库存记录的平衡结果计算排放损失。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在加工设施接收的活体、鲜、冷藏或已冷冻鲑科鱼类，并声明物种或分类单元、来源路线、产品形态、质量、温度状态、供应商、地理位置和接收时间 |
| starting_condition_role | 前景边界投入；其上游养殖或捕捞、饲料、孵化、渔船、上岸和入厂运输负荷由关联的上游数据集提供 |
| product_classification_scope | 与 CPC 3.0 代码 21212 对应的非鱼片形态冷冻鲑科鱼类；分类仅为映射语境，不能替代语义产品限定信息 |
| recursive_input_rule | 当已冷冻鲑科鱼类进入前景时，将其记录为同类别产品投入并关联其上游数据集；报告前景仅纳入实际实施的后续操作，包括搬运、储存、重新包装、镀冰衣或再次冻结 |
| upstream_dataset_requirement | 为接收鱼类、电力、燃料、供水、冰、包装材料、制冷剂以及外送废物或废水处理关联具有代表性的上游数据集；披露地理、时间和技术不匹配 |
| disclosure | 声明设施边界、接收产品状态、纳入和排除的作业、物种或分类单元、来源路线、产品形态、冻结和镀冰衣路线、包装、冷冻储存时长、发运状态、共产品去向、分配方法和数据缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_01_foreground_gate` | 前景系统 | 纳入从接收身份明确的鲑科投入到冷冻库发运之间实际实施的全部作业，包括拒收、清洁、冻结、镀冰衣、包装、储存、公用工程使用、制冷剂损失、废水和残余物处理。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `sb_02_cold_chain` | 冻结和冷冻操作 | 从冻结完成到发运保持冻结状态链条；记录时间—温度监测、温度偏离、产品损失和返工，不得假定冷链从未中断。 | `codex-cxc-52-2003` |
| `sb_03_upstream_links` | 上游投入 | 只有在明确关联上游数据集时，才能将养殖或捕捞、饲料、渔船作业、入厂运输、发电、材料制造和下游处理排除在前景之外。 | `eu-pef-2021-2279` |
| `sb_04_recursive_input` | 已冷冻的同类别投入 | 将接收的已冷冻鲑科鱼类视为上游产品投入，并仅建模报告设施实际实施的后续作业，以防止重复计算。 | `eu-pef-2021-2279` |
| `sb_05_food_safety_records` | 产品有效性 | 保留批次身份、卫生控制、危害控制、冻结、冰衣与净质量、包装完整性等记录，以证明清单代表可销售的冷冻鱼产品。 | `codex-cxc-52-2003`; `codex-cxs-190-1995` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p01_reception` | 原料接收与分级 | required | 始终纳入 | 建立批次身份、接收状态、接受质量、拒收量和上游关联 | kg 接受的鲑科投入 |
| `p02_preparation` | 清洗与物理预处理 | conditional | 实施清洗、放血、去头、去内脏、修整、切边或按规格分级时纳入 | 形成所声明的非鱼片形态，并分离共产品和废物 | kg 预处理鲑科输出 |
| `p03_freezing` | 冻结 | required | 设施冻结鲜或冷藏投入时纳入；已冷冻投入仅纳入实际再次冻结并予以声明 | 将预处理鲑科产品转化为经验证的冻结状态 | kg 镀冰衣和包装前的冷冻产品 |
| `p04_glazing_packaging` | 镀冰衣与包装 | conditional | 纳入实际实施的每项镀冰衣和包装作业 | 保护产品、确定净质量并形成所声明的销售形式 | kg 包装冷冻目标产品 |
| `p05_frozen_storage_dispatch` | 冷冻储存与发运 | required | 始终纳入 | 维持冻结状态直到所声明的发运边界 | kg 发运的冷冻目标产品净质量 |

### 过程：原料接收与分级（`p01_reception`）

#### 输入

##### 产品流

###### 接收的鲑科鱼类（`received_salmonid`）

记录每个接收鲑科批次的实测质量和状态，并关联其上游数据集。

- 选定流：鲑科鱼类投入；UUID 待精确语义审核
- 流属性/单位：Mass / kg
- 数量规则：接收时实测的接受量与拒收量之和
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每发运 1 kg 冷冻目标产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`
- 数量范围：暂定原料鱼投入 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：3.5
  - 单位：kg
  - 基准：每发运 1 kg 冷冻目标产品净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 接受的鲑科鱼类（`accepted_salmonid`）

记录转入预处理或直接转入冻结的质量。

- 选定流：接受的鲑科鱼类；UUID 待精确语义审核
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 接受输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`

##### 废物流

###### 拒收鱼类与异物（`reception_rejects`）

按去向分别记录被拒生物质、损坏包装和异物。

- 选定流：接收拒收物；UUID 待精确语义审核
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向实测拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 接受输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals_wastewater`

### 过程：清洗与物理预处理（`p02_preparation`）

#### 输入

##### 产品流

###### 过程水与冰（`preparation_water_ice`）

分别按用途记录用于清洗、放血、冷却或设备接触的计量或平衡水和冰。

- 选定流：过程水与冰；UUID 待精确语义审核
- 流属性/单位：Mass / kg
- 数量规则：实测供水和供冰量，回收或循环量另行报告
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理鲑科输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_ice`
- 数量范围：暂定水与冰合计 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 预处理鲑科输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理电力（`preparation_electricity`）

记录泵、输送机、切割、清洗和其他预处理设备的用电量。

- 选定流：电力；UUID 待精确市场和电压审核
- 流属性/单位：Energy / kWh
- 数量规则：分表计量电耗或从设施总表按文件化方法分配的电耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理鲑科输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`

#### 输出

##### 产品流

###### 预处理鲑科产品（`prepared_salmonid`）

记录转入冻结的质量和产品形态。

- 选定流：预处理鲑科鱼类；UUID 待精确语义审核
- 流属性/单位：Mass / kg
- 数量规则：实测预处理产品转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 预处理输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_identity`

###### 分离的鲑科共产品（`salmonid_coproducts`）

按实际去向记录可销售的鱼头、内脏、边角料、鱼籽或其他分离物；不得将被丢弃材料预设为共产品。

- 选定流：按产品形态区分的鲑科共产品；UUID 待精确语义审核
- 流属性/单位：Mass / kg
- 数量规则：按去向实测可销售输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 预处理鲑科输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals_wastewater`

##### 废物流

###### 预处理残余物（`preparation_residuals`）

按处理路线记录不可销售鱼类物质和其他固体。

- 选定流：鱼类加工残余废物；UUID 待精确语义审核
- 流属性/单位：Mass / kg
- 数量规则：按材料和处理去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理鲑科输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals_wastewater`

###### 预处理废水（`preparation_wastewater`）

记录送往处理的废水体积或质量，并在可得时记录实测污染物负荷。

- 选定流：鱼类加工废水；UUID 待精确语义审核
- 流属性/单位：Mass / kg
- 数量规则：计量排放量或水量平衡结果，与直接基本流排放分开报告
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理鲑科输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals_wastewater`
- 数量范围：暂定废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 预处理鲑科输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：冻结（`p03_freezing`）

#### 输入

##### 产品流

###### 冻结电力（`freezing_electricity`）

记录冻结作业中冷冻机压缩机、风机、输送机、泵和除霜的归属电耗。

- 选定流：电力；UUID 待精确市场和电压审核
- 流属性/单位：Energy / kWh
- 数量规则：冻结分表计量电耗或从共用制冷计量中按文件化方法分配的电耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 镀冰衣和包装前的冷冻产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定冻结电力 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：2
  - 单位：kWh
  - 基准：每 1 kg 镀冰衣和包装前的冷冻产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制冷剂补充（`freezing_refrigerant_makeup`）

记录供应到制冷系统的制冷剂，并仅分配经平衡核算的冻结份额。

- 选定流：按化学品身份区分的制冷剂；UUID 待精确语义审核
- 流属性/单位：Mass / kg
- 数量规则：根据制冷剂补充量和库存变化平衡结果计算的冻结份额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 镀冰衣和包装前的冷冻产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant`
- 数量范围：暂定制冷剂补充 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg
  - 基准：每 1 kg 镀冰衣和包装前的冷冻产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 镀冰衣前的冷冻鲑科产品（`frozen_salmonid_unpacked`）

记录冻结完成经验证后、镀冰衣和包装前的冷冻产品净质量。

- 选定流：镀冰衣前的冷冻鲑科鱼类；UUID 待精确语义审核
- 流属性/单位：Mass / kg
- 数量规则：实测冷冻转移质量，不含可移除冰衣和包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 冷冻输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_cold_chain`
- 来源：`codex-cxc-52-2003`

##### 基本流

###### 制冷剂向空气排放（`refrigerant_to_air`）

按化学品身份记录已确认或基于质量平衡估算的制冷剂损失；不得将设备全部充注量记录为排放。

- 选定流：按化学品身份区分的制冷剂向空气排放；UUID 待精确语义审核
- 流属性/单位：Mass / kg
- 数量规则：归属于冻结过程的制冷剂平衡损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 镀冰衣和包装前的冷冻产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant`

### 过程：镀冰衣与包装（`p04_glazing_packaging`）

#### 输入

##### 产品流

###### 冰衣用水（`glaze_water`）

将用于镀冰衣的水与产品净质量及清洁用水分开记录。

- 选定流：饮用水或其他符合法定要求的冰衣用水；UUID 待精确语义审核
- 流属性/单位：Mass / kg
- 数量规则：实测施加的冰衣水减去回收水，并以净质量记录核查冰衣比例
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装冷冻目标产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_glaze_packaging`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定冰衣用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：kg
  - 基准：每 1 kg 包装冷冻目标产品净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_materials`）

按材料分别记录初级、次级以及分配的三级包装。

- 选定流：按聚合物、纤维、金属或其他材料区分的包装材料；UUID 待精确语义审核
- 流属性/单位：Mass / kg
- 数量规则：包装材料清单质量减去有文件证明的内部重复使用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装冷冻目标产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_glaze_packaging`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定包装质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.2
  - 单位：kg
  - 基准：每 1 kg 包装冷冻目标产品净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 包装冷冻鲑科鱼类（`packaged_frozen_salmonidae`）

记录包装产品毛质量和计算的目标产品净质量，并从参考数量中扣除冰衣和包装。

- 选定流：冷冻鲑科鱼类 `a9f77412-4b2a-4d64-b893-7356d0173ed0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据经验证称量记录计算产品净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装冷冻目标产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_glaze_packaging`
- 来源：`codex-cxc-52-2003`; `codex-cxs-190-1995`

##### 废物流

###### 包装边角料与废品（`packaging_waste`）

按材料和去向记录包装废物。

- 选定流：按材料区分的包装废物；UUID 待精确语义审核
- 流属性/单位：Mass / kg
- 数量规则：实测或库存平衡的包装废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 包装冷冻目标产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals_wastewater`

### 过程：冷冻储存与发运（`p05_frozen_storage_dispatch`）

#### 输入

##### 产品流

###### 冷冻储存电力（`frozen_storage_electricity`）

按所声明储存时长记录制冷、风机、除霜、照明和可归属仓库服务的电耗。

- 选定流：电力；UUID 待精确市场和电压审核
- 流属性/单位：Energy / kWh
- 数量规则：按文件化储存服务驱动因素分配的计量储存电耗
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg-day 占用冷冻储存量，再按实际时长换算至参考流
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 数量范围：暂定储存电力 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.0001
  - 上限：0.1
  - 单位：kWh/kg-day
  - 基准：每 kg-day 占用冷冻储存量
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 发运边界冷冻鲑科净产品（`rf_salmonidae_frozen_net`）

这是在所声明冷冻库发运边界交付的参考流。

- 选定流：冷冻鲑科鱼类 `a9f77412-4b2a-4d64-b893-7356d0173ed0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定参考数量 1 kg 目标产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：发运边界 1 kg 冷冻目标产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc-v3-2025`

##### 基本流

###### 冷库制冷剂向空气排放（`cold_store_refrigerant_to_air`）

记录归属于产品实际冷冻储存服务的制冷剂平衡损失。

- 选定流：按化学品身份区分的制冷剂向空气排放；UUID 待精确语义审核
- 流属性/单位：Mass / kg
- 数量规则：按文件化制冷服务驱动因素和实际储存时长分配的设施制冷剂损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每发运 1 kg 冷冻目标产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_01_avoid` | 多输出前景作业 | 首先通过过程细分、单独计量或拆分独立运行步骤避免分配，前提是该做法与所声明目标和系统模型一致。 | `eu-pef-2021-2279` |
| `alloc_02_physical` | 不可避免的联合生产 | 无法细分时，使用能够反映投入和排放如何随共产品变化的文件化物理因果关系；不得仅因存在质量数据就选择质量分配。 | `eu-pef-2021-2279` |
| `alloc_03_economic_fallback` | 缺少可辩护物理关系的联合生产 | 仅将经济分配用作已披露的后备方法，采用具有时间和地理代表性的价格，并提供与合理物理基准对比的敏感性结果。 | `eu-pef-2021-2279` |
| `alloc_04_waste_status` | 鱼类残余物、拒收物、废水和包装废物 | 仅在输出具有文件化去向及经济或功能价值时才归类为共产品，否则作为废物并纳入处理负荷；没有明确后果型情景时不得给予替代产品信用。 | `eu-pef-2021-2279` |
| `alloc_05_shared_utilities` | 共用制冷、水、清洁和仓储服务 | 使用实测过程能耗、运行时间与负荷、占用 kg-day、水分表数据或其他文件化因果驱动因素分配共用公用工程，并披露驱动因素且测试重大共用负荷。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_identity` | `p01_reception`; `p02_preparation` | 批次身份和鱼质量 | 接收、称量和生产记录 | lot_id, supplier, species_or_taxon, origin_route, presentation, received_state, gross_mass, tare, accepted_mass, rejected_mass, transfer_mass, timestamp | 将经校准称量记录与可追溯批次记录连接 | kg | 每批次和每次转移 | 有代表性的生产期间，通常至少 12 个月；若为批次活动则需论证 | 所有纳入的生产线和设施 | 按批次和过程求和；保留物种、来源、产品形态和状态；仅在协调后归一化 | 秤校准、批次追溯、发票、称量单和协调记录 |
| `cp_water_ice` | `p02_preparation`; `p04_glazing_packaging` | 水、冰和冰衣 | 仪表、批次或采购记录 | meter_start, meter_end, ice_mass, recovered_water, glaze_applied, use_type, lot_id, timestamp | 优先分表计量；否则采用文件化水量平衡 | kg | 每批次或班次 | 与生产相同的期间 | 所有纳入的水和冰使用点 | 按用途计算净供应质量，再除以对应过程输出 | 仪表校准、采购记录、批次表和水量平衡闭合 |
| `cp_energy` | `p02_preparation`; `p03_freezing`; `p05_frozen_storage_dispatch` | 电力和燃料 | 仪表和设备运行记录 | meter_start, meter_end, carrier, fuel_quantity, conversion_factor, equipment, runtime, load, production_mass, storage_kg_day | 优先过程分表；否则协调设施总表并按文件化因果驱动因素分配 | kWh、MJ 或实物燃料单位 | 连续、批次、班次或按月并与生产协调 | 与生产和季节性储存相同的代表期间 | 所有纳入的生产线、冻结设备和冷库 | 按能源载体和过程求和；扣除有文件记录的排除用途；按过程输出或 kg-day 归一化 | 仪表校准、发票、设备日志和分配工作表 |
| `cp_freezing_cold_chain` | `p03_freezing`; `p05_frozen_storage_dispatch` | 冻结完成和冷链 | 时间—温度与发运记录 | lot_id, sensor_id, sensor_location, start_time, end_time, core_temperature, store_temperature, excursion, corrective_action, dispatch_condition | 在规定关键位置使用经校准传感器和记录检查 | °C, h, d | 每批次，并连续或按规定周期监测储存 | 整个冻结和储存区间 | 每台纳入的冻结设备、冷库和发运批次 | 保留原始时间序列或检查；按批次汇总完成状态、时长和温度偏离 | 校准证书、报警日志、纠正措施记录和发运检查 |
| `cp_glaze_packaging` | `p04_glazing_packaging` | 冰衣、包装、毛质量和净质量 | 批次、材料清单和质量控制记录 | lot_id, gross_mass, tare, package_mass, glaze_mass_or_fraction, net_product_mass, packaging_material, packaging_mass, rejected_packaging | 经校准称量、文件化去冰衣或经验证净含量程序以及包装材料清单 | kg | 每批次和每种包装规格 | 与生产相同的期间 | 所有纳入产品和包装线 | 计算产品净质量并按材料汇总包装；与输出件数和质量协调 | 秤校准、净含量检查、包装规格和库存协调 |
| `cp_refrigerant` | `p03_freezing`; `p05_frozen_storage_dispatch` | 制冷剂补充和损失 | 维护与充注库存记录 | refrigerant_identity, opening_charge, additions, recovery, closing_charge, confirmed_release, equipment, service_date, runtime_or_load_driver | 按系统和化学品开展制冷剂质量平衡 | kg | 每次维护事件且至少每年协调一次 | 与生产相同的代表期间 | 为纳入过程服务的全部制冷系统 | 按化学品计算损失；按文件化因果制冷服务驱动因素分配共用系统损失 | 技师维护记录、采购与回收记录、充注库存和检漏记录 |
| `cp_residuals_wastewater` | `p01_reception`; `p02_preparation`; `p04_glazing_packaging` | 共产品、固体废物和废水 | 秤、容器、联单、仪表和实验室记录 | material, mass, destination, sale_status, wastewater_volume_or_mass, pollutant_parameter, concentration, sampling_time, treatment_route | 固体采用称量或库存平衡；废水采用计量与代表性采样 | kg 和参数特定单位 | 每批次、容器、运输批或采样计划 | 与生产相同的期间 | 所有纳入的排放和残余物点 | 按材料、状态和去向汇总；由流量和浓度计算污染物负荷且不重复计算已处理排水 | 称量单、销售记录、废物联单、仪表校准、实验室报告和处理发票 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01_net_mass` | 参考产品 | 目标产品净质量 = 包装产品毛质量 - 包装质量 - 可移除冰衣质量 - 游离水及非产品皮重 | gross_mass, package_mass, glaze_mass_or_fraction, tare | kg 冷冻目标产品净质量 | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `calc_02_yield` | 预处理和完整前景 | 净产率 = 冷冻目标产品净质量 / 接受的鲑科投入质量；分别报告共产品和废物比例 | accepted_mass, net_product_mass, co-product_mass, waste_mass | 产率和经协调的质量比例 |  |
| `calc_03_energy` | 各前景过程 | 单位过程输出能耗 = 经协调的各能源载体过程能耗 / 实测过程输出 | 仪表读数、排除用途、分配驱动因素、输出质量 | kWh 或 MJ 每 kg 过程输出 |  |
| `calc_04_storage_service` | 冷冻储存 | 储存服务 = 占用产品质量 × 实际储存时长；按文件化服务驱动因素分配储存电耗和共用制冷剂损失 | 储存 kg、进出时间、储存电耗、共用系统损失 | kg-day、kWh/kg-day 和 kg 制冷剂每 kg-day |  |
| `calc_05_refrigerant_loss` | 制冷系统 | 制冷剂损失 = 期初充注量 + 补充量 - 回收量 - 期末充注量；按化学品协调，并排除有文件记录转移至其他系统的量 | opening_charge, additions, recovery, closing_charge | 按制冷剂化学品区分的 kg 损失 |  |
| `calc_06_allocation` | 多输出作业 | 首先细分；否则采用选定并文件化的因果物理关系；只有在披露价格期间和敏感性时才使用经济后备方法 | 过程投入和排放、共产品数量、物理驱动因素或代表性价格 | 按输出分配的清单 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_01_identity_traceability` | 所有产品批次 | 从接收到发运保留物种或分类单元、来源路线、供应商、产品形态、接收状态、批次关联和质量转移。 | 接收记录、生产谱系、标签和发运文件；`unsd-cpc-v3-2025`; `codex-cxc-52-2003` |
| `dq_02_temporal_representativeness` | 前景清单 | 覆盖包含重要季节性和冷冻储存时长的代表性生产期间，通常为 12 个月；较短批次需论证并披露停产或异常运行的排除。 | 仪表覆盖、生产日历、储存记录和代表性说明 |
| `dq_03_measurement` | 质量、水、能源、温度和制冷剂数据 | 对必须测量的项目使用经校准仪器；保留单位、换算因子、缺失数据处理以及仪表到过程的协调。 | 校准证书、原始读数、发票和协调工作表 |
| `dq_04_completeness` | 前景边界 | 核算所有纳入过程、公用工程、包装、冰衣、共产品、废物、废水、制冷剂损失、返工和产品损失；量化并说明排除项。 | 过程图、质量和能量平衡、废物联单和缺口登记；`eu-pef-2021-2279` |
| `dq_05_cold_chain_quality` | 冻结与储存 | 保留批次特定冻结完成证据、储存时长、温度监测、温度偏离、纠正措施以及包装或冰衣完整性检查。 | 时间—温度记录、报警、检查和纠正措施记录；`codex-cxc-52-2003` |
| `dq_06_safety_context` | 食品接触作业 | 保留卫生、水适用性、危害控制、防污染和包装符合性记录，以证明建模输出为可销售产品。 | 设施前提方案和危害控制记录；`codex-cxc-52-2003`; 有条件适用 `codex-cxs-190-1995` |
| `dq_07_provisional_ranges` | 每个推理估算范围 | 将该范围作为可替换的筛选校验范围；对超出范围的值开展调查；当其重要时，在审核或发布使用前以实测或经审核的有来源证据范围替换。 | manifest 审核元数据、审核决定和替换证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_01_reference_identity` | 参考流 | 要求目标产品净质量恰为 1 kg、产品流 UUID 为 `a9f77412-4b2a-4d64-b893-7356d0173ed0`、Mass 属性 UUID 为 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 UUID 为 `93a60a57-a4c8-11da-a746-0800200c9a66`，且单位为 kg。 | `unsd-cpc-v3-2025` |
| `val_02_qualifiers` | 参考产品元数据 | 缺少物种或分类单元、来源路线、产品形态、接收状态、冰衣状态、包装、冻结路线、储存时长、发运状态、地理或生产期间时，完整性校验失败。 | `unsd-cpc-v3-2025`; `codex-cxc-52-2003` |
| `val_03_net_mass` | 产品数量 | 检查参考数量已排除包装、可移除冰衣、游离水、托盘和运输容器，并检查毛质量到净质量计算的输入协调一致。 | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `val_04_process_coverage` | 前景边界 | 要求纳入接收、适用的预处理、实际冻结或明确的已冷冻起始状态、适用的镀冰衣和包装、冷冻储存与发运；每个省略的条件过程都必须说明原因。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `val_05_cold_chain` | 冷冻产品有效性 | 要求冻结完成及储存时间—温度记录、温度偏离和纠正措施披露，并要求在所声明发运边界保持冻结状态。 | `codex-cxc-52-2003` |
| `val_06_balances` | 质量、水和能源数据 | 要求批次质量协调、水与冰分开、各能源载体总量、共用公用工程分配以及量化的未解释平衡缺口。 | `eu-pef-2021-2279` |
| `val_07_allocation` | 共产品和共用服务 | 要求披露分配层级、选定驱动因素、共产品或废物分类、采用经济后备方法时的价格期间，以及重大分配选择的敏感性。 | `eu-pef-2021-2279` |
| `val_08_refrigerants` | 制冷 | 要求制冷剂化学品身份和经协调的维护记录；不得将设备全部充注量视为排放，并标记未归属的已确认损失。 |  |
| `val_09_reasoned_estimates` | 暂定范围 | 识别每个 `reasoned_estimate`，要求说明理由和替换状态；将超出 QA 范围的数值标记为待调查，而不是自动替换。 |  |
| `val_10_food_safety_context` | 产品有效性 | 要求适用的卫生、危害控制、水适用性、冰衣或净含量、包装完整性和批次追溯证据；报告 PCR 校验不等同于食品安全认证。 | `codex-cxc-52-2003`; `codex-cxs-190-1995` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 加工厂冷冻库发运边界处冷冻鲑科鱼类的前景生产数据集 |
| downstream_use | `secondary_dataset`; 在审核代表性和上游关联后可作 `background_dataset` |
| allowed_use | 用于所声明物种或分类单元、来源路线、产品形态、地理、技术和期间的归因型 LCA、产品足迹、供应链建模、采购比较和生命周期模型构建 |
| excluded_use | 食品安全认证；营养声明；忽略物种、野生或养殖来源、产品形态、冰衣、储存时长、分配或上游差异的比较；未经明确调整用于鱼片、绞碎鱼肉、非鲑科鱼类或非冷冻产品 |
| required_metadata | PCR id 和版本；产品流 UUID；物种或分类单元；来源路线；接收与销售形态；冰衣和包装；设施地理；生产期间；冻结技术和地点；冷库储存时长；发运状态；上游数据集关联；共产品去向；分配；数据所有者和审核状态 |
| required_quality_disclosure | 测量覆盖和校准；质量、水和能量协调；仪表分配；冷链记录和温度偏离；制冷剂核算；共产品和废物去向；废水数据；暂定估算；来源和技术不匹配；排除项与不确定性 |
| update_trigger | 物种组合、野生或养殖来源、接收状态、产品形态、设施、冻结或制冷技术、冰衣或包装规格、储存时长、制冷剂、能源供应、产率、共产品市场、分配、法规、来源证据发生重大变化，或数据超过所声明代表性期间 |

## 11. 数据源

| Source id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | official_guidance | 联合国统计司，《Central Product Classification Version 3.0》结构，代码 21212 “Salmonidae, frozen”，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-08-11） | 分类语境与冷冻鲑科产品边界 |
| `codex-cxc-52-2003` | standard | Codex Alimentarius，CXC 52-2003，《Code of Practice for Fish and Fishery Products》，https://www.fao.org/input/download/standards/10273/CXP_052e.pdf（检索日期 2026-08-11） | 鱼类加工范围、冻结与冷冻储存、镀冰衣、包装、冷链、卫生、危害控制和质量记录 |
| `codex-cxs-190-1995` | standard | Codex Alimentarius，CXS 190-1995，《Standard for Quick Frozen Fish Fillets》，官方标准目录 https://www.fao.org/fao-who-codexalimentarius/codex-texts/list-standards/en/（检索日期 2026-08-11） | 冷冻鱼产品与净含量的条件性核查；不将本 PCR 范围扩展至鱼片 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会关于环境足迹方法使用的建议 (EU) 2021/2279，CELEX 32021H2279，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索日期 2026-08-11） | 系统边界完整性、原始数据质量、分配层级、共用服务处理和披露 |
