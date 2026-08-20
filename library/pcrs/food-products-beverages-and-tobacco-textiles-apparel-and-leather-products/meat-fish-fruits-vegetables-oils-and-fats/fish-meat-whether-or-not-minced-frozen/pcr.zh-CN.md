---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-meat-whether-or-not-minced-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷冻鱼肉，不论是否切碎

## 1. 范围与适用性

本 PCR 覆盖以接收的鱼、鱼块或鱼肉为起点，经前处理、可选切碎、冻结、可选挂冰、包装和冷冻储存，直至加工设施出厂门的冷冻鱼肉前景生产，不论产品是否切碎。数据生产者应声明物种、来源生产系统、接收形态和温度状态、产品是否切碎、是否挂冰、包装形式、地理范围、技术及所代表的冷冻储存期。

本 PCR 不包括另行分类的冷冻鱼片、整条冷冻鱼、鱼肝和鱼卵、鱼糜及配制鱼制品、熟制、熏制、干制、盐渍或以其他方式保藏的鱼，以及甲壳类、软体动物或其他水生无脊椎动物产品。捕捞或养殖、上岸及接收的上游鱼类投入在交付前已发生的加工，应由上游数据集表示，不得无说明地吸收到本前景过程中。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-meat-whether-or-not-minced-frozen |
| classification_refs | CPC 3.0：21223，冷冻鱼肉，不论是否切碎（精确映射语境） |
| covered_products | 未调味的冷冻鱼肉、肉块、鱼肉块、分切块或切碎鱼肉，且不是鱼片，也未以其他方式保藏 |
| excluded_products | 冷冻鱼片；整条冷冻鱼；鱼肝和鱼卵；鱼糜或配制制品；熟制、熏制、干制、盐渍、腌渍、罐藏或以其他方式保藏的鱼；甲壳类、软体动物及其他水生无脊椎动物 |
| representative_product | 未调味的冷冻去骨鱼肉，按声明为切碎或未切碎形态，可挂冰并包装 |
| production_route | 接收鱼或鱼肉；适用时冷藏暂存；修整、去骨、去皮和尺寸缩减；可选切碎；适用时成型或装块；冻结；可选挂冰；包装；冷冻储存；加工设施出厂门交付 |
| market_state | 加工设施出厂门的冷冻产品，并声明产品形态、挂冰状态、包装和储存条件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以声明的切碎或未切碎形态供应的冷冻鱼肉 |
| How much | 1 kg 冷冻鱼肉净质量 |
| How well | 符合声明的物种、产品形态、组成、挂冰状态、包装、市场规格及适用食品安全控制 |
| How long or cycle | 一个生产批次，经声明的冷冻储存期直至加工设施出厂门 |
| reference_flow_link | `frozen_fish_meat_reference` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 产品净质量，不含运输包装，且鱼肉质量不含外部冰衣 |
| 参考产品流 | 冻鱼 `bbae8c72-d732-4f53-bdd5-aff8a0f39d48` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或物种组；野生捕捞或养殖来源及上游数据集；切碎或未切碎形态；去骨和去皮状态；添加剂或配料（如有）；是否挂冰及冰衣比例；包装形式及纳入的包装层；冻结技术；冷冻储存温控制度和时长；生产地理范围和时期；设施出厂门状态 |

