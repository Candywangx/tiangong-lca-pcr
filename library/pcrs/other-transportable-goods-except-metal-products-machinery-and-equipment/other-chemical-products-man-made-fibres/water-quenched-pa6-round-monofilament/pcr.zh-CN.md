---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.water-quenched-pa6-round-monofilament
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 水淬 PA6 圆形单丝制造与净交付

## 1. 范围与适用性

本方法仅覆盖一条工业 PA6 单丝路线，非全部合成纤维。产品形成始于完整外购粒料，止于实际工厂净交付。多孔口模可产生多根独立单丝，不会令参考对象成为多长丝束。须证明直接纺实心圆丝身份及实测纤度几何。方法数量不冒作工厂观测。[basf-monofilaments; sanchyi-monofilament-line; wco-hs2022-ch54]

已有 PET 筛滤网布和 PP 绳索方法从长丝起加工为其他制品；短纤准备环锭纺及长丝纱方法不支配单丝挤出。共用核算原则不建立相同产品适用性。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.water-quenched-pa6-round-monofilament |
| classification_refs | CPC 3.0 35530，较窄候选范围；无正向映射决定 |
| covered_products | 原生未填充 PA6 单根实心圆形单丝，至少 67 dtex 且任何横截面尺寸不超过 1 mm；粒料直接熔融挤出、水淬、热水后热风拉伸、热风松弛退火、单根收卷；未染色、未涂覆工业供货 |
| excluded_products | 多长丝纱、母丝分纤、tow、短纤、PA66 及 PA6/66 共混物、PP/PET 单丝、合成 strip、薄膜切条、普通包装带、片材薄膜、大于 1 mm 的塑料型材、填充/再生/溶液纺材料、成品网布绳索、无菌医用缝线及零售钓线转化 |
| representative_product | 供工业纺织转化的公称 0.20 mm PA6 圆形单丝；实际直径、线质量、牌号、颜色和调湿供货水分须测量，不从公称直径推算 |
| production_route | 外购 PA6 粒料；控湿接收及需要时干燥；电热熔融过滤挤出；水淬；热水拉伸后接 PA 热风拉伸；热风退火松弛；收卷检验；实际仓储包装搬运及工厂发运 |
| market_state | 实际净交付门的工业单根卷装单丝，声明供货水分，可拆卸卷芯和包装不计商品 kg；不含织造、编绳或灭菌 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 供后续纺织转化的工业单丝，不代表纺织服务寿命 |
| How much | 声明批群经退回核对后实际净交付的 1 kg PA6 单丝 |
| How well | 声明牌号、实心圆截面、实测 dtex/直径、验收试验及调湿供货水分；无通用强度或耐温保证 |
| How long or cycle | 一个声明净交付批群，跨期间追溯生产仓储历史；不建立使用寿命等价 |
| reference_flow_link | delivered_monofilament |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 聚酰胺6单丝 `61fa6be2-e90f-41af-aba5-86209fb72896` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | PA6 牌号及含内含添加剂的完整供货组成; 原生未填充单根实心圆形直接纺丝形态; 实测横截面及至少 67 dtex; 拉伸退火收卷及颜色涂覆状态; 供货水分及调湿协议; 排除卷芯包装的实测商品净质量; 场址及原始生产与交付批群期间; 实际净交付门 Q 及退回调整后的唯一托运标识; 期初期末 WIP 和成品质量及结转负荷向量; native 参考耐温描述及分类翻译限制; 电压地理供应者及供水路线 |

