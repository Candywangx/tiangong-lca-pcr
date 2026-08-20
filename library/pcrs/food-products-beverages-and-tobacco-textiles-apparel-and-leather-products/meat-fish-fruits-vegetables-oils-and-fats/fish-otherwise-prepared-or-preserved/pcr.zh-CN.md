---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-otherwise-prepared-or-preserved
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他方法制作或保藏的鱼类产品

## 1. 范围与适用性

本 PCR 适用于未由更具体鱼类产品 PCR 表示、采用其他方法制作或保藏的鱼类产品。代表性产品为冷冻鱼糜，即经绞碎、水洗、脱水并稳定化，供后续食品制造使用的鱼蛋白中间产品。前景边界涵盖鱼类和配料接收与储存、鱼体前处理与采肉、反复水洗与脱水、精制、最终脱水、与申报辅料混合、包装、冻结、金属检测、冻藏以及出厂准备。

仅当某种其他方法制作或保藏的鱼类产品以前景数据包中的实际制作或保藏步骤替代代表性路线，并申报产品形态、鱼种、配方、保藏方法、热处理、储存状态及包装时，本 PCR 才适用于该产品。本 PCR 不包括鱼子酱及鱼子酱代用品、未经过鱼糜水洗和稳定化路线而直接销售的鱼片或碎鱼肉、甲壳类或软体动物制品，以及由鱼糜进一步制成的成型仿海鲜等下游食品。捕捞或养殖、外购配料与包装生产、工厂门后配送、零售、烹饪、消费及生命末期均不属于前景边界；研究纳入这些阶段时，应链接相应上游或下游数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-otherwise-prepared-or-preserved |
| classification_refs | CPC 3.0: 21242, Fish, otherwise prepared or preserved |
| covered_products | 冷冻鱼糜，以及在申报实际路线和市场状态后纳入的其他方法制作或保藏的鱼类产品 |
| excluded_products | 鱼子酱及鱼子酱代用品；未采用鱼糜路线的普通鱼片或碎鱼肉；甲壳类或软体动物制品；由鱼糜进一步制成的成型、熟制、调味或仿海鲜产品 |
| representative_product | 冷冻鱼糜 |
| production_route | 鱼类接收与温控储存；前处理与采肉；反复水洗与脱水；精制；最终脱水；与申报辅料混合；包装；冻结；金属检测；冻藏与出厂 |
| market_state | 制造设施工厂门处的冷冻、已包装食品中间原料 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供作为后续食品制造中间鱼蛋白原料的冷冻鱼糜 |
| How much | 1 kg 冷冻鱼糜净质量，不含包装 |
| How well | 符合所申报的鱼种或鱼种组合、配方、添加剂体系、水分、凝胶强度或商业等级、污染物与食品安全控制、包装配置及冷冻产品规范 |
| How long or cycle | 工厂门处的一个生产批次；出厂前所表示的冻藏时长另行申报 |
| reference_flow_link | Surimi `e6684e76-c555-40b8-9a7f-ecb12f574320` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净质量 |
| 参考产品流 | 鱼糜 `e6684e76-c555-40b8-9a7f-ecb12f574320` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 鱼种或鱼种组合；原料鱼状态；产品形态；冷冻或其他保藏状态；配方和辅料；水分基准；凝胶强度或商业等级；净质量和包装配置；设施地理位置；生产期；冻藏时长；分配方法 |

