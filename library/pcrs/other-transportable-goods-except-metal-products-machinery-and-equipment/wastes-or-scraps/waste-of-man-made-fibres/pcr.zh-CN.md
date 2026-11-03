---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-of-man-made-fibres
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 供回收的未开松 PET 织边废纱

## 1. 范围与适用性

本方法限定一个残余材料边界：机械织造时在织边实际分离、源头隔离、干法收集、按组成分选并包装，首次验收为未开松回收原料的已知单一聚合物 PET 连续长丝废纱。纤维组分仅为 PET；继承的供应商纺丝油剂和实际水分仍属于整份供货材料，须另设组成子账。本方法不生产原生纤维或再生纤维。所选分支从外购未染色、未上浆 PET 长丝纱开始，不在现场成纱、上浆、退浆、清洗废纱、染色、加热干燥、熔融、撕扯开松或化学再生。不能假定所有聚酯废料均属此分支。

Getzner 证实真实聚酯织边废料的产生与收集；Nam Phong 区分普通、上浆和水喷织造废纱，并说明分选；Hi-Sing 描述通常清洁、未染色的织边废纱供货形态。JRC 区分 PET 与 PBT/PTT，说明纱线到织造的工序以及润滑、上浆反例。这些资料构成透明技术综合，不表示同一 SKU、同一工厂、已经证明无油剂或存在默认工业清单。Hi-Sing 的“通常”描述不能证明实际批次。外购纱证书和源工序记录必须确认所选 PET、处理状态及干法分支。[getzner-polyester-2024; namphong-yarn-waste; hising-polyester-selvedge; jrc-textiles-2023]

完整 CPC 3.0 解释性说明中的 39216 只有标题，没有规定必须采用的工序、水分、组成或分配规则。本 PCR 是该类别内较窄的候选方法，没有正向映射决定。排除棉、羊毛、丝废料及混纺、合格纱线、原生纤维、瓶片、颗粒、布片、旧衣物和已经开松或再生的纤维。羊毛落毛属于 26140，是另一产品和方法。[unsd-cpc-2025]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-of-man-made-fibres |
| classification_refs | CPC 3.0:39216 人造纤维废料；较窄候选方法 |
| covered_products | 所声明干法机械织造分支产生的未开松 PET 长丝织边废纱；首次验收的回收原料批次 |
| excluded_products | 其他纤维聚合物；混纺；棉或羊毛废料及落毛；短纤软废料；合格纱线；布片；PET 瓶、瓶片或颗粒；熔融、开松、梳理或化学再生产物 |
| representative_product | 一批组成明确、保留已声明供应商油剂和实测验收水分的未染色 PET 长丝织边废纱 |
| production_route | 外购长丝纱 → 接收、整经和穿综穿筘 → 机械织造及织边分离 → 专属收集 → 干法分选和检查 → 包装 → 首次原料验收 → 按原批次追踪仓储搬运 |
| market_state | 按明确回收方接受规范包装的未开松、干法处理废纱；干法处理不等于绝干或无油剂 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供组成明确的未开松 PET 织边废纱回收原料 |
| How much | 1 kg 新增首次验收废纱净质量，不含包装 |
| How well | 满足实际回收方对 PET 身份、未开松形态、浆料染整油剂状态、水分和杂质的规范；不提供通用数值限值 |
| How long or cycle | 一个声明的首次放行批次；后续发运或复验不产生新产量 |
| reference_flow_link | accepted_pet_waste |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 人造纤维废料 `f814e607-ba2f-4727-b842-e32eff57e4d1` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | PET 聚合物证据及纤维比例; 源工厂和织造工序; 长丝结构及纱线等级; 原生或再生来源及供应商路线; 未染色和未上浆确认; 供应商油剂身份及实测含量; 水分方法和称量状态; 未开松废纱形态; 异物分析和验收限值; 源头收集及分选路线; 回收方接受规范和拟用路线; 首次放行批次时间及唯一标识; 净质量和包装皮重; 场址和报告期; 用电国家和电压; 分配驱动与输出状态; 在制品成品数量及继承交换向量; 实物发运总量和外部退回; 逐包装组件台账; 未解决 UUID 和供方限制 |