必需限定信息须在具体数据集元数据或等效字段声明，缺项则该数据包不完整。1 kg 仅为质量归一化，不代表相同长度强度或服务寿命。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q 为同产品路线状态匹配批群中严格正的唯一实际净交付单丝质量，校准称量扣皮并声明供货水分调湿。卷芯托盘包装机器质量排除。Q 不自动等于新增质量放行产量 P。 |
| linear_conversion | length or bobbin records | Mass and length separately | kg; m; dtex; tex | 用 cp_release/cp_delivery 对同一均质调湿批称实测单丝净质量 M 与长度 L；原始长度 l 按 l*M/L 换为 kg；卷数须该卷装批群实测净质量。dtex 是每 10000 m 的 g，tex 是每 1000 m 的 g，非体积密度。面积仅可用独立实测同产品单位面积质量换算，本单丝不是薄膜片材。不得按公称直径密度捷径推算。 |
| energy_unit | make_electricity; dispatch_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留 native 能量参考及能量单位组 93a60a57-a3c8-11da-a746-0800200c9a66。原始计量 kWh 先乘 3.6 换为 MJ，再进入唯一归一化。已积分能量不能再乘时间。 |
| water_volume | quench_makeup; process_effluent; water_vapour | Mass and volume separately | kg; m3 | 积分液气体积已是数量而非流率，不能再乘时长。体积换算仅用实际温压状态及独立取证的液体密度或气体湿度组成。自来水次级 0.001 m3/kg 系数不是工厂实测密度。明确湿干基及标准实际气体状态。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 单丝厂接收外购完整 PA6 粒料制剂；无厂内聚合 |
| starting_condition_role | 保留上游聚合物负荷的技术圈材料输入 |
| product_classification_scope | 合成单丝类别中的一条直接纺 PA6 单丝路线；不宣称 strip 或整个分类叶覆盖 |
| recursive_input_rule | 外购单丝为另识别的上游已加工输入，须独立数据集和省略阶段披露，不能伪装粒料。内部放行单丝须配对，合并时抵消，不另加供应者负荷。 |
| upstream_dataset_requirement | 匹配完整树脂制剂和供货状态、实际电压地理、供水、油和包装供应者；通用物理 UUID 不建立任何供应者清单 |
| disclosure | 门到门生产及净发运前实际仓储包装搬运；上游材料、入厂运输和废物处理另行链接；客户运输、后续转化、使用和末端处置须独立模块。声明实际纳入及省略操作，不宣称完整全生命周期。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | manufacture | 包括实际接收干燥、电热熔体过滤挤出、淬冷水系统、热水及热风拉伸、退火收卷和质量放行，含换型、失败零产出、启停、待机辅助、废品及返工。两独立厂家支持本选定生产线，不追加切膜或聚合。 | basf-monofilaments; basf-extrusion-guide; sanchyi-monofilament-line |
| boundary_delivery | dispatch | 包括交付批群实际仓储时长、湿度控制、重绕复验、包装、内部搬运及装车；生产早于交付不能删除这些负荷。生产放行 P 为内部交接，非终端分母 Q。仓储与生产分账，配对交接仅在合并时抵消。 |  |
| boundary_formulations | purchased inputs | 每份外购完整 PA6 制剂或供货溶液只称量一次；聚合物、内含添加剂及水分检验仅作组分分账，不能重复采购内含添加剂或载体水。另行现场混配、上油、染色、涂覆、非电供热或清洗化学品须经复核扩展，逐项列实际原子输入和出口，不得静默省略。 | basf-extrusion-guide |
| boundary_water_species | manufacture | 区分外购补水与内部循环、液体废水、液滴带出、成品保留水分及净气相水转移。熔融结晶冷却拉伸及水分干燥属于物理变化，本身不生成反应水。任何水解、降解或反应水主张须独立反应物种证据，不能用一个残差求未知水项和未知出口。 | basf-extrusion-guide |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| monofilament_make | 粒料接收挤出淬冷拉伸退火收卷放行 | required | 完整选定 PA6 路线；有条件干燥及各出口按实际发生 | 含 WIP 结转的前景生产 | per 1 kg reference flow |
| dispatch | 成品仓储包装搬运及净发运 | required | 实际交付批群，含前期生产及退回历史 | 含成品负荷结转的前景交付 | per 1 kg reference flow |

### 过程：单丝制造 (`monofilament_make`)

#### 输入

##### 产品流

###### 完整供货 PA6 粒料 (`pa6_pellets`)

native 为完整 PA6 粒料、全球工厂界面、粒料路线；无 CAS、牌号、水分或添加配方。总评说明其用于组成未定量的成型外壳绝缘件代表工程聚合物；该投入角色语境不构成明确不同聚合物或制造路线。仅使用广义 PA6 粒料身份，不建立挤出牌号资格或供应者数量。整份采购包含内含添加剂水分，检验另作组分分账。

- 选定流: 聚酰胺6（PA6）粒料 `55be6cb7-2fb9-4c6f-b37f-08c849c72cf5`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: x_i = A_i / Q，恰执行一次；A_i 是原始换算及完整库存负荷归属后的本行同批群未除分子；Q 为第8节定义的唯一净交付 kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源: basf-monofilaments; basf-extrusion-guide

###### 制造用电 (`make_electricity`)

native 中国、1–35 kV 到用户消费组合、电网平均供电；本 UUID 仅适用于中国该中压界面，不代表任意低压、纯可再生电或其他地理；实际供应者及变压损耗另核。参考为净热值/MJ，非质量。 计实际干燥、熔体加热驱动过滤、泵、拉伸退火收卷、压缩空气制备及应归属待机损耗；不能用铭牌替代。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: x_i = A_i / Q，恰执行一次；A_i 是原始换算及完整库存负荷归属后的本行同批群未除分子；Q 为第8节定义的唯一净交付 kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy_make`
- 来源: sanchyi-monofilament-line

###### 外部淬冷拉伸补水 (`quench_makeup`)

native 为经处理市政自来水生产供应、工厂生产混合，未指定地理，地区水源处理水质有差异。质量为参考，次级每 kg 体积 0.001 不是实测密度。不能替代原水取用、去离子水、香港水厂体积参考身份或重复计算循环槽水。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: x_i = A_i / Q，恰执行一次；A_i 是原始换算及完整库存负荷归属后的本行同批群未除分子；Q 为第8节定义的唯一净交付 kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源: sanchyi-monofilament-line

###### 设备润滑油 (`mineral_oil`)

仅实际采购的矿物设备润滑油，不假设纺丝油剂。追踪库存泄漏废油，不设每吨耗用。无油交换须维护证据。

- 选定流: 矿物润滑油
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: x_i = A_i / Q，恰执行一次；A_i 是原始换算及完整库存负荷归属后的本行同批群未除分子；Q 为第8节定义的唯一净交付 kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_material`
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 质量放行内部单丝 (`released_monofilament`)