构建前景数据包时，所有`必需限定信息`均应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失限定信息会使参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有清单结果归一化至 1 kg 鱼肉净质量。鱼肉参考质量不含外部冰衣和运输包装；二者质量应分别报告。 |
| `glaze_mass_separation` | 挂冰产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用有记录的方法测量冷冻总质量和冰衣质量，然后计算鱼肉净质量，不得将冰衣作为产品得率。 |
| `energy_consistency` | 电力和燃料 | 所选精确流声明的 Energy 属性 | kWh、MJ 或其他声明且可换算的能量单位 | 保留计量单位和换算因子；仅采用已披露因子换算，不得混合购入电力与燃料能量。 |
| `storage_time_basis` | 冷冻储存 | Mass 和经过时间 | kg 和 day | 将储存能耗与吞吐量及声明储存时长关联；未经时长归一化或披露，不得比较储存结果。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在加工设施接收的鱼、鱼块或鱼肉，并声明物种、来源、上游数据集、接收形态、质量、温度状态及任何先前加工 |
| starting_condition_role | 冷冻鱼肉前景生产系统的上游产品投入 |
| product_classification_scope | 冷冻鱼肉，不论是否切碎；不含另行分类的冷冻鱼片及其他保藏或配制鱼制品 |
| recursive_input_rule | 同类别冷冻鱼肉投入应由独立上游数据集表示，并标识为返工或混合投入；不得在本前景系统中递归重建其生产。 |
| upstream_dataset_requirement | 对捕捞或养殖以及接收投入中已包含的上游屠宰、去头、切片、去骨或冷却，使用可追溯数据集；披露排除项和代理数据。 |
| disclosure | 声明纳入的操作、鱼种及来源、接收条件、产品形态、挂冰和包装范围、冻结技术、储存期、温控制度、共产品、废物去向、分配选择、数据期、地理范围及遗漏流。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_facility_gate` | foreground_system | 纳入接收、搬运、前处理、可选切碎和成型、冻结、可选挂冰、包装、冷冻储存、场内公用工程、清洗、废水和残余物处理，以及归属于声明产品的制冷剂补充，直至设施交付。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `sb_cold_chain` | freezing_and_storage | 纳入冻结操作以及维持声明产品状态所需的每个场内冷冻暂存或转运阶段；披露储存时长和受监控制度。 | `codex-cxc-52-2003` |
| `sb_upstream_traceability` | received_fish_inputs | 将接收的鱼和鱼肉投入连接至表示其实际生产及先前加工的上游数据集；不得以未报告截断代替缺失上游负荷。 | `eu-pef-2021-2279` |
| `sb_food_safety_controls` | processing_and_storage | 保留适用的危害控制、卫生、时间/温度、异物、包装完整性及纠正措施记录，作为前景质量证据。 | `codex-cxc-52-2003`; `codex-cxs-190-1995` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `reception_preparation` | 鱼肉接收与前处理 | `required` | 始终纳入 | 前景接收、分拣、修整、去骨、去皮、适用时清洗和质量分离 | kg 前处理鱼肉 |
| `mincing_forming` | 切碎与成型 | `conditional` | 当声明产品被切碎、斩拌、成型或在单独计量步骤装块时纳入 | 前景尺寸缩减和产品成型 | kg 成型鱼肉 |
| `freezing_glazing` | 冻结与可选挂冰 | `required` | 始终纳入；仅在使用冰衣时适用挂冰清单行 | 前景冻结、温控和施加冰衣 | kg 冷冻鱼肉净质量 |
| `packaging_storage` | 包装与冷冻储存 | `required` | 始终纳入；包装清单行反映声明的包装范围 | 前景包装、冷冻储存、内部搬运及设施出厂门交付 | kg 参考产品 |

### 过程：鱼肉接收与前处理（`reception_preparation`）

#### 输入

##### 产品流

###### 接收的鱼或鱼肉投入（`received_fish_input`）

按物种、来源、先前加工状态和上游数据集记录每种接收鱼类投入；仅汇总实质等同的投入。

- 选定流：待审核的精确 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：分配至声明生产批次的接收实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷冻鱼肉净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 数量范围：暂定原料质量平衡 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：5
  - 单位：kg 接收鱼或鱼肉/kg 净参考产品
  - 基准：每 1 kg 冷冻鱼肉净参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 工艺用水和冰（`preparation_water_ice`）

记录进入清洗、冷却和前处理的计量或经核算用水及冰；不得在此计入外部冰衣。

- 选定流：待审核的精确 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：分配至前处理批次的实测用水加购入或制备冰量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 前处理鱼肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_ice`
- 数量范围：暂定前处理水和冰 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg 水和冰/kg 前处理鱼肉
  - 基准：每 1 kg 前处理鱼肉
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 前处理鱼肉（`prepared_fish_flesh`）

