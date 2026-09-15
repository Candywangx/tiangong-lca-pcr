---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cocoa-butter-fat-and-oil
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 可可脂、脂肪和油

## 1. 范围与适用性

本 PCR 适用于以可可豆、可可碎仁或可可浆/液块为原料生产可可脂、可可脂肪或可可油，并在生产设施门口作为企业间原料交付的前景生产。范围包括压榨路线及其他明确声明的回收路线，以及发运前实际实施的过滤、调质、可选脱臭或精炼、储存和包装操作。

前景数据包应声明起始物料是经发酵和干燥的可可豆、可可碎仁、可可浆/液块，还是其他有技术依据的可可中间体。只有在报告设施内实施或作为受控前景操作时，才纳入可可豆清理、烘焙、破碎、风选和碎仁研磨。外购起始物料需要连接终止于所声明收货状态的上游数据集。

本 PCR 不适用于以可可浆/液块、可可饼或可可粉为参考产品的生产，也不适用于巧克力和糖果制造，以及用非可可油脂制造的类可可脂或复配脂肪。农场种植、发酵、干燥、外部运输、下游食品制造、使用和生命末期均不属于本门到门前景边界；更广范围研究可用独立数据集明确增补这些阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cocoa-butter-fat-and-oil |
| classification_refs | CPC 3.0: 23620, Cocoa butter, fat and oil |
| covered_products | 完全由可可豆或可可浆/液块衍生的可可脂、压榨可可脂、脱臭可可脂以及可可脂肪或油 |
| excluded_products | 可可浆/液块、可可饼、可可粉、巧克力、糖果、混合植物脂肪、来自非可可原料的类可可脂，以及无法追溯可可来源的产品 |
| representative_product | 经回收、过滤或调质，并按实际情况完成脱臭后，在生产设施准备发运的散装可可脂 |
| production_route | 从接收的可可豆、碎仁或可可浆/液块开始，经压榨或其他有记录的脂肪回收操作，再经后处理并在工厂门口放行的已声明路线 |
| market_state | 企业间原料；在已声明发运温度下为液态、半固态或固态；包装或散装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完全由可可豆制得、作为配料供应给可可制品、巧克力或其他已声明食品制造的食用可可脂、脂肪或油 |
| How much | 工厂门口产品净质量 1 kg |
| How well | 符合已声明的商业规格和产品名称；声明符合 Codex CXS 86-1981 时，以油酸计的游离脂肪酸不超过 1.75% m/m，非皂化物不超过 0.7% m/m，压榨可可脂则不超过 0.35% m/m |
| How long or cycle | 工厂门口放行的一个生产批次或生产周期；此中间配料不指定使用寿命 |
| reference_flow_link | 过程 `butter_finishing_and_release` 的输出 `cocoa_butter_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 脂状或油状的可可脂 `402dbf23-610a-4be9-a34f-333ec03580a9` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 起始物料；回收路线；压榨或非压榨名称；精炼或脱臭状态；等级或规格；物态和发运温度；生产地理范围；数据期；包装状态 |

构建前景数据包时，`必需限定信息` 中的每一项均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考可可脂产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按已声明工厂门口状态报告 1 kg 可可脂、脂肪或油净质量；不含容器皮重，包装应单独报告。 |
| `wet_dry_basis_disclosure` | 可可豆、碎仁、液块、可可饼和产品 | Mass | kg | 记录实测的收到状态质量；凡换算或质量平衡使用干基时，声明水分或干物质基准。 |
| `energy_carrier_separation` | 电力、燃料和外购热力 | Energy 或载能体专用属性 | kWh、MJ 或载能体质量/体积 | 分别保留计量电力、外购热力及每种燃料载能体的记录；记录全部换算因子，不得合并为缺少依据的通用能量值。 |
| `solvent_accounting` | 使用萃取的路线 | Mass | kg | 在一致的批次质量基准上，分别记录溶剂补充量、回收量、产品中残留量、送处理量和直接排放量。 |
| `product_quality_basis` | 产品规格 | Mass fraction | % m/m 或 kg/kg | 对游离脂肪酸、非皂化物、残留溶剂、水分或其他放行规格，说明分析方法、采样点和质量基准。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 可可脂前景生产 | 纳入从已声明接收起始状态到回收、后处理、储存和工厂门口放行的全部受控操作，包括公用工程、加工助剂、包装、废物、共产品和直接排放。 | `icco-processing-cocoa`; `eu-pef-method-2021` |
| `boundary_route_disclosure` | 路线特定过程选择 | 声明起始物料；仅在代表产品实际实施时纳入清理、烘焙、风选、研磨、碱化、压榨、萃取、过滤、脱臭或包装操作。 | `icco-processing-cocoa`; `codex-cxs-86-1981` |
| `boundary_purchased_inputs` | 外购可可中间体和公用工程 | 对外购可可豆、碎仁、液块、能源、水、溶剂、加工助剂和包装材料分别使用终止于设施收货状态的上游数据集建模。 | `eu-pef-method-2021` |
| `boundary_same_category_recursion` | 作为返工料、调配组分或外购输入的可可脂 | 将外部供应的可可脂记录为独立技术圈输入并连接其上游数据集；不得以递归方式并入本前景产品输出。 | `eu-pef-method-2021` |
| `boundary_direct_releases` | 直接排放和废物 | 记录实测向空气、水和土壤的排放，以及废水、壳、可可饼、废过滤介质、溶剂损失、不合格物料和包装废物，并注明去向与处理路线。 | `eu-pef-method-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收的经发酵和干燥可可豆、可可碎仁、可可浆/液块或其他有依据的可可中间体，并声明水分、质量状态、所有权边界和接收地点 |
| starting_condition_role | 前景入口点；除非研究明确增补，否则上游种植、发酵、干燥和外部运输保留在所连接的上游数据集中 |
| product_classification_scope | 完全从可可原料获得的可可脂、脂肪和油；分类引用提供映射语境，但不能替代语义产品边界 |
| recursive_input_rule | 跨越报告边界的外部供应可可脂或同类别返工料是独立输入，需要单独来源数据集且不得重复计量质量 |
| upstream_dataset_requirement | 每种外购起始物料、公用工程、溶剂、加工助剂和包装材料均需要能代表其供应商、地理、技术和时期的上游数据集 |
| disclosure | 声明起始物料、回收技术、过程顺序、分配方法、共产品去向、能源和水基准、溶剂使用、产品规格、包装状态、地理范围、数据期和排除项 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `cocoa_material_preparation` | 可可物料制备 | `conditional` | 当可可豆或碎仁在前景设施内进行清理、烘焙、破碎、风选、碱化或研磨时纳入 | 将收到的可可物料转化为适于压榨的可可液块或其他已声明回收进料 | kg 已制备回收进料 |
| `cocoa_fat_recovery` | 可可脂回收与分离 | `required` | 始终纳入实际使用的压榨、螺旋压榨或有记录的萃取路线 | 将可可脂/脂肪/油与可可固形物分离 | kg 已回收粗制或压榨可可脂 |
| `butter_finishing_and_release` | 可可脂后处理与工厂门口放行 | `required` | 始终纳入过滤或调质和放行；实施时纳入脱臭、精炼、储存和包装 | 生产放行的参考产品 | 1 kg 放行可可脂、脂肪或油 |

