---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.polymers-of-styrene-in-primary-forms
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 连续本体法通用级聚苯乙烯粒料生产

## 1. 范围与适用性

本方法覆盖以外购苯乙烯单体为主要外部原料，经热引发连续本体自由基聚合、真空脱挥、单体/溶剂冷凝回收、挤出冷却切粒及验收储存，交付非发泡、未橡胶改性的通用级聚苯乙烯粒料（GPPS）。这是供后续成型的初级树脂生产方法；其需要专门核算转化、循环回收、残余单体、低聚物及粒料交付基准。

不覆盖HIPS、聚丁二烯改性树脂、EPS可发性珠粒、已发泡或模塑制品、SAN/ABS/SBS等共聚物、间规/配位催化聚苯乙烯、悬浮/乳液路线、回收废塑料再造粒或现场制造苯乙烯单体。外购单体的上游EBSM/POSM路线属于供应背景，不等于现场聚合路线。热引发代表路线不默认投加橡胶、催化剂或化学引发剂；若实际配方投加，须先重新核对适用性，补全每一种整份制剂及独立物种账，不能把HIPS或乳液清单移植过来。

依据 `styrenics-ps-2022` 第2.1–2.3节及 `epa-ap42-ps-1991` 第6.6.3.1–6.6.3.2.1节、图6.6.3-2。欧洲行业平均报告与历史美国工艺描述仅支持物理边界和工艺结构；不作为任何场址、SKU、配方、溶剂含量、残单、产率或能耗默认值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.polymers-of-styrene-in-primary-forms |
| classification_refs | CPC 3.0 34720；仅GPPS子范围（narrower），不代表映射已接受 |
| covered_products | 所声明热引发连续本体路线的非发泡GPPS初级粒料 |
| excluded_products | HIPS；EPS；发泡/成型制品；苯乙烯共聚物；悬浮/乳液PS；废物再造粒；现场单体生产 |
| representative_product | 透明未橡胶改性GPPS粒料；数据集逐一声明实际牌号及验收限值 |
| production_route | 热引发连续本体自由基聚合、真空脱挥回收及切粒 |
| market_state | 生产者门口净验收供货固体粒料，以不含包装产品质量计；不是干聚合物或单体当量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供后续加工的GPPS初级树脂 |
| How much | 1 千克验收净供货粒料 |
| How well | 满足所声明牌号的实测验收条件；残单、水分、低聚物、助剂及粒径不能默认 |
| How long or cycle | 报告期间同牌号、同路线、同供货状态；不定义制品使用寿命 |
| reference_flow_link | out_gpps |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 通用级聚苯乙烯粒料（GPPS） `4f19f11e-7b3b-11dd-ad8b-0800200c9a66` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际厂址/地理和期间; 牌号/SKU及热引发本体路线; 无橡胶/发泡剂/共聚物证明; 完整供货态与净质量; 实测残余单体/溶剂/低聚物/水分及助剂; 分子量或熔体流动表征与试验条件; 粒料验收/拒收条件; 回收回流与排污; 供应和治理边界 |