全部必需限定信息须保存在实际数据包元数据、参考流备注或等效完整产品上下文中。缺失限定信息属于适用性不完整，不能假定为普通状态。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q 为 cp_release 中分选及包装后唯一新增正向首次放行净质量之和。包含实际水分及继承油剂，扣除全部包装皮重。复验、改级、库位转移、发运及原已放行批次退回均不增加 Q。 |
| whole_supply | pet_yarn | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 整份供货纱线只采购和领用一次。检测所得 PET、供应商油剂和载水是组成子账，不能再次列作采购投入。另购助剂必须单列原子流。 |
| unit_conversion | all inventory rows | Original measured property | kg; MJ; m3 | 归属前先换算原始数量：kWh 按 3.6 换为 MJ；真实速率只按实测时间区间积分一次。已积分体积不再乘时间。体积换质量须有对应物质、测量状态下的独立密度证据，不把水密度用于油或空气，不猜每件千克数。 |
| physical_components | physical ledgers | Mass and actual composition | kg | 分别核对整份质量与 PET、水和真实油剂组分。本机械路线不假定反应水或聚合物转化。游离水、相变和继承水分不同于化学结合水。不能以一个残差拟合两个未知损失，不能将 COD/VOC 指标当成特定化学物质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 源织造场址门内的整份外购 PET 长丝纱，包含实际油剂、水分和入厂包装；沿源残余物流追踪至同一声明的验收状态 |
| starting_condition_role | 真实源工序投入，不是外购已经制好的废纱原料 |
| product_classification_scope | CPC 3.0:39216 内较窄的未开松 PET 织造废纱 |
| recursive_input_rule | 同类内部废纱及返工继承原逐交换负荷向量并内部抵消。外来同类废纱不属于本源头产生分支，除非重建来源及继承负荷且不重复源制造。 |
| upstream_dataset_requirement | 每项外购交换只选一个边界、聚合物、油剂、路线、地域及时间相符的上游供方；纱线制造上游只纳入一次。另加纸芯或运输前，先说明供方数据是否已包含。 |
| disclosure | 披露源织造、分离、分选、验收、在制品成品及放行后服务各门、输出状态和上游排除项；前景完整不等于从摇篮到大门完整。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | p_source; p_prepare | 纳入源纱接收、整经和上机准备、真实织造与织边切除分离、专属收集、分选检查及实际包装，同时追踪源织物和废纱。不能以外购废纱再包装模型代替此链。 | jrc-textiles-2023; getzner-polyester-2024; namphong-yarn-waste |
| boundary_branch | product and route | 仅适用于来源确认的所声明未染色、未上浆、未开松 PET 长丝废纱分支。带浆、染色、其他聚合物、水喷湿废料、布片和开松纤维须另审适用性。缺少条件证据属于未解决，不能记为不存在。 | jrc-textiles-2023; namphong-yarn-waste; hising-polyester-selvedge |
| boundary_completeness | all processes | 保留失败和零产出运行、启停、空转、清理、换批、不合格品及实际返工。在声称完整前，将每项实际存在的投入、废物或排放物种以明确名称和协议新增为独立原子行。不得使用笼统其他投入产出或自动零值豁免。 | jrc-textiles-2023 |
| boundary_utilities | electricity; air; water; heat | 每种公用工程只选一个供方。外购压缩空气只纳入一次；现场制气则分别采集压缩机电力及真实冷却水、油和冷凝液交换，抵消内部空气，不另加外购空气负荷。不假定锅炉、蒸汽、燃料燃烧、热回送或冷凝水回送。真实对外热水回送必须单列产品回送，并说明状态、焓及供方约定。 | jrc-textiles-2023 |
| boundary_stock | Q; WIP; FG; V | Q 是新增首次放行产量。期末成品已含尚未发出的 Q，不能再把期末成品加到 Q 作为另一制造输出。保持期初成品 + Q + 收到外部退回 = 期末成品 + 实物发运总量 V + 真实成品损失及转出。退回旧批次及原发运冲回保留原批次负荷；只有真实增量修复增加负荷，不新增产量。 |  |
| boundary_services | p_supply | 首次放行后仓储、搬运、装载及真实重包装按原批次 Qc 保留未除的服务账 H。在该批次唯一归一化前合入其清单。H 不在此处相除，不能因为旧批当前发运就归给当前 Q，也不能产生第二参考输出。合并各门时抵消内部已放行材料转移。 |  |
| boundary_native | UUID-bearing rows | 参考 UUID 是处理未指定、没有 PET CAS、等级、水分或油剂保证的宽泛产品流，仅识别人造纤维废料；第3节及 accepted_pet_waste 中的 PET、来源、未开松及供货限制仍全部必需。PET 不合格废物流虽归在塑料类别，原始说明也明确包含纺织品；这种分类差异不能使瓶片或树脂变得适用。 |  |

## 6. 过程清单结构

以下卡片均以同一新增首次放行参考批次的 1 kg 表达。原始源工序、准备和供应物理平衡独立保留，绝不按负荷份额缩放。源卡片表达可归属源清单；T 卡片及 source_fabric 表达实物总量诊断，不是另一源供给。合并模型只使用一种源表示。条件卡片不证明工序发生：必须证明不存在，否则测量真实交换。实际新增材料、包装组件、燃料、公用工程回送、异物或排放物种必须逐项新增并具有真实协议及原始身份审查，不得藏入零值或其他材料集合。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_source | 源织造和织边产生 | required | 真实源批次 | 同时产出织物和分离残余物的共同源 | 保留织物及残余物总量; 可归属向量随T |
| p_prepare | 专属收集分选包装及验收 | required | 匹配源残余物 | 残余原料准备 | 唯一新增首次放行Q |
| p_supply | 已放行批次仓储搬运装载 | required | 真实服务事件; 仅真实发生时计替换包装 | 原批次未除H服务 | 原Qc; 不新增产量 |

### 过程：源织造和织边产生 (`p_source`)

#### 输入

##### 产品流

###### 整份供货 PET 长丝纱 (`pet_yarn`)

按真实结构及供货等级记录全部经纱、纬纱及实际 PET 专用捕纬织边纱，各只记录一次。整份外购供货包含实测水分和油剂。宽泛涤纶长丝候选的中英文反应路线表述有歧义，也未证明本准备等级；在供方与原始记录相容证据齐备前保留本具体身份且不采用 UUID。不能再加 PET 树脂、检测组分或上游制纱能耗。

- 选定流：带供应商纺丝油剂的未染色未上浆 PET 连续长丝纱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`jrc-textiles-2023`

###### 源工序电力 (`source_electricity`)

仅中国用户侧低于 1 kV 的电网平均供电与此 UUID 相符。保留原始净热值能量属性和 MJ 参考单位，这是电力记账属性，不表示燃烧。实测 kWh 只按 3.6 换算一次。其他国家、电压或发电路线须另选已核验供方。纳入真实电机、抽吸、照明、空转和清理，不设默认耗电。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`jrc-textiles-2023`

###### 整份矿物基织机润滑油 (`loom_oil`)

使用此种具体油剂时，记录含添加剂及载体的整份供货油，不再采购检测组分。须有供应商等级及 SDS。原始固定 40.5 MJ/kg 石油油品或 PAO 合成油不能证明此尚未确定的等级，因此不采用 UUID 或默认热值。实际其他维护制剂须另列。

- 选定流：矿物基织机润滑油制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`jrc-textiles-2023`

###### 辅助清理市政供水 (`source_water`)

仅在实际设备地面辅助清理或公用工程补水时纳入；清洗废纱不属于本分支。原始流为厂内经处理市政饮用供水，参考属性为质量，不是原水、去离子水或蒸汽。称量或用独立测得密度状态将表计体积换质量；原始次级体积系数不能充当独立密度证据。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：

###### 外部供给压缩空气 (`source_air`)

仅在织机辅助或收集实际使用外供空气时纳入，不假定每台机械织机都需要。此宽泛体积流未保证压力、温度、干燥度、含油等级或标准体积。须声明实测条件并用该状态下 m3。内部压缩机按 boundary_utilities 处理；外购空气供方已含制气电力时不得再加。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：

###### 入厂纱线纸芯 (`incoming_paper_core`)

