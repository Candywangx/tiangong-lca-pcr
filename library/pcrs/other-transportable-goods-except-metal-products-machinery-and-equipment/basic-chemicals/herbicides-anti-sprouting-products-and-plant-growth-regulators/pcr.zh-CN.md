---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.herbicides-anti-sprouting-products-and-plant-growth-regulators
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 草甘膦单铵盐湿法挤出水溶性颗粒制剂

## 1. 范围与适用性

本 PCR 仅覆盖以外购干燥草甘膦单铵盐、整份供货的 Ethomeen T/25、PEG 8000 挤出助剂和水生产的单活性成分草甘膦单铵盐水溶性颗粒除草剂。边界路线采用 monsanto-glyphosate-sg-1994 实施例 1 的加热预混、粉体混合、篮式挤出、流化床干燥和筛分结构。每个数据集对应一个实际配方、品级、场址和供货颗粒状态。该示例是实验室披露，并非工业配方、实测收率、排放因子或工厂调查。其标称干配料百分比未包含另加的水，也没有报告最终回收质量；不得把这些投料或实验运行时间照搬为生产强度。

排除草甘膦酸合成及成盐、其他反离子、液体可溶性浓缩剂、悬浮剂、分散后不溶的水分散粒剂、复配活性制剂、抗萌芽制剂、植物生长调节剂及其他除草剂。干燥和筛分是本路线的实质步骤；活性成分、盐型、物态、载体或制造路线不同的制剂须重新判断适用性。排除出厂后的配送、药箱稀释、喷施、药效、处理面积、使用阶段排放及包装处置。每公顷施药量不作为生产参考数量。

FAO 284/SG（2014 年 11 月，印刷页 10–11）独立描述草甘膦盐水溶性颗粒及含量和质量维度。凡声称使用该规格，仍须遵守其厂家及评价范围、组成部分评价报告和核查现行版本的要求。本 PCR 仅采用其物态与质量背景，不宣称专利制剂或未来供货方符合 FAO 规格或已获等同性认定，也不把其中数值允差设为通用限值。

UNSD CPC 3.0 第 167 页将 34663 与危险农药 34666、其他项 34669 分列，未提供额外解释正文。所选单草甘膦制剂仅是较窄的分类候选，须核查其实际完整组成和用途。WCO HS 2022 第 38 章子目注释 1–2 列出特定物质，其中未列草甘膦。这仅提供分类背景，不构成已接受映射或通用危险性判定。分类叶不得定义混合输出。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.herbicides-anti-sprouting-products-and-plant-growth-regulators |
| classification_refs | CPC 3.0 34663；仅单活性水溶性颗粒制剂的较窄范围 |
| covered_products | 一种以外购干燥单铵盐、供货 Ethomeen T/25、PEG 8000 和水生产的实际草甘膦单铵盐 SG |
| excluded_products | 其他活性、反离子或助剂；复配活性；SL、SC 和 WG；活性合成或成盐；下游使用 |
| representative_product | 实施例 1 类型的水溶性颗粒；声明实际酸当量、盐含量、残余水分和放行规格 |
| production_route | 外购干燥盐→粉体准备；表面活性剂/PEG/水加热预混→混合→篮式挤出→流化床干燥→筛分→验收与供货准备 |
| market_state | 制剂工厂门口验收合格的供货态水溶性颗粒净质量；声明实际包装、国家、场址和 SKU |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造并供应所声明的草甘膦单铵盐 SG |
| How much | 1 kg 验收合格供货颗粒净质量 |
| How well | 按实际放行规格核查活性/反离子身份、酸当量及盐含量、水分、溶解性、粉尘性、流动性、相关杂质和储存质量；不宣称药效等效 |
| How long or cycle | 一个匹配的制造与验收期间；不声明施药寿命 |
| reference_flow_link | finished_sg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 农药 `80d8c492-83e7-4ba8-9cf5-0dbac200513b` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 单活性草甘膦; 单铵盐身份和反离子含量; SG 可溶颗粒物态; 实际酸当量及盐 g/kg; 残余水分和载体组成; 干盐供货品级; 整份供货 Ethomeen T/25 组成及 PEG 8000 品级; 实际路线及公用工程结构; 放行规格和检测结果; 制造商/场址/国家; SKU 和批次; 报告期间和验收输出群组; 净重/毛重及包装 BOM; 上游 provider 地理/技术; 原生通用身份限制与分类瑕疵 |