上述限定信息必须在数据包的元数据、过程说明、参考流备注或等效位置声明。原生参考流没有指定CAS、路线或供货地，不能把这种未声明解释为任意牌号或供应方已匹配。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以1千克验收供货粒料净质量为唯一共同基准；含实际残单/助剂/水分，排除包装和游离排水。 |
| whole_formulation | in_styrene, in_white_oil | Mass | kg | 整份商业供货制剂为外部采购；含量、活性物与载体水只作组成子账。现场复配仅列真实分别购入的组分及复配负荷，不再虚列外购整份制剂。 |
| raw_units | all inventory rows | Native property | kg; MJ | 先保存原始期间数据，由convert_raw执行原生单位换算；密度须有温度/压力/组成依据，不能把次级属性系数当密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购受抑制苯乙烯及实际商业助剂/溶剂，厂内储存至验收GPPS粒料交付 |
| starting_condition_role | foreground_starting_point |
| product_classification_scope | CPC 3.0 34720的热引发本体GPPS子集；其他该叶产品不自动适用 |
| recursive_input_rule | 内部回收苯乙烯/溶剂/返工PS逐项配对，不作外购或新产量；外购GPPS需单独身份、来源与背景，不能隐藏再造粒路线 |
| upstream_dataset_requirement | 实际供应单体、每项助剂、能源、水、包装及外部废物处理的独立匹配背景；记录地区/年份/技术/完整制剂基准，缺失背景单列未覆盖 |
| disclosure | 声明现场聚合/脱挥回收/切粒、外部及现场公用工程/治理、库存/WIP、物流、排污、外排及资本品截断；无自动零耗量或零排放假设 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | p_gpps | 包括接收/储存、混合、反应循环、真空脱挥、冷凝/精馏回收、挤出冷却切粒、验收/返工/库存、可归属清洗及治理。内部循环保留流量和组成台账但不重计外部交换；单体供货背景不得替代现场聚合。 | `styrenics-ps-2022`; `epa-ap42-ps-1991` |
| boundary_complete | all inventory rows | 卡片是常见原子接口，非固定配方。任何实际其他助剂（包括整份抗氧剂/引发剂制剂）、溶剂、燃料、制冷剂、包装、治理药剂、污泥或外排物种均须在完成数据前各自新增独立原子行及采集关系；有证据证明不存在才可not_applicable，缺测不是零。 | `styrenics-ps-2022`; `epa-ap42-ps-1991` |
| boundary_water | p_gpps | 本体GPPS不等于悬浮/乳液路线。冷却浴及密封水循环不是反应溶剂水；记录补水、排污、夹带、冷凝、蒸发和实际库存。污水送处理与治理后向自然界排放分开，不重复排放整份废水及其组分。 | `styrenics-ps-2022`; `epa-ap42-ps-1991` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_gpps | 连续本体GPPS生产及回收切粒 | required | 已声明热引发GPPS路线；阶段原始记录分别保存 | foreground | out_gpps; 1 kg |

反应、脱挥回收和切粒属于一个聚合前景过程p_gpps；现场每阶段仍有独立计量和责任人。回收物流及中间熔体不冒充外部最终产品。

### 过程：连续本体GPPS生产（`p_gpps`）

#### 输入

##### 产品流

###### 外购苯乙烯单体 (`in_styrene`)

记录整份外购商业液体、含量、阻聚剂和水分、储罐期初末库存及本路线实际领用。基本排放流不是采购单体；含量核算的苯乙烯仅是组分子账，不是第二份采购。

- 选定流：含阻聚剂的商业液态苯乙烯单体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：采用第8节唯一期间计算已报告的本行交换量；所关联协议保留原始量，本卡不再计算一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_feed`
- 来源：`styrenics-ps-2022`; `epa-ap42-ps-1991`

###### 外购乙苯 (`in_ethylbenzene`)

仅在独立外购此溶剂时适用。外购苯乙烯中原有的乙苯或内部冷凝液中的乙苯仅记子账，不重复列外部输入；记录实际用量或有证据的未使用状态。

- 选定流：乙苯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：采用第8节唯一期间计算已报告的本行交换量；所关联协议保留原始量，本卡不再计算一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_feed`
- 来源：`styrenics-ps-2022`; `epa-ap42-ps-1991`

###### 外购甲苯 (`in_toluene`)

可选的溶剂采购。原生记录为工厂生产混合、CAS108-88-3，未声明供货地或固定路线；CPC35499分类与具体化学身份不一致，作为元数据债务披露。UUID仅证明物理身份，不证明供应商数量或溶剂比例。

- 选定流：甲苯 `33ac34b7-d691-4eda-8563-daef49a05157`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：采用第8节唯一期间计算已报告的本行交换量；所关联协议保留原始量，本卡不再计算一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_feed`
- 来源：`styrenics-ps-2022`; `epa-ap42-ps-1991`

###### 白矿物油添加 (`in_white_oil`)

可选加工助剂：记录整份交付油品或一个已识别的商业制剂、组成及实际领用。不得套用矿物油基本排放流，亦不得由树脂产量推定用量。

- 选定流：白矿物油（石油）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：采用第8节唯一期间计算已报告的本行交换量；所关联协议保留原始量，本卡不再计算一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_feed`
- 来源：`styrenics-ps-2022`; `epa-ap42-ps-1991`