### 过程：可可物料制备（`cocoa_material_preparation`）

#### 输入

##### 产品流

###### 接收的可可物料（`received_cocoa_material`）

记录进入前景制备的可可豆或碎仁。作为现成回收进料外购的可可液块绕过本过程，直接记入 `cocoa_fat_recovery`。

- 选定流：可可豆或可可碎仁；路线特定 Tiangong flow UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：进入代表批次且按收到状态实测的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已制备回收进料，并归一到 1 kg 放行可可脂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`icco-processing-cocoa`; `codex-cxs-141-1983`

###### 制备电力（`preparation_electricity`）

记录代表性制备路线中输送、清理、烘焙辅助、风选、研磨和除尘所分摊的计量电力。

- 选定流：供应到设施的电力；Tiangong flow UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：计量或分表计量并可归属于可可物料制备的电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已制备回收进料，并归一到 1 kg 放行可可脂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 数量范围：临时制备电力筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：5
  - 单位：kWh/kg 已制备回收进料
  - 基准：宽范围初步设备能耗筛查；应用路线特定且经评审的证据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 制备热能（`preparation_thermal_energy`）

分别记录烘焙和热调质使用的外购热力或各种燃料，不得合并不同载能体。

- 选定流：外购热力或路线特定燃料；Tiangong flow UUID 未解析
- 流属性/单位：Energy / MJ，或载能体专用质量或体积
- 数量规则：计量并可归属于可可物料制备的热力或燃料消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已制备回收进料，并归一到 1 kg 放行可可脂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 数量范围：临时制备热能筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：30
  - 单位：MJ/kg 已制备回收进料
  - 基准：宽范围初步热能筛查；应用路线特定且经评审的证据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 已制备可可回收进料（`prepared_cocoa_feed`）

