---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.other-articles-for-medical-or-surgical-purposes
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 无菌无针聚丙烯单丝外科缝合线制造

## 1. 范围与适用性

本规则用于一项明确规格的未染色、无涂层、不可吸收聚丙烯单丝缝合线从摇篮至生产放行门的环境 LCA。产品不带针，经伽马辐照后干态置于无菌屏障内供货。参考对象是实际供货物品，不是治疗量，也不主张临床疗效等效。保留实际制造、QA、包装和外包处理资源；本规则不给出临床、手术或灭菌操作指导及参数。

CPC 3.0 通过 HS 2022 品目 30.06 定义 35290。第30章注4(a)将无菌缝合材料正面列入该品目；35279 对应 30.05 敷料。本项狭义缝合线范围不覆盖整个残余类别。排除药品、血液制品、疫苗、絮胎和敷料、牙科或骨重建粘固剂、急救箱、造口用品、独立外科针、注射器、导管及其他仪器器械。监管上属于医疗器械并不直接决定 CPC 48150。非无菌工业聚丙烯长丝是投入或中间物，不是本参考供货物品。来源：`un-cpc3-2025`；`wco-hs2022-ch30`。

FDA 申请人案例证明存在实际无菌单次使用聚丙烯单丝产品，可无针供货、可未染色并采用伽马处理；其包装表记载铝箔和聚酯。历史 EPO 专利支持识别制造阶段，不代表当前工厂配方或环境强度。专利中的环氧乙烷示例不是本项所选伽马路线。FDA 检测段落提到可吸收缝合线，与其不可吸收产品描述矛盾；本规则不采用该段建立身份或性能假设。来源：`fda-k993997-suture`；`epo-0800834-suture`。 FDA摘要没有明确确认无涂层供货；无涂层保留为PCR的受限规格，具体数据集使用前须以实际SKU/BOM核实。缺少未来SKU、数量或provider记录本身不禁止完成类别方法编写。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.other-articles-for-medical-or-surgical-purposes |
| classification_refs | CPC 3.0 35290；narrower；当前接受关系以`classifications/mappings/cpc-3.0-to-pcr.yaml`及`docs/adr/cpc3-additional34-20261029-35290.md`为准；须满足完整方法范围与排除项，不表示整类覆盖或科学/翻译批准 |
| covered_products | 一项未染色、无涂层、不可吸收聚丙烯单丝外科缝合线规格，无针、伽马灭菌并置于干态无菌屏障内 |
| excluded_products | 染色、有涂层、编织或可吸收缝合线；带针产品；外科网片；组织粘合剂；非无菌长丝；敷料；药品；其他 HS 30.06 物品；独立医疗仪器 |
| representative_product | 一个声明的无针聚丙烯单丝缝合线 SKU，固定直径等级、切割长度、树脂制剂和无菌包装配置 |
| production_route | 外购未染色聚丙烯树脂；熔融挤出、液体骤冷、拉伸、热稳定、切割卷绕、干态屏障包装、外包伽马辐照、QA 和首次质量放行；记录实际顺序 |
| market_state | 首次生产质量放行门的干态、无菌、单次使用无针缝合线；载体及包装计入负荷，但不计入参考净质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应一个明确规格的无菌无针聚丙烯单丝缝合线产品 |
| How much | 首次生产质量放行时的 1 kg 合格净缝合线 |
| How well | 符合记录的树脂及制剂、单丝结构、直径等级、切割长度、未染色及无涂层状态、无针配置和实际无菌包装放行规格；不假定临床等效 |
| How long or cycle | 一次首次生产放行；标签货架期与储存条件作为描述信息，不以治疗时长或患者结局作分母 |
| reference_flow_link | finished_suture |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 卫生材料及医药用品 `4ce36b87-0ca6-418f-af96-515b40dbb46f` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | SKU及直径等级; 切割长度及实测线体质量; 聚丙烯制剂和供方牌号; 未染色及无涂层状态; 不带针; 干态无菌屏障物料清单; 伽马处理服务商及处理记录链接但无操作指导; 放行门及唯一首次放行批群; 生产地理和期间; WIP质量及结转负荷; 单独核对的成品库存及发运账; QA样品和不合格品去向; 包装质量; 纳入的仓储搬运区间; 供方和上游provider相容性 |