构建前景数据包时，`必需限定信息` 中的每一项均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中明确申报。缺少限定信息的数据包视为参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 鱼糜参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将清单归一化为申报工厂门处恰好 1 kg 合格鱼糜净输出。 |
| `net_mass_excludes_packaging` | 参考产品和已包装输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 产品净质量应与初级、次级和运输包装质量分别计量；包装作为独立产品投入和废物输出记录。 |
| `wet_mass_basis` | 鱼类、水洗鱼肉、残渣、配料、产品和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按接收或排出时的湿基记录质量，并保留比较不同状态所需的水分或固形物测量。 |
| `energy_conversion` | 电力和燃料 | 与所选流相适用的 Energy 属性 | kWh 或 MJ | 保留计量单位和换算因子；没有明确换算时不得混合交付电力、燃料低位热值和热能输出。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 鱼类以及所有外购配料和包装在鱼糜制造设施接收，且供应商身份、数量、产品状态、来源和运输交接均已有记录。 |
| starting_condition_role | factory_gate_input |
| product_classification_scope | 冷冻鱼糜代表 CPC 3.0 代码 21242；其他方法制作或保藏的鱼类产品仅在申报其实际路线和限定信息后适用。 |
| recursive_input_rule | 外购鱼糜或本 PCR 范围内的其他产品作为可见技术圈投入并链接上游数据集，不在本前景系统内递归重复制造。 |
| upstream_dataset_requirement | 鱼类生产、捕捞或养殖、配料、包装、电力、燃料、制冷剂、供水和进厂运输均应链接与地理和技术相适配的上游数据集。 |
| disclosure | 申报鱼种与来源、原料鱼状态、设施地理位置、路线变体、保藏状态、报告期、冻藏时长、同类别投入处理、截断和分配选择。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_route` | 代表性冷冻鱼糜制造 | 纳入从原料接收，经前处理、采肉、反复水洗与脱水、精制、最终脱水、配料混合、包装、冻结、金属检测、冻藏直至出厂准备的实际设施步骤。 | `codex-cxc-52-2003` |
| `boundary_supporting_operations` | 前景辅助活动 | 纳入为所表示生产服务的实测清洗消毒、工艺供水、交接前废水处理、制冷、现场能源使用、包装损失和鱼类残渣处理。 | `codex-cxc-52-2003` |
| `boundary_upstream_links` | 外购投入 | 将外购鱼类、配料、包装、公用工程、制冷剂和进厂运输作为产品投入链接上游数据集，不得将其上游负荷视为零。 | `ghg-protocol-product-2011` |
| `boundary_route_variants` | 非代表性产品或路线 | 以实际制作或保藏操作替换不适用的代表性步骤，并披露每项实质性删除、增加和保藏状态差异。 | `codex-cxc-52-2003` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `surimi_manufacturing` | 冷冻鱼糜制造与工厂门冻藏 | required | 代表性冷冻鱼糜路线始终适用 | 将接收鱼类转化为已包装、已冷冻且可出厂的鱼糜，并记录公用工程、残渣、废水、包装和制冷剂损失 | 1 kg 冷冻鱼糜净输出 |

### 过程：冷冻鱼糜制造与工厂门冻藏（`surimi_manufacturing`）

#### 输入

##### 产品流

###### 接收合格的鱼类原料（`accepted_fish_input`）

记录经接收检验后进入所表示制造路线的鱼或鱼肉湿质量。记录中保留鱼种、捕捞或养殖来源、供应商、鲜鱼或冻鱼状态和批次身份。

- 选定流：鱼类原料；准确 Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：进入生产批次的实测合格湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷冻鱼糜净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定合格鱼投入 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：10
  - 单位：kg/kg 冷冻鱼糜净输出
  - 基准：每 1 kg 冷冻鱼糜净输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 工艺和清洗用水（`process_water_input`）

记录用于水洗与脱水循环、设备与区域清洗、配料制备及其他前景用途的计量或核算供水量。在仪表或批次记录允许时，将工艺用水与消毒清洗用水分开。

- 选定流：工艺用水；准确 Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：所表示生产及辅助操作的实测供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷冻鱼糜净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定总用水 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：100
  - 单位：kg/kg 冷冻鱼糜净输出
  - 基准：每 1 kg 冷冻鱼糜净输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 辅料和配方配料（`ingredient_input`）

按获批配方以及实际领料或称量记录，分别记录各类抗冻保护剂、pH 调节剂、质构剂、盐、糖、多元醇、磷酸盐或其他配方配料。

- 选定流：各配方配料；准确 Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：各配料实测领用量减去有记录的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷冻鱼糜净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input_records`
- 来源：`codex-cxc-52-2003`

###### 初级、次级和运输包装（`packaging_input`）

按材料和组件类型分别记录包装，采用采购、领用或包装线计数记录以及实测组件质量。

- 选定流：按聚合物、纸、金属或托盘类型区分的包装材料；准确 Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：组件数量乘以核实的组件质量，并与包装领用量核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷冻鱼糜净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定包装 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：1
  - 单位：kg/kg 冷冻鱼糜净输出
  - 基准：每 1 kg 冷冻鱼糜净输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购电力（`electricity_input`）