native 身份为 PA6 单丝、直接纺丝质量、锦纶生产制备、工厂生产混合，地理未指定。名称另载“耐温范围为100-150°C”：保留该描述并独立核验实际牌号适用性，它不是挤出温度设定，也非已证实的通用使用温度等级。native CPC35520 与本方法声明的 >=67 dtex 范围不一致，保留分类债务，不能把物理单丝改作多长丝纱。中文总评把 polycaprolactam 误译为“聚己内酯”；以 PA6 正式名称同义词及英文身份解释化学组成，不作聚己内酯。原件未给 CAS。实际截面牌号验收水分仍需前景证据。 本行为内部新增放行质量 P，与 warehoused_monofilament 配对，不是额外成品或 Q。退回库存复验绝不生成新 P。

- 选定流: 聚酰胺6单丝 `61fa6be2-e90f-41af-aba5-86209fb72896`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: x_i = A_i / Q，恰执行一次；A_i 是原始换算及完整库存负荷归属后的本行同批群未除分子；Q 为第8节定义的唯一净交付 kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_release`
- 来源: basf-monofilaments; yusheng-pa6-monofilament

##### 废物流

###### 外送 PA6 清机切头废料 (`pa6_scrap`)

一股分拣 PA6 废物流送实际处理去向，声明水分污染。实测内部回料为生产内回流，非外购树脂或避免产品抵扣。native 固定铸带切粒干燥的尼龙废物未用于本挤出废料。

- 选定流: 未内回用的 PA6 挤出单丝废料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: x_i = A_i / Q，恰执行一次；A_i 是原始换算及完整库存负荷归属后的本行同批群未除分子；Q 为第8节定义的唯一净交付 kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste_make`
- 来源:

###### 淬冷拉伸液体废水 (`process_effluent`)

送处理的实际液体排放溢流及清洗水出口，默认非排河基本流。实测溶解己内酰胺等实际组分作分账，不重复整份废水质量；不能由 COD 换算物种。

- 选定流: PA6 单丝淬冷拉伸废水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: x_i = A_i / Q，恰执行一次；A_i 是原始换算及完整库存负荷归属后的本行同批群未除分子；Q 为第8节定义的唯一净交付 kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water`
- 来源:

###### 设备废油 (`spent_oil`)

分收实际废矿物油，不能把合成 PAO 供应者当矿物油，不能假设采购油全部即时排放。

- 选定流: 废矿物润滑油
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: x_i = A_i / Q，恰执行一次；A_i 是原始换算及完整库存负荷归属后的本行同批群未除分子；Q 为第8节定义的唯一净交付 kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste_make`
- 来源:

##### 基本流

###### 过程水蒸气净排放 (`water_vapour`)

在同一干空气基准扣除实测进口湿度后，记录蒸发干燥净水转移；液滴及最终产品水分另账。声明实际空气子介质；环境背景穿流抵消，非虚构反应水。 native 为基本流/质量，CAS7732-18-5，未指定子介质的空气排放，无路线地理或数量因子。非室内长期高烟囱高空或植物蒸散身份；核实实际子介质，或另选直接核验身份。native 广义水及同位素同义词不能覆盖普通水 CAS 和蒸气介质。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: x_i = A_i / Q，恰执行一次；A_i 是原始换算及完整库存负荷归属后的本行同批群未除分子；Q 为第8节定义的唯一净交付 kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_species`
- 来源: basf-extrusion-guide

###### 实际己内酰胺排放 (`caprolactam_air`)

PA6 加工中有条件的实际物种测量排放，非整份废气或残差质量。捕集回收在外送为独立流前保持内部。热警示不是排放因子，使用前须将其他实际物种独立识别分卡。 native 为基本流/质量，己内酰胺 CAS105-60-2，未指定子介质的空气排放，无地理制造路线数量因子。不用于废水溶解己内酰胺、室内空气、长期空气或整份废气。native 含聚合物词的广义同义词不能覆盖正式单体 CAS。使用前核实实际空气子介质。

- 选定流: 己内酰胺 `fe0acd60-3ddc-11dd-9fcf-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: x_i = A_i / Q，恰执行一次；A_i 是原始换算及完整库存负荷归属后的本行同批群未除分子；Q 为第8节定义的唯一净交付 kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_species`
- 来源: basf-extrusion-guide

### 过程：仓储包装交付 (`dispatch`)

#### 输入

##### 产品流

###### 生产内部入库单丝 (`warehoused_monofilament`)

native 身份为 PA6 单丝、直接纺丝质量、锦纶生产制备、工厂生产混合，地理未指定。名称另载“耐温范围为100-150°C”：保留该描述并独立核验实际牌号适用性，它不是挤出温度设定，也非已证实的通用使用温度等级。native CPC35520 与本方法声明的 >=67 dtex 范围不一致，保留分类债务，不能把物理单丝改作多长丝纱。中文总评把 polycaprolactam 误译为“聚己内酯”；以 PA6 正式名称同义词及英文身份解释化学组成，不作聚己内酯。原件未给 CAS。实际截面牌号验收水分仍需前景证据。 与 released_monofilament 的实际 P 及结转负荷配对。期初成品保留先前负荷，本入库不重复采购，合并时抵消。

- 选定流: 聚酰胺6单丝 `61fa6be2-e90f-41af-aba5-86209fb72896`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: x_i = A_i / Q，恰执行一次；A_i 是原始换算及完整库存负荷归属后的本行同批群未除分子；Q 为第8节定义的唯一净交付 kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stock`
- 来源: basf-monofilaments