原生参考记录为 Product flow，允许包括除草用途在内的农药物质或混合物。唯一名称分量为 Pesticide / 农药；未指定 CAS、品级、剂型、路线、混合类型及供货地理，未声明 CN/HK 或区域配送。本 PCR 的限定信息将其绑定到一种实际颗粒制剂，而非农药集合。原生 35499 分类属于已披露的不一致分类元数据，需来源治理；它不能推翻一致的宽泛物理身份，也不能建立 CPC 映射。完整原生属性只有 Mass，参考内部 ID 为 0，meanValue 为 1；按所指向的精确质量属性和单位组链到达 kg。次级属性系数不得充当密度或活性比例。缺失限定信息的数据集不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用扣除包装的验收供货颗粒净质量。所有行采用每 1 kg 参考流，且使用 cp_acceptance 采集的同一正验收输出群组。 |
| salt_active_water | 盐、预混料和颗粒 | 质量和独立测定组成 | kg | 整份供货盐/助剂质量、草甘膦酸当量、反离子质量和水分别记账。声明含量基准及实际物种，不以酸替代单铵盐、干质量替代供货质量或标称配方替代回收产量。 |
| raw_unit_conversion | 所有清单行 | 原始计量属性 | original units | 归一前先换算原始单位。速率×时长仅积分一次；已积分的气/液体积或能量总量不得再乘时间。体积转质量须有声明温度的独立密度，不使用流属性系数。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制剂场址的外购干燥草甘膦单铵盐、供货 Ethomeen T/25、PEG 8000、配制水、公用工程及实际包装 |
| starting_condition_role | 前景从供货配料开始，包括粉体准备、加热预混、湿混、挤出、干燥、筛分、质量验收及供货准备 |
| product_classification_scope | 一种单活性草甘膦单铵盐 SG；窄于混合 CPC 34663 分类叶 |
| recursive_input_rule | 外购成品 SG 或外部退回已售材料为独立整份输入，保留既有负荷及验收历史；内部循环是转移，不是新采购或新正产量 |
| upstream_dataset_requirement | 匹配整份供货盐的品级及水分、Ethomeen T/25 完整供货组成、PEG 分子量品级、公用工程技术/地理和包装供货方；未经论证拆分，不以纯组分 provider 替代整份商品混合物 |
| disclosure | 披露实际场址/国家、期间、SKU、产品放行状态、起始物料、供热、质量/活性/水平衡、退货/返工/在制品、遗漏及 provider 限制。专利未建立工厂地理或干燥器能源载体。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | 前景 | 采集时分别保留下列三个过程责任单元。包括实际粉体准备及剔除物/细粉处理；不得把外购干盐当成成品 SG 而删去干燥和筛分。 | monsanto-glyphosate-sg-1994 |
| b_utilities | 公用工程和释放 | 热量卡仅表示实际使用时外供的间接干燥热服务，按净交付热量计量。电加热纳入该过程电表。若实际跨界交换是蒸汽或场内燃料，须在使用数据集前添加各自原子行，明确建模冷凝水/燃烧及排放；不得同时计入购买热及其源能源。包括除尘、实际清洗及每项实际环境释放；未测量不代表零。 |  |
| b_supply | 上下游 | 外购物料和服务的上游生产只链接一次。前景既不是活性合成，也不是农场施药。任何场内成盐、新配料或实质不同的公用工程/路线均须依据证据明确扩展范围和清单。 | monsanto-glyphosate-sg-1994 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_blend | 粉体准备及加热湿混 | required | 本路线每个数据集 | 前景配料准备及预混 | 计量湿混料转移；按终端验收 SG 归一 |
| p_granulate | 挤出、流化床干燥及筛分 | required | 本路线每个数据集 | 前景颗粒成形及水分脱除 | 计量筛后颗粒转移；按终端验收 SG 归一 |
| p_finish | 质量验收、包装及供货准备 | required | 每个数据集；仅实际供货包装纳入 | 终端验收产品及出厂交付状态 | 1 kg 验收供货 SG 净质量 |

