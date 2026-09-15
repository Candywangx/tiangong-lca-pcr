---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-livers-and-roes-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 鱼肝和鱼子，新鲜或冷藏

## 1. 范围与适用性

本 PCR 适用于食用鱼肝、食用鱼子或两者已声明混合物的前景数据包；产品保持新鲜或冷藏状态，并按声明设施出厂门的净产品质量供应。范围包括接收、由鱼体或内脏分离（由报告设施实施时）、修整、清洗（使用时）、分选或分级、冷却、冷藏、包装和发运准备。

数据集应声明物种或物种组、野生捕捞或养殖来源、鱼肝/鱼子产品部位、来料形态、是否在前景内分离、保藏状态、添加配料、包装配置、冷藏时长、温控方式和设施出厂门地理位置。整鱼、鱼肉和鱼片、冷冻鱼肝或鱼子、盐渍、烟熏、熟制、罐藏、发酵或以其他方式保藏的产品、加工鱼子酱、鱼油、鱼肝油、饲料产品和非食品产品不属于本 PCR。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-livers-and-roes-fresh-or-chilled |
| classification_refs | CPC 3.0: 21225，精确映射语境 |
| covered_products | 以新鲜或冷藏状态供应的食用鱼肝和食用鱼子，包括仍保持该保藏状态的已声明鱼肝/鱼子混合物 |
| excluded_products | 整鱼；鱼片或鱼肉；冷冻、盐渍、烟熏、熟制、罐藏、发酵、货架稳定或以其他方式保藏的鱼肝或鱼子产品；加工鱼子酱；鱼油和鱼肝油；非食品材料 |
| representative_product | 声明设施出厂门的包装新鲜或冷藏食用鱼肝或鱼子 |
| production_route | 接收整鱼、内脏或已分离鱼肝/鱼子；条件性分离；修整、清洗、分选或分级；冷却和冷藏；包装和发运准备 |
| market_state | 新鲜或冷藏、食品级、未冷冻且未以其他方式保藏 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供处于已声明新鲜或冷藏市场状态的食用鱼肝和/或鱼子 |
| How much | 1 kg 净产品质量，不含包装和游离冰或融水 |
| How well | 符合已声明物种、产品部位、保藏、温控、卫生、分级和包装规格的食品级产品 |
| How long or cycle | 一个已声明生产批次直至包装产品在设施出厂门放行；应报告实际冷藏时长 |
| reference_flow_link | 功能单位恰由 1 kg 参考产品流实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 鱼肝和鱼子，新鲜或冷藏 `883637e3-14e1-4d82-bed8-5328706084ef` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或物种组；野生捕捞或养殖来源；鱼肝、鱼子或已声明混合物；来料形态；分离位置；新鲜或冷藏状态；储存时长；温控方式；添加配料；包装配置；设施出厂门地理位置 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告 1 kg 沥干或其他方式确定的净可售鱼肝/鱼子产品；参考质量不含包装、游离冰、冰衣、游离液体和融水。 |
| `intermediate_mass_balance` | 材料投入以及产品、共产品、残余物和废物产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每批按一致基准计量湿质量，并在质量平衡比较前披露水分、沥水或称量基准差异。 |
| `energy_measurement` | 电力以及热能或制冷能 | 待解析的能量属性 | kWh 或 MJ | 按载能体和过程记录计量或分配的能源；除非记录转换和分配基准，不得将电力与燃料或外购冷量合并。 |
| `cold_storage_duration` | 冷却和冷藏 | 待解析的时间属性 | h 或 d | 记录按批次质量加权的停留时长以及维持已声明冷藏状态的方法。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 前景设施 | 纳入从已声明来料状态至包装产品设施出厂门放行的全部操作，包括条件性器官分离、修整、清洗、分级、冷却、冷藏、包装、废水和残余物处理。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `boundary_upstream_link` | 鱼源来料 | 将来料整鱼、内脏或已分离鱼肝/鱼子连接至覆盖生产或捕捞以及送达声明起点的上游数据集；没有成文废物状态和分配论证时，不得将可销售器官视为零负荷。 | `eu-pef-2021-2279` |
| `boundary_cold_chain` | 温控处理 | 纳入前景控制范围内适用的冰、制冷能、冷藏、制冷剂损失和温控处理。 | `codex-cxc-52-2003` |
| `boundary_exclusions` | 资本品和下游阶段 | 除非研究方法要求，否则排除资本品；排除设施出厂门放行后的分销、零售、使用、烹饪和生命周期末端，除非声明研究范围明确纳入。 | `eu-pef-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在首个由前景控制的节点接收的整鱼、鱼内脏或已分离鱼肝/鱼子，并声明其保藏状态和上游归属 |
| starting_condition_role | 前景加工入口；该入口不会消除上游捕捞、养殖、船上作业、上岸、运输或先前分离负荷 |
| product_classification_scope | CPC 3.0 子类 21225 内保持新鲜或冷藏的食用鱼肝和鱼子 |
| recursive_input_rule | 当投入已是本 PCR 类别内产品时，将其作为具有自身合规数据集的上游产品流记录，并从首次附加转化开始前景；不得在接收过程中重建其上游操作 |
| upstream_dataset_requirement | 鱼源来料及其他材料或能源投入需要可追溯数据集；披露分配、地理、技术、时间段和任何数据缺口 |
| disclosure | 声明来料形态、分离位置、物种/来源、纳入操作、排除操作、温控路径、储存时长、分配点以及全部共产品和残余物的处理 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_separation` | 接收、检验和条件性分离 | required | 接收整鱼或内脏时纳入分离；接收和检验始终适用 | 确立来料状态并回收食用鱼肝或鱼子 | kg 接受器官材料 |
| `washing_grading` | 修整、清洗、分选和分级 | required | 仅在实施时纳入湿法清洗；干式修整、检验和分级仍纳入 | 制备食品级鱼肝/鱼子材料 | kg 清洁器官材料 |
| `chilling_storage` | 冷却和冷藏 | required | 适用于全部产品；记录实际冰和/或机械制冷路径 | 维持已声明新鲜或冷藏状态 | kg 冷藏器官材料和按批次质量加权的储存时长 |
| `packing_dispatch` | 包装和设施出厂门发运准备 | required | 纳入实际初级、次级和可重复使用包装配置 | 生产参考产品 | 1 kg 不含包装的净包装产品 |