###### 外购中压电力 (`in_electricity`)

计量聚合循环、真空、回收精馏、挤出、切粒、冷却、储存及可归属治理的电耗；匹配实际电压、地理、年份与供应方。不得将限定中国或巴西的原生供电接口无声套到未指定场址。

- 选定流：中压交流电
- 流属性/单位：交付能量 / MJ
- 数量规则：采用第8节唯一期间计算已报告的本行交换量；所关联协议保留原始量，本卡不再计算一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`styrenics-ps-2022`; `epa-ap42-ps-1991`

###### 外购蒸汽热 (`in_steam_heat`)

按所声明交付和冷凝水回流边界记录可选外购热。采用热表或蒸汽实测质量及独立支持的焓差；总热值属性本身不能证明蒸汽交付热量。不得重复增加同一外购热的锅炉燃料。

- 选定流：蒸汽交付工艺热
- 流属性/单位：交付能量 / MJ
- 数量规则：采用第8节唯一期间计算已报告的本行交换量；所关联协议保留原始量，本卡不再计算一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`styrenics-ps-2022`; `epa-ap42-ps-1991`

###### 去离子补充水 (`in_water`)

仅用于实际外供去离子补充水；原生记录未声明地理、CAS或路线。切粒冷却、密封或直接接触的净补水与内部循环量分开计量。其他水质或现场去离子制备必须另列实际输入及负荷。

- 选定流：去离子水 `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：采用第8节唯一期间计算已报告的本行交换量；所关联协议保留原始量，本卡不再计算一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`styrenics-ps-2022`; `epa-ap42-ps-1991`

###### 氮气保护 (`in_nitrogen`)

可选储罐或设备保护气。保留累计表体积及基准条件；用有依据的密度换算一次，累计体积不再乘运行时间。不得推定零耗量或气体纯度。

- 选定流：氮气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：采用第8节唯一期间计算已报告的本行交换量；所关联协议保留原始量，本卡不再计算一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`styrenics-ps-2022`; `epa-ap42-ps-1991`

###### 聚乙烯交付袋 (`in_bag`)

可选粒料整只聚乙烯交付袋；原生记录CAS9002-88-4、工厂生产混合，未指定地理或牌号。称量实袋，不设件重默认系数；Q排除包装质量。其他包装组件须另列原子行。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：采用第8节唯一期间计算已报告的本行交换量；所关联协议保留原始量，本卡不再计算一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`styrenics-ps-2022`; `epa-ap42-ps-1991`

#### 输出

##### 产品流

###### 验收供货GPPS粒料 (`out_gpps`)

最终参考输出：实际验收供货树脂净量，含已声明残余单体、助剂及实测水分，排除包装和游离沥水。原生GPPS粒料记录未声明CAS、地理、路线、具体SKU或额外属性，仅提供宽泛物理身份；工厂牌号、验收及热引发连续本体路线须独立证明。

- 选定流：通用级聚苯乙烯粒料（GPPS） `4f19f11e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_output`
- 来源：`styrenics-ps-2022`; `epa-ap42-ps-1991`

##### 废物流

###### 回收塔底排污 (`out_bottoms`)

实际外排的塔底残液，分别测定苯乙烯、乙苯与低聚物，记录水分、去向和危害。内部回收不是废物；厂外燃料出售须另行确认共产品身份及分配证据，不预设燃料抵扣。

- 选定流：苯乙烯回收精馏塔底残液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：采用第8节唯一期间计算已报告的本行交换量；所关联协议保留原始量，本卡不再计算一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residues`
- 来源：`styrenics-ps-2022`; `epa-ap42-ps-1991`

###### 废弃GPPS粒料 (`out_ps_reject`)

仅记不可逆废弃并离开前景边界的粒料。返工另记，内部再熔不能作为新采购或第二次验收输出。原生聚苯乙烯废料Product flow不能自动替代该废物交换。