记录从物料制备转出的可可液块或其他已声明适于压榨或萃取的可可进料。

- 选定流：可可浆或可可液块；Tiangong flow UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测转入可可脂回收的已制备进料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次，并归一到 1 kg 放行可可脂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`icco-processing-cocoa`; `codex-cxs-141-1983`

##### 废物流

###### 壳、异物和制备淘汰物（`preparation_rejects`）

按去向记录分出的壳、异物、除尘器固体和淘汰的可可物料；仅在有记录证明具有经济用途时归类为共产品。

- 选定流：可可制备残余物；Tiangong flow UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按残余物类型和去向实测的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已制备回收进料，并归一到 1 kg 放行可可脂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`

##### 基本流

###### 制备过程直接空气排放（`preparation_air_emissions`）

记录经控制设备后，烘焙、冷却、破碎、风选、研磨及现场燃烧直接排放的实测颗粒物和其他物质。

- 选定流：向空气排放的物质特定流；Tiangong elementary-flow UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按排放物质进行烟道测量、经验证的排放计算或质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已制备回收进料，并归一到 1 kg 放行可可脂
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_emissions`

### 过程：可可脂回收与分离（`cocoa_fat_recovery`）

#### 输入

##### 产品流

###### 可可回收进料（`cocoa_recovery_feed`）

记录进入所选压榨或萃取路线的外购可可液块、内部制备液块、碎仁或其他已声明可可进料。

- 选定流：可可浆、可可液块、碎仁或已声明可可衍生回收进料；Tiangong flow UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：进入回收过程的实测进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已回收粗制可可脂，并归一到 1 kg 放行可可脂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`icco-processing-cocoa`; `codex-cxs-141-1983`
- 数量范围：符合 CXS 141-1983 的可可浆或液块的可可脂含量 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.47
  - 上限：0.60
  - 单位：kg 可可脂/kg 可可浆或液块
  - 基准：符合条件的可可浆或液块中实测或供应商声明的可可脂质量分数；不得作为默认回收率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`codex-cxs-141-1983`

###### 回收电力（`recovery_electricity`）

记录所选路线中泵送、液压压榨、螺旋压榨、萃取、分离、冷却和溶剂回收所分摊的电力。

- 选定流：供应到设施的电力；Tiangong flow UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：计量或分表计量并可归属于可可脂回收的电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已回收粗制可可脂，并归一到 1 kg 放行可可脂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 数量范围：临时回收电力筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：5
  - 单位：kWh/kg 粗制可可脂
  - 基准：宽范围初步设备能耗筛查；应用路线特定且经评审的证据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 回收热能（`recovery_thermal_energy`）

记录维持液块流动、支持萃取或溶剂回收以及压榨或分离生产线调质所用的热力或燃料。