### 过程：接收、检验和条件性分离（`receipt_separation`）

#### 输入

##### 产品流

###### 鱼源来料（`incoming_fish_material`）

记录进入前景控制的实际整鱼、内脏或已分离鱼肝/鱼子材料。所选非参考 Tiangong 流 UUID 仍待身份评审。

- 选定流：声明的整鱼、内脏或已分离鱼肝/鱼子流；UUID 待解析
- 流属性/单位：Mass / kg
- 数量规则：按批次计量湿态投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`unsd-cpc-3-0-21225`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 接受的鱼肝或鱼子材料（`accepted_organ_material`）

计量经检验以及适用时分离后接受进入后续制备的器官材料。

- 选定流：接受的食用鱼肝或鱼子中间产品；UUID 待解析
- 流属性/单位：Mass / kg
- 数量规则：按批次计量接受的湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 接受器官材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`codex-cxc-52-2003`

###### 其他回收共产品（`other_recovered_coproducts`）

记录在同一分离点回收并单独销售或内部使用的全部鱼类部位，使分配完整。

- 选定流：声明的回收鱼类共产品；UUID 待解析
- 流属性/单位：Mass / kg
- 数量规则：按去向和批次计量产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 接受器官材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 拒收或非食品鱼类材料（`rejected_fish_material`）

按实际去向记录拒收组织和残余物；不得与产品产出净额相抵。