### 过程：粉体准备及加热湿混（`p_blend`）

#### 输入

##### 产品流

###### 外购草甘膦盐（`dry_salt`）

记录整份供货干盐原料、实际含量、残余水分和反离子。专利采用外购 Roundup WSD 并准备粉体；本前景不含酸转盐反应。

- 选定流: 干燥草甘膦单铵盐供货原料
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_blend 保留完整匹配原始期间分子 R_dry_salt，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_blend
- 来源: monsanto-glyphosate-sg-1994

###### 外购表面活性剂（`surfactant`）

采用包含载体或水在内的整份供货商品。组分含量仅为分账，不形成第二份采购；不得推定现行供货方或以任意牛脂胺 provider 替代。

- 选定流: Ethomeen T/25 整份供货表面活性剂
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_blend 保留完整匹配原始期间分子 R_surfactant，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_blend
- 来源: monsanto-glyphosate-sg-1994

###### 外购挤出助剂（`peg8000`）

记录实际供货 PEG 8000 品级和组成。实施例 1 采用 Carbowax PEG 8000；其他分子量或环氧丙烷品级不自动相容。

- 选定流: PEG 8000 挤出助剂
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_blend 保留完整匹配原始期间分子 R_peg8000，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_blend
- 来源: monsanto-glyphosate-sg-1994

###### 另加配制水（`formulation_water`）

仅计量独立取得并加入预混的水；已含于外购盐或表面活性剂中的水留在对应整份输入分账。

- 选定流: 配制水
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_blend 保留完整匹配原始期间分子 R_formulation_water，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_blend
- 来源: monsanto-glyphosate-sg-1994

###### 混合电力（`blend_electricity`）

分表计量实际粉体准备、预混加热、混合及相关抽风；实验室微波运行时间不是工业能耗数量。

- 选定流: 粉体准备与加热混合用电力
- 流属性/单位: Energy / kWh
- 数量规则: 采用 cp_blend 保留完整匹配原始期间分子 R_blend_electricity，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_blend
- 来源: monsanto-glyphosate-sg-1994

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 湿混料转移（`wet_blend`）

转入 p_granulate 的内部湿混料；保留质量、水/活性组成和结转负荷。它不是已验收 SG，也不是第二个最终参考输出。

- 选定流: 草甘膦单铵盐湿挤出混料
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_blend 保留完整匹配原始期间分子 R_wet_blend，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_blend
- 来源: monsanto-glyphosate-sg-1994

##### 废物流

##### 基本流

### 过程：挤出、流化床干燥及筛分（`p_granulate`）

#### 输入

##### 产品流

###### 进入湿混料（`wet_blend_in`）

按转移 ID、组成及负荷账与 wet_blend 匹配；此内部转移不得生成额外上游采购。

- 选定流: 草甘膦单铵盐湿挤出混料
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_granulate 保留完整匹配原始期间分子 R_wet_blend_in，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_granulate
- 来源: monsanto-glyphosate-sg-1994

###### 造粒及干燥电力（`granulation_electricity`）

计量挤出机、干燥风机、筛机、除尘及实际电加热；共用设备按实测负荷分配，包括失败批次。