以可选切碎或冻结前的实测输出质量计算前处理鱼肉。

- 选定流：待审核的精确 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：前处理鱼肉实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个前处理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 数量范围：暂定前处理得率 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.2
  - 上限：1
  - 单位：kg 前处理鱼肉/kg 接收鱼或鱼肉
  - 基准：相对于接收鱼或鱼肉投入的质量比
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 修整物、鱼皮、鱼骨、不合格品和其他分离物料（`preparation_residues`）

将可销售共产品与废物分开，并记录各自去向；不得将废水与固体残余物合并。

- 选定流：待审核的精确 Tiangong 废物流或共产品流
- 流属性/单位：Mass / kg
- 数量规则：按去向和法规状态实测的分离物料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接收鱼或鱼肉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_mass`
- 数量范围：暂定残余物质量平衡 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.8
  - 单位：kg 分离物料/kg 接收鱼或鱼肉
  - 基准：相对于接收鱼或鱼肉投入的质量比
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：切碎与成型（`mincing_forming`）

#### 输入

##### 产品流

###### 用于切碎或成型的前处理鱼肉（`mincing_input`）

记录转入条件性切碎或成型操作的前处理鱼肉。

- 选定流：待审核的精确 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个切碎或成型批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 切碎和成型用电（`mincing_electricity`）

记录分表电量，或根据经核算的设备运行时间与功率数据计算用电。

- 选定流：待地理范围审核的精确 Tiangong 电力产品流
- 流属性/单位：Energy / kWh
- 数量规则：实测或计算用电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成型鱼肉
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 数量范围：暂定切碎和成型用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh/kg 成型鱼肉
  - 基准：每 1 kg 成型鱼肉
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 切碎或成型鱼肉（`formed_fish_meat`）

记录转入冻结的产品质量，并单独披露任何配方配料。

- 选定流：待审核的精确 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：切碎或成型鱼肉实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个切碎或成型批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

### 过程：冻结与可选挂冰（`freezing_glazing`）

#### 输入

##### 产品流

###### 进入冻结的鱼肉（`freezing_input`）

按产品批次记录进入冻结设备的前处理或成型鱼肉。

- 选定流：待审核的精确 Tiangong 产品流
- 流属性/单位：Mass / kg
- 数量规则：实测投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个冻结批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 冻结用电（`freezing_electricity`）

采用分表，或从共享电表按有记录的方法分配，记录冻结机、压缩机、泵、风机及可归属辅助设备用电。

- 选定流：待地理范围审核的精确 Tiangong 电力产品流
- 流属性/单位：Energy / kWh
- 数量规则：实测或计算用电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 冷冻鱼肉净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 数量范围：暂定冻结用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：5
  - 单位：kWh/kg 冷冻鱼肉净质量
  - 基准：每 1 kg 冷冻鱼肉净质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 挂冰用水（`glazing_water`）

仅在施加冰衣时纳入；采集供水量，并将保留的冰衣与未保留在产品上的水分开确定。

- 选定流：待审核的精确 Tiangong 水产品流
- 流属性/单位：Mass / kg
- 数量规则：挂冰供水实测量及保留冰衣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷冻鱼肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_ice`
- 数量范围：暂定挂冰用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 供水/kg 冷冻鱼肉净质量
  - 基准：每 1 kg 冷冻鱼肉净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 归属于冻结的制冷剂补充（`freezing_refrigerant`）

按物质记录制冷剂补充量，并计算归属于冻结系统和声明产品的部分；不得虚构直接排放流 UUID。