- 选定流：外购热力或路线特定燃料；Tiangong flow UUID 未解析
- 流属性/单位：Energy / MJ，或载能体专用质量或体积
- 数量规则：计量且可归属于可可脂回收的热力或燃料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已回收粗制可可脂，并归一到 1 kg 放行可可脂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 数量范围：临时回收热能筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：30
  - 单位：MJ/kg 粗制可可脂
  - 基准：宽范围初步热能筛查；应用路线特定且经评审的证据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 萃取溶剂补充量（`extraction_solvent_makeup`）

仅在使用非压榨萃取路线时记录溶剂补充量；保留溶剂身份，并将回收溶剂与新输入分开。

- 选定流：路线特定萃取溶剂；Tiangong flow UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：送入回收系统的实测溶剂，扣除单独清单化的返还或回收溶剂，但不得净扣直接排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已回收粗制可可脂，并归一到 1 kg 放行可可脂
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_balance`
- 来源：`codex-cxs-86-1981`

##### 废物流

#### 输出

##### 产品流

###### 粗制或压榨可可脂（`crude_cocoa_fat`）

记录转入后处理、尚未计入后处理损失的已回收可可脂。

- 选定流：脂状或油状的可可脂 `402dbf23-610a-4be9-a34f-333ec03580a9`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入后处理的粗制或压榨可可脂实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次，并归一到 1 kg 放行可可脂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`icco-processing-cocoa`; `codex-cxs-86-1981`

###### 可可饼或脱脂可可固形物（`cocoa_cake_coproduct`）

可可饼或脱脂固形物有经济用途时记录为共产品；否则作为废物记录并注明处理去向。Codex 将可可饼定义为从可可碎仁或可可浆中部分或完全除去脂肪所得的产品。

- 选定流：可可饼或路线特定脱脂可可固形物；Tiangong flow UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：回收过程出口处的共产品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已回收粗制可可脂，并归一到 1 kg 放行可可脂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`codex-cxs-141-1983`; `icco-processing-cocoa`

##### 废物流

###### 回收废物和不合格物料（`recovery_wastes`）

记录不可回收固体、废处理介质、泄漏物和未在内部返工的不合格物料，并注明处理去向及任何回收价值。

- 选定流：路线特定可可脂回收废物；Tiangong flow UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按类型和去向实测的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已回收粗制可可脂，并归一到 1 kg 放行可可脂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`

##### 基本流

###### 溶剂及回收过程直接排放（`recovery_direct_emissions`）

记录经控制后来自萃取、溶剂回收、压榨、现场燃烧和废水处理的物质特定直接排放。

- 选定流：向空气、水或土壤排放的物质特定流；Tiangong elementary-flow UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：根据溶剂、燃料、排水和控制装置记录进行实测或经验证计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已回收粗制可可脂，并归一到 1 kg 放行可可脂
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_emissions`

### 过程：可可脂后处理与工厂门口放行（`butter_finishing_and_release`）

#### 输入

##### 产品流

###### 进入后处理的粗制或压榨可可脂（`finishing_cocoa_fat_input`）

记录进入过滤、调质、可选脱臭或精炼、储存和放行的粗制或压榨可可脂。

- 选定流：脂状或油状的可可脂 `402dbf23-610a-4be9-a34f-333ec03580a9`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入后处理的可可脂实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行可可脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`codex-cxs-86-1981`

###### 后处理电力（`finishing_electricity`）

记录过滤、泵送、冷却、脱臭或精炼辅助、储存、灌装和工厂门口搬运使用的电力。

- 选定流：供应到设施的电力；Tiangong flow UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：计量或分表计量并可归属于后处理和放行的电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行可可脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 数量范围：临时后处理电力筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：3
  - 单位：kWh/kg 放行可可脂
  - 基准：宽范围初步设备能耗筛查；应用路线特定且经评审的证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 后处理热能（`finishing_thermal_energy`）

实施熔化、调质、脱臭或精炼和加热储存时，记录所用外购热力或燃料。

- 选定流：外购热力或路线特定燃料；Tiangong flow UUID 未解析
- 流属性/单位：Energy / MJ，或载能体专用质量或体积
- 数量规则：计量并可归属于后处理和放行的热力或燃料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行可可脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel`
- 数量范围：临时后处理热能筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg 放行可可脂
  - 基准：包含无加热路线的宽范围初步热能筛查；应用路线特定且经评审的证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 工艺用水（`finishing_process_water`）