- 选定流: 挤出、流化床干燥与筛分用电力
- 流属性/单位: Energy / kWh
- 数量规则: 采用 cp_granulate 保留完整匹配原始期间分子 R_granulation_electricity，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_granulate
- 来源: monsanto-glyphosate-sg-1994

###### 有条件外购干燥热（`drying_heat`）

仅用于实际外供热服务，声明温度、回流条件和净交付热。全电干燥时须证明本行不存在；蒸汽或燃料交换须有各自的行和范围。

- 选定流: 流化床间接干燥用外购工艺热
- 流属性/单位: Energy / MJ
- 数量规则: 采用 cp_granulate 保留完整匹配原始期间分子 R_drying_heat，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_granulate
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 筛后颗粒转移（`screened_sg`）

按水分及含量转入 p_finish；通过筛网不等于最终放行或新正产量。按唯一内部 ID 记录细粉/粗粒循环。

- 选定流: 放行前筛后草甘膦单铵盐水溶性颗粒
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_granulate 保留完整匹配原始期间分子 R_screened_sg，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_granulate
- 来源: monsanto-glyphosate-sg-1994

##### 废物流

###### 离开系统的剔除颗粒（`offspec_granules`）

仅称量离开系统送处理的材料。返线细粉或粗粒不得同时作废物输出和新鲜输入；保留既有及再处理负荷。

- 选定流: 待处理的不合格草甘膦单铵盐颗粒
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_granulate 保留完整匹配原始期间分子 R_offspec_granules，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_granulate
- 来源: monsanto-glyphosate-sg-1994

###### 收集粉尘处置（`collected_dust`）

称量该实际制剂粉尘废物流并测定水分/活性。内部回用粉尘仍为内部转移；过滤捕集的颗粒不是大气释放。

- 选定流: 待处理的收集草甘膦单铵盐制剂粉尘
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_granulate 保留完整匹配原始期间分子 R_collected_dust，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_granulate
- 来源: monsanto-glyphosate-sg-1994

##### 基本流

###### 干燥水分释放（`water_vapour`）

依据独立水分及排气/冷凝水测量确定脱水量和不确定度。本制剂路线不假定反应水；不得用同一个残差同时推定未知水量和未知废物出口。

- 选定流: 水蒸气，排入空气
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_granulate 保留完整匹配原始期间分子 R_water_vapour，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_granulate
- 来源:

###### 实际盐颗粒释放（`airborne_salt`）

实际存在时按合理方法测量或量化盐特定的大气负荷和介质。不得采用田间喷施比例；粉尘总量与组分结果作为可核对分账，避免重复计入。

- 选定流: 草甘膦单铵盐颗粒，排入空气
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_granulate 保留完整匹配原始期间分子 R_airborne_salt，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_granulate
- 来源:

###### 实际 PEG 颗粒释放（`airborne_peg`）

实际排放时单独量化 PEG 颗粒；捕集粉尘与大气粉尘去向不同。不得以专利标称百分比推定组分比例。

- 选定流: PEG 8000 颗粒，排入空气
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_granulate 保留完整匹配原始期间分子 R_airborne_peg，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_granulate
- 来源:

###### 实际供货表面活性剂气溶胶释放（`airborne_surfactant`）

实际存在时记录该具体供货混合物气溶胶，披露组分/介质不确定性。化学物种特定表征须有实际组分证据及独立交换解析，不得虚构纯物种因子。

- 选定流: Ethomeen T/25 气溶胶，排入空气
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_granulate 保留完整匹配原始期间分子 R_airborne_surfactant，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_granulate
- 来源:

### 过程：质量验收、包装及供货准备（`p_finish`）

#### 输入

##### 产品流

###### 进入筛后颗粒（`screened_sg_in`）

匹配 screened_sg 转移身份、含量、水分及结转负荷；最终验收供货量只在 finished_sg 计入。