记录采肉、水洗与脱水、精制、混合、包装、冻结、金属检测、冻藏、废水处理、清洗以及已分配设施服务使用的电力。

- 选定流：与设施地理位置相适配的市场电力；准确 Tiangong UUID 待审
- 流属性/单位：Energy / kWh
- 数量规则：分配至所表示生产期的计量用量或经核对的设备用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷冻鱼糜净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 数量范围：暂定电力 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：20
  - 单位：kWh/kg 冷冻鱼糜净输出
  - 基准：每 1 kg 冷冻鱼糜净输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制冷剂补充量（`refrigerant_makeup_input`）

记录报告期内向冻结和冷藏设备充注的制冷剂，并识别制冷剂物质。

- 选定流：设施所用制冷剂物质；准确 Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：与维修及库存记录核对的制冷剂实测补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：报告期内每 1 kg 冷冻鱼糜净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`

##### 废物流

代表性路线预期无废物投入。如接收外部产生的鱼类物料或废水进行处理，应将其作为独立废物投入记录，并说明来源和处理义务。

##### 基本流

未规定直接基本流投入。只有地下水、地表水或其他直接资源提取在设施处跨越环境至前景边界时才予以记录。

#### 输出

##### 产品流

###### 工厂门处的冷冻鱼糜（`surimi_output`）

参考输出为经过所申报工厂门冻藏期后、可出厂的合格已包装冷冻鱼糜。

- 选定流：鱼糜 `e6684e76-c555-40b8-9a7f-ecb12f574320`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰好为 1 kg 净质量；归一化前保留实测批次总输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 净质量参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 鱼体前处理与精制残渣（`fish_residue_output`）

按去向记录鱼头、内脏、骨、皮、鳞、暗色肉、精制剔除物、不溶性固形物及其他分离鱼类物料。已销售物料作为共产品而非废物处理，并进入分配决策。

- 选定流：按物理形态和处理路线区分的鱼类加工残渣；准确 Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：按各处理或回收路线实测或以质量平衡计算的湿质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷冻鱼糜净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residue_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定鱼类残渣 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 冷冻鱼糜净输出
  - 基准：每 1 kg 冷冻鱼糜净输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 工艺废水（`wastewater_output`）

在水洗、脱水、清洗消毒、解冻及其他湿法操作废水离开前景过程进入厂内或厂外处理时记录。保留实测体积或质量以及可得的固形物或有机负荷数据。

- 选定流：送往申报处理路线的鱼类加工废水；准确 Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或与用水投入和产品保留水分核对的水量平衡估算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷冻鱼糜净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定废水 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 冷冻鱼糜净输出
  - 基准：每 1 kg 冷冻鱼糜净输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装剔除物和其他固体废物（`packaging_waste_output`）

按材料和去向分别记录剔除的包装、标签、纸箱、内衬、托盘和其他非鱼类固体废物。

- 选定流：按材料和处理路线区分的包装废物；准确 Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：实测出厂质量或经核实的计数转质量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷冻鱼糜净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_waste_records`
- 数量范围：暂定包装废物 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 冷冻鱼糜净输出
  - 基准：每 1 kg 冷冻鱼糜净输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 向空气逸散的制冷剂排放（`refrigerant_emission_output`）

根据库存变动、补充、移除和有记录的回收量计算每种制冷剂的直接排放；已知安装物质时不得用通用制冷剂身份代替。

- 选定流：排放到空气的制冷剂物质；准确 Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：报告期制冷剂质量平衡，并分配至所表示生产
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：报告期内每 1 kg 冷冻鱼糜净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 数量范围：暂定逸散排放 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 冷冻鱼糜净输出
  - 基准：每 1 kg 冷冻鱼糜净输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 可独立计量的生产线、批次或操作 | 在可行时，通过细分独立计量的生产线、批次、储存期和处理操作避免分配。 | `ghg-protocol-product-2011` |