###### 仓储包装搬运用电 (`dispatch_electricity`)

native 中国、1–35 kV 到用户消费组合、电网平均供电；本 UUID 仅适用于中国该中压界面，不代表任意低压、纯可再生电或其他地理；实际供应者及变压损耗另核。参考为净热值/MJ，非质量。 按实测仓储时长纳入交付批群的实际控湿仓储重绕包装、电动搬运充电损耗。本基线为电动，实际燃油搬运须扩展。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: x_i = A_i / Q，恰执行一次；A_i 是原始换算及完整库存负荷归属后的本行同批群未除分子；Q 为第8节定义的唯一净交付 kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy_dispatch`
- 来源:

###### 纸板卷芯 (`paper_core`)

native 为一个圆柱纸板卷芯、工厂生产混合，地理制造路线未指定；明确有纱线卷芯用途。它是完整卷芯，非纸板材料混合物或塑料线轴。另核实实际纸板组成供应者及耗用，无固定再生成分或质量。

- 选定流: 圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: x_i = A_i / Q，恰执行一次；A_i 是原始换算及完整库存负荷归属后的本行同批群未除分子；Q 为第8节定义的唯一净交付 kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源:

###### 瓦楞运输纸箱 (`corrugated_carton`)

如实际使用，记录一个完整运输纸箱，保留完整材料组成及包括废品的实际净耗用质量。独立核实这一具体整纸箱的身份、组成、供应者和背景边界；不假设固定纤维配方或再生比例。纸芯、缠绕膜及每种其他实际包装组分均保留为独立交换。

- 选定流: 瓦楞运输纸箱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: x_i = A_i / Q，恰执行一次；A_i 是原始换算及完整库存负荷归属后的本行同批群未除分子；Q 为第8节定义的唯一净交付 kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源:

###### LDPE 防护包装膜 (`ldpe_wrap`)

仅实际可拆卸 LDPE 防护膜，非合成单丝 strip；保留整份薄膜采购耗用及边料；其他包装另列原子行。 native 为 Product/质量 LDPE 薄膜，无 CAS、地点路线牌号或次级属性；仅代表非自黏非泡沫未增强未层压无衬底 LDPE 膜。不提供供应者清单厚度或再生比例。

- 选定流: 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: x_i = A_i / Q，恰执行一次；A_i 是原始换算及完整库存负荷归属后的本行同批群未除分子；Q 为第8节定义的唯一净交付 kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 终端净交付单丝 (`delivered_monofilament`)

native 身份为 PA6 单丝、直接纺丝质量、锦纶生产制备、工厂生产混合，地理未指定。名称另载“耐温范围为100-150°C”：保留该描述并独立核验实际牌号适用性，它不是挤出温度设定，也非已证实的通用使用温度等级。native CPC35520 与本方法声明的 >=67 dtex 范围不一致，保留分类债务，不能把物理单丝改作多长丝纱。中文总评把 polycaprolactam 误译为“聚己内酯”；以 PA6 正式名称同义词及英文身份解释化学组成，不作聚己内酯。原件未给 CAS。实际截面牌号验收水分仍需前景证据。 本唯一参考行为 cp_delivery 下实际净交付的 1 千克商品。退回调整后每件物理验收托运仅计一次，退回复验或再发运不生成新产量。保留包装仓储负荷但其质量排除于参考商品。

- 选定流: 聚酰胺6单丝 `61fa6be2-e90f-41af-aba5-86209fb72896`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `method_formula`
- 采集协议: `cp_delivery`
- 来源: yusheng-pa6-monofilament; wco-hs2022-ch54

##### 废物流

###### 废弃纸板包装 (`paperboard_waste`)

实际分收纸板卷芯纸箱废物送处理，声明胶黏剂污染。未交付完好包装仍为库存，非即时废物。

- 选定流: 废弃纸板包装
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: x_i = A_i / Q，恰执行一次；A_i 是原始换算及完整库存负荷归属后的本行同批群未除分子；Q 为第8节定义的唯一净交付 kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源:

###### 废弃 LDPE 包装膜 (`ldpe_waste`)

实际独立 LDPE 包装边料，不自动抵扣避免原生薄膜。

- 选定流: 废弃 LDPE 包装膜
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: x_i = A_i / Q，恰执行一次；A_i 是原始换算及完整库存负荷归属后的本行同批群未除分子；Q 为第8节定义的唯一净交付 kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_pack`
- 来源:

###### 未返工的 PA6 搬运废品 (`dispatch_pa6_reject`)

实际送处理而离开系统的退回或损伤单丝，与可用退回库存及内部返工区分。归属政策中保留其结转生产仓储负荷。

- 选定流: 送处理的废品 PA6 单丝
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: x_i = A_i / Q，恰执行一次；A_i 是原始换算及完整库存负荷归属后的本行同批群未除分子；Q 为第8节定义的唯一净交付 kg。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stock`
- 来源:

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all inventory rows | 优先用生产线批表及原批库存负荷追踪避免分配。共享能源须证明实际负荷运行时长关系，仓储用实际批停留负荷，包装用实际组件耗用。不同直径牌号不能简单按米分配。披露剩余分配不确定性敏感性，质量分配非自动默认。 | jrc-ilcd-allocation-2010 |
| allocation_rework | rework and scrap | 内部回料退回商品不作避免原生材料或新产出抵扣。保留重复挤出拉伸检验仓储全部负荷。实际外送废料处理仍纳入；真实可售联产品须另声明身份分配方法并复核后使用。不能从废物标签推断负负荷或截断。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | monofilament_make | 树脂与设备油 | 称重及采购库存账 | owner 材料保管员; 批次牌号; 完整供货制剂; 期初接收期末; 净 kg; 聚合物添加剂水分检验; 回料批; 油领退 | 由材料保管员保留未除的原始期间耗用采购及组分分账，核对实际领退存称量；此处不按 Q 分配。含全部失败零产出和返工，不重复采购内含组分。 汇总标签仅为第8节唯一报告操作的结果基准，不是在采集端追加一次除法。 | kg | 每次接收领用及结账 | 匹配交付批群的实际生产历史，含前期结转 | 单丝厂及选定生产线 | 每 1 kg 参考流 | 校准秤; 发票; COA/SDS; 对账 |
| cp_energy_make | monofilament_make | 制造用电 | 分表及运行日志 | owner 生产线能源工程师; 表起止; kWh; 时段; 电压; 国家; 运行待机失败批; 干燥; 泵; 空压机; 拉伸退火卷绕负荷; 共享证据 | 能源工程师记录全部应归属运行辅助负荷的原始积分 kWh，主表对账优先直接归属。若用实测功率，仅按实际时长积分一次；积分读数不再乘时间，此处不除。 汇总标签仅为第8节唯一报告操作的结果基准，不是在采集端追加一次除法。 | kWh; MJ | 每班及生产期 | 完整匹配生产历史，含零产出期 | 制造及电动公用工程 | 每 1 kg 参考流 | 表校准; 负荷日志; 电压供应者; 分配证据 |
| cp_water | monofilament_make | 外部水及液体废水 | 水系统平衡及检验 | owner 公用工程工程师; 补水表; 积分体积; 温度密度; 水槽期初末; 循环; 排液溢流液滴; 成品保留水分; 废水质量; 组分检验 | 公用工程工程师保留原始外部补水及各物理出口，读取实际水系统记录。内部周转非新水。独立测量状态密度、废水及聚合物成品空气含水，保留所有存量变化，不归一化。 汇总标签仅为第8节唯一报告操作的结果基准，不是在采集端追加一次除法。 | kg; m3 | 计量时段及换槽 | 同生产历史及库存切点 | 淬冷拉伸及实际清洗出口 | 每 1 kg 参考流 | 水表; 密度状态证据; 废水检验; 去向账 |
| cp_release | monofilament_make | 新增质量放行单丝 P 及 WIP | 批生产质量账 | owner 生产质量主管; 唯一批; 净质量; 卷芯皮重; 实测长度; dtex; 直径; 牌号形态; 水分调湿; 首次验收; 失败返工; WIP 期初末质量负荷向量 | 质量主管用校准秤称调湿商品净重并作批特定几何线质量试验。首次正生产放行仅记一次原始 P，复验不新记 P。保留未完工失败批及 WIP 结转负荷。此处不除 P 或 Q。 汇总标签仅为第8节唯一报告操作的结果基准，不是在采集端追加一次除法。 | kg; m; dtex; mm | 每批及 WIP 切点 | 服务交付批群的全部实际生产期间 | 选定生产线至入库交接 | 每 1 kg 参考流 | 首验标识; 校准; QC; WIP 工序负荷对账 |
| cp_waste_make | monofilament_make | PA6 废料及废油 | 分类称重及交接 | owner 废物保管员; 行物质; 污染水分; kg; 发生批; 内返工; 废物期初末; 处理去向 | 废物保管员保留未除的逐股物理称量，核对内返料和外送。含失败批废品，不自动抵扣避免产品。 汇总标签仅为第8节唯一报告操作的结果基准，不是在采集端追加一次除法。 | kg | 每次发生及外运 | 匹配实际生产历史 | 制造废物门 | 每 1 kg 参考流 | 秤; 分类; 交接单; 处理合同 |
| cp_species | monofilament_make | 净气相水及己内酰胺 | 物种采样及空气平衡 | owner 环境工程师; 物种及已知 CAS; 介质; 进出口湿度; 干空气质量; 积分气量或流率时间; 温度压力; 浓度; 捕集; 液滴; 检出限; 不确定性 | 环境工程师保留原始进出口空气与化合物记录，对流率仅积分一次或直接用积分体积，仅在匹配状态干空气基准扣背景。实际物种独立于总体物理元素平衡确定，不拟合残差或 COD，不假定反应水，此处不归一化。 汇总标签仅为第8节唯一报告操作的结果基准，不是在采集端追加一次除法。 | kg; m3 | 代表生产期及实际排放事件 | 完整匹配运行覆盖，含失败 | 声明子介质的实际排气及车间外排 | 每 1 kg 参考流 | 实验室方法; 空白; 湿度状态仪器; 检出覆盖限制 |
| cp_stock | dispatch | 内部入库成品库存及 PA6 废品 | 仓储质量负荷账 | owner 仓库保管员; 配对放行入库标识; P; 期初末成品 kg; 原批负荷向量; 退回返工; 损伤废品 kg; 仓储时长; 发运门 | 仓库保管员按产品路线状态原批记录未除成品及 WIP 接口流转，保留前期负荷及本期仓储增量。生产仓储分账核对；不除，也不把期末成品当第二项生产产出。 汇总标签仅为第8节唯一报告操作的结果基准，不是在采集端追加一次除法。 | kg | 每次流转及结账 | 交付批群全部期间及仓储日 | 实际仓库退回返工门 | 每 1 kg 参考流 | 配对批; 盘存; 工序负荷账; 退回废品记录 |
| cp_energy_dispatch | dispatch | 仓储包装搬运用电 | 电分表及仓储时长账 | owner 仓库能源主管; 原始 kWh; 控湿; 仓储日; 重绕; 包装; 装车; 充电损耗; 待机; 共享负荷归属; 电压地理 | 仓库能源主管保留原始期间分子，包括包装失败退回返工托运及期末库存仓储增量，并按负荷时长归属。未交付库存负荷结转，不假定全部仓储电耗归当期发运。此处不除。 汇总标签仅为第8节唯一报告操作的结果基准，不是在采集端追加一次除法。 | kWh; MJ | 每计量期及批停留 | 匹配仓储交付历史，含期初成品 | 实际仓储包装装车 | 每 1 kg 参考流 | 表日志; 充电记录; 仓储时长分配证据 |
| cp_pack | dispatch | 卷芯纸箱包装膜及分类废物 | 组件称量库存账 | owner 包装主管; 完整组件供应者; 耗用 kg; 期初接收期末; 复用芯轮次损失; 废料; 交付包装皮重; 卷芯质量; 未放行包装批 | 包装主管逐项称完整组件及废物，保留原始库存耗用与实际复用损失记录。复用卷芯按有证据实际服务轮次归属，卷芯不计商品 kg。不用通用整包混合物，此处不归一化。 汇总标签仅为第8节唯一报告操作的结果基准，不是在采集端追加一次除法。 | kg | 每包装批及结账 | 匹配交付批群及其留存库存 | 实际卷芯和发运包装门 | 每 1 kg 参考流 | 组件秤; 供应者规格; 复用账; 皮重; 废物单 |
| cp_delivery | dispatch | 终端实际净交付 Q | 唯一托运及退回核对 | owner 发运质量主管; 批托运唯一标识; 实际正向发运 kg D; 退回 kg R; 退回冲减; 再发链接; 校准毛皮净重; 水分调湿; 实际验收净 Q; 未放行未交付排除 | 发运质量主管保留未除的原始 D、每项 R 及物理批与先前交付计入。匹配发运验收及净重，冲减退回计入并链接再发，使每份验收物理 kg 仅贡献一次。跨期退回调整原批群并恢复退回负荷。保留库存结转，此处不除任何原始分子。 汇总标签仅为第8节唯一报告操作的结果基准，不是在采集端追加一次除法。 | kg | 每托运退回及结算 | 明确交付批群，退回已结算或披露暂定修正 | 工厂净发运门，非客户使用门 | 每 1 kg 参考流 | 发运退回验收; 校准扣皮; 批群去重; 水分记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_units | make_electricity; dispatch_electricity; quench_makeup; process_effluent; water_vapour; caprolactam_air | 归属前将原始表检验记录换为各行单位：kWh*3.6 = MJ；原始长度 l*M/L = kg 仅限同调湿批实测。液气换算用独立实测状态密度湿度。积分体积不再乘时长。本规则不除 Q。 | cp_energy_make; cp_energy_dispatch; cp_water; cp_species; cp_release; cp_delivery | raw amount A_i in row unit |  |
| cohort_attribution | all inventory rows | 每个负荷分量 i 按 A_i = B_open,i + B_period,i + B_return_correction,i - B_close,i - B_other_cohort,i 归属。B_open 保留期初 WIP 成品负荷，B_period 含完整实际匹配原始期间投入及应归属共享仓储返工负荷，B_close 为独立识别的期末 WIP 未交付成品结转，B_other_cohort 为有记录的另一产品路线状态批群转移，非任意残差。保留全部原始记录；独立识别的期末 WIP 和未交付成品向量向后结转。失败零产出及不可恢复废品处理按实际因果批群归属，其他批群交接明确核对。退回库存从原计入批群恢复负荷，不重复采购不造产出。所得为归 Q 的未除 A_i，非已归一化系数。 | cp_release; cp_stock; cp_material; cp_energy_make; cp_energy_dispatch; cp_delivery; cp_waste_make; cp_pack; cp_water; cp_species | undivided cohort amount A_i and retained ending burden vectors |  |
| delivery_quantity | delivered_monofilament | Q 为声明交付批群中唯一验收物理托运经关联退回再交付修正后的实际净 kg 计入之和。用库存及原交付计入核对原始正向 D 和退回 R 流转；重复发运复验不能再添同份 kg。跨期退回修正原计入批群并恢复结转负荷。Q 排除全部未交付成品和 WIP；Q 非正或未结算且不可定量时不能支持完整数据集。 | cp_delivery; cp_stock; cp_release | Q |  |
| normalize_delivery | all inventory rows | 唯一报告归一化为 x_i = A_i / Q，Q 为同产品路线状态批群退回调整后的唯一严格正实际净交付 kg。A_i 是 convert_units 和 cohort_attribution 的未除数量，不得预先另除。参考输出为 1 千克。卡片公式及协议汇总文字指同一次操作，绝非顺序重复除。P、卷数、机器质量及产量加期末库存之和均非替代分母。 | A_i; Q; cp_delivery; cp_stock | row quantity per 1 kg reference flow |  |
| reconcile_ledgers | monofilament_make; dispatch | 生产账：期初原料 WIP 加外部材料接收，等于新增放行 P 加期末原料 WIP、外送废物及独立实测净材料释放，内回料抵消。不得再把期末成品存量加作 P 所属生产输出。仓储账：期初成品加 P 及物理退回，等于原始正向发运 D 加期末成品及实际废品返工外送，返工交接明确配对。合并抵消 P/入库后，按先前批群计入修正推得退回调整的唯一 Q。包装水油分账，质量不确定性非化学物种。 | cp_material; cp_release; cp_stock; cp_delivery; cp_water; cp_species; cp_pack; cp_waste_make | physical balances, cohort corrections and unexplained residuals |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_scope | all rows | 证明声明的 PA6 粒料直接路线、单根实心圆丝及实际供货状态。母丝分纤、多长丝 tow、共聚酰胺、切膜涂覆或化学处理须另复核适用性。 | basf-monofilaments; sanchyi-monofilament-line; yusheng-pa6-monofilament |
| quality_completeness | all protocols | 保留含失败零产出返工退回 WIP 成品期初末和结转负荷的完整实际历史。未来测量供应者缺口须披露，不能替换为零或虚构因子。明确检出限和未测范围。 | cp_material; cp_energy_make; cp_water; cp_release; cp_stock; cp_delivery |
| quality_identity | UUID-bearing cards | 保留完整 native 名称路线地点物理形态参考属性及正式中文名。中国 1–35 kV 电仅适用于该界面。PA6 分类中文总评缺陷及 100–150°C native 描述保持明确，实际牌号耐温须供应者证据。通用身份非背景供应者或科学批准。 | cp_material; cp_release; cp_energy_make; cp_energy_dispatch |
| quality_balances | water polymer air and packaging | 总体物理质量及有关 C/H/N/O 分账独立于实测真实物种、空气湿度和游离保留水核对。量化测量不确定性，不能将闭合残差标为己内酰胺、颗粒、CO2 或反应水。 | cp_water; cp_species; cp_material; cp_release; cp_stock; cp_pack |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | delivered_monofilament | 要求明确终端 Product 行、参考 UUID 一致、1 千克实际净交付基准、完整必需限定及唯一物理托运核对。内部放行入库行特意共用 PA6 UUID，须保持可见配对抵消。 |  |
| validation_measurement | all inventory rows | 所有适用最终交换用同一 1 千克交付基准，原始换算后恰一次 A_i/Q。Q 须正且有限；零产出失败批仍保留负荷。核对商品净 M/L 换算、native 属性单位链及调湿供货水分，无 tex 密度或积分体积时间错误。 |  |
| validation_stock | manufacture and dispatch | 核对独立生产仓储账及结转负荷向量。未交付期末成品不进 Q 且保留负荷，期初成品非无负荷。退回复验不能新造 P 或重复 Q。保留选定门前真实包装仓储搬运发运返工负荷。 |  |
| validation_species | water and chemical balances | 分别核验补水循环废水液滴成品水分净气相湿度，保留真实物种介质及独立排放证据。热相变不能证明化学成水；不能用两个残差来源未知项求解不确定性。缺数据为未定论，非零。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 含实际工厂净交付的制造前景 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 具有效实际批群记录及匹配上游供应者的声明水淬直接纺 PA6 单丝路线 |
| excluded_use | 整个 CPC35530 覆盖、strip 薄膜包装带、多长丝 tow、医用寿命等价、聚合清单及自动供应者牌号认证 |
| required_metadata | PCR 标识版本; 商品牌号形态直径 dtex; 水分调湿; 场址; native 限制; 工艺配置; 生产交付期间; P/D/R/Q; WIP 成品质量负荷结转; 退回链接; 包装; 实际供应者; 分配截断 |
| required_quality_disclosure | 表称重物种覆盖及不确定性; 失败返工库存归属; 未解流 UUID 供应者; 来源限制; native 分类翻译债务; 未核耐温描述; 缺失环境范围; 科学复核 pending |
| update_trigger | 牌号聚合物直接纺路线、拉伸供热、整理、商品水分、几何、交付门、退回库存归属、供应者地理变化或新反证 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0, 30 June 2025, printed p174, 35510/35520/35530 and 36310; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 当前分类名称及相邻边界；35530 注释未提供工业配方或清单，也不建立已接受映射。 |
| wco-hs2022-ch54 | official_guidance | WCO, HS 2022, Chapter 54, note 1 and headings 5402/5404; https://www.wcotradetools.org/en/harmonized-system/2022/en/1154 | 物理区分：合成单丝至少 67 dtex 且任何横截面尺寸不超过 1 mm，与更细长丝纱和塑料型材区分；strip 为另一形态。HS 证据补充当前 CPC 简短描述，不宣称新对应关系已获接受。 |
| basf-monofilaments | handbook | BASF, Monofilaments, publisher web snapshot 16 October 2026; https://chemicals.basf.com/global/en/Monomers/polyamides-and-precursors/monofilaments | PA6 牌号及直接挤出、冷却、拉伸和松弛；排除 PA6/66 共聚酰胺牌号和粗型材案例，不采用数值工艺设定或使用温度等级。 |
| basf-extrusion-guide | handbook | BASF, Ultramid Properties and Extrusion Processing Guide, undated guide (PDF metadata October 2021), pp10-11 and14-15; https://chemicals.basf.com/dam/jcr%3A794caec6-5ccb-4345-8cc5-26f39840adca/basf/chemicals/north-america/nylon-polyamides/gated-pdfs/BASF_Ultramid_Properties_and_Extrusion_Processing_Guide.pdf | 单丝工艺分解、预干燥防潮树脂供货及牌号/添加剂区分；表5仅为案例，不是选定工厂或清单因子。热分解描述要求独立物种证据，不自动产生排放。 |
| sanchyi-monofilament-line | handbook | SAN CHYI MACHINERY, Monofilament Extrusion Lines, SC-MFP / SC-MFN, publisher rendered-DOM snapshot 16 October 2026; https://www.sanchyi.com/catalog/index.php?index_m1_id=23 | 独立设备厂家支持熔体过滤挤出、水淬、电热水浴拉伸、PA 追加热风拉伸、热风退火及收卷。厂家提供多聚合物和卷绕形式，仅声明的 PA6 配置适用；无产能或铭牌能耗默认值。 |
| yusheng-pa6-monofilament | handbook | YUSHENG, Nylon Monofilament Yarn, Nylon 6 specification table, publisher web snapshot 16 October 2026; https://www.yushengmax.com/products/nylon-monofilament-yarn/ | 商品 PA6 单根实心丝身份，包括公称 0.20 mm 产品。厂家另有母丝分纤路线，本方法排除。0.30 mm 栏线密度/比强度存在未解量纲不一致，不作换算系数。不采用供应商配方、耐温等级、公差或性能默认值。 |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment, Detailed guidance, first edition March2010, §7.9.3, printed257–258/PDF277–278; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 用于归因情境下共用生产、仓储及包装负荷的直接归属、虚拟细分与逐流决定性物理因果关系。不提供PA6牌号、操作配方、工厂数量、损耗/收率/强度因子、通用质量分配或替代抵扣，也不声称手册逐字规定本PCR的库存账实现。其他框架须独立审查与目标的一致性。 |