数据包必须声明全部限定信息。经核实原生名称为Health and Medical Supplies / 卫生材料及医药用品，别名包含医用耗材。其为Product flow，只有系数1的参考质量kg；无额外名称属性、CAS、形态/等级、路线或供货地理限定。完整备注讨论应急药品/医疗用品储备、家庭护理用品以及耐用医疗设备，不规定本缝线的组成、针、涂层、无菌方式或provider数量。本PCR仅以全部外部原始证据和实际SKU/放行限定采用这一宽泛家族中的单项PP无针缝线；不得将备注中的不同用品合并为一份参考，也不将家族UUID说成无菌、认证、疗效或供方证明。 不得以敷料、器械、树脂、非无菌长丝或混合应急物资替代此终端缝线。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| reference_net_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为同一SKU、路线和供货状态下唯一首次质量放行净线体质量的正值之和。采用经校准称量，或同SKU实测单件线体质量乘数量，保留样本量及不确定性。排除针、载体、袋、箱、QA耗用样品及不合格线。实际发货量不是Q。 |
| once_only_normalisation | 全部库存数量 | 原记录物理属性 | 原单位每kg | 协议采集未除的原始期间数量及负荷。先作原始换算与WIP负荷核对，再仅执行一次cr_normalise；卡片及aggregation标签描述同一次报告操作，不是顺序重复除。 |
| volume_and_energy | 原始资源记录 | 实际体积、质量或能量 | m3; kg; kWh; MJ | 积分体积已经是期间总量，不再乘时间。实测速率须配实际时长。密度须独立支持实际溶液及状态，不把native次级系数当密度。保留kWh，仅有需要时按1 kWh = 3.6 MJ换算。 |
| product_mass_balance | 线体及制剂台账 | 质量 | kg | 将物料领用和期初WIP与Q、期末WIP、QA样品、不合格品及独立实测损失平衡。聚合物和制剂组分独立于水台账。拉伸和热定型改变尺寸及结构，不自动改变聚合物质量或形成反应水化学计量。不得由平衡残差反推排放、物种或反应水。 |
| supply_formulation | 外购树脂、清洁剂及袋 | 质量 | kg | 每份完整供货制剂或组装袋只计一次采购。树脂稳定剂、清洁液水及袋层为组成子账，不重复采购。若实际单独采购配料或采用其他路线，须先增加具体原子流并计量混合负荷，方可使用该数据集。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明挤出路线的外购未染色树脂及成品包装组件到货；树脂、包装及公用工程上游生产通过相容数据集关联；外包辐照期间线体仍由委托方所有 |
| starting_condition_role | 明确的物料和加工起点，不代表树脂生产或外包处理负荷为零 |
| product_classification_scope | HS 30.06正面列入的无菌缝合线物品；不扩展至敷料、药品、仪器或全部CPC 35290物品 |
| recursive_input_rule | 外购现成缝合线保持为带结转负荷的上游产品，不算本次新挤出产量。本树脂起点方法不能直接代表仅重新包装，除非另行披露边界调整。 |
| upstream_dataset_requirement | 每项实际材料、组成、供货状态、地理、年份和技术均须匹配；身份UUID不提供provider数量，也不证明树脂为缝合线级 |
| disclosure | 明确制造及承包场址、实际包装及处理顺序、首次放行门、WIP结转负荷、失败批、不合格品、内部交接、放行后库存与发货核对、分配及未解决身份 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_manufacture | p_suture | 纳入首次放行前的到货搬运、挤出、骤冷及冷却、拉伸、停留及热稳定、切割卷绕、包装、实际洁净区及QA资源、失败批、返工、废物及排放。阶段来自专利披露路线；实际资源及数量须有前景记录。 | `epo-0800834-suture` |
| boundary_external_gamma | p_gamma | 纳入实际外包伽马处理负荷、负载分配、拒收负载、相关搬运及返程运输。保留路线相容provider数据集，不用专利EO示例替代，也不删承包负荷。自有线体送出及返回属于内部移动，不是采购或新产量。 | `fda-k993997-suture` |
| boundary_storage | p_store | 保留真实纳入的全部仓储、搬运、包装及发运负荷。放行前负荷归生产；放行后库存及发运保留独立台账和相同批群ID。仅可在明确披露后排除声明边界以外的配送。 | |
| boundary_environment_only | 全部数据集 | 临床使用、手术技术、疗效等效、灭菌操作指导及患者结局不在制造LCA范围内。记录资源及放行证据，不设置临床或灭菌操作参数。 | |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_suture | 树脂至包装缝合线制造及首次放行 | required | 声明的挤出和干态包装路线 | 负责生产、物料平衡、WIP及终端参考 | 1 kg首次放行净线体 |
| p_gamma | 外包伽马处理 | required | 所选供货状态经伽马灭菌 | 负责承包处理服务和负载负荷证据 | 同一放行批群；不新增产品数量 |
| p_store | 纳入的仓储、搬运及货运 | conditional | 声明边界内的操作，或明确单列的仓储发运补充 | 负责物流负荷及成品库存核对 | 同一批群，声明期间及门 |