一种纸板圆筒纱线支承件，不是纸箱、木经轴或塑料锥筒。其原始厂内生产质量流仅支持此物理制品。只有纱线供方边界未包括时才另纳入一次纸芯供给；按 cp_pack 记录入厂附着纸芯和退回供方。纸芯质量不计入纱线或 Q。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：

#### 输出

##### 产品流

###### 共同产出的 PET 机织坯布 (`source_fabric`)

在 cp_physical 中保留完整未分配织物实物产量及状态，用于共同源平衡和分配分母。此诊断性共同输出不是另一废纱参考或避免产品抵扣。原始聚酯网布固定了网状结构，不能识别任意支承织物，因此 UUID 保持未解决。不能强令织物质量等于 Q。

- 选定流：未染色未上浆 PET 长丝机织坯布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以本行未分配实物分子按第8节唯一计算除同一 Q 一次，继承负荷向量另行保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_physical`
- 来源：`jrc-textiles-2023`; `getzner-polyester-2024`

###### 分离的未开松 PET 织边残余物 (`separated_pet_residue`)

此为最终分选前实测未开松、纤维仅 PET 的长丝织边残余物。原始身份为厂内、处理未指定的人造纤维废料宽泛产品流，没有 CAS、等级、油剂或水分保证。必须具备来源批次 PET 分析和第3节全部条件，排除混纺、短纤软废料、布片、合格纱、开松纤维及瓶片再粒化路线。物理 T 转移继承原源交换向量，T 不是第二次外购投入或终端 Q。

- 选定流：人造纤维废料 `f814e607-ba2f-4727-b842-e32eff57e4d1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以本行未分配实物分子按第8节唯一计算除同一 Q 一次，继承负荷向量另行保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_transfer`
- 来源：`getzner-polyester-2024`; `namphong-yarn-waste`

##### 废物流

###### 源工序 PET 废纱不合格物 (`source_pet_reject`)

仅具有实际去向、身份明确的 PET 废纱纤维不合格物可使用此宽泛废 PET 质量身份。原始说明同时包含纺织品和容器，未规定纤维等级或处理；其 CPC 塑料分类不同于验收纤维产品类别，不能据此选择路线。瓶、颗粒、非 PET、含油混合物及布状流须分开。实测包括失败批次的全部不合格物，不设固定损耗或自动回收抵扣。

- 选定流：废弃聚对苯二甲酸乙二醇酯 `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：

###### 报废纸板纱芯 (`paper_core_waste`)

仅记录实际报废的纸板纱芯；退供方纸芯另为外部产品回送，不是本废物。不采用固定 2% 损耗或厨房纸含义的宽泛纸包装候选。实际塑料金属支承件须另列明确流。

- 选定流：报废纸板纱芯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：

###### 废矿物基织机润滑油 (`spent_loom_oil`)

将此真实废制剂与新油、泄漏物分开记录，不假定油水添加剂比例或再生处理。核对设备存油、转移到纤维的油、回收油、废油和独立识别的排放；未知去向仍是缺口。

- 选定流：废矿物基织机润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`jrc-textiles-2023`

###### 辅助设备清理废水 (`ancillary_cleaning_water`)

仅在实际清理水转出且有实测接收处理路线和组成时纳入。不能把原始规定向水体排放的零件脱脂废水流用于外部处理。整份水溶液质量、水及每种实测溶质为关联子账，不是溶液和溶质重复采购。直接排向环境时须另列独立识别的物种介质行。

- 选定流：送外部处理的设备清理废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：

##### 基本流

###### PET 纤维颗粒物排向空气 (`source_pet_air`)

仅纳入真实逸入空气、颗粒形态及 PET 比例已独立确认的实测 PET 纤维颗粒物。收集的飞絮属于实物不合格账，不属于本排放。总粉尘或宽泛对苯二甲酸酯化学搜索结果不能证明 PET 排放质量及 CAS 身份。每种其他真实化学排放须另列，不能以一个残差推断两个物种。

- 选定流：PET 纤维颗粒物排向空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission`
- 来源：

###### 真实水蒸发排向空气 (`source_water_vapour`)

仅纳入通过物料水分变化或辅助用水等独立确认的真实水蒸发。不假定反应水或加热干燥。宽泛原始水蒸气候选同时列有水、重水和冰同义词，在物种适用性解决前不采用 UUID。独立闭合水和整份质量，不以一个残差同时求 PET 及水损失。

- 选定流：水蒸气排向空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission`
- 来源：

### 过程：专属收集分选包装及验收 (`p_prepare`)

#### 输入

##### 产品流

###### 匹配源残余物转入 (`received_pet_residue`)

此为最终分选前实测未开松、纤维仅 PET 的长丝织边残余物。原始身份为厂内、处理未指定的人造纤维废料宽泛产品流，没有 CAS、等级、油剂或水分保证。必须具备来源批次 PET 分析和第3节全部条件，排除混纺、短纤软废料、布片、合格纱、开松纤维及瓶片再粒化路线。物理 T 转移继承原源交换向量，T 不是第二次外购投入或终端 Q。

- 选定流：人造纤维废料 `f814e607-ba2f-4727-b842-e32eff57e4d1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以本行未分配实物分子按第8节唯一计算除同一 Q 一次，继承负荷向量另行保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prepare_transfer`
- 来源：`getzner-polyester-2024`; `namphong-yarn-waste`

###### 收集分选包装电力 (`prepare_electricity`)

仅中国用户侧低于 1 kV 的电网平均供电与此 UUID 相符。保留原始净热值能量属性和 MJ 参考单位，这是电力记账属性，不表示燃烧。实测 kWh 只按 3.6 换算一次。其他国家、电压或发电路线须另选已核验供方。纳入真实电机、抽吸、照明、空转和清理，不设默认耗电。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prepare_energy`
- 来源：

###### 聚乙烯原料袋 (`prepare_pe_bag`)

一种完整聚乙烯袋，CAS 9002-88-4，与原始厂内生产质量流物理相容，不是 PP 种子编织袋或树脂颗粒。实际厚度、印刷复合状态、供方、皮重和再用状态须有证据，不假定袋数或薄膜等级。新供给只计一次，按 cp_pack 保留附着、空置、周转库存及实物外发全部袋。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prepare_pack`
- 来源：