- 选定流：待物质审核的精确 Tiangong 制冷剂产品流
- 流属性/单位：Mass / kg
- 数量规则：根据维修记录计算归属制冷剂补充量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷冻鱼肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant`
- 数量范围：暂定制冷剂补充 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：kg 制冷剂/kg 冷冻鱼肉净质量
  - 基准：每 1 kg 冷冻鱼肉净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 冷冻鱼肉净产品（`frozen_fish_meat_reference`）

本行是定量参考，将鱼肉净质量与冰衣和包装分开记录。

- 选定流：冻鱼 `bbae8c72-d732-4f53-bdd5-aff8a0f39d48`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定参考数量 1 kg 冷冻鱼肉净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 冻结不合格品、滴液和未保留挂冰水（`freezing_rejects`）

在记录允许时，按物理形态和去向分别记录产品不合格品和水损失。

- 选定流：待审核的精确 Tiangong 废物流
- 流属性/单位：Mass / kg
- 数量规则：实测不合格物料及未保留水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷冻鱼肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_mass`
- 数量范围：暂定冻结损失 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 不合格品和未保留水/kg 冷冻鱼肉净质量
  - 基准：每 1 kg 冷冻鱼肉净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：包装与冷冻储存（`packaging_storage`）

#### 输入

##### 产品流

###### 包装材料（`packaging_materials`）

按材料分别记录初级、次级和三级包装，仅纳入声明包装范围内的层级。

- 选定流：待材料审核的精确 Tiangong 包装产品流
- 流属性/单位：Mass / kg
- 数量规则：包装领用量减去经核算的未使用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷冻鱼肉净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 数量范围：暂定包装质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg 包装/kg 冷冻鱼肉净质量
  - 基准：每 1 kg 冷冻鱼肉净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷冻储存和内部搬运用电（`storage_electricity`）

记录冷库及内部搬运用电，并采用包含储存时长的已披露物理驱动因子分配共享电表。

- 选定流：待地理范围审核的精确 Tiangong 电力产品流
- 流属性/单位：Energy / kWh
- 数量规则：根据电表数据、产品吞吐量、适用时占用容量及储存时长计算用电
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：声明冷冻储存期内每 1 kg 参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 数量范围：暂定冷冻储存用电 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kWh/kg 参考产品/声明储存周期
  - 基准：声明冷冻储存期内每 1 kg 参考产品
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 出厂交付的包装冷冻鱼肉（`packaged_frozen_fish_meat`）

记录交付的参考产品，并与定量参考行核算，不得将包装或冰衣计入鱼肉净质量。