- 选定流: 放行前筛后草甘膦单铵盐水溶性颗粒
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_finish 保留完整匹配原始期间分子 R_screened_sg_in，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_finish
- 来源: monsanto-glyphosate-sg-1994

###### 有条件 HDPE 容器（`hdpe_container`）

仅纳入实际供货 HDPE 容器，记录质量、树脂品级及供货方；不纳入产品净质量分母。

- 选定流: HDPE 颗粒包装容器
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_finish 保留完整匹配原始期间分子 R_hdpe_container，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_finish
- 来源:

###### 有条件 PP 封盖（`pp_closure`）

记录一个实际封盖组件，不从专利推定；其他封盖材质须有各自行。

- 选定流: 聚丙烯容器封盖
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_finish 保留完整匹配原始期间分子 R_pp_closure，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_finish
- 来源:

###### 有条件纸标签（`paper_label`）

采用实际标签 BOM、质量及组成；件数转质量须代表性皮重抽样及不确定度。

- 选定流: 纸质产品标签
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_finish 保留完整匹配原始期间分子 R_paper_label，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_finish
- 来源:

###### 有条件运输纸箱（`carton`）

实际供货时纳入一个瓦楞纸箱；不采用通用包装集合或假定包装配置。

- 选定流: 瓦楞运输纸箱
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_finish 保留完整匹配原始期间分子 R_carton，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_finish
- 来源:

###### 成品处理电力（`finish_electricity`）

计量实际灌装、搬运、验收及经分配的共用辅助用电。

- 选定流: 放行与灌装用电力
- 流属性/单位: Energy / kWh
- 数量规则: 采用 cp_finish 保留完整匹配原始期间分子 R_finish_electricity，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_finish
- 来源:

###### 实际清洗水（`cleaning_water`）

记录实际成品设备清洗水，包括失败批次后的冲洗。其他过程清洗归对应责任单元并单独增行。

- 选定流: 设备清洗水
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_finish 保留完整匹配原始期间分子 R_cleaning_water，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_finish
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收供货草甘膦单铵盐 SG（`finished_sg`）

唯一终端 Product 输出。限定信息将原生通用身份绑定到所选实际 SG。Q 为按验收 ID 唯一计数并与发运及库存核对的新验收供货产品净质量，排除内部循环和重复验收。

- 选定流: 农药 `80d8c492-83e7-4ba8-9cf5-0dbac200513b`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: fixed_value
- 适用范围: product_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: method_formula
- 采集协议: cp_acceptance
- 来源: fao-glyphosate-sg-2014

##### 废物流

###### 实际送处理清洗废液（`cleaning_effluent`）

测量整份废液及活性/水组成；场外处理及其后续释放在链接的处理数据集中保留，不重复作直接基本排放。COD 本身不是物种质量或反应水平衡。

- 选定流: 草甘膦单铵盐制剂清洗废液
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_finish 保留完整匹配原始期间分子 R_cleaning_effluent，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_finish
- 来源:

###### 未放行成品送处理（`rejected_finished`）

分别记录放行失败、已售退回、返工、留存库存及处理去向；不得悄然扣掉其负荷或把同一质量算作第二份验收输出。