- 选定流：废弃不合格GPPS粒料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：采用第8节唯一期间计算已报告的本行交换量；所关联协议保留原始量，本卡不再计算一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residues`
- 来源：`styrenics-ps-2022`; `epa-ap42-ps-1991`

###### 送处理水相废水 (`out_wastewater`)

交付外部处理过程的废水：计量整份废水、物种及处理去向。水与溶解苯乙烯仅是组分子账，不重复计整份废物流，亦不是直接向自然界排放。若现场处理，完成数据前须补齐实际处理输入及最终外排物种。

- 选定流：含苯乙烯工艺废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：采用第8节唯一期间计算已报告的本行交换量；所关联协议保留原始量，本卡不再计算一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`styrenics-ps-2022`; `epa-ap42-ps-1991`

##### 基本流

###### 向空气排放苯乙烯 (`out_styrene_air`)

CAS100-42-5，向未指定空气排放。记录储存、供料、真空、回收及粒料处理经治理后的实际有组织和逸散苯乙烯，不叠加治理前气体或内部冷凝液。声明实际子介质；有证据要求更具体子介质时更换该未指定空气身份。

- 选定流：苯乙烯 `08a91e70-3ddc-11dd-9910-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：采用第8节唯一期间计算已报告的本行交换量；所关联协议保留原始量，本卡不再计算一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`styrenics-ps-2022`; `epa-ap42-ps-1991`

###### 向空气排放乙苯 (`out_ethylbenzene_air`)

CAS100-41-4，向未指定空气排放；根据采样和流量记录独立确定实际物种。乙苯杂质或可选溶剂损失不能全部写成苯乙烯，亦不能由碳平衡残差拟合。

- 选定流：乙苯 `fe0acd60-3ddc-11dd-a2eb-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：采用第8节唯一期间计算已报告的本行交换量；所关联协议保留原始量，本卡不再计算一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`styrenics-ps-2022`; `epa-ap42-ps-1991`

###### 向空气排放甲苯 (`out_toluene_air`)

CAS108-88-3，向未指定空气排放；仅在实际存在甲苯时适用。采用单独治理后物种测量，不把总VOC、COD或相邻化学物UUID套入此行。

- 选定流：甲苯 `4d9a8790-3ddd-11dd-9bb5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：采用第8节唯一期间计算已报告的本行交换量；所关联协议保留原始量，本卡不再计算一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`styrenics-ps-2022`; `epa-ap42-ps-1991`

###### 向空气排放水蒸气 (`out_water_vapour`)

CAS7732-18-5，向未指定空气排放。物理蒸发与独立证明的化学生成或消耗水分别核算。粒料冷却、干燥或蒸汽冷凝是相变，不能据此断言加成聚合生成水。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：采用第8节唯一期间计算已报告的本行交换量；所关联协议保留原始量，本卡不再计算一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`styrenics-ps-2022`; `epa-ap42-ps-1991`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | p_gpps | 先按独立计量与工单分离GPPS牌号、HIPS/EPS切换和公用工程。与目标同牌号生产有关的启停、清洗、失败及废弃负荷保留，不能通过只选成功工时删除。 | `styrenics-ps-2022`; `epa-ap42-ps-1991`; `jrc-ilcd-allocation-2010` |
| allocation_recovery | p_gpps | 内部回用不是联产品且无替代抵扣。外售回收苯乙烯/塔底燃料须先独立证明商品质量和去向，优先细分；剩余不可分负荷按有因果证据的物理关系分配，不能证明时披露并独立审查经济方法及敏感性，不默认质量/价格比例。实物守恒在分配前完成。 | `styrenics-ps-2022`; `epa-ap42-ps-1991`; `jrc-ilcd-allocation-2010` |

## 8. 前景数据采集、计算与质量规则