- 选定流：声明的鱼类残余物或废物流；UUID 待解析
- 流属性/单位：Mass / kg
- 数量规则：按去向和批次计量湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 接受器官材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residual_wastewater_records`
- 来源：`codex-cxc-52-2003`

##### 基本流

### 过程：修整、清洗、分选和分级（`washing_grading`）

#### 输入

##### 产品流

###### 接受器官材料投入（`accepted_material_input`）

记录从接收和分离转入的接受中间产品。

- 选定流：接受的食用鱼肝或鱼子中间产品；UUID 待解析
- 流属性/单位：Mass / kg
- 数量规则：按批次计量转入湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 清洁器官材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`codex-cxc-52-2003`

###### 过程用水（`process_water`）

在本过程中进行清洗、漂洗或与产品接触的卫生操作时，记录供应的水。

- 选定流：过程用水；UUID 待解析
- 流属性/单位：Mass / kg
- 数量规则：计量、批次记录或有合理依据分配的用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg
  - 基准：每 1 kg 参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 清洁并分级的鱼肝或鱼子（`cleaned_graded_product`）

记录经修整、适用时清洗、分选和分级后的可售中间产品。

- 选定流：清洁并分级的食用鱼肝或鱼子中间产品；UUID 待解析
- 流属性/单位：Mass / kg
- 数量规则：按批次计量湿态产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 清洁器官材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 修整和分级残余物（`trimming_residues`）

按去向记录去除的膜、损伤材料和其他分选残余物。

- 选定流：声明的有机残余物或废物流；UUID 待解析
- 流属性/单位：Mass / kg
- 数量规则：按去向和批次计量湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 清洁器官材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residual_wastewater_records`
- 来源：`codex-cxc-52-2003`

###### 过程废水（`process_wastewater`）

记录离开前景控制的废水，包括计量或计算的水和产品损失，并保留处理去向。

- 选定流：过程废水；UUID 待解析
- 流属性/单位：Mass / kg
- 数量规则：计量排放量，或根据记录的用水投入与产品/保留水量计算平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual_wastewater_records`
- 来源：`codex-cxc-52-2003`

##### 基本流

### 过程：冷却和冷藏（`chilling_storage`）

#### 输入

##### 产品流

###### 清洁器官材料投入（`cleaned_material_input`）

记录进入温控处理的清洁并分级中间产品。

- 选定流：清洁并分级的食用鱼肝或鱼子中间产品；UUID 待解析
- 流属性/单位：Mass / kg
- 数量规则：按批次计量转入湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 冷藏器官材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`codex-cxc-52-2003`

###### 冷却用冰（`chilling_ice`）

记录跨越过程边界的外购或现场制冰；净参考质量不包含游离冰。

- 选定流：冰；UUID 待解析
- 流属性/单位：Mass / kg
- 数量规则：计量或批次记录的供冰量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_chain_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定用冰筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷却和冷藏用电（`cold_chain_electricity`）

记录计量电力，或记录共享制冷和冷库系统的成文分配。

- 选定流：电力，声明市场和电压；UUID 待解析
- 流属性/单位：Energy / kWh
- 数量规则：计量用量，或依据设备功率、运行时间和负荷份额计算分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cold_chain_records`
- 来源：`codex-cxc-52-2003`; `eu-pef-2021-2279`
- 数量范围：暂定冷链用电筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：10
  - 单位：kWh
  - 基准：每 1 kg 参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷藏鱼肝或鱼子中间产品（`chilled_product`）

记录转入包装的冷藏产品，并将储存时间和温控记录关联至批次。

- 选定流：冷藏食用鱼肝或鱼子中间产品；UUID 待解析
- 流属性/单位：Mass / kg
- 数量规则：按批次计量湿态产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 冷藏器官材料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_chain_records`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 融水和冷库冲洗水（`cold_chain_wastewater`）

按排放或处理路径记录融水和适用的冲洗废水，不在产品质量中包含游离水。

- 选定流：废水；UUID 待解析
- 流属性/单位：Mass / kg
- 数量规则：计量排放量或计算水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual_wastewater_records`
- 来源：`codex-cxc-52-2003`

##### 基本流

###### 排放到空气的制冷剂（`refrigerant_loss`）

当前景控制设备发生充注损失、维护或泄漏时，记录实际制冷剂类型和分配至本产品的损失。