- 选定流: 待处理的不合格成品草甘膦单铵盐 SG
- 流属性/单位: 质量 / kg
- 数量规则: 采用 cp_finish 保留完整匹配原始期间分子 R_rejected_finished，包括已归属的失败及继承在制品/退回/返工负荷；原始单位换算并明确期末结转后，只除以唯一正验收供货净质量 Q 一次，得到每 1 kg 参考流数量。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: calculated_from_collection
- 采集协议: cp_finish
- 来源:

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_primary | 所选 SG | 所选来源未建立可售联产品。失败、废物和返工的完整匹配负荷归入验收 SG 群组；内部循环既不是联产品，也不产生避免产品抵扣。 |  |
| a_shared | 共用服务或实际联产品 | 优先分开物理分表。仍有共用服务时，记录实际因果分配依据，并使所有份额与原始总量核对。真实可售联产品须明确身份、数量、分配方法及敏感性审查；不得默认质量/经济份额或删去联产品。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_blend | p_blend | 配料、电力及湿混料转移 | batch_ledger | 批次及转移 ID；责任人；整份供货质量；含量/反离子；水/载体比例；秤皮重；电表起止；速率或积分体积标志；温度；期初/期末在制品数量及结转负荷；失败批次；内部返回 | 责任人：混合操作员及场址计量负责人。使用校准秤、分表、供货产品证书及批次/转移核对；独立检测相关组成。 汇总及负荷归属：保留原始总量及全部内部转移 ID；将期初负荷及期末结转分配到匹配验收群组；归一一次前将原始分子各项交给 calc_period。 | kg; kWh; original meter units | 每批及每个计量间隔 | 同一完整报告期间，包括开车、失败、清洗及期末结账 | 一个实际制剂生产线及其分配共用辅助设施 | 每 1 kg 参考流 | 秤及表校准；完整供货组成；带时间的批次失败和在制品/负荷账 |
| cp_granulate | p_granulate | 挤出、干燥、筛分、剔除物及释放 | unit_operation_ledger | wet_blend 转移 ID 和质量；水分/盐含量；干筛后输出；细粉/粗粒/循环 ID；电力；交付热及回流状态；排气水/冷凝水；粉尘捕集及排放物种；零产出运行；期初/期末在制品及继承负荷 | 责任人：造粒/干燥操作员及环境测量负责人。独立称量转移/剔除物，逐能源载体计量，测量水分及实际出口组成/介质和不确定度。 汇总及负荷归属：配对内部转移且不重复采购；保留失败完整负荷及库存变化。分别保留质量、元素、实际物种及水账；将分配原始负荷一次交给 calc_period。 | kg; kWh; MJ; original gas/liquid units | 每批、每次循环及每个计量/排放间隔 | 完整匹配期间，包括失败/零产出及再处理生产 | 一个实际挤出/干燥/筛分系统及其分配的控制设施 | 每 1 kg 参考流 | 水分/含量方法及不确定度；排气/冷凝水测量；热表；循环及废物联单 |
| cp_finish | p_finish | 筛后转移、包装、清洗及剔除物 | finishing_ledger | screened_sg 转移 ID；供货方/SKU/包装 BOM；净重/毛重/皮重；实测组件质量；电力；清洗水及整份废液数量/组成；放行失败；已售退回；返工路线；库存及结转负荷 | 责任人：灌装主管及环境负责人。称量实际供货组件和剔除产品，分表计量电力/水并采样废液；核对转移和外部退回身份。 汇总及负荷归属：保留全部原始输入/负荷、未放行输出及退回产品继承负荷。包装不计入净 Q；将分配负荷交给 calc_period，不再第二次产品归一。 | kg; kWh; count with measured tare | 每批次及每次清洗或退回事件 | 完整匹配制造/验收期间及库存核对 | 一个成品生产线及其分配场址服务 | 每 1 kg 参考流 | 包装 BOM 及皮重样本；校准秤/表；废物联单；退货/返工及库存/负荷审计 |
| cp_acceptance | p_finish | 唯一终端验收产量 Q 及质量 | acceptance_ledger | 唯一验收 ID；产品/SKU/盐型/剂型/路线；毛重/皮重/净重；水分；酸当量和盐含量基准；相关杂质/质量检测；批次谱系；发运及期初/期末验收库存；退货；重复放行标志 | 责任人：场址独立质量放行人员及库存会计。采用校准净重称量及实际放行规格检测，并核对发运及库存；不得仅由过筛或销售发票推定验收。 汇总及负荷归属：Q 是唯一新验收供货净产量；排除重复验收、内部循环及已验收退货转售。按带符号流转核对：期初验收库存+新验收+外部退回-发运-期末库存-处理/转出=0。退货返工须保留原负荷及原抵扣历史，仅将真正新增验收质量计一次。归一须 Q 为正；Q=0 时保留原始负荷供后续分配。 | kg net supplied product; g/kg assay | 每次验收及撤销事件 | 同一匹配期间及有记录的跨期群组谱系 | 同一场址、同一实际 SG 产品/路线/盐型/供货状态 | 每 1 kg 参考流 | 放行人员签字；完整限定信息/检测记录；唯一 ID 及发运/库存/退货核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_period | 所有原始期间清单分子 | 逐交换保留原始实测数量并换算单位，再按批次/转移谱系将 R 归属验收群组：包括期初在制品及退回物料继承负荷、当期输入、全部失败/零产出/返工负荷；期末在制品/未放行负荷须明确结转。核对期间总量=分配给 Q 的量+期末结转负荷+另有依据的其他去向。负数更正须链接原 ID。不得丢弃失败批次或重复计入内部循环。随后只对 cp_acceptance 的正 Q 作一次 q=R/Q；Q=0 禁止归一输出且保留原始账。 | cp_blend; cp_granulate; cp_finish; cp_acceptance | 每 1 kg 参考流数量及明确结转负荷账 |  |
| calc_mass | 配料、中间转移、颗粒及全部出口 | 在原始期间层面，跨供货输入、产品、废物、释放及在制品核对物理质量及独立检测的草甘膦酸当量、铵/反离子和相关元素账。整份外购制剂的载体/水只包含一次；组分分账不增加采购。匹配内部转移对且防止重复上游负荷。不得把 kg 酸当量与 kg 盐当成同一质量合并。 | cp_blend; cp_granulate; cp_finish; cp_acceptance | 独立质量/活性/反离子/元素闭合及不确定度 |  |
| calc_water | 物理水与实际物种 | 适用时独立测量供货游离/结构水、另加水、产品/在制品余水、废液、冷凝水及蒸气。本边界路线是配制和蒸发，不是草甘膦合成或中和，不预设反应水。任何实际化学转化须有独立支持的物种/反应程度及反应水证据并重新审查范围。不得以一个闭合残差同时拟合未知蒸气和未知废物，也不以 COD 作物种平衡。 | cp_blend; cp_granulate; cp_finish | 独立物理水及物种账，而非拟合排放因子 |  |
| calc_units | 计量、包装及含量换算 | 实际速率仅对其测量区间积分一次；已积分体积在密度换算前保持不变。包装净含量=毛重-实测皮重。组件数量×实测代表性组件质量可确定包装质量并记录不确定度。酸当量或盐质量=声明湿/干基的实测含量比例×对应实测物理质量；任何摩尔换算须有独立记录的盐身份/物种。专利标称比例、药效剂量及由浓度标签推定的密度均不能作换算基准。 | cp_blend; cp_granulate; cp_finish; cp_acceptance | 一次归一前完成换算的原始数量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | 全部交换及 provider | 限定精确活性/盐型/剂型/路线和整份供货品级；查询/直读身份不等于 provider 相容。保留所有原生名称、CAS、备注、地理、介质和属性限制。辅助 UUID 空缺须在数据生产时匹配，不得虚构身份。 | 供货证书、完整组成、原生直读记录及实际 provider 范围 |
| q_complete | 期间与群组 | 保留实测原始分子、唯一正验收分母、失败、退回、返工及期初/期末在制品和结转负荷。报告遗漏、检出限及不确定度；无证据不得将未知排放或不适用行置零。 | 签字账、校准测量及质量/物种/水核对 |
| q_release | 验收 SG | 对含量、溶解性、粉尘性、流动性、相关杂质、水分及储存质量使用实际登记/供货放行标准及方法。FAO 2014 背景保留厂家/版本限制，不是本配方认证。 | 实际质量规格、方法、检测结果及放行人员记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | 参考与终端产品 | finished_sg 是唯一选定终端 Product 输出，须具有声明参考 UUID、1 kg 供货净质量基准及全部限定信息。不得将内部 wet_blend 和 screened_sg 转移悄然改名为最终输出。 |  |
| v_period | 清单与计算 | 须有三个过程责任单元协议及 cp_acceptance、完整原始期间/负荷和在制品/退货/返工账、正且唯一的 Q 及一次归一。Q=0 或群组归属未解决时，保留原始记录且不得报告归一生产数据集。 |  |
| v_balance | 物理及化学核算 | 核查完整供货输入质量、独立活性/反离子/元素及物理水账、内部转移配对、能量单位及实际出口去向。禁止 COD/残差拟合反应水、组分重复采购、遗漏失败或虚构排放比例。使用数据集前，每项实际未列材料、包装组件、污染物种或公用工程均须按责任过程及证据增设原子行。 |  |
| v_source | 证据与适用性 | 保留专利实验室、FAO 厂家/版本限制及原生通用分类瑕疵。未来场址/SKU/provider 匹配、产品登记、科学审查或 CPC 接受均不由本方法或格式验证建立。 | monsanto-glyphosate-sg-1994; fao-glyphosate-sg-2014; unsd-cpc3-2025; wco-hs38-2022 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 为单独建模的农业或其他获准用途提供供货方特定上游 SG 制剂生产 |
| allowed_use | 仅用于具有完整数据生产证据、已限定的草甘膦单铵盐水溶性颗粒路线及供货状态 |
| excluded_use | 不得用于通用除草剂集合、活性合成、其他盐型/物态/路线、药效比较、剂量换算、田间释放或自动供货方/地理代理 |
| required_metadata | 全部参考限定信息；实际 provider/地点/技术；原始期间及库存/群组谱系；完整包装与配料组成；供热结构；分配；证据及方法 |
| required_quality_disclosure | 测量及代表性不确定度；辅助 UUID/provider 匹配缺口；排放/物种解析；来源版本/厂家限制；原生通用 35499 分类瑕疵；不暗示审批 |
| update_trigger | 活性、盐型、剂型、供货品级/助剂、路线、公用工程、包装、场址、放行规格、来源版本或实质证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| monsanto-glyphosate-sg-1994 | literature | EP0582561A1, Monsanto Company, 1994-02-09, printed/PDF page 6, General Process Description and Example 1. https://patentimages.storage.googleapis.com/be/c5/7e/9489c4b260d3e4/EP0582561A1.pdf | 仅支持外购干燥单铵盐、供货表面活性剂、PEG 8000、水及混合/挤出/干燥/筛分结构。实验室披露：不支持工业收率、最终回收质量、默认强度、地理代表性或药效等效。 |
| fao-glyphosate-sg-2014 | official_guidance | FAO Specifications and Evaluations for Glyphosate, November 2014, 284/SG, printed pages 10–11 (PDF 14–15), complete notes. https://www.fao.org/fileadmin/templates/agphome/documents/Pests_Pesticides/Specs/Glypho_2014.pdf | 仅提供独立水溶颗粒物态、酸/盐含量及质量背景。保留厂家/评价范围、组成报告及核查现行版本的限制；不证明合规/等同，也不通用采用数值限值。 |
| unsd-cpc3-2025 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, page 167, entries 34661–34669. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅支持分类名称及相邻分类叶；不提供制造方法、参考数量或已接受映射。 |
| wco-hs38-2022 | official_guidance | WCO HS Nomenclature 2022, Chapter 38, PDF page 2, Subheading Notes 1–2. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0638_2022e.pdf | 特定物质清单用于相反边界核查；须审查实际完整组成及用途。不建立 CPC 接受、通用危险性判定或 LCA 数量。 |