### 过程：制造及首次放行 (`p_suture`)

#### 输入

##### 产品流

###### 缝合线树脂 (`polypropylene_in`)

实际投入声明路线的外购未染色树脂，含失败批及WIP携带物料。Native CAS为9003-07-0，工厂生产混合及聚丙烯生产路线，未指定地理及缝合线级别。Native 34740分类不一致，保留此债务，另取供方制剂/牌号及provider相容证据。含供货稳定剂的商业树脂只采购一次。

- 选定流：聚丙烯 `54802cfb-bd58-4f85-9ebf-9e0616529c1c`
- 流属性/单位：Mass / kg
- 数量规则：A / Q；第8节唯一归一化报告操作，先保留完整原始期间量及适用结转负荷
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_production`
- 来源：`epo-0800834-suture`

###### 生产用电 (`electricity_in`)

计量归属的挤出驱动、加热、冷却、卷绕、包装、洁净区及QA电力，含开机、失败、返工及实际内部搬运。共表分配须有完整因果记录。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：A / Q；第8节唯一归一化报告操作，先保留完整原始期间量及适用结转负荷
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_resources`

###### 外购过程热 (`heat_in`)

若热稳定或场址公用工程使用外购热，纳入实际用量。已含于电力的电生热不重复采购；认定无此项须有实际路线证据。

- 选定流：外购过程热
- 流属性/单位：Energy / MJ
- 数量规则：A / Q；第8节唯一归一化报告操作，先保留完整原始期间量及适用结转负荷
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_resources`

###### 外部补水 (`water_in`)

测量骤冷、冷却及清洁实际外部补水，内部循环不重复作外部采购。实测体积按独立支持的状态特定密度换算。

- 选定流：过程水
- 流属性/单位：Mass / kg
- 数量规则：A / Q；第8节唯一归一化报告操作，先保留完整原始期间量及适用结转负荷
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_resources`
- 来源：`epo-0800834-suture`

###### 供货异丙醇清洁液 (`ipa_solution_in`)

仅在场址确实使用时纳入；以实测供货含量及数量记录整份外购水性制剂。异丙醇及水为组成子账，不重复采购。不规定清洁液浓度或操作配方。使用其他清洁剂时增加其独立交换。

- 选定流：异丙醇清洁液
- 流属性/单位：Mass / kg
- 数量规则：A / Q；第8节唯一归一化报告操作，先保留完整原始期间量及适用结转负荷
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_resources`

###### 外购无菌屏障袋 (`pouch_in`)

一只供货的干态无菌屏障袋，披露实际铝、聚酯及存在的密封/胶粘层。整份外购组装袋只计一次，层质量是组成子账。保留封口失败、不合格包装及重包消耗。案例不代表普适层结构。

- 选定流：铝箔复合袋
- 流属性/单位：Mass / kg
- 数量规则：A / Q；第8节唯一归一化报告操作，先保留完整原始期间量及适用结转负荷
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`fda-k993997-suture`

###### 缝合线卷绕载体 (`carrier_in`)

仅当声明包装确有该纸板载体时纳入。称量完整供货组件及废品，不计入净线体质量。其他材料载体须另设原子交换。

- 选定流：纸板缝合线载体
- 流属性/单位：Mass / kg
- 数量规则：A / Q；第8节唯一归一化报告操作，先保留完整原始期间量及适用结转负荷
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`