- 选定流：冻鱼 `bbae8c72-d732-4f53-bdd5-aff8a0f39d48`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测交付鱼肉净质量，归一化至 1 kg 参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | multifunctional_foreground_processes | 首先通过采集独立过程数据、细分操作，或在已知可辩护替代功能时扩展产品系统来避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical` | joint_products_and_co-products | 无法避免分配时，采用有记录的因果物理关系分配投入和产出。仅当质量代表该关系时才可采用质量，不得自动按质量分配。 | `eu-pef-2021-2279` |
| `allocation_economic` | residual_multifunctionality | 仅在无法建立可辩护的因果物理关系时采用经济分配；使用有代表性的价格期，并对重要共产品报告敏感性情景。 | `eu-pef-2021-2279` |
| `allocation_waste_status` | trimmings_skin_bone_rejects_and_recovered_material | 按声明法域记录每种分离物料是共产品、可回收材料、动物饲料投入、处理投入还是废物，并披露任何抵扣、避免产品或负荷转移。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `reception_preparation`; `mincing_forming`; `freezing_glazing`; `packaging_storage` | 接收、中间、净参考、冰衣和交付质量 | 校准秤、批次、生产或库存记录 | timestamp; lot_id; species; origin; product_form; gross_mass; tare_mass; glaze_mass; net_mass; reject_mass; destination | 核算秤和批次记录，区分总质量、皮重、冰衣和鱼肉净质量 | kg | 每批次并按月核算 | 覆盖代表性运行条件的声明生产期 | 数据集内所有设施和生产线 | 按批次汇总等同流并归一化至 1 kg 净参考产品 | 秤校准；批次追溯；核算记录；操作员复核 |
| `cp_water_ice` | `reception_preparation`; `freezing_glazing` | 前处理用水、冰和挂冰用水 | 水表、制冰记录、采购记录和冰衣测试 | meter_start; meter_end; ice_mass; purchased_water; glaze_test_gross; glaze_test_net; lot_id | 将供水和冰核算至批次，或采用已披露物理驱动因子分配共享供应 | kg 或 m3，并记录密度/换算 | 每班次或批次并按月核算 | 与产品质量记录相同期间 | 所有相关前处理和挂冰操作 | 扣除无关使用并归一化至相应过程输出 | 仪表检查；发票核算；冰衣测试记录 |
| `cp_energy` | `mincing_forming`; `freezing_glazing`; `packaging_storage` | 电力和燃料使用 | 分表、公用工程表、发票、设备运行时间、额定功率和储存日志 | meter_start; meter_end; fuel_quantity; equipment_id; runtime; rated_power; throughput; storage_days; occupied_capacity | 优先分表；否则以有记录物理驱动因子计算和分配共享公用工程 | kWh、MJ 或声明燃料单位 | 连续、每班次或每月 | 与生产和储存记录相同期间 | 所有纳入设备和共享公用工程 | 与发票核算，并归一化至过程输出或参考产品及声明储存时长 | 仪表校准；发票核算；分配工作表 |
| `cp_residue_mass` | `reception_preparation`; `freezing_glazing` | 固体残余物、不合格品、废水相关固体和去向 | 秤、料箱、联单、销售、处理或处置记录 | material_type; mass; moisture_state; destination; regulatory_status; revenue; lot_id | 按去向称量，或以经核实单位质量核算容器数量 | kg | 每次移出并按月核算 | 与生产记录相同期间 | 所有纳入残余物和不合格品点位 | 按物料和去向汇总并与质量平衡核算 | 秤检查；联单；销售或处理记录 |
| `cp_packaging` | `packaging_storage` | 初级、次级和三级包装 | 物料清单、领退记录和供应商规格 | material; layer; units_issued; units_returned; unit_mass; recycled_content; supplier_id | 根据经核算数量和经核实单位质量计算包装使用量 | kg | 每种产品形式并按月核算 | 与交付产品相同期间 | 所有包装线及纳入的包装层 | 按材料汇总并归一化至 1 kg 净产品 | 供应商规格；单位质量检查；库存核算 |
| `cp_refrigerant` | `freezing_glazing`; `packaging_storage` | 制冷剂补充及归属损失 | 维修、采购、充注、回收和泄漏修复记录 | refrigerant_name; opening_charge; added_mass; recovered_mass; closing_charge; service_date; equipment_id; operating_driver | 按物质计算质量平衡，并以有记录运行驱动因子归属共享系统 | kg | 每次维修事件并按年核算 | 与生产数据集重叠期间 | 服务于纳入操作的所有制冷系统 | 按物质汇总净补充量并分配至纳入产品 | 技师记录；采购记录；充注核算；泄漏修复证据 |
| `cp_cold_chain_quality` | `freezing_glazing`; `packaging_storage` | 冻结和冷冻储存控制 | 经验证传感器、批次记录、报警、纠正措施和包装检查 | lot_id; timestamp; process_stage; product_temperature_or_validated_proxy; set_point; alarm; corrective_action; package_integrity | 有条件时保留连续监测，并保留设施食品安全计划下与批次关联的检查 | 声明温度单位和时间 | 适用时连续或每批次 | 整个纳入冻结和储存期 | 所有纳入冻结机、冷库及转运阶段 | 分别报告超限及受影响质量；不得用平均值掩盖不符合 | 传感器校准；HACCP 记录；报警历史；纠正措施闭环；包装检查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 参考产品 | 鱼肉净质量 = 冷冻产品总质量 - 外部冰衣质量；包装另行排除 | 冷冻总质量；冰衣质量；包装质量 | kg 冷冻鱼肉净质量 | `codex-cxs-190-1995` |
| `calc_normalized_inventory` | 所有清单行 | 归一化数量 = 纳入期间数量 / 交付鱼肉净质量 | 经核算流数量；交付净质量 | 每 kg 参考产品的数量 | `eu-pef-2021-2279` |
| `calc_process_yield` | 前处理、切碎和冻结 | 得率 = 同一经核算批次或期间的实测净输出质量 / 实测投入质量 | 投入质量；产出质量；批次或期间关联 | kg/kg 过程得率 |  |
| `calc_mass_balance` | 各过程及完整前景系统 | 核算实测投入与净产品、分离共产品、废物、保留冰衣、废水相关产出及有记录库存变化；调查无法解释的不平衡 | 投入、产出、废物、冰衣、用水及库存变化记录 | 质量平衡残差及解释 |  |
| `calc_shared_energy` | 共享公用工程 | 以计量运行时间、吞吐量、制冷负荷、占用容量和储存时长等有记录物理驱动因子分配共享能量；保留分配因子 | 共享仪表；驱动因子数量；纳入产出 | 每过程输出或参考产品的能量 | `eu-pef-2021-2279` |
| `calc_refrigerant_recharge` | 制冷系统 | 净补充量 = 添加制冷剂 - 回收制冷剂 - 有记录的期末充注量增加；按物质名称评价，并以已披露物理驱动因子归属 | 维修和充注记录；运行驱动因子 | 归属于纳入操作的 kg 制冷剂 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 所有产品和物料记录 | 保留物种或物种组、来源生产系统、上游数据集、接收形态、切碎/未切碎形态、挂冰状态、添加剂和包装形式，详细程度应足以避免合并实质不同产品。 | 批次追溯、供应商规格、产品规格和上游数据集引用；`cpc-v3-21223`；`codex-cxc-52-2003` |
| `dq_temporal_representativeness` | 前景活动数据 | 使用能代表运行季节、产品组合和储存时长的声明期间；披露停机、异常批次、缺失月份和外推。 | 带日期的仪表、生产、储存和公用工程记录；`eu-pef-2021-2279` |
| `dq_technology_geography` | 过程和公用工程 | 识别冻结、切碎、挂冰、包装、制冷和废水技术，并尽可能使用地理匹配的电力、水、燃料、处理和上游鱼类数据集。 | 设备台账、场址记录、供应商数据和数据集元数据；`eu-pef-2021-2279` |
| `dq_completeness` | 前景系统 | 核算产品、主要物料、水/冰、能量、包装、制冷剂、残余物、废水和共产品；列出每个排除流及理由，不得使用无记录截断。 | 质量/能量核算、排除项清单和来源至清单行矩阵；`eu-pef-2021-2279` |
| `dq_food_safety_quality` | 冻结和冷冻储存 | 保留记录，证明适用的危害控制、卫生、冻结、温控、包装完整性及纠正措施要求在纳入产品周期内得到实施。 | HACCP 计划和记录、监测日志、校准、报警、检查和纠正措施；`codex-cxc-52-2003`；适用时 `codex-cxs-190-1995` |
| `dq_estimate_replacement` | 暂定 QA 范围 | 每个 `reasoned_estimate` 范围仅作为筛查标记；在将其作为发布关键允许范围前，以代表性前景证据或经审核来源证据替换。 | 评审记录及替换来源或代表性数据集 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | 要求产品流 UUID `bbae8c72-d732-4f53-bdd5-aff8a0f39d48`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg 以及恰好 1 kg 鱼肉净参考质量。 |  |
| `validate_scope_qualifiers` | dataset_identity | 缺失物种/来源、上游数据集、产品形态、切碎状态、挂冰、包装范围、冻结技术、储存制度和时长、地理范围或数据期时，应判定指南不完整。 | `cpc-v3-21223`; `codex-cxc-52-2003` |
| `validate_process_coverage` | process_inventory | 要求纳入所有必需过程和每个适用的条件过程，包括完整场内冷冻链；否则须以设施证据支持有记录的零值/不适用声明。 | `codex-cxc-52-2003` |
| `validate_mass_reconciliation` | mass_balance | 要求在批次或期间一致基础上核算接收投入、净产品、冰衣、共产品、残余物、不合格品、废水相关物料和库存变化；标记无法解释的残差供审核。 |  |
| `validate_allocation` | multifunctionality | 要求提供避免分配证据，或所选物理/经济方法、分配因子、共产品状态、适用时的价格期及敏感性披露。 | `eu-pef-2021-2279` |
| `validate_cold_chain_quality` | food_safety_and_quality | 要求在适用要求下提供冻结、储存、包装完整性、超限和纠正措施的关联控制记录；不得仅凭平均温度推断符合性。 | `codex-cxc-52-2003`; 适用时 `codex-cxs-190-1995` |
| `validate_data_quality` | foreground_dataset | 要求时间、技术、地理、完整性、追溯、校准及不确定性/估算披露，包括识别使用的每个暂定范围。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 加工设施出厂门冷冻鱼肉生产的前景数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 当物种/来源、上游生产、产品形态、设施技术、挂冰、包装、储存时长、地理范围、时期和分配具有代表性时，用于声明冷冻鱼肉的 LCA |
| excluded_use | 未添加相应数据集时，不得直接表示捕捞或养殖、整条冷冻鱼、另行分类的冷冻鱼片、鱼肝或鱼卵、鱼糜/配制产品、其他保藏路线、下游配送、零售、烹饪、消费或生命周期末端 |
| required_metadata | PCR id 和版本语境；产品流 UUID；物种/来源；上游数据集；切碎状态；产品和包装形式；冰衣比例；添加剂；纳入操作；冻结和制冷技术；储存制度/时长；地理范围；数据期；分配方法；共产品/废物状态；截断/代理；数据所有者和审核状态 |
| required_quality_disclosure | 来源至清单行追溯；测量和计算方法；校准与核算；时间、技术和地理代表性；质量平衡；食品安全控制证据；分配敏感性；缺失数据；暂定估算；不确定性和局限性 |
| update_trigger | 鱼类来源或物种组合、接收形态、产品规格、切碎/冻结/挂冰技术、制冷剂、能源供应、包装、储存时长、分配/共产品去向、法规、设施配置或代表性数据期发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `cpc-v3-21223` | `official_guidance` | 联合国统计司，《产品总分类（CPC）3.0 版》，子类 21223，https://unstats.un.org/unsd/classifications/Econ/cpc（检索日期：2026-08-11） | 产品类别身份及与相邻 CPC 产品形态的排除边界 |
| `codex-cxc-52-2003` | `official_guidance` | Codex Alimentarius，《鱼和渔业产品操作规范》，CXC 52-2003，https://www.fao.org/input/download/standards/10273/CXP_052e.pdf（检索日期：2026-08-11） | 过程分解、卫生操作、冻结和冷冻储存控制、危害控制记录、包装及质量要求 |
| `codex-cxs-190-1995` | `standard` | Codex Alimentarius，《速冻鱼片标准》，CXS 190-1995，https://workspace.fao.org/sites/codex/Standards/CXS%20190-1995/CXS_190e.pdf（检索日期：2026-08-11） | 当声明的未切碎形态在技术上适用该标准时，用作净含量、冰衣分离和产品质量控制的条件性基准；不用于将范围扩展至 CPC 21222 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会关于使用环境足迹方法的建议（EU）2021/2279，CELEX 32021H2279，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索日期：2026-08-11） | 生命周期边界完整性、归一化、多功能性和分配层级、代表性、数据质量及披露 |