| `allocation_physical_relation` | 无法避免的共享负荷和共产品 | 无法细分时，采用能反映投入和排放随鱼糜及共产品输出变化的有文件依据的物理关系；仅在质量属于相关因果关系时使用实测湿质量。 | `ghg-protocol-product-2011` |
| `allocation_economic_fallback` | 缺少可辩护物理关系的共产品 | 无可辩护物理关系时，采用在价格、数量、地理和报告期上对齐的记录进行经济分配，并披露对所选期间的敏感性。 | `ghg-protocol-product-2011` |
| `allocation_waste_status` | 鱼类残渣、回收固形物和其他输出 | 只有持有人将输出丢弃且模型中没有产品收入或预期有益用途时才将其归类为废物；否则作为共产品并应用分配层级。 | `ghg-protocol-product-2011` |
| `allocation_consistency` | 所有前景产品和残渣 | 对类似投入与输出一致应用同一分配方法，归一化前报告分配因子，并保留未分配的质量和能源核对。 | `ghg-protocol-product-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_input_records` | `surimi_manufacturing` | 合格鱼类和配方配料 | 接收、称量、领料、退料、配方和批次记录 | date; lot_id; supplier; species; origin; state; ingredient_id; gross_mass; tare_mass; returned_mass; unit | 经校准秤具和库存核对 | kg | 每批来料和生产批次 | 所表示完整生产期 | 所有表示的接收和配料点 | 按材料和批次汇总合格量或净领用量，再按净输出归一化 | 校准记录；供应商和批次可追溯性；配方授权；核对记录 |
| `cp_water_records` | `surimi_manufacturing` | 工艺和清洗用水 | 仪表、批次和清洗消毒记录 | meter_id; start_reading; end_reading; batch_id; use_area; unit | 分表读数或经核对的设施水量平衡 | kg 或 m3 | 可计量时按批次，否则至少每月 | 所表示完整生产期 | 所有表示的工艺和清洗消毒用途 | 必要时采用申报密度换算体积，扣除排除用途，并按净输出归一化 | 仪表校准；覆盖图；平衡核对 |
| `cp_packaging_records` | `surimi_manufacturing` | 包装投入 | 包装线计数、领用、退库和组件质量记录 | component_id; material; count_used; count_returned; sampled_component_mass; unit | 经核实的计数转质量计算并与仓储核对 | kg | 每种包装配置和批次 | 所表示完整生产期 | 所有表示的包装线 | 净组件数量乘以核实组件质量并按材料汇总 | 抽样记录；秤具校准；领退料核对 |
| `cp_energy_records` | `surimi_manufacturing` | 电力和其他能源 | 公用工程仪表、账单、分表、设备运行和生产记录 | meter_id; opening; closing; unit; period; equipment; runtime; output_mass | 优先直接分表计量，否则采用有文件依据的工程或生产分配 | kWh 或 MJ | 连续或每月，并与生产对齐 | 包括申报冻藏在内的所表示完整生产期 | 所有表示的加工、制冷、储存、清洗消毒和处理操作 | 扣除排除负荷，按第 7 节分配共享负荷，明确换算单位，并按净输出归一化 | 仪表校准；账单；负荷清单；核对记录 |
| `cp_product_output_records` | `surimi_manufacturing` | 合格鱼糜输出 | 批次、复称、等级、水分、放行、储存和出厂记录 | batch_id; product_id; species; formulation; gross_mass; packaging_mass; net_mass; moisture; grade; freeze_time; storage_duration; release_status | 经校准复称和质量放行系统 | kg | 每批 | 所表示完整生产期 | 所有表示的输出和冷藏位置 | 按产品汇总已放行净质量，排除包装和不合格品，并保留归一化前总量 | 秤具校准；质量放行；批次可追溯性；冷链日志 |
| `cp_residue_records` | `surimi_manufacturing` | 鱼类残渣和回收固形物 | 容器称重、出厂单、回收记录和质量平衡 | batch_id; residue_type; wet_mass; moisture_or_solids; destination; revenue_status; unit | 优先直接称量；无法直接测量时采用经核对质量平衡 | kg | 每批或每次出厂 | 所表示完整生产期 | 所有前处理、水洗、精制和废水固形物点 | 按残渣类型和去向汇总，再按净输出归一化 | 秤具校准；出厂单；接收方记录；质量平衡闭合 |
| `cp_wastewater_records` | `surimi_manufacturing` | 工艺废水 | 排放仪表、储罐、实验室和处理记录 | period; discharge_mass_or_volume; solids; organic_load; destination; treatment_stage; unit | 直接排放计量或带抽样的有文件依据水量平衡 | kg 或 m3 | 连续、按批或代表性抽样 | 所表示完整生产期 | 所有表示的排放点 | 按处理去向汇总，必要时换算体积，并按净输出归一化 | 仪表校准；抽样计划；实验室结果；水量平衡闭合 |
| `cp_packaging_waste_records` | `surimi_manufacturing` | 包装及其他固体废物 | 废物称重、计数、出厂单和处理记录 | period; material; count; component_mass; waste_mass; destination; unit | 直接称量或经核实的计数转质量计算 | kg | 每批或每次出厂 | 所表示完整生产期 | 所有表示的包装和储存区域 | 按材料和去向汇总，再按净输出归一化 | 秤具校准；出厂单；计数转质量抽样 |
| `cp_refrigerant_records` | `surimi_manufacturing` | 制冷剂补充量和排放 | 库存、采购、充注、回收、处置和维修记录 | refrigerant_id; opening_stock; purchases; additions; recoveries; disposals; closing_stock; equipment_id; period; unit | 分物质制冷剂质量平衡 | kg | 每次维修事件和报告期末 | 所表示完整生产期 | 所有表示的冻结和冷藏系统 | 按物质计算损失，按第 7 节分配共享系统，并按净输出归一化 | 维修单；发票；库存核对；设备台账 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_surimi_mass` | 已包装鱼糜输出 | net_surimi_mass = gross_packaged_mass - packaging_mass - nonconforming_product_mass | 包装后总质量；包装质量；不合格产品质量 | kg 合格鱼糜净质量 |  |
| `calc_normalized_amount` | 每个清单行 | normalized_amount = allocated_period_or_batch_amount / conforming_net_surimi_mass | 已分配的行数量；合格鱼糜净质量 | 行单位/kg 鱼糜净质量 |  |
| `calc_wet_mass_balance` | 制造批次或报告期 | mass_balance_gap = fish + water + ingredients + other mass inputs - surimi - residues - wastewater - other mass outputs，各项采用对齐的湿基边界 | 采集的投入与输出质量；库存变化；水分状态说明 | 归一化前的绝对及百分比质量平衡差 |  |
| `calc_packaging_mass` | 包装投入和废物 | packaging_mass = verified_component_count x sampled_component_mass，按各材料和组件计算 | 组件数量；抽样组件质量；退回和剔除数量 | 各材料包装 kg |  |
| `calc_refrigerant_loss` | 冻结和冷藏系统 | refrigerant_loss = opening_stock + purchases - closing_stock - documented_inventory_increase - recovered_or_disposed_mass | 分物质库存与维修记录 | 分配前各物质制冷剂排放 kg |  |
| `calc_allocation_factor` | 共享操作和共产品 | 采用对齐的数量以及适用时的价格，计算并披露所选物理或经济分配因子；同一分配集合内所有因子之和应为一 | 细分证据；共产品数量；因果关系或价格记录 | 无量纲分配因子 | `ghg-protocol-product-2011` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_primary_foreground` | 所有前景操作 | 对运营方控制的过程使用设施特定一手记录；记录任何二手估算、采用原因及替换优先级。 | `ghg-protocol-product-2011`；源记录和计算工作簿 |
| `dq_representativeness` | 所有数据和链接数据集 | 根据所申报的鱼种、路线、设施、设备、报告期、电力供应和储存时长评估技术、地理和时间代表性。 | `ghg-protocol-product-2011`；代表性评估 |
| `dq_traceability` | 鱼类、配料、包装和输出 | 保留供应商、批次、鱼种、来源、配方、放行和去向链接，使每个汇总值均可复现。 | `codex-cxc-52-2003`；接收、批次、配方和出厂记录 |
| `dq_food_safety_controls` | 从接收到冷冻出厂 | 保留适用于所表示路线的设施特定 HACCP 流程图、危害分析、关键控制和纠偏记录、清洗消毒记录、金属检测检查及产品放行证据。 | `codex-cxc-52-2003`；HACCP 和放行记录 |
| `dq_temperature_control` | 鱼类、水洗鱼肉、混合、冻结、冻藏和出厂 | 保留相对于设施申报产品规范及适用食品安全限值的时间—温度记录与偏差，并纳入所表示冻藏时长。 | `codex-cxc-52-2003`；经校准温度日志和纠偏措施 |
| `dq_mass_balance` | 每个批次和汇总期 | 在一致湿基和净质量基准上核对产品、残渣、废水、配料、包装和库存变化记录；数据发布前调查实质性差异。 | 质量平衡工作簿；秤具和仪表校准记录 |
| `dq_completeness` | 完整前景清单 | 记录每个被排除前景流，并证明被排除操作未被无声转移至未链接的上游或下游阶段。 | 完整性检查表；过程图；截断登记表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 确认输出采用 Surimi `e6684e76-c555-40b8-9a7f-ecb12f574320`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`，且净质量恰好为 1 kg 并不含包装。 |  |
| `validate_qualifiers` | 数据集身份 | 缺少任何鱼种、原料鱼状态、产品形态、保藏状态、配方、水分基准、等级、包装、地理、期间、储存时长或分配限定信息时，完整性校验失败。 | `codex-cxc-52-2003` |
| `validate_route_completeness` | 代表性过程图 | 确认每个适用的接收、前处理、采肉、水洗与脱水、精制、混合、包装、冻结、金属检测、储存和出厂步骤均已纳入，或明确说明不适用理由。 | `codex-cxc-52-2003` |
| `validate_collection_links` | 采集和计算行 | 确认每个前景记录或计算行均链接已实施的采集协议，并保留原始证据和单位换算。 | `ghg-protocol-product-2011` |
| `validate_mass_balance` | 批次和报告期 | 确认在归一化前完成湿质量和包装核对，并调查和披露无法解释的差异。 |  |
| `validate_allocation` | 共享操作和共产品 | 确认首先考虑过程细分，所选物理或经济关系有依据，因子之和为一，废物与共产品状态有记录，且对类似流一致应用该方法。 | `ghg-protocol-product-2011` |
| `validate_cold_chain_and_haccp` | 产品质量与食品安全 | 确认设施特定 HACCP、清洗消毒、金属检测、时间—温度、偏差、纠偏和放行记录覆盖所表示生产及冻藏期。 | `codex-cxc-52-2003` |
| `validate_estimate_disclosure` | 暂定 QA 范围和二手估算 | 确认每个 `reasoned_estimate` 均标记为暂定值，且未被表述为行业基准或有来源支持的接受限值。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 用于冷冻鱼糜在制造设施工厂门处的背景或前景链接建模，以及后续食品制造系统 |
| allowed_use | 产品、路线、地理、技术、报告期、冻藏时长、分配方法和质量要求与数据集元数据相容的研究 |
| excluded_use | 未链接上游数据集的捕捞或养殖生产；替代鱼子酱、甲壳类、软体动物、普通鱼片或碎鱼肉或下游鱼糜制品；零售或消费者阶段声明；仅凭 LCA 数据集进行食品安全认证 |
| required_metadata | PCR id；产品和流 UUID；CPC 参考；鱼种与来源；原料鱼状态；配方与添加剂；水分和等级；净质量与包装；设施地理位置；技术；生产期；冻藏时长；边界；上游链接数据集；分配；数据源；QA 状态 |
| required_quality_disclosure | 一手数据占比和缺口；仪表和秤具覆盖；质量平衡结果；路线偏差；时间、地理和技术代表性；食品安全与冷链记录覆盖；暂定估算；分配敏感性；未解决流身份 |
| update_trigger | 鱼种或来源、配方、产品状态、加工或制冷技术、设施地理位置、能源供应、包装、储存时长、共产品市场、分配基准、法规要求或实质性前景绩效发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, FAO/WHO 官方文本, https://www.fao.org/docrep/pdf/011/a1553e/a1553e00.pdf, 访问日期 2026-08-11 | 冷冻鱼糜定义；典型过程分解；原料处理；水洗与脱水；精制；配料混合；包装；冻结；金属检测；冻藏；温度控制；HACCP 和食品安全记录 |
| `ghg-protocol-product-2011` | standard | World Resources Institute and World Business Council for Sustainable Development, Product Life Cycle Accounting and Reporting Standard, 2011, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf, 访问日期 2026-08-11 | 前景一手数据要求；技术、地理和时间数据质量评估；系统边界完整性；细分和物理/经济分配层级；分配披露与一致性 |