###### 次级运输箱 (`carton_in`)

测量声明门实际箱耗、不合格箱及装载配置，含实际退回重包负荷。不由净线体质量推定包装强度。

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass / kg
- 数量规则：A / Q；第8节唯一归一化报告操作，先保留完整原始期间量及适用结转负荷
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`

#### 输出

##### 产品流

###### 首次质量放行缝合线 (`finished_suture`)

唯一终端输出为未染色、无涂层、不可吸收、无针、干态包装且经伽马灭菌并完成首次质量放行的线体。Q按唯一正净线体质量只计一次，含新放行后尚存成品仓的部分。包装保留负荷但不计入线体质量。退回再验收及期末成品库存不增加新产量。经核实原生名称为Health and Medical Supplies / 卫生材料及医药用品，别名包含医用耗材。其为Product flow，只有系数1的参考质量kg；无额外名称属性、CAS、形态/等级、路线或供货地理限定。完整备注讨论应急药品/医疗用品储备、家庭护理用品以及耐用医疗设备，不规定本缝线的组成、针、涂层、无菌方式或provider数量。本PCR仅以全部外部原始证据和实际SKU/放行限定采用这一宽泛家族中的单项PP无针缝线；不得将备注中的不同用品合并为一份参考，也不将家族UUID说成无菌、认证、疗效或供方证明。

- 选定流：卫生材料及医药用品 `4ce36b87-0ca6-418f-af96-515b40dbb46f`
- 流属性/单位：Mass / kg
- 数量规则：1 kg
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每1 kg参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_production`
- 来源：`fda-k993997-suture`

##### 废物流

###### 聚丙烯不合格废料 (`pp_scrap_out`)

测量外运不合格线和聚合物废料，含破坏性QA样品；记录去向及污染。内部循环废料作为可追踪循环，不重复作对外废物或避免产品抵扣。

- 选定流：聚丙烯废料
- 流属性/单位：Mass / kg
- 数量规则：A / Q；第8节唯一归一化报告操作，先保留完整原始期间量及适用结转负荷
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_losses`

###### 不合格复合袋 (`pouch_scrap_out`)

整份供货袋形成的一项实际复合废物，实测层组成并记录处理。不把同一全质量再次分别记为铝和聚酯废物。

- 选定流：铝箔复合袋废料
- 流属性/单位：Mass / kg
- 数量规则：A / Q；第8节唯一归一化报告操作，先保留完整原始期间量及适用结转负荷
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_losses`

###### 纸板包装废料 (`paper_scrap_out`)

存在时测量载体或纸箱形成的实际收集纸板废物流；其他独立收集材料或污染废物另行记录。

- 选定流：纸板废料
- 流属性/单位：Mass / kg
- 数量规则：A / Q；第8节唯一归一化报告操作，先保留完整原始期间量及适用结转负荷
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_losses`

###### 送处理水性废水 (`wastewater_out`)

测量实际骤冷/冷却排污及水性清洁排水至明确处理方的跨界量，保留组成及密度证据。不把送处理废物量再次记为直接水体排放。

- 选定流：水性过程废水
- 流属性/单位：Mass / kg
- 数量规则：A / Q；第8节唯一归一化报告操作，先保留完整原始期间量及适用结转负荷
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_losses`

###### 废清洁液 (`spent_cleaner_out`)

仅当所选清洁剂确有单独收集废液时纳入；测量整份湿溶液及实际处理去向。保留实测溶剂和水子账。

- 选定流：废异丙醇清洁液
- 流属性/单位：Mass / kg
- 数量规则：A / Q；第8节唯一归一化报告操作，先保留完整原始期间量及适用结转负荷
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_losses`

##### 基本流

###### 实测水蒸发 (`water_air_out`)

纳入有独立证据的实际跨界水蒸气，游离水变化及库存变动另记。未知平衡残差不等于实测蒸发或反应水。

- 选定流：排向空气的水蒸气
- 流属性/单位：Mass / kg
- 数量规则：A / Q；第8节唯一归一化报告操作，先保留完整原始期间量及适用结转负荷
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_losses`