采集协议中的collection_method仅保存未归一化原始期间记录，不执行A/Q。仅normalize_period拥有归一化；卡片与aggregation_rule描述同一次报告结果；汇总栏只声明结果的报告基准，不是采集端相除指令。每个协议的owner是场址实际指定的责任人，须实名或岗位签署。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | p_gpps | out_gpps | acceptance_and_stock_ledger | 批次ID；牌号/SKU；热引发路线；验收/拒收；供货净质量；皮重/游离沥水；残余苯乙烯/溶剂/低聚物/水分/助剂；成品期初末库存；销售/退货/返工/WIP关联 | Owner：生产质量与仓储责任人。保留未归一化的经校准批次称重、化验、验收事件及库存移动；用发货与成品库存核对实际生产，不除以Q。 | kg；质量分数；试验条件 | 逐批、逐次库存移动 | 一个完整匹配生产期间，含失败/零产出运行及相邻期间结转关联 | 实际生产线、牌号及供货状态 | Q为匹配群组内同牌号/路线/状态的唯一正值新验收产量；与发货加期末减期初合格库存并校正退货/返工核对；cp_output不归一化交换。退回再验收仅计一次。 | 校准；签署验收；批次唯一性；库存核对 |
| cp_feed | p_gpps | in_styrene; in_ethylbenzene; in_toluene; in_white_oil | receipts_tank_issue_and_assay | 采购/领用批次ID；整份制剂质量；活性分数；水/阻聚剂/杂质；储罐期初末库存；内部回收单体/溶剂；排污；阶段；失败关联 | Owner：物料保管与实验室责任人。按原始单位保留整份交付制剂和储罐/领用/含量记录，包括不合格运行与更正；外部接收与内部回收分开，不执行每千克相除。 | kg；m3；实际条件下密度；质量分数 | 逐次交付、领用及化验 | 与cp_output同一完整期间，附期初末WIP负荷结转 | 实际供应方、储罐、配方及反应器组 | 每 1 kg 参考流 | 发票；地磅；校准储罐；供应方COA；独立化验；制剂组成闭合 |
| cp_utilities | p_gpps | in_electricity; in_steam_heat; in_nitrogen | meter_and_delivery_records | 阶段与时刻；表读数和倍率；原生单位；电压；热交付/回流边界；蒸汽温压/焓；气体体积基准；累计量或速率标记；共享负荷分配；失败；WIP关联 | Owner：场址公用工程师。保存原始起止表数或速率与时长、累计体积、发票及阶段日志。保留全部目标相关失败/零产出、回收、清洗及治理运行，不除以产量。 | kWh；MJ；kg；带条件m3；速率及持续时间 | 连续日志及期末核对 | 与cp_output相同完整期间及结转关联 | 反应、回收、挤出/冷却、储存及可归属共享服务 | 每 1 kg 参考流 | 仪表校准；发票；热状态证据；分配依据；停机记录 |
| cp_water | p_gpps | in_water; out_wastewater; out_water_vapour | water_balance_and_sampling | 水源及水质；原始补水；循环；密封/冷却浴；排水；蒸发；冷凝液；废水湿质量；物种浓度；实际反应水证据；期初末水库存；去向 | Owner：给排水工程师及实验室。归一化前保存独立进出水表、湿质量、温度/密度及代表性采样；不得用同一闭合残差反推未知出口和反应水。 | kg；m3；质量分数；带单位浓度 | 连续表计；与事件关联的代表性样品 | 相同完整期间，含清洗、失败与WIP变化 | 声明的外部供水、直接接触及污水交付边界 | 每 1 kg 参考流 | 表计校准；采样链；水分分析；相变与反应水证据 |
| cp_pack | p_gpps | in_bag | packaging_issue_ledger | PE袋身份；件数；实测单位件重；破损/退回袋；期初末库存；批次关联；其他包装组件 | Owner：交付包装保管责任人。保留原始件数、独立实测袋重、领用及损失与批次关联，不按产量归一采集。 | 件；kg/实测袋；kg | 每次领用及代表批次称重 | 同一匹配期间，含损失及退回 | 实际粒料供货包装系统 | 每 1 kg 参考流 | 称重记录；领退核对；组成证明 |
| cp_residues | p_gpps | out_bottoms; out_ps_reject | waste_manifest_and_composition | 物流ID；原始湿质量；水分；苯乙烯/乙苯/低聚物含量；去向；回收或排污状态；返工；拒收批；库存变化 | Owner：回收主管及废物管理人。保存未归一化称重排污、废物转移及独立组成样品；保留失败、退回与返工，不能称为新产品。 | kg；质量分数 | 每次排污/转移及代表性样品 | 同一完整期间，含残液库存及负荷结转 | 实际回收及外部废物/回收去向 | 每 1 kg 参考流 | 废物单据；去向接收；采样；回收核对 |
| cp_emissions | p_gpps | out_styrene_air; out_ethylbenzene_air; out_toluene_air | post_control_species_and_fugitives | 物种；CAS；治理边界；烟道/逸散源；空气子介质；流量和浓度条件；时长；累计标记；采样；捕集/破坏；启停/失败期间 | Owner：场址环保工程师及认可采样实验室。保存原始治理后物种浓度、实测气体流量/时长或累计气量及逸散证据；不得用COD或总VOC充当具体化学质量，不除以Q。 | kg；带条件mg/m3；m3；仅速率需要时间 | 可用时连续监测，并作事件代表性测试 | 相同完整期间，含启动、失败、停机及异常外排 | 储存、供料、反应器排气、真空/回收及粒料处理至实际空气子介质 | 每 1 kg 参考流 | 测试报告；原始表计；检出限；校准；治理状态；逸散方法 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | all inventory rows | 在归一化前仅换算原始量：吨转kg；液体累计m3乘同组成温度的实测密度；速率乘对应时长并积分，已累计体积不再乘时间；物种质量由独立浓度与一致条件体积计算；kWh按3.6转MJ，蒸汽净交付热由独立支持的实际焓差计算。原生属性链的参考单位与换算系数不可作材料密度或供应耗量。 | cp_feed; cp_utilities; cp_water; cp_pack; cp_residues; cp_emissions | converted raw-period amounts | `styrenics-ps-2022`; `epa-ap42-ps-1991` |
| match_period | all inventory rows | 保留完整期间实物收支账，按批次/库存/工单追踪归属目标新验收产量的各交换分子A_e：纳入相关失败/零产出、启停、损失、返工及本期释放的期初WIP结转负荷，扣除明确结转到期末WIP/其他产品的相同已跟踪负荷。期初末WIP需质量、转化/组成及逐项累积负荷，不得只按质量盲扣能耗。内部回收/返工两端配对；首次投入不重记，退货再验收不增新产量。实体守恒账与归属负荷账分别保留；零Q期间保留原账与明确后续归属，不能删除或除零。 | converted raw-period amounts; cp_output; WIP burden ledger; lot genealogy | A_e; Q; matched-period audit ledger | `styrenics-ps-2022`; `epa-ap42-ps-1991` |
| normalize_period | all inventory rows | 唯一归一化owner：在convert_raw及match_period后，以相同群组正验收供货产量Q（kg）对每个分子A_e执行一次A_e/Q，报告每1kg参考流的交换量。各卡片及aggregation_rule仅指向此同一次结果，不再次执行相除；out_gpps固定为1kg。Q必须大于零，包含实测供货态残单/助剂/水分，排除包装/游离排水；不得用投料质量、干聚合物、销售库存释放或未验收量代替Q。 | A_e; Q; convert_raw; match_period | single per-reference exchange report | `styrenics-ps-2022`; `epa-ap42-ps-1991` |
| close_species | p_gpps | 分配前独立核对实物总质量及C/H/O等相关元素：外部输入加期初库存等于实际输出加期末库存，内部循环抵消。另用真实进料组成、转化/聚合物与低聚物、残余单体/溶剂、排污和分物种外排建立物种反应账。主反应n C8H8到(C8H8)n为加成，不生成化学水；不能把理想原子对应当成1:1实际产率或零残单。实际副反应/引发剂/治理的水生成或消耗须有独立反应式、物种与转化证据，物理冷凝/蒸发/结构或游离水变化另列；未知反应水与未知出口不能同时由一个闭合残差解出。差额保留为不确定性/待查，不用COD或残差拟合物种。 | cp_feed; cp_output; cp_water; cp_residues; cp_emissions; physical stock ledger | independent physical elemental and actual species/water balances | `styrenics-ps-2022`; `epa-ap42-ps-1991` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | out_gpps | 实际牌号、热引发路线、粒料状态及完整验收指标需同批可追溯，不能以邻近塑料UUID或CAS缺省推定。 | 批次COA；路线/配方记录；供货及验收签署 |
| quality_period | all inventory rows | 失败/零产出、返回/返工、期初末WIP及结转负荷不可遗漏或重记，解释所有期间差异。 | 物理及负荷双账；工单；库存；唯一normalize_period报告 |
| quality_limits | all inventory rows | 每项原生限制（名称全部分量、地理、路线、牌号、介质、属性及参考单位）均需与实测匹配；UUID不等于供应方或测量值。披露甲苯分类瑕疵、未指定地理/牌号及未知UUID/背景。 | 完整原生身份；供应方/背景对照；采样/校准及不确定性 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | out_gpps | 拒绝HIPS/EPS/共聚物/泡沫制品替代，核对唯一out_gpps终端Product output与参考UUID一致；中间物和真实联产品保留，不靠改名隐藏共用UUID。 | `styrenics-ps-2022`; `epa-ap42-ps-1991` |
| validate_measurement | all inventory rows | 核对原始期间、原生单位转换、完整WIP结转、唯一正Q及唯一normalize_period报告；采集端不得执行A/Q，卡片/汇总不可二次归一。缺测、未解释差额或不支持换算使具体数据包不完整。 | `styrenics-ps-2022`; `epa-ap42-ps-1991` |
| validate_completeness | p_gpps | 核对全部真实原子输入/输出及背景覆盖、整份制剂无重复采购、独立实物/元素与物种/反应水账、内部回流/外排区分及治理前后边界；不把Schema或UUID检查当科学批准。 | `styrenics-ps-2022`; `epa-ap42-ps-1991` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 已声明牌号、路线、状态与地区的GPPS粒料上游供给 |
| allowed_use | 核实适用性后用于对应树脂供给的LCA建模，并连接完整上游/处理背景 |
| excluded_use | 不代表泡沫或模塑功能、不代替HIPS/EPS/共聚物、不可仅凭每千克树脂结果作材料功能优劣比较 |
| required_metadata | 期间；地点；牌号/配方及路线；供货态与验收；参考UUID/单位；库存/WIP及零产出；全部流程/供应/治理边界；背景版本及覆盖；分配与来源 |
| required_quality_disclosure | 实测与估计分开；原生限制/分类债务；残单/溶剂/水分；采样代表性；检出限/仪表误差；物理与物种差额；未匹配UUID或背景，独立科学审核状态 |
| update_trigger | 牌号/原料/引发方式/溶剂或供应/治理边界、设备或验收变化；新残单/水分证据；身份/属性/背景修订 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| styrenics-ps-2022 | literature | Styrenics Circular Solutions/PlasticsEurope，General-Purpose Polystyrene (GPPS) and High-Impact Polystyrene (HIPS)，2022年11月，第2.1–2.3节，PDF第9–10页。https://www.styrenics.info/wp-content/uploads/2022/12/221107_Eco-profile_PS.pdf | GPPS/HIPS物理区别、初级粒料交付与连续本体/脱挥回收/切粒工艺。仅用欧洲行业原件的定性范围，不采用行业平均配方、数值、背景、产率或能耗，不把HIPS橡胶段落用于GPPS。 |
| epa-ap42-ps-1991 | official_guidance | US EPA，AP-42第6.6.3节Polystyrene，1991年9月、1995年1月重排；6.6.3.1–6.6.3.2.1及图6.6.3-2，PDF第1–5页。https://www.epa.gov/sites/default/files/2020-10/documents/c06s06-3.pdf | 热引发连续本体路线、单体回收/排气/低聚物排污及冷却切粒；独立支持GPPS与HIPS/EPS边界。历史美国工艺拓扑而非现代场址值；不采用排放因子、温度、转化率或忽略排放的说法。 |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment, Detailed guidance, first edition March2010, §7.9.3, printed257–258/PDF277–278; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因型虚拟细分、决定性物理因果关系及剩余负荷的过程出口市场价值，用于支持分配方法选择。不提供GPPS配方、固定质量/价格份额、副牌截断、回收物替代抵扣或完整PEF/CFF批准。 |