###### 聚丙烯打包带 (`prepare_pp_band`)

仅在同批废纱实际使用时纳入一种聚丙烯打包带。农场捆扎绳、固定种子容量袋、PP 树脂切片及钢带候选的形态、用途或组成硬限定不同，均不能作为此 UUID。记录实测整条带供给和 cp_pack 流动，不设默认质量或再用抵扣。

- 选定流：聚丙烯打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prepare_pack`
- 来源：

#### 输出

##### 产品流

###### 新增首次验收未开松 PET 废纱 (`accepted_pet_waste`)

一批源头隔离、干法分选并实际包装后新增首次验收的、纤维仅 PET 的长丝织边废纱。仍为未开松废纱形态，包含实测水分及继承供应商油剂，不能假定为绝干纯 PET。原始人造纤维废料是厂内处理未指定、无 CAS、等级、路线、水分及油剂规范的宽泛产品流，采用仅提供宽泛物理身份。强制限定信息是第3节全部要素：PET 证据及纤维比例；源工厂工序；长丝等级来源及供方路线；未染色未上浆证明；油剂身份含量；水分方法状态；未开松形态；杂质分析限值；收集分选路线；回收方规范去向；首次放行标识时间；净质量皮重；场址时期；用电国家电压；分配输出状态；在制品成品数量及继承向量；实物总发运退回；逐包装台账；未解决供方和 UUID 限制。须保存在实际数据包完整上下文中。此 UUID 不可用于原生合格纱、混纺、瓶片、颗粒、布片、开松或再生纤维。

- 选定流：人造纤维废料 `f814e607-ba2f-4727-b842-e32eff57e4d1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 来源：`getzner-polyester-2024`; `namphong-yarn-waste`; `hising-polyester-selvedge`; `jrc-textiles-2023`

##### 废物流

###### 分选 PET 废纱不合格物 (`prepare_pet_reject`)

仅具有实际去向、身份明确的 PET 废纱纤维不合格物可使用此宽泛废 PET 质量身份。原始说明同时包含纺织品和容器，未规定纤维等级或处理；其 CPC 塑料分类不同于验收纤维产品类别，不能据此选择路线。瓶、颗粒、非 PET、含油混合物及布状流须分开。实测包括失败批次的全部不合格物，不设固定损耗或自动回收抵扣。

- 选定流：废弃聚对苯二甲酸乙二醇酯 `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prepare_waste`
- 来源：

###### 报废聚乙烯袋 (`prepare_pe_waste`)

仅记录真实单一 PE 材料袋废物，包括破袋，不混入打包带、纸芯或产品。外部周转退回另作产品回送，再用袋不算新增采购。不把已清洗混合聚乙烯回收流称为已匹配废物 UUID。

- 选定流：报废聚乙烯袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prepare_pack`
- 来源：

###### 报废聚丙烯带 (`prepare_pp_waste`)

真实断裂报废 PP 带独立记录，区别外部退回和内部再用。原始规定机械回收路线的 PP 废物流，不能假定与尚未确认的实际去向相符。

- 选定流：报废聚丙烯打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prepare_pack`
- 来源：

##### 基本流

###### 分选 PET 纤维颗粒物排向空气 (`prepare_pet_air`)

仅纳入真实逸入空气、颗粒形态及 PET 比例已独立确认的实测 PET 纤维颗粒物。收集的飞絮属于实物不合格账，不属于本排放。总粉尘或宽泛对苯二甲酸酯化学搜索结果不能证明 PET 排放质量及 CAS 身份。每种其他真实化学排放须另列，不能以一个残差推断两个物种。