记录因清洗、冷却损失、蒸汽发生或产品直接接触操作而跨越过程边界的水；不得重复计入闭路循环水量。

- 选定流：工艺用水；Tiangong flow UUID 未解析
- 流属性/单位：Volume / m3
- 数量规则：按用途计量并可归属于后处理和放行的补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行可可脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 数量范围：临时工艺用水筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：m3/kg 放行可可脂
  - 基准：包含干式或完全循环路线的宽范围初步补充水筛查；应用路线特定且经评审的证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 过滤介质、加工助剂和包装（`finishing_aids_and_packaging`）

分别记录每种消耗的过滤助剂、精炼或脱臭助剂、惰性气体和包装材料；只有确实无包装的散装发运才可省略包装。

- 选定流：物料特定加工助剂或包装流；Tiangong flow UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：采购库存量按库存变化和实测回收或返还量调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行可可脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_materials`

##### 废物流

#### 输出

##### 产品流

###### 放行的可可脂、脂肪或油（`cocoa_butter_product`）

这是本 PCR 在已声明发运状态下的参考产品，应带有全部必需限定信息。

- 选定流：脂状或油状的可可脂 `402dbf23-610a-4be9-a34f-333ec03580a9`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：后处理损失之后且容器皮重之前的产品净质量固定为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 放行可可脂、脂肪或油
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`codex-cxs-86-1981`

##### 废物流

###### 后处理废物和废水（`finishing_wastes`）

按处理去向记录废过滤介质、精炼残余物、产品损失、未返工不合格产品、包装废物和废水。

- 选定流：路线特定后处理废物或废水；Tiangong flow UUID 未解析
- 流属性/单位：Mass / kg 或 Volume / m3，在具体数据集中保留为独立行
- 数量规则：按类型和去向实测的废物或排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行可可脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`

##### 基本流

###### 后处理直接排放（`finishing_direct_emissions`）

记录经控制设备后来自脱臭、精炼、加热储存、现场燃烧和废水处理的物质特定排放。