###### 实测异丙醇排放 (`ipa_air_out`)

仅在实际使用该清洁剂且发生直接排放时纳入；以实测积分通风量及浓度或独立支持的物种平衡定量。不强迫溶剂投入等于排放。

- 选定流：排向空气的异丙醇
- 流属性/单位：Mass / kg
- 数量规则：A / Q；第8节唯一归一化报告操作，先保留完整原始期间量及适用结转负荷
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_losses`


### 过程：外包伽马处理 (`p_gamma`)

#### 输入

##### 产品流

###### 外包伽马辐照 (`gamma_service_in`)

以实际受处理净线体kg记录服务活动及独立支持的provider单位活动负荷；披露负载分配、包装质量及重复/失败事件。服务已含声明的运营方资源，不再作为制造商电力追加。无菌证书本身不提供环境强度。不规定辐照操作参数。

- 选定流：伽马辐照服务
- 流属性/单位：Mass / kg
- 数量规则：A / Q；第8节唯一归一化报告操作，先保留完整原始期间量及适用结转负荷
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_gamma`
- 来源：`fda-k993997-suture`


### 过程：纳入的仓储货运 (`p_store`)

#### 输入

##### 产品流

###### 实际公路货运 (`road_freight_in`)

记录实际到货、承包送出/返回及纳入的发运趟次，以实测运输毛质量和距离计算。净线体参考质量不是运输载荷。仅剔除已证实含于外购服务库存的趟次，并通过该链接保留其负荷。其他运输方式另设行。

- 选定流：公路货运服务
- 流属性/单位：Transport work / tkm
- 数量规则：A / Q；第8节唯一归一化报告操作，先保留完整原始期间量及适用结转负荷
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_logistics`

###### 纳入的仓储搬运电力 (`warehouse_electricity_in`)

以实测占用/因果分配及期间保留实际纳入的仓库照明、条件储存、搬运和发运电力。拆分放行前生产账和放行后库存发运账；仅抵消内部物品交接，绝不抵消真实电力或重复搬运负荷。有额外燃料、热、包装或制冷剂时分别设行。

- 选定流：仓储运行电力
- 流属性/单位：Energy / kWh
- 数量规则：A / Q；第8节唯一归一化报告操作，先保留完整原始期间量及适用结转负荷
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每1 kg参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_logistics`



## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_cohort | 生产与WIP | 先将直接计量物料和资源负荷归于实际SKU/批群。保留归属该批群的失败、零产出及返工批。cr_normalise之前核对期初WIP结转负荷、期间新增负荷及期末WIP负荷；不得丢弃失败负荷，也不得造正产量作分母。 | |
| allocation_shared | 共用设备、QA、承包负载及仓库 | 尽可能按实际计量细分。否则以有记录的因果机器工时、占用负载容量或质量时间和完整共用分母分配，含失败负载；披露理由、不确定性及敏感性。不得无证据按每根、每kg或每张发票平分。 | `jrc-ilcd-allocation-2010` |
| allocation_scrap | 不合格品及回收聚合物 | 内部回料是计量的内部循环，不是第二次采购或可销售联产品。保留加工能耗及重复过线。对外废料按实际质量和路线记录处理，不自动抵扣原生料。若另建回收替代情景，独立披露假设并避免重复抵扣。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_production | p_suture | 产品、物料及WIP台账 | 批生产和库存记录 | SKU；批群；场址；期间；原始领用；物料期初末库存；分阶段WIP期初末；WIP结转负荷；唯一首次放行ID；线体质量；QA样品；不合格品；损失；退回；重复过线 | 生产数据owner保留未除的原始批次/期间量及期初末结转负荷；各物理流称量或保留可追溯数量至线体质量实测记录；计算前核对交接及放行ID | kg; item; m; 原负荷单位 | 每批及库存结账 | 完整匹配期间，含失败和零产出批 | 制造商及可追溯外包WIP | 每1 kg参考流 | 校准；称量表；BOM；树脂证明；放行台账；WIP估值和负荷轨迹；不合格及退回记录 |
| cp_resources | p_suture | 公用工程及清洁资源 | 仪表、领用及QA资源日志 | SKU；批群；期间；仪表总量；适用时速率和时长；冷却补水及排放；整份供货清洁液数量及含量；实测损失；QA及洁净区份额；完整共用分母 | 资源owner保留未归一期间总量，含待机、开机、失败批、返工、QA及实际清洁；区分循环量和外部补给；核对共表分配及WIP负荷归属 | kWh; MJ; kg; m3; h | 每计量区间及领用 | 同一完整生产期间 | 制造商，标识共用公用工程 | 每1 kg参考流 | 仪表校准；发票；安全数据表；密度证据；分配表；QA资源记录 |
| cp_packaging | p_suture | 袋、载体及箱 | 包装领用及不合格记录 | SKU；包装规格；供货组件质量；数量；期初末库存；领用；不合格包装；袋层组成；次级包装配置 | 包装owner保留完整未除的外购组件和消耗量、失败包装及重包；测量组件单件质量；袋层组成只作为整份外购袋的子账 | kg; item | 每批及库存结账 | 同一匹配生产期间 | 包装线，适用时含外包包装商 | 每1 kg参考流 | 组件图纸；供方组成；抽样称量记录；库存核对；包装完整性放行证据 |
| cp_losses | p_suture | 废物及直接排放 | 称量、联单和监测记录 | 批群；期间；聚合物废料；袋废料；纸废料；水性废水；废清洁液；蒸发；实际物种；去向；方法及不确定性 | 环境owner保留原始期间质量或实测浓度及积分载体量；区分送处理废物和直接基本流排放；物种独立定量，不以闭合或COD残差拟合 | kg; m3; 带基准的浓度 | 每次转移及监测区间 | 完整匹配期间，含失败批 | 制造商至明确处理或环境边界 | 每1 kg参考流 | 废物联单；实验室结果；通风及排放测量；独立物料平衡核对 |
| cp_gamma | p_gamma | 外包伽马辐照服务 | 承包负载及负荷记录 | provider；负载及批群ID；收回线体和包装质量；失败/零放行负载；重复处理事件；占用容量；完整负载分母；原始处理能耗及来源服务记录；分配和范围 | 承包数据owner提供未除的实际处理负荷或相容服务库存及原始活动；每次负载关联自有物交接和返回；保留失败负载及返工；不得只用无菌证明替代负荷证据 | kg受处理线体；原服务及资源单位 | 每负载 | 全部关联放行批群及WIP的负载 | 具名伽马provider，声明场址及实际物流范围 | 每1 kg参考流 | 负载台账；发票；相容provider库存；资源证据；放行及退回核对；防重复货运的范围证明 |
| cp_logistics | p_store | 仓储、搬运及公路货运 | 库存、仪表及托运记录 | 批群；首次放行ID；成品期初末库存及结转负荷；首次放行交接Q；退回；发运；损失；kg-hours；路线；载荷；距离；实际包装及搬运资源 | 物流owner保留未除的完整区间记录和结转负荷；拆分放行前后账；保留实际运输、仓储电力及搬运，含失败退回；标识合并时抵消的自有内部交接 | kg; kg h; kWh; tkm | 每托运及库存/计量区间 | 与生产批群关联的声明仓储发运期间 | 制造商仓库、provider仓库及实际运输路线 | 每1 kg参考流 | 库存发运核对；实测载荷距离；占用分配；仪表记录；保留的负荷结转及退回ID |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cr_release | 唯一生产分母 | Q为匹配SKU、路线及供货状态下首次质量放行净线体质量的正值之和。同物退回或重复验收不增加Q。期末成品库存不得另加到该生产产量。Q为零时归一化未定义；保留失败批及负荷。 | 首次放行ID; 实测线体质量; SKU及路线; 退回返工链接 | kg单位的Q | |
| cr_raw_convert | 原始数量换算 | 按件包装消耗等于实际消耗件数乘相同供货组件的实测单件质量。按体积的质量等于积分体积乘记录状态下独立支持的密度；速率合计须用实际时长。整份供货制剂完整保留，组分仅作子账。 | 原始数量; 实测单件质量; 积分体积; 密度及状态; 速率; 时长; 含量 | 已换算但未除的原始期间数量 | |
| cr_wip | 生产负荷归属 | 对每个负荷量纲，在按因果分配至匹配批群后，B_release = B_open_WIP + B_period - B_close_WIP。B_period保留开机、失败、QA、不合格、返工及重复加工。期初末WIP携带分阶段隐含负荷，不只是质量相减。物料库存领用单独核对。 | 期初WIP质量及负荷; 完整原始期间负荷; 期末WIP质量及负荷; 共用分配 | 归属首次放行的未归一负荷 | |
| cr_normalise | 全部非参考行报告 | 对每项已核对且归属的原始量或负荷A，仅以A / Q报告声明的1 kg参考流。协议aggregation_rule与库存卡片只是同一次操作的标签；collection_method保留原始量。先换算，适用时执行cr_wip，再分别对各资源、废物、排放和服务量纲执行。 | A; Q; cr_raw_convert; cr_wip; 因果分配 | 每1 kg参考流的库存 | |
| cr_stock_dispatch | 独立成品库存及交付账 | 成品期初库存+首次放行交接Q+标识后的实物退回=实际发运+期末成品库存+实测损失，内部移动须核对。生产产量已含全部新放行Q，期末库存不是第二份产量。后续研究若选实际净交付，须保留成品期初末及结转负荷，以实际交付质量作其分母，未交付成品不入交付Q。两种门不得混合。 | 成品期初末库存; 结转负荷; Q交接; 实物退回; 发运; 损失; 门 | 核对后的仓储发运补充账，合并时抵消内部交接 | |
| cr_physical_balance | 聚合物、水及实际排放 | 聚合物/制剂质量和水独立核对：物料领用+期初WIP=放行线体+期末WIP+QA样品+不合格品+实测损失。骤冷补水独立测量排放、蒸发及库存变化。不造反应水，不用同一残差拟合未知排放与未知水量。 | 物料领用; 组成; Q; WIP; QA样品; 不合格品称重; 实测物种; 补水; 排放; 蒸发; 库存变化 | 独立物理平衡及带不确定性的未解释残差 | |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| dq_reference | finished_suture | 按完整外部物品证据、实际SKU和放行证明使用所选宽泛医用耗材家族；重查全部原生名称、备注、CAS、形态/等级、路线、类型、地理和属性单位支持。原生应急储备/家庭护理/DME语境不是本缝线的规格证明；必须核实未染色、无涂层、无针、干态及伽马供货状态，不能把其他成员或混合物资作为参考。 | 完整原生直读与原始产品证据；SKU/BOM和放行记录；条件家族身份及未知规格/provider单独披露 |
| dq_pp | polypropylene_in | Native聚丙烯的CAS为9003-07-0，路线为聚丙烯生产、工厂生产混合，无额外grade/form名称分量，地理为空且未指定供货地。comment涵盖半结晶PP及等规/间规变体，不是缝合线级证明。其34740分类与聚合物身份冲突，保留此缺陷。仅采用为宽泛原料聚合物身份，不证明实际树脂制剂、地理或provider库存。 | 完整native直读记录；供方树脂证明及相容上游库存 |
| dq_evidence_scope | 外部来源使用 | FDA K993997是历史申请人案例，不是当前普适库存。第3页可吸收措辞不采用；第1-2页明确不可吸收物品。EPO工艺示例不设定产率、电力、制剂、伽马负荷或操作条件。所选路线须有实际伽马provider证据。 | 来源定位；原始限制；前景记录及明确路线决策 |
| dq_completeness | 全部期间台账 | 保留失败/零产出批、WIP及成品库存结转负荷、重复过线、退回、QA、包装、仓储及真实承包负载。普通辅助身份/provider匹配仍与条件家族参考及实际SKU/规格证据分别处理。缺失数量不得悄然设零。 | 完整批群核对及不确定性/缺口台账 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference_gate | 参考及生产 | 唯一终端Product输出须为finished_suture，即首次质量放行门的1 kg净线体。其物理供货状态及所选native家族UUID须与声明参考一致。拒绝把发货分母与新增放行Q混用，或把Q和同批期末成品库存并列为额外生产产量。 | |
| validate_period | 原始记录及计算 | 核实完整匹配原始分子、独立协议owner、WIP结转负荷、唯一正Q及一次归一。零产出期间作为负荷证据保留；有限算术检查不能证明测量完整或科学批准。 | |
| validate_outsource | 伽马及物流 | 核查provider相容性、全部成功及失败负载负荷、自有物返回核对及实际搬运货运仓储保留；抵消内部交接并消除服务资源重复计量。 | |
| validate_mass | 物理平衡 | 聚合物、完整供货制剂、水、实际废物物种及排放须有独立证据。报告未解决残差及不确定性，不造反应水、密度、排放或COD闭合。 | |
| validate_scope | 解释 | 不声称覆盖整个35290，不声称临床等效，不仅凭医疗用途为产品分类。Native schema通过本身不能解决成品参考或provider适用性。 | `un-cpc3-2025`; `wco-hs2022-ch30` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset；仅在实际生产数据补全并完成适用独立审查后作为background_dataset |
| downstream_use | 同一无菌、无针、未染色聚丙烯单丝缝合线规格及声明放行门的隐含制造负荷 |
| allowed_use | 明确数量、SKU、供货状态、前景边界、地理年份及provider相容性的环境建模 |
| excluded_use | 临床或疗效比较；手术或灭菌操作指导；通用医疗用品；其他缝合线或器械；由放行门库存推断使用或报废阶段结论 |
| required_metadata | 全部参考限定信息；物料及包装规格；放行批群ID；阶段边界；处理provider和物流范围；实际原始期间及结转负荷；分配；上游数据集及单位 |
| required_quality_disclosure | 条件宽泛家族参考及实际SKU证据；native聚丙烯分类缺陷及未指定地理/牌号；来源案例限制；缺失测量/provider；库存和WIP核对；不确定性及未纳入范围，不作零值填补 |
| update_trigger | 成品参考身份解决；树脂制剂、直径长度、涂层染色、针配置、包装、辐照provider或路线、门、地理、期间、WIP或分配方法改变 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD，CPC Version 3.0 Explanatory Notes，2025年6月30日，印刷页171；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 35290对应HS 30.06，35279对应HS 30.05。仅分类语境，不提供产品配方或环境数量。 |
| wco-hs2022-ch30 | official_guidance | WCO，HS 2022第30章注4(a)、品目30.05及30.06；https://www.wcotradetools.org/en/harmonized-system/2022/en/0630 | 无菌缝合线的正面范围，与敷料和其他药品分开。仅公开法律名称；未取得订阅解释注释；不凭医疗用途直接分类，也不声称覆盖整个残余类。 |
| fda-k993997-suture | official_guidance | FDA托管申请人摘要K993997，编制于1999年9月29日，PDF第1-3页、印刷页9-11；https://www.accessdata.fda.gov/cdrh_docs/pdf/K993997.pdf | 历史实际不可吸收无菌PP单丝、未染色及无针供货选项、伽马处理及干态铝箔/聚酯包装。仅该申请人案例，不是普适/当前库存或疗效依据；第3页矛盾的可吸收措辞不采用。 |
| epo-0800834-suture | literature | EPO，EP0800834B1，2003年1月15日，0009-0018段、第2-4页；https://data.epo.org/publication-server/rest/v1.0/publication-dates/20030115/patents/EP0800834NWB1/document.pdf | 支持PP树脂挤出、骤冷、拉伸、热稳定及包装缝合线的结构性制造阶段。历史专利，不是前景实测、普适配方或强度；其中EO示例不支持伽马负荷。不采用操作参数。 |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC，ILCD Handbook: General guide for Life Cycle Assessment—Detailed guidance，2010年3月第一版，§7.9.3，印刷页257–258（PDF页277–278）。https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅支持已声明且确需分配的归因型情境：虚拟细分、逐交换决定性物理因果，再仅对真正剩余共同功能采用同一过程出口、实际状态下的同期市场价值。只支持分配方法，不证明本产品工业路线、配方、实测数量、固定份额、替代信用或科学批准；不声称手册逐字规定本PCR库存/批群实现。 |