- 选定流：声明的制冷剂空气排放；UUID 待解析
- 流属性/单位：Mass / kg
- 数量规则：根据库存核算、维护记录或计量损失以及成文分配计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-pef-2021-2279`

### 过程：包装和设施出厂门发运准备（`packing_dispatch`）

#### 输入

##### 产品流

###### 冷藏器官材料投入（`chilled_material_input`）

记录从冷藏转入包装的冷藏材料。

- 选定流：冷藏食用鱼肝或鱼子中间产品；UUID 待解析
- 流属性/单位：Mass / kg
- 数量规则：按批次计量转入湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`codex-cxc-52-2003`

###### 初级和次级包装（`packaging_materials`）

分别记录各包装材料，包括适用时可重复使用包装的损耗或周转次数分配。

- 选定流：按材料和形式声明的包装材料；UUID 待解析
- 流属性/单位：Mass / kg
- 数量规则：将采购和领用记录与包装批次产出核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定包装质量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考产品产出（`reference_product_output`）

参考产出是在设施出厂门放行的新鲜或冷藏鱼肝/鱼子净产品质量。

- 选定流：鱼肝和鱼子，新鲜或冷藏 `883637e3-14e1-4d82-bed8-5328706084ef`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流恰为 1 kg 净产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`unsd-cpc-3-0-21225`

##### 废物流

###### 包装边角料和损坏包装（`packaging_waste`）

按材料和处理路径分别记录包装边角料和拒收包装。

- 选定流：声明的包装废物流；UUID 待解析
- 流属性/单位：Mass / kg
- 数量规则：计量，或根据材料领用、产品所用包装和库存变化计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 共享前景操作 | 首先通过过程细分、单独计量和批次特定材料与能源记录避免分配，只要相关操作可以区分。 | `eu-pef-2021-2279` |
| `allocation_upstream_organs` | 产生鱼肝、鱼子和其他产出的整鱼或内脏投入 | 将上游数据集及其成文多功能性处理传递至分离点；纳入每项共产品和残余物，不得仅因器官过去价值较低就分配零负荷。 | `eu-pef-2021-2279` |
| `allocation_physical_then_other` | 剩余不可分离多功能性 | 当过程细分或系统扩展不适用时，采用反映因果关系的成文物理关系；若无可辩护物理关系，采用经济或其他合理关系，并报告价格、参考期和敏感性。 | `eu-pef-2021-2279` |
| `allocation_waste_status` | 残余物和废物产出 | 一致记录法律或合同废物状态、处理去向、抵扣和负荷；可销售或内部使用的产出不得被默认为废物。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `receipt_separation`; `washing_grading`; `chilling_storage`; `packing_dispatch` | 来料、中间产品、产品、共产品和残余物质量 | 称量和批次记录 | lot_id; species; origin; incoming_form; separation_location; gross_mass; net_mass; tare; output_mass; destination; timestamp | 校准秤和经核对的生产记录 | kg | 每批和每次物料移动 | 至少一个有代表性的连续 12 个月；季节性生产使用完整生产季 | 每个前景设施和相关生产线 | 按批次求和并归一化至净参考产出；不同物种和产品形态分开保留 | 校准记录、皮重检查、批次核对和签字生产记录 |
| `cp_water_records` | `washing_grading` | 过程用水 | 水表或批次记录 | meter_start; meter_end; batch_volume; product_contact_use; cleaning_use; lot_id | 优先分表计量；否则采用成文批次计量或有合理依据的分配 | kg or m3 | 每批，或每日记录并分配至批次 | 与生产数据相同期间 | 每个前景设施和水源 | 必要时用声明密度转换体积，按计量驱动因素分配并归一化至参考产出 | 水表校准、账单、分配依据和水源身份 |
| `cp_cold_chain_records` | `chilling_storage` | 冰、电力、停留时长和温控 | 电表、采购、设备和温度日志 | lot_id; ice_mass; electricity_meter; equipment_power; run_time; storage_start; storage_end; temperature_record; load_share | 计量记录以及关联批次的温度和停留时长日志 | kg, kWh, h or d | 每批；能源至少每日或按运行批次 | 与生产数据相同期间并覆盖季节温度变化 | 前景控制下的每个冷库、制冰和制冷系统 | 按计量运行时间和负荷分配共享能源；归一化至净参考产出 | 仪表记录、记录仪校准、设备清单和分配计算 |
| `cp_packaging_records` | `packing_dispatch` | 包装投入和包装废物 | 采购、领用、物料清单和库存记录 | material; format; unit_mass; units_issued; reusable_trips; stock_change; scrap_mass; lot_id | 称量代表性组件，并将领用量与包装批次核对 | kg | 每种包装配置；每月核对库存 | 与生产数据相同期间 | 每条包装线和供应商配置 | 按类型计算材料质量，采用成文可重复使用周转次数分配并归一化至净参考产出 | 秤校准、供应商规格、库存核对和周转次数证据 |
| `cp_residual_wastewater_records` | `receipt_separation`; `washing_grading`; `chilling_storage` | 残余物、废水和融水 | 称量、排放、处理和平衡记录 | lot_id; residual_type; wet_mass; water_input; discharge_volume; destination; treatment; solids_content | 优先直接计量；否则采用成文水量或质量平衡 | kg or m3 | 每批，或每日记录并分配至批次 | 与生产数据相同期间 | 每个排放点和残余物去向 | 各物流分开，必要时换算为质量并归一化至参考产出 | 秤或水表校准、转移联单、处理账单和平衡闭合 |
| `cp_refrigerant_records` | `chilling_storage` | 制冷剂空气损失 | 充注、采购和维护记录 | refrigerant_type; opening_charge; additions; recovery; closing_charge; equipment_id; service_date; allocation_driver | 年度库存核算并检查维护事件 | kg | 每次维护事件和年度核算 | 与生产数据相同年度期间 | 前景控制下的每个制冷系统 | 计算未回收损失，按成文设备服务或负荷驱动因素分配 | 技师记录、采购记录、回收文件和设备台账 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 将分配至本产品的期间或批次数量除以净参考产品产出；包装和游离冰不进入分母。 | 分配流量；净产品 kg | 每 1 kg 参考产品的流量 | `eu-pef-2021-2279` |
| `calc_mass_balance` | 每项材料转化 | 在同一称量基准下比较湿态投入质量与产品、共产品、残余物、废水携带固形物和成文库存变化；调查无法解释的差异。 | 投入和产出质量；库存变化；水分或沥水基准 | 批次质量平衡闭合和无法解释的差异 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `calc_shared_energy` | 共享制冷和公用工程 | 使用计量设备运行时间、负荷或其他因果驱动因素分配共享能源；披露驱动因素，并在分配影响显著时检验重要替代方案。 | 计量能源；运行时间；负荷；产品产量 | 分配至参考产品的能源 | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | 前景制冷 | 期初充注量加新增量减回收量再减期末充注量等于未回收损失；仅分配有记录的本产品服务份额。 | 充注库存和维护记录 | 每参考产品排放的 kg 制冷剂 | `eu-pef-2021-2279` |
| `calc_packaging_mass` | 包装 | 核实的组件质量乘以消耗数量，调整库存变化和边角料，可重复使用包装在归一化前按有证据的周转次数分摊。 | 组件质量；数量；库存变化；边角料；周转次数 | 每参考产品的 kg 包装材料和废物 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和来料 | 在批次层级保留物种或物种组、来源、器官类型、来料形态、分离位置、保藏状态、添加配料和包装身份。 | 批次、供应商、接收和产品规格记录；`unsd-cpc-3-0-21225`; `codex-cxc-52-2003` |
| `dq_temporal_representativeness` | 前景数据 | 全年生产使用有代表性的连续 12 个月；季节性生产使用完整生产季；解释异常停机和季节缺口。 | 生产日历、仪表覆盖和排除期间日志；`eu-pef-2021-2279` |
| `dq_technology_geography` | 每个前景设施 | 描述设备、制冷技术、水源、处理路径、设施地理位置和产能利用率；没有加权记录时，不得合并实质不同的路径。 | 设备台账、场址记录和加权计算；`eu-pef-2021-2279` |
| `dq_completeness` | 清单和过程图 | 核算每个必需或被触发的过程以及全部材料、能源、包装、废水、制冷剂、产品、共产品和残余物流；披露遗漏和截断应用。 | 质量和能源核对、采购记录、废物联单和截断披露；`eu-pef-2021-2279` |
| `dq_cold_chain` | 冷却和储存 | 保留批次关联的时间和温控证据，并识别温度偏离或拒收批次；不得仅依据产品名称推断冷藏状态合规。 | 温度日志、停留时长记录、校准和处置记录；`codex-cxc-52-2003` |
| `dq_allocation` | 多功能过程 | 报告分配点、全部产出、避免分配步骤、所选关系、因子、参考期，以及选择影响显著时的敏感性。 | 分配工作表和源记录；`eu-pef-2021-2279` |
| `dq_estimate_replacement` | 暂定推理估算范围 | 水、电力、冰和包装范围仅作为 QA 筛选；激活前以经评审来源证据或前景记录替代。 | 前景协议记录和评审处置 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | 产品身份 | 当产出不是新鲜或冷藏状态的食用鱼肝和/或鱼子，或存在排除的保藏方法或产品形态时失败。 | `unsd-cpc-3-0-21225` |
| `validate_reference_flow` | 参考流 | 除非参考产出恰为 1 kg 净产品，使用指定产品流、Mass 属性和单位组 UUID，并声明全部必需限定信息，否则失败。 | `unsd-cpc-3-0-21225` |
| `validate_boundary_processes` | 过程覆盖 | 缺少接收/检验、适用的分离、制备、冷却/冷藏、包装、废水/残余物处理或必需上游数据集衔接，且无成文范围理由时失败。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `validate_cold_chain_records` | 冷链 | 前景控制的冷却和储存缺少储存时长、温控方式、能源或用冰路径，或适用的制冷剂记录时失败。 | `codex-cxc-52-2003` |
| `validate_mass_balance` | 材料流 | 产品、共产品、残余物、废物和库存变化记录无法按一致湿质量基准与来料核对，或未调查和披露无法解释的差异时失败。 | `eu-pef-2021-2279` |
| `validate_allocation` | 多功能性 | 多功能分离或共享操作缺少避免分配分析、完整产出清单、所选分配依据、因子，以及影响显著时的敏感性时失败。 | `eu-pef-2021-2279` |
| `validate_data_quality` | 数据集生产 | 缺少第 8 节要求的时间、地理、技术、完整性、校准或来源可追溯证据，或未披露重大缺口时失败。 | `eu-pef-2021-2279` |
| `validate_reasoned_estimates` | 暂定范围 | 标记每项保留的 `reasoned_estimate` 供评审替代；不得将其表述为行业基准或有来源支持的允许范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经评审后可发布为 secondary_dataset 和/或 background_dataset 的前景生产数据包 |
| downstream_use | 为新鲜或冷藏鱼肝/鱼子供应构建产品流、单元过程、聚合过程和 lifecyclemodel 投影 |
| allowed_use | 产品身份、起始状态、生产路径、地理、技术、时间段、分配和保藏状态与声明数据集相匹配的研究 |
| excluded_use | 未明确扩展范围的冷冻、盐渍、烟熏、熟制、罐藏、发酵、加工鱼子酱、油类、整鱼、鱼肉、零售、烹饪或消费建模 |
| required_metadata | PCR id 和版本；物种/来源；鱼肝/鱼子形态；来料状态；分离位置；设施和地理；技术；报告期；净质量基准；冷藏时长；温控路径；包装；上游数据集；分配；截断；数据源 |
| required_quality_disclosure | 协议覆盖；计量值与计算值；未解析 UUID；保留的推理估算；质量平衡闭合；数据缺口；分配敏感性；冷链记录；代表性和不确定性局限 |
| update_trigger | 物种组合、来源、来料形态、分离点、过程路径、制冷系统、储存时长、包装、分配、法规、来源证据或前景数据质量发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21225` | official_guidance | 联合国统计司，CPC Version 3.0，子类 21225，Fish livers and roes, fresh or chilled。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/21225（检索于 2026-08-11） | 产品类别边界、保藏状态和分类语境 |
| `codex-cxc-52-2003` | standard | FAO/WHO Codex Alimentarius，CXC 52-2003，Code of Practice for Fish and Fishery Products，2019 edition。https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/（检索于 2026-08-11） | 过程分解、接收和加工卫生、冷却、冷藏、时间/温度控制和批次质量记录 |
| `eu-pef-2021-2279` | official_guidance | European Commission，Recommendation (EU) 2021/2279 on Environmental Footprint methods。https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A02021H2279-20211230（检索于 2026-08-11） | 生命周期边界衔接、多功能性层级、企业特定数据、数据质量、截断和报告规则 |