- 选定流：向空气、水或土壤排放的物质特定流；Tiangong elementary-flow UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：根据运行和控制装置记录进行实测或经验证计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行可可脂
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste_and_emissions`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 可可脂和可可饼的共同过程 | 可行时通过分表计量或工程拆分避免分配；将可可脂专用后处理直接归给可可脂，将可可饼专用处理直接归给可可饼。 | `ghg-protocol-product-standard-2011` |
| `allocation_physical_then_economic` | 无法分开的压榨或萃取负荷 | 拆分后仍有共同负荷时，采用能反映因果需求且有记录的物理关系；没有可辩护物理关系时，按共同过程出口处一致的价格进行经济分配。 | `ghg-protocol-product-standard-2011` |
| `allocation_waste_status` | 壳、可可饼、残余物和不合格输出 | 只有无经济价值且送处理的输出才作为废物；若出售或作为产品使用，则记录为共产品并采用所选分配规则。 | `ghg-protocol-product-standard-2011` |
| `allocation_internal_rework` | 内部返工的可可脂 | 不得对从未跨越系统边界的内部返工料分配第二份负荷；保留质量和能量记录，并防止在产品输出中重复计数。 | `ghg-protocol-product-standard-2011` |
| `allocation_disclosure` | 所有多输出数据集 | 报告过程拆分边界、分配公式、物理参数或价格基准；适用时报告价格时期和币种、输出数量，并在经济分配显著影响结果时提供敏感性情景。 | `ghg-protocol-product-standard-2011`; `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `cocoa_material_preparation`; `cocoa_fat_recovery`; `butter_finishing_and_release` | 进入各过程的可可物料 | 地磅、校准秤、批次票、供应商证书 | 物料身份；批号；毛重；皮重；净重；使用时的水分或干物质；实测时的脂肪分数；来源；时间戳 | 将收货和批次记录与实物库存核对 | kg；% m/m | 每批或每批次 | 代表性生产年或有依据的生产周期 | 所有被代表的设施和生产线 | 按物料和批次汇总接收净质量，并核对期初和期末库存 | 校准记录；批次证书；库存核对；拒收记录 |
| `cp_energy_and_fuel` | 所有纳入过程 | 电力、热力和燃料 | 电表、分表、发票、燃料领用、运行记录 | 表计起止；燃料量；单位；热值来源；设备工时；批次分配 | 优先直接分表计量，否则采用有记录的工程分配 | kWh；MJ；载能体质量或体积 | 连续或每批；每月核对 | 与产品产量相同的时期 | 所有纳入的表计、锅炉和生产线 | 扣除非生产负荷；用有记录的因果驱动因素分配共用公用工程 | 表计校准；发票；燃料规格；分配工作表 |
| `cp_process_outputs` | `cocoa_material_preparation`; `cocoa_fat_recovery` | 已制备进料、粗脂、可可饼和其他输出 | 批次秤、罐体液位、生产日志 | 输出身份；净质量；水分；适用时脂肪含量；去向；时间戳 | 测量每次转移或批次，并核对罐体和库存 | kg；% m/m | 每批次 | 与输入数据相同的时期 | 每条被代表回收线 | 按产品和去向汇总；保留内部转移链接 | 校准；实验室证书；批次核对 |
| `cp_solvent_balance` | `cocoa_fat_recovery` | 溶剂补充、回收、残留和排放 | 采购与库存记录、回收表计、产品检测、废物联单、排放监测 | 溶剂身份；期初库存；采购；期末库存；回收量；产品残留；废物；直接排放 | 每个报告期完成溶剂质量平衡 | kg；mg/kg 产品 | 每批次并进行期间核对 | 与萃取生产相同的时期 | 每条使用溶剂的生产线和回收系统 | 补充量加期初库存应与回收量、期末库存、产品残留、废物和排放闭合，并披露平衡闭合程度 | 库存核对；实验室结果；监测仪校准；废物联单 |
| `cp_water_records` | 所有纳入过程 | 补充水和废水 | 水表、分表、排放表、清洗日志 | 来源；表计读数；用途；循环量；排放体积；处理路线；批次分配 | 分别计量补充和排放；不得将循环量重复作为输入 | m3 | 连续或每次清洗；每月核对 | 与产品产量相同的时期 | 所有纳入水系统 | 按用途汇总净补水和排放并归一到产品 | 表计校准；公用事业账单；排放记录；清洗日志 |
| `cp_finishing_materials` | `butter_finishing_and_release` | 过滤介质、助剂、惰性气体和包装 | 采购、领用、返还、库存和批次记录 | 物料身份；批号；期初库存；接收；领用；返还；期末库存；回收量；批次 | 用库存差额并与批次领用交叉核对 | kg 或物料特定单位 | 每批次；每月核对 | 与产品产量相同的时期 | 所有后处理和包装线 | 期初加接收减期末、返还和回收量；按有记录的用量分配给批次 | 发票；盘点；领料单；供应商规格 |
| `cp_waste_and_emissions` | 所有纳入过程 | 废物和直接排放 | 秤、废物联单、排放采样、烟道测试、连续监测、经验证计算输入 | 物质或废物身份；数量；介质；去向；处理；浓度；流量；运行时间；控制效率 | 优先直接测量；计算时保留公式和实测输入 | kg；m3；浓度和流量单位 | 每次装运或采样；有连续监测时连续记录 | 与产品产量相同的时期 | 所有纳入排放点和废物去向 | 需要时按浓度和流量计算物质质量；按介质和去向汇总 | 校准；实验室报告；联单；公式复核；控制装置记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化量 = 期间或批次数量 × 分配份额 ÷ 放行可可脂净质量 | 实测数量；分配份额；放行产品质量 | 每 1 kg 参考产品的数量 | `eu-pef-method-2021` |
| `calc_route_yield` | 回收和后处理 | 路线收率 = 放行可可脂质量 ÷ 实测可可进料质量；报告进料身份、水分基准以及分母是可可豆、碎仁还是液块 | 放行产品质量；回收进料质量；水分基准 | kg 产品/kg 已声明进料 | `icco-processing-cocoa`; `codex-cxs-141-1983` |
| `calc_mass_balance` | 各过程和报告期 | 输入加期初库存 = 产品加共产品加废物加直接质量排放加期末库存；报告平衡闭合程度和无法解释的差额，不得强制归零 | 全部实测质量流和库存变化 | 质量平衡闭合程度和无法解释差额 | `eu-pef-method-2021` |
| `calc_liquor_fat_check` | 可可浆或液块进料 | 仅在适用 CXS 141-1983 符合性时，将实测或供应商声明的可可脂分数与 0.47–0.60 kg/kg 比较；不得将此区间用作默认回收率 | 可可液块质量；可可脂分数；产品符合性声明 | 组成 QA 发现 | `codex-cxs-141-1983` |
| `calc_solvent_balance` | 溶剂萃取路线 | 溶剂损失 = 期初库存 + 采购 − 期末库存 − 回收溶剂 − 产品中溶剂 − 废物中溶剂；负值或无法解释结果需要核对 | 溶剂库存、采购、回收、产品检测、废物和排放记录 | kg 溶剂损失/kg 产品及闭合发现 | `codex-cxs-86-1981` |
| `calc_allocation_share` | 共用制备和回收负荷 | 按已披露的过程拆分和分配层级计算可可脂份额；各共产品的分配份额合计应为一 | 子过程记录；输出数量；物理参数或价格 | 各输出分配份额 | `ghg-protocol-product-standard-2011` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 所有产品和物料行 | 保留批次级物料身份、起始状态、回收路线、产品名称和必需限定信息；不得无依据合并压榨与非压榨路线形成代表性平均值。 | 批次证书；批记录；路线图；产品规格 |
| `dq_measurement` | 质量、能源、水、溶剂和排放数据 | 使用经校准或验证的测量系统；保留单位、换算因子、采样方法、检出限以及不确定性或数据局限。 | 校准证书；仪表台账；实验室报告；换算工作表 |
| `dq_temporal` | 前景时期 | 可获得时使用代表性生产年；较短生产周期需要说明理由、覆盖实质运行状态，并披露季节或批次局限。 | 生产日历；停机和生产周期记录；代表性说明 |
| `dq_completeness` | 过程清单 | 核对物料、溶剂和产品平衡，记录每项排除流、缺失测量、代理和截断；没有实测排放不能作为零排放证据。 | 平衡工作表；缺口日志；排除登记；来源到清单行追踪 |
| `dq_technology_geography` | 前景和上游数据集 | 匹配代表技术、场址地理、供应商区域、能源系统和数据期；否则记录代理及预期偏差方向。 | 数据集元数据；供应商记录；代理说明 |
| `dq_allocation` | 多输出过程 | 保留复现过程拆分和分配所需的数据及理由；使用经济分配时包括数量和同期价格。 | 分配工作簿；仪表图；数量和价格记录；敏感性结果 |
| `dq_source_traceability` | 外部规则和估计 | 将每项来源支撑的约束链接到已列 source id；把每个无来源宽范围标为可替换的 `reasoned_estimate`。 | 来源登记；投影 source_ids；评审记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 确认流 UUID `402dbf23-610a-4be9-a34f-333ec03580a9`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`、参考单位 kg、固定数量 1 和全部必需限定信息。 | `codex-cxs-86-1981` |
| `validate_scope_route` | 过程图和边界 | 确认已声明起始物料和实际路线与所纳入过程章节一致；省略的制备、萃取、脱臭或包装步骤应明确为未实施或位于已连接的上下游数据集中。 | `icco-processing-cocoa`; `eu-pef-method-2021` |
| `validate_mass_and_solvent_balance` | 各过程和使用溶剂的路线 | 根据原始记录重算质量与溶剂平衡；未解决差额、负溶剂损失或产品输出超过进料物理可用脂肪量，应判为错误或有记录的不确定发现。 | `codex-cxs-141-1983`; `codex-cxs-86-1981` |
| `validate_coproduct_allocation` | 可可饼和其他有价值输出 | 确认有价值输出作为共产品；可行时避免分配；剩余方法符合所述层级；份额合计为一且内部返工不重复计数。 | `ghg-protocol-product-standard-2011` |
| `validate_product_specification` | 放行可可脂 | 声明符合 CXS 86-1981 时，验证产品名称、分析结果、适用的游离脂肪酸和非皂化物限值，以及非压榨可可脂的残留正己烷限值。 | `codex-cxs-86-1981` |
| `validate_data_quality` | 前景数据包 | 检查测量校准、时间覆盖、完整性、技术和地理代表性、来源可追溯性、代理披露及临时估计替换状态。 | `eu-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂门口可可脂、脂肪或油生产的前景门到门单元过程数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 用于路线、场址、地理、时期和规格均匹配的可可脂及下游产品 LCA 模型，并在已声明起始状态连接上游数据集 |
| excluded_use | 无依据的产品比较；未对齐限定信息而替代压榨、萃取、精炼或脱臭产品；代表非可可脂肪；上游可可生产缺失时用作摇篮到门数据集 |
| required_metadata | PCR id 和版本状态；参考流 UUID；起始物料；路线和过程图；产品名称和规格；工厂地理；数据期；技术；分配方法；共产品去向；包装状态；source ids；数据所有者和评审状态 |
| required_quality_disclosure | 测量覆盖和校准；质量与溶剂平衡闭合程度；时间、技术和地理代表性；缺失 UUID 和流；代理；分配敏感性；截断；临时 `reasoned_estimate` 范围；局限 |
| update_trigger | 起始物料组合、回收或后处理技术、能源或水供应、溶剂系统、产品规格、共产品用途或价格、分配方法、包装、排放控制、场址覆盖或数据期发生实质变化；替换临时估计或未解析流身份 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-86-1981` | `standard` | Codex Alimentarius，CXS 86-1981《可可脂标准》，2025 年修订，https://workspace.fao.org/sites/codex/Standards/CXS%2086-1981/CXS_086e.pdf（检索于 2026-08-10） | 产品定义与名称；质量限值；非压榨可可脂的正己烷残留判据；放行规格校验 |
| `codex-cxs-141-1983` | `standard` | Codex Alimentarius，CXS 141-1983《可可浆（可可/巧克力液块）和可可饼标准》，2025 年修订，https://workspace.fao.org/sites/codex/Standards/CXS%20141-1983/CXS_141e.pdf（检索于 2026-08-10） | 可可液块和可可饼身份；47–60% 可可脂组成 QA 范围；过程质量平衡解释 |
| `icco-processing-cocoa` | `official_guidance` | 国际可可组织，Processing Cocoa，https://www.icco.org/processing-cocoa/（检索于 2026-08-10） | 可可过程拆分；清理、烘焙、风选、研磨、液块压榨、可可饼和可可脂输出 |
| `ghg-protocol-product-standard-2011` | `standard` | WRI 和 WBCSD，Product Life Cycle Accounting and Reporting Standard，2011，https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf（检索于 2026-08-10） | 共产品分类与分配层级：过程拆分、物理关系、经济关系或其他有依据关系 |
| `eu-pef-method-2021` | `official_guidance` | 欧盟委员会，Recommendation (EU) 2021/2279，Annex I: Product Environmental Footprint Method，2021，https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en?filename=Annexes%201%20to%202.pdf（检索于 2026-08-10） | 功能单位构成；系统边界；前景与上游数据分离；活动数据归一化；完整性和数据质量要求 |