- 选定流：PET 纤维颗粒物排向空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_prepare_emission`
- 来源：

### 过程：已放行批次仓储搬运装载 (`p_supply`)

#### 输入

##### 产品流

###### 已放行批次仓储搬运电力 (`supply_electricity`)

仅中国用户侧低于 1 kV 的电网平均供电与此 UUID 相符。保留原始净热值能量属性和 MJ 参考单位，这是电力记账属性，不表示燃烧。实测 kWh 只按 3.6 换算一次。其他国家、电压或发电路线须另选已核验供方。纳入真实电机、抽吸、照明、空转和清理，不设默认耗电。 按原放行批次记录含实际装载和服务空转的未除 H，不产生第二次归一化或新产品输出。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：

###### 真实替换聚乙烯袋 (`supply_pe_bag`)

一种完整聚乙烯袋，CAS 9002-88-4，与原始厂内生产质量流物理相容，不是 PP 种子编织袋或树脂颗粒。实际厚度、印刷复合状态、供方、皮重和再用状态须有证据，不假定袋数或薄膜等级。新供给只计一次，按 cp_pack 保留附着、空置、周转库存及实物外发全部袋。 仅纳入真实增量重包装；首次放行包装已在 p_prepare 内，保留再用袋不新增采购。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：

###### 真实替换聚丙烯带 (`supply_pp_band`)

仅在同批废纱实际使用时纳入一种聚丙烯打包带。农场捆扎绳、固定种子容量袋、PP 树脂切片及钢带候选的形态、用途或组成硬限定不同，均不能作为此 UUID。记录实测整条带供给和 cp_pack 流动，不设默认质量或再用抵扣。 仅真实增量替换进入原批次服务账。

- 选定流：聚丙烯打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：

#### 输出

##### 废物流

###### 重包装聚乙烯袋废物 (`supply_pe_waste`)

仅记录原批次真实拆除的 PE 袋，实测且不采用自动包装损耗系数；按实际处理去向纳入 cp_pack 和 H。

- 选定流：报废聚乙烯袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：

###### 重包装聚丙烯带废物 (`supply_pp_waste`)

仅记录原批次真实拆除的 PP 带，不与 PE 袋合并，不把内部再用算成对外报废。

- 选定流：报废聚丙烯打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按第8节唯一计算处理本行未除可归属 A_i 与匹配 Q，不再归一化结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | multifunctionality | 本方法仅针对所选研究决策情境中需要分配的归因核算。工业工艺证据和价格正负本身不能确立分配方法或法律上的废物、终止废物状态。 | ilcd-attributional-2010 |
| allocation_dedicated | all exchanges | 首先对实测源工序进行独立或虚拟分拆，将织物专属工序与废纱专属收集分选包装分开。将可识别的各物理输出内纱线及专属活动归给对应输出，保留非有价损失及其因果负荷。按内含质量归属不等于允许对其余全部交换统一按质量分配。 | ilcd-attributional-2010 |
| allocation_causality | remaining common exchanges | 逐一独立识别每项剩余共同交换的决定性物理因果关系。只有场址证据支持时，实测运行需求及受限容积或质量与持续时间的组合才可用于对应服务。共同质量比例、共用电表或任意选择物理经济分配均不足。保留逐交换份额、分母、失败工序负荷和所有输出的不确定性。 | ilcd-attributional-2010 |
| allocation_residual | unresolved common-process residual only | 仅当真实剩余交换不存在决定性物理关系时，才按所有共同功能在同一共同工序门、实际状态下的同期市场价值处理。只有后续分选包装运输价格时，应透明推导等价门价格。记录全部数量、价格时期币种、输出状态、剩余交换清单和敏感性。总价值未定义或为零、负价服务歧义或价格缺失均维持未解决，不设固定比例、任意等份或自动零负荷。 | ilcd-attributional-2010 |
| allocation_once | source burden and transfers | 每项已分配源交换向量随分离废纱经 T 和在制品只继承一次。同一源段选择显式共同源过程或继承上游向量之一，不能两者并用。后续专属分选包装追加真实负荷。实物输出 V 及质量平衡记录不缩放；份额只改变可归属清单 A，不改变物理物料量。 | ilcd-attributional-2010 |
| allocation_no_credit | reuse and treatment | 内部再用随继承向量抵消并保留增量返工。回收去向不能确立替代原生 PET 的抵扣。废物处理投入、外销次生材料、周转包装及服务保持分开。下游后果或替代研究须有其自身方法，不能暗中改变本清单。 | ilcd-attributional-2010 |

## 8. 前景数据采集、计算与质量规则

采集只存原始未除记录。aggregation_rule 列声明最终目标基准“每 1 kg 参考流”，不是采集阶段的除法指令。先换算、源归属、移动在制品向量及合并未除 H，再执行下列唯一 A_i/Q。Q=0 时保留全部原始分子。包装流动和源实物总输出保留未分配的独立诊断。

协议的 process_id 只对应单一工序：cp_energy、cp_transfer、cp_physical、cp_pack、cp_waste、cp_emission 是源阶段实例；cp_prepare_* 和 cp_supply_* 行在对应工序采用相同台账规范。规则中对台账族的引用包含这些明确实例，公式 Inputs 逐项列出。cp_service 是原批次未除服务账，包装流动也进入 cp_supply_pack，但不新增第二次采购。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | p_prepare | accepted_pet_waste | weighing | 批次标识; 首次放行标识; 首次放行时间; 毛质量; 各项皮重; 净质量; 水分; 油剂含量; PET分析; 接收验收; 重复标志 | 在真实包装原料验收点校准称量并检测组成，保留完整证书并排除重复放行。记录原始质量，不记录已除单位清单。 | kg | 每批每次首次放行 | 完整声明批次及期初期末时期 | 专属准备场址及匹配源批次首次放行批次 | 每 1 kg 参考流 | 原始日志; 校准; 组成; 验收; 供方边界; 不确定性 |
| cp_material | p_source | pet_yarn; loom_oil | material_ledger | 交换标识; 整份供货制剂; 供方等级; 批次; 接收; 领用; 退回; 期初; 期末; 水分; 检测; 上游边界 | 称量整份供货并按源批次核对库存领退，实测组分子账不重复采购。保留原始单位和换算证据。 | kg | 每次接收领退及盘点 | 完整声明批次及期初期末时期 | 源织造场址及匹配源批次 | 每 1 kg 参考流 | 原始日志; 校准; 组成; 验收; 供方边界; 不确定性 |
| cp_energy | p_source | source_electricity | meter | 表计; 国家; 电压; 供方; 起读; 止读; kWh; 功率速率; 持续时间; 批次; 空转; 清理; 共用驱动 | 读取校准分表并核对账单，区分工序和真实运行空转失败状态。在换算归属前保留原始 kWh 或速率及区间。 | kWh; MJ | 表计区间及每批 | 完整声明批次及期初期末时期 | 源织造场址及匹配源批次 | 每 1 kg 参考流 | 原始日志; 校准; 组成; 验收; 供方边界; 不确定性 |
| cp_prepare_energy | p_prepare | prepare_electricity | meter | 表计; 国家; 电压; 供方; 起读; 止读; kWh; 功率速率; 持续时间; 批次; 空转; 清理; 共用驱动 | 读取校准分表并核对账单，区分工序和真实运行空转失败状态。在换算归属前保留原始 kWh 或速率及区间。 | kWh; MJ | 表计区间及每批 | 完整声明批次及期初期末时期 | 专属准备场址及匹配源批次首次放行批次 | 每 1 kg 参考流 | 原始日志; 校准; 组成; 验收; 供方边界; 不确定性 |
| cp_transfer | p_source | separated_pet_residue | transfer | 转移标识; 源批次; 去向批次; 毛质量; 皮重; 净质量; 水分; 油剂; 继承向量; 期初在制品; 期末在制品 | 按唯一标识匹配称量的内部 T 两侧，保留实物总质量及未除的逐交换继承负荷向量，不另设第二外部供方。 | kg | 每次转移及期末 | 完整声明批次及期初期末时期 | 源织造场址及匹配源批次 | 每 1 kg 参考流 | 原始日志; 校准; 组成; 验收; 供方边界; 不确定性 |
| cp_prepare_transfer | p_prepare | received_pet_residue | transfer | 转移标识; 源批次; 去向批次; 毛质量; 皮重; 净质量; 水分; 油剂; 继承向量; 期初在制品; 期末在制品 | 按唯一标识匹配称量的内部 T 两侧，保留实物总质量及未除的逐交换继承负荷向量，不另设第二外部供方。 | kg | 每次转移及期末 | 完整声明批次及期初期末时期 | 专属准备场址及匹配源批次首次放行批次 | 每 1 kg 参考流 | 原始日志; 校准; 组成; 验收; 供方边界; 不确定性 |
| cp_physical | p_source | source_fabric | mass_balance | 物流; 批次; 期初在制品; 期末在制品; 期初成品; 期末成品; 实际投入; 织物输出; T; Q; 实物V; 外部退回; 原发运冲回; 损失; PET; 水; 油剂; 继承向量 | 逐门及合并门独立称量完整未分配实物流，独立检测组分。按批次交换继承库存负荷向量，在任何分配前报告残差及不确定性。 | kg | 每批及期初期末 | 完整声明批次及期初期末时期 | 源织造场址及匹配源批次 | 每 1 kg 参考流 | 原始日志; 校准; 组成; 验收; 供方边界; 不确定性 |
| cp_prepare_physical | p_prepare | all physical streams | mass_balance | 物流; 批次; 期初在制品; 期末在制品; 期初成品; 期末成品; 实际投入; 织物输出; T; Q; 实物V; 外部退回; 原发运冲回; 损失; PET; 水; 油剂; 继承向量 | 逐门及合并门独立称量完整未分配实物流，独立检测组分。按批次交换继承库存负荷向量，在任何分配前报告残差及不确定性。 | kg | 每批及期初期末 | 完整声明批次及期初期末时期 | 专属准备场址及匹配源批次首次放行批次 | 每 1 kg 参考流 | 原始日志; 校准; 组成; 验收; 供方边界; 不确定性 |
| cp_supply_physical | p_supply | all physical streams | mass_balance | 物流; 批次; 期初在制品; 期末在制品; 期初成品; 期末成品; 实际投入; 织物输出; T; Q; 实物V; 外部退回; 原发运冲回; 损失; PET; 水; 油剂; 继承向量 | 逐门及合并门独立称量完整未分配实物流，独立检测组分。按批次交换继承库存负荷向量，在任何分配前报告残差及不确定性。 | kg | 每批及期初期末 | 完整声明批次及期初期末时期 | 声明供应服务场址及原已放行批次 | 每 1 kg 参考流 | 原始日志; 校准; 组成; 验收; 供方边界; 不确定性 |
| cp_pack | p_source | incoming_paper_core; paper_core_waste | component_ledger | 组件; 材料; 期初空包装; 期初附着在制品成品; 期初周转; 外购; 外部退回收到; 期末空包装; 期末附着在制品成品; 期末周转; 实物外发; 对外退回; 废物; 内部再用; 供方已含; 实测单件质量 | 对纸芯、PE袋和PP带分别核对：期初空包装及附着在制品成品与周转存量 + 外购 + 收到外部退回 = 期末空包装及附着在制品成品与周转存量 + 随实物总发运外出包装 + 对外退回 + 废物。内部再用抵消。供方附带入厂供给只记一次，空包装纸芯产品退回另记。件数换质量须实测同配置样本，不能编每件千克。 | kg; item | 每次组件流动及盘点 | 完整声明批次及期初期末时期 | 源织造场址及匹配源批次 | 每 1 kg 参考流 | 原始日志; 校准; 组成; 验收; 供方边界; 不确定性 |
| cp_prepare_pack | p_prepare | prepare_pe_bag; prepare_pp_band; prepare_pe_waste; prepare_pp_waste | component_ledger | 组件; 材料; 期初空包装; 期初附着在制品成品; 期初周转; 外购; 外部退回收到; 期末空包装; 期末附着在制品成品; 期末周转; 实物外发; 对外退回; 废物; 内部再用; 供方已含; 实测单件质量 | 对纸芯、PE袋和PP带分别核对：期初空包装及附着在制品成品与周转存量 + 外购 + 收到外部退回 = 期末空包装及附着在制品成品与周转存量 + 随实物总发运外出包装 + 对外退回 + 废物。内部再用抵消。供方附带入厂供给只记一次，空包装纸芯产品退回另记。件数换质量须实测同配置样本，不能编每件千克。 | kg; item | 每次组件流动及盘点 | 完整声明批次及期初期末时期 | 专属准备场址及匹配源批次首次放行批次 | 每 1 kg 参考流 | 原始日志; 校准; 组成; 验收; 供方边界; 不确定性 |
| cp_supply_pack | p_supply | supply_pe_bag; supply_pp_band; supply_pe_waste; supply_pp_waste | component_ledger | 组件; 材料; 期初空包装; 期初附着在制品成品; 期初周转; 外购; 外部退回收到; 期末空包装; 期末附着在制品成品; 期末周转; 实物外发; 对外退回; 废物; 内部再用; 供方已含; 实测单件质量 | 对纸芯、PE袋和PP带分别核对：期初空包装及附着在制品成品与周转存量 + 外购 + 收到外部退回 = 期末空包装及附着在制品成品与周转存量 + 随实物总发运外出包装 + 对外退回 + 废物。内部再用抵消。供方附带入厂供给只记一次，空包装纸芯产品退回另记。件数换质量须实测同配置样本，不能编每件千克。 | kg; item | 每次组件流动及盘点 | 完整声明批次及期初期末时期 | 声明供应服务场址及原已放行批次 | 每 1 kg 参考流 | 原始日志; 校准; 组成; 验收; 供方边界; 不确定性 |
| cp_waste | p_source | source_pet_reject; spent_loom_oil | weighing | 行标识; 组成; 源批次; 毛质量; 皮重; 净质量; 水分; 状态; 去向; 处理; 退回或处置; 失败运行 | 逐原子废物称量，包括失败清理批次，保留实际处理凭证、组成和库存变化。未知废物和零产出负荷不能消失。 | kg | 每次废物流动 | 完整声明批次及期初期末时期 | 源织造场址及匹配源批次 | 每 1 kg 参考流 | 原始日志; 校准; 组成; 验收; 供方边界; 不确定性 |
| cp_prepare_waste | p_prepare | prepare_pet_reject | weighing | 行标识; 组成; 源批次; 毛质量; 皮重; 净质量; 水分; 状态; 去向; 处理; 退回或处置; 失败运行 | 逐原子废物称量，包括失败清理批次，保留实际处理凭证、组成和库存变化。未知废物和零产出负荷不能消失。 | kg | 每次废物流动 | 完整声明批次及期初期末时期 | 专属准备场址及匹配源批次首次放行批次 | 每 1 kg 参考流 | 原始日志; 校准; 组成; 验收; 供方边界; 不确定性 |
| cp_water | p_source | source_water; ancillary_cleaning_water | water_balance | 供给; 水质; 表计; 质量; 积分体积; 真实速率; 区间; 温度; 密度证据; 废水质量; 水比例; 实际溶质; 去向; 损失 | 分别采集原始供水和整份清理水溶液，区分积分量与速率，换算时独立测量密度状态。区分外部处理与真实环境排放，不把 COD 当溶质质量。 | kg; m3 | 每次真实清理及表计区间 | 完整声明批次及期初期末时期 | 源织造场址及匹配源批次 | 每 1 kg 参考流 | 原始日志; 校准; 组成; 验收; 供方边界; 不确定性 |
| cp_air | p_source | source_air | meter | 供方; 外供或内部; 压力; 温度; 干燥度; 油等级; 表计体积; 标准或实际基准; 速率; 时间; 压缩机边界; 冷凝液 | 测量对应状态 m3 或对真实速率积分一次；任何标准体积转换须声明条件和独立物理证据。区分外供空气与内部压缩机投入，存在真实冷凝液及冷却水回送时另采集。 | m3 | 每次使用及表计区间 | 完整声明批次及期初期末时期 | 源织造场址及匹配源批次 | 每 1 kg 参考流 | 原始日志; 校准; 组成; 验收; 供方边界; 不确定性 |
| cp_emission | p_source | source_pet_air; source_water_vapour | monitoring | 物种; 聚合物比例; 颗粒形态; 介质; 浓度; 积分气体积; 真实气体速率; 区间; 水分变化; 入口; 出口; 收集质量; 不确定性; 检出限 | 使用独立、分组成监测及同状态气体积，浓度只乘积分体积一次或对速率积分一次。收集飞絮、总颗粒物、水蒸发和真实其他化学物须区别。组成未知时保持未量化，不能编造物种。 | kg; m3 | 实际监测区间及批次 | 完整声明批次及期初期末时期 | 源织造场址及匹配源批次 | 每 1 kg 参考流 | 原始日志; 校准; 组成; 验收; 供方边界; 不确定性 |
| cp_prepare_emission | p_prepare | prepare_pet_air | monitoring | 物种; 聚合物比例; 颗粒形态; 介质; 浓度; 积分气体积; 真实气体速率; 区间; 水分变化; 入口; 出口; 收集质量; 不确定性; 检出限 | 使用独立、分组成监测及同状态气体积，浓度只乘积分体积一次或对速率积分一次。收集飞絮、总颗粒物、水蒸发和真实其他化学物须区别。组成未知时保持未量化，不能编造物种。 | kg; m3 | 实际监测区间及批次 | 完整声明批次及期初期末时期 | 专属准备场址及匹配源批次首次放行批次 | 每 1 kg 参考流 | 原始日志; 校准; 组成; 验收; 供方边界; 不确定性 |
| cp_service | p_supply | supply_electricity; supply_pe_bag; supply_pp_band; supply_pe_waste; supply_pp_waste | service_ledger | 原批次; 原Qc; 行标识; 未除H; 原始单位; 持续时间; 占用容积; 功率; 发运; 外部退回; 复验; 增量返工; 替换包装; 拆除包装; 全部库存向量 | 将仓储搬运装载重包装保留为原放行批次未除 H，每项包装流动同时入 cp_pack。保留旧库存负荷、原发运冲回和真实增量返工。H 仅在唯一最终计算前合入其 Qc，采集步骤不相除、不新增产量。 | kg; MJ; m3 | 每次服务及盘点 | 完整声明批次及期初期末时期 | 声明供应服务场址及原已放行批次 | 每 1 kg 参考流 | 原始日志; 校准; 组成; 验收; 供方边界; 不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calculate_q | accepted_pet_waste | Q = 扣除真实皮重后唯一新增正向首次放行净质量之和。每次物理放行只关联原批次一次，不把期末成品或复验加到 Q。 | cp_release; cp_physical; cp_prepare_physical; cp_supply_physical | Q |  |
| convert_raw | all inventory rows | 将每项原始记录换为声明的分子单位，保留速率与积分量区别及状态证据。按实测逐交换归属层级处理源负荷，同时保留完整实物总量。 | cp_material; cp_energy; cp_prepare_energy; cp_water; cp_air; cp_emission; cp_prepare_emission; cp_pack; cp_prepare_pack; cp_supply_pack; cp_waste; cp_prepare_waste; cp_physical; cp_prepare_physical; cp_supply_physical | converted raw exchange ledgers | ilcd-attributional-2010 |
| assemble_a | all inventory rows | A_i = 期初在制品继承可归属向量_i + 本期源及专属可归属交换_i - 期末在制品继承向量_i + 匹配原批次未除 H_i。放行 Q 的负荷只进成品一次，期末成品不是另一制造扣减或追加。原有其他批次分开。合并时内部 T 和返工向量抵消，不重复源供方。 | cp_transfer; cp_prepare_transfer; cp_physical; cp_prepare_physical; cp_supply_physical; cp_service; converted raw exchange ledgers | A_i | ilcd-attributional-2010 |
| calculate_inventory | all inventory rows | Q 大于零时，x_i = A_i / Q 是唯一最终单位清单计算。诊断性物理转移和共同输出只以未分配实物分子除同一 Q 一次，不乘负荷份额。参考输出为 1 千克。卡片及汇总声明仅引用本次计算，不再次相除。Q=0 时保留未除 A、H、实物账及库存，不出单位结果。 | A_i; Q; cp_physical; cp_prepare_physical; cp_supply_physical | x_i and gross physical diagnostics per 1 kg reference flow |  |
| reconcile_gates | all processes | 各制造门按期初在制品 + 完整物理投入 = 期末在制品 + 真实物理输出损失核对。成品按 boundary_stock、逐包装按 cp_pack 核对。合并门抵消内部 T、返工及已放行 Q 转移；实物总发运 V 与新产量 Q 始终不同。独立检查 PET、油剂和水，不编造残差物种。 | cp_physical; cp_prepare_physical; cp_supply_physical; cp_pack; cp_prepare_pack; cp_supply_pack; cp_transfer; cp_prepare_transfer; cp_water; cp_emission; cp_prepare_emission | gate balances and uncertainty |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | reference and inputs | 完整一手资料及真实供方源工序接收记录须支持聚合物、形态、处理和验收，单凭分类及宽泛原始身份不足。 | PET分析; 供方TDS及SDS; 源工序和接收记录 |
| quality_period | all records | 使用匹配场址批次时期，保留零产出失败启停空转清理返工，全部库存变化保留继承向量及测量不确定性。 | 原始日志; 期初期末盘点; 校准 |
| quality_allocation | source multifunctionality | 保留分拆可行性、逐交换决定性物理驱动、剩余交换同门同状态价格及敏感性，不设固定分配或废料默认零负荷。 | ilcd-attributional-2010; 场址归属工作表 |
| quality_sources | external sources | 资料仅证明定性方法及产品工序存在，不提供默认配方、排放、油剂用量、水分、机器质量、收率或工厂消耗。通常清洁未染色描述和回收试点不能证明每批或商业性能。 | jrc-textiles-2023; getzner-polyester-2024; namphong-yarn-waste; hising-polyester-selvedge |
| quality_gaps | unresolved identities and conditions | 逐项保留未绑定原子名和真实不确定性。普通供方及辅助身份缺口待后续匹配；真正产品终端或方法证据缺口阻止符合性，须维持草稿或无法判断。 | manifest审查元数据; 数据包明确发现 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | product and source | 以供应商证书、工序日志、实物检查及接收规范核验第3节全部限定信息。必须证明 PET，不能从聚酯一词推断。排除的处理或真正终端及来源条件未解决时，不能产生符合性结果。 | jrc-textiles-2023; namphong-yarn-waste |
| validate_measurement | all inventory rows | 参考行恰为与所声明首次放行 Q 对应的 1 kg；其余各行在原始换算和归属后按同一批次分母只除一次。Q=0 时保留原始负荷、在制品及失败原因，不出单位结果。 |  |
| validate_mass | source; preparation; supply; combined gate | 逐门及合并门核对未分配的完整物理质量和独立 PET、水及油剂子账，抵消内部 T、返工和 Q 转移。不能用已分配 A 对账实物总输出，不能重复期末成品、编造反应水或从总粉尘及 COD 推定物种。报告实测残差和不确定性。 |  |
| validate_packaging | each packaging component | 逐包装组件闭合 cp_pack 完整六向台账，含附着在制品成品、实物总发运、外部退回及废物。核对产品皮重，不把包装计入 Q，不将再用作新增采购或共产品抵扣。 |  |
| validate_native | all UUIDs | 核对流类型、全部原始名称同义词备注、CAS、处理、状态、地域、介质和属性限定。保持参考属性到单位组及真实单位兼容；宽泛流不能证明供方匹配。不相容或未解决的原子身份留空并披露。 |  |
| validate_completeness | data package | 分别报告已接收输入、已执行检查、跳过范围、发现及完整性。缺记录、未解决条件、未知物种及未闭合平衡均不能算通过。工程检查不审批科学、翻译、映射或发布。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 具有已核验来源及前景边界的一个未开松 PET 织造残余物回收原料批次 |
| allowed_use | 披露相容上游关联、方法审查仍待完成的归因源头产生及准备清单 |
| excluded_use | 其他纤维或混纺; PET瓶片树脂; 开松再生纤维; 任意废料截断或替代抵扣; 法律终止废物认证 |
| required_metadata | PET 聚合物证据及纤维比例; 源工厂和织造工序; 长丝结构及纱线等级; 原生或再生来源及供应商路线; 未染色和未上浆确认; 供应商油剂身份及实测含量; 水分方法和称量状态; 未开松废纱形态; 异物分析和验收限值; 源头收集及分选路线; 回收方接受规范和拟用路线; 首次放行批次时间及唯一标识; 净质量和包装皮重; 场址和报告期; 用电国家和电压; 分配驱动与输出状态; 在制品成品数量及继承交换向量; 实物发运总量和外部退回; 逐包装组件台账; 未解决 UUID 和供方限制 |
| required_quality_disclosure | Q门; 原始及归一化台账; 全部分配决定; 在制品成品继承向量; H服务范围; 实物V和退回; 包装平衡; 未知项; 原始身份供方限制; 计量时间覆盖 |
| update_trigger | 聚合物来源油剂水分或接收门变化; 新增处理; 公用工程供方变化; 新原始身份依据; 分配驱动变化或重大库存差异 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-2025 | official_guidance | UNSD, CPC Ver.3.0 Explanatory Notes, 30 June 2025, pp.117 and 199–201. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 39216仅标题及相邻纤维废料落毛排除; 仅分类上下文 |
| jrc-textiles-2023 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Textiles Industry, EUR31316EN (2023), §§2.1.1.1, 2.4, 2.5.1, pp.15–16 and 33–37. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | PET/PBT/PTT区别; 源纱整经织造; 上浆油剂及相邻针织反例; 不采用数值默认 |
| getzner-polyester-2024 | literature | Getzner Textil, High-quality recycled yarn, 15 July 2024. https://www.getzner.at/en/stories/press-releases/high-quality-recycled-yarn | 全聚酯织边产生与收集的一手工业报告; 后续再生纱位于本门之外 |
| namphong-yarn-waste | literature | Nam Phong Group, Yarn Waste, publisher product page. https://namphongindustry.com/en/danh-muc-san-pham/ptextilep/yarn-waste.html | 一手收集分选及组成区分; 普通上浆水喷聚酯和混纺棉类替代品不同 |
| hising-polyester-selvedge | literature | Hi-Sing Textile, 100pct Polyester Selvedge Yarn Waste, publisher product page. https://www.hisingtextile.com/product/100pct-polyester-selvedge-yarn-waste/ | 仅佐证未开松织边废纱市场形态及通常清洁未染色状态; 不证明实际批次或未上浆 |
| ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment—Detailed guidance, first edition March 2010, §§7.9.1–7.9.3, pp.255–268. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 需要分配的归因场景: 独立虚拟分拆; 逐交换决定性物理因果; 仅剩余交换采用共同工序同门同状态市场价值; 不设固定比例 |
