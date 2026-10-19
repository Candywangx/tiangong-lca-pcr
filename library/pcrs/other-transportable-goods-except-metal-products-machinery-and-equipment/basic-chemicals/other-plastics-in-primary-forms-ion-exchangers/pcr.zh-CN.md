---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.other-plastics-in-primary-forms-ion-exchangers
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 溶剂辅助SO3法制造的湿态钠型磺化苯乙烯–DVB凝胶树脂

## 1. 范围与适用性

本方法覆盖以外购原生未功能化苯乙烯–二乙烯基苯凝胶珠制造新强酸阳离子交换树脂：DCE溶胀、SO3在DCE中场内溶解、磺化、分离及实际磺化剂回收、水合、NaOH转为钠型、洗涤、筛分、受控排液、验收、储存、包装及发运。终端门为实际净交付湿珠，不是新质量放行产量。前体聚合通过上游背景连接，不能从摇篮到门结果中静默删去。

US4209592A实施例3支持凝胶珠SO3/DCE磺化；实施例1分别明确水合、NaOH水溶液转钠型及洗涤；实施例2描述磺化剂回收。本方法综合已披露单元，不声称某工业厂或特定商业牌号使用该精确链条。实施例3正文为六小时，表2却印16小时；不将任一停留时间、投料、容量、水分、回收率或收率用作默认值。DuPont IRC120 Na证实凝胶/磺酸基/钠型/湿珠的实际市场状态，不证实本制造配方、采购规格或场址。其典型保水率、颗粒密度、装运重量和体积容量量纲不同，不是换算因子。LANXESS S1567披露不同的无溶剂单分散路线；明确排除这一反例，不将溶剂使用强加给整个树脂类别。 `rohm-haas-so3-sulphonation-1980` `dupont-irc120-na-2024` `lanxess-s1567-2020`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.other-plastics-in-primary-forms-ion-exchangers |
| classification_refs | CPC 3.0 34790；本具体树脂方法范围较窄，不构成映射接受。 |
| covered_products | 所述溶剂辅助SO3路线新制造、磺酸基功能化的钠型苯乙烯–DVB凝胶珠，按声明排液条件湿态交付。 |
| excluded_products | 未功能化塑料和GPPS；LDPE/PVC/PET；大孔或丙烯酸树脂；阴离子/弱酸/螯合树脂；H/Ca或其他交付离子型；干粉；混床；使用后或服役再生树脂；场内单体聚合；单用硫酸或无溶剂磺化；药用/食品/饮用水合规主张；安装后处理服务。 |
| representative_product | 工业软化用钠型磺化凝胶珠，声明实际供应等级和验收条件。IRC120 Na仅为市场状态示例。 |
| production_route | 外购凝胶前体→DCE溶胀及SO3/DCE磺化→分离回收→水合→NaOH水溶液转型→洗涤筛分排液→净交付湿树脂。 |
| market_state | 生产者发运门的钠型溶胀凝胶珠，采用可复现排液；产品质量不含另行汇集的装运水及运输皮重。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供给后续工业使用的新钠型强酸凝胶阳离子交换剂。 |
| How much | 同一等级、离子型、路线及排液状态下实际净交付并验收的1千克湿树脂。 |
| How well | 按声明COA限值及方法核对骨架、凝胶结构、磺酸基、钠型转化、珠体完整性及粒径、水分、实际残溶剂/酸/盐；厂家典型值不是通用限值。 |
| How long or cycle | 一个完整匹配的生产储存交付期间，不表示处理容量或寿命的功能等效。 |
| reference_flow_link | supplied_resin |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 阳离子交换树脂 `8fb3a705-f250-4f6d-afff-46d8ca7bee2b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际场址及供应地理; 匹配批群及报告期; 原生凝胶前体及交联指标; DCE/SO3路线及完整商业进料组成; 磺酸功能基及Na比例; 实际等级验收及残DCE/游离酸/盐; 排液及平衡含水测定方法; 湿态净交付Q及库存负荷结转; 干质量/容量/床体积测试条件; 实际公用工程包装处理及发运接口 |

全部限定信息须在数据集元数据、过程说明、参考备注或等效可追溯字段中声明。前体及成品原生限制完整保留在清单描述中；原生系数1是参考单位关系，绝不是密度。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 终端实际净交付湿树脂为1千克；称量产品包含声明排液后的保留水分，不含包装及独立游离液。Q不等于质量放行总量R。 |
| wet_and_capacity | all inventory rows | Mass | kg | 干分、Na占位、磺酸基容量及平衡床体积为分别测定的亚账。eq/L或meq/g容量不能代替湿千克；仅匹配状态、试验及密度的证据可支持标明的派生比较，不能无条件换成千克。 |
| whole_solution | all inventory rows | Mass | kg | 整份外部制剂只采购核算一次。载水、活性SO3/NaOH和杂质是组成亚账，不新增采购。场内配制则记录真实分开进料及配制负荷。 |
| one_reporting_owner | all inventory rows |  |  | 协议采集未除的原始期间分子和库存结转证据。convert_raw及cohort_ledger在唯一除法所有者normalize_period之前；卡片及聚合字段引用同一次操作，不是顺序重复相除。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 树脂厂接收的外购原生未功能化苯乙烯–DVB凝胶珠以及分别供给的商业SO3、DCE、NaOH溶液和水。 |
| starting_condition_role | foreground_starting_point；上游前体及试剂生产仍须连接背景 |
| product_classification_scope | 只覆盖CPC 3.0 34790中的所述新制湿态钠型凝胶树脂。 |
| recursive_input_rule | 内部回收剂和退回返工交接保留批次身份及负荷，不形成新采购或新输出。外购成品树脂或使用后树脂改变本边界，不适用。 |
| upstream_dataset_requirement | 分别匹配每项实际前体、整份制剂、水、公用工程、包装和处理供应模块的技术、等级、整份供给量、地点及时间。UUID表示物理身份，不是背景数据集或配方。 |
| disclosure | 声明所有回收、治理、公用工程生成接口、前景仓储包装搬运装载、库存及退回边界。公用工程燃料、损失和排放保留在完整连接模块内，不得静默截断。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| manufacture_boundary | p_resin | 纳入从实际接收到发运的所有溶胀、磺化剂配制、磺化、分离、回收、水合、转钠、洗涤、筛分、排液、测试、治理及公用工程负荷。无论产品是否在放行期出厂，都保留仓储、包装、搬运装载及返工负荷。 | rohm-haas-so3-sulphonation-1980; dupont-irc120-na-2024 |
| actual_atomic_exchanges | p_resin | 每项物理产品废物交接及每种环境物种和介质各用一个原子行。实际存在的过滤件、冷却补水、中和剂、燃料、包装组件及排放逐项新增。整份混合废液是带组成亚账的一条废物流，不再重复为直接物种排放。 | rohm-haas-so3-sulphonation-1980 |
| route_separation | p_resin | 无溶剂硫酸制造是实际存在的独立路线，不能沿用本DCE/SO3清单。没有场址证据不得给商业牌号指定本工艺；参考流不产生食品、饮用水或药用合规性。 | rohm-haas-so3-sulphonation-1980; dupont-irc120-na-2024; lanxess-s1567-2020 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_resin | 溶剂辅助凝胶树脂功能化至实际湿珠发运 | required | 本方法覆盖以外购原生未功能化苯乙烯–二乙烯基苯凝胶珠制造新强酸阳离子交换树脂：DCE溶胀、SO3在DCE中场内溶解、磺化、分离及实际磺化剂回收、水合、NaOH转为钠型、洗涤、筛分、受控排液、验收、储存、包装及发运。终端门为实际净交付湿珠，不是新质量放行产量。前体聚合通过上游背景连接，不能从摇篮到门结果中静默删去。 | 保留独立操作及库存账的整合前景 | supplied_resin |

### 过程：树脂功能化与交付（`p_resin`）

#### 输入

##### 产品流

###### 未功能化凝胶前体 (`gel_beads`)

外购原生、未磺化的交联苯乙烯–DVB凝胶珠，明确实际交联度定义、粒径、水分及残留单体。原生CAS为9052-95-3，混合类型为工厂生产混合；除基本名及混合类型外，其他名称分量为空。完整备注描述以苯乙烯为基准5–75 mol% DVB、凝胶珠催化剂载体用途以及大表面积和细孔结构。用途示例不将其限定为催化用途；须核实凝胶前体身份，不能采用大孔吸附剂或已功能化树脂。重量百分比交联配方不能直接等同原生摩尔描述。原件未指定地理、供应商、确切交联等级或合成配方。保留粗泛CPC35499分类债务，不将其当作本PCR分类。实际前体制造的上游负荷只连接一次。

- 选定流：聚(苯乙烯-二乙烯基苯) `406f1abc-391a-43d9-841c-47df9f3e5004`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后，以gel_beads来自cp_feeds和cp_carry的原始分子执行一次A_i / Q；唯一期间报告除法见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_feeds`
- 来源：`rohm-haas-so3-sulphonation-1980`

###### 新鲜磺化剂 (`fresh_so3`)

称量整份外购液态SO3，包括实际稳定剂和杂质。用已计入的DCE在场内溶解，不再新增一笔外购磺化剂溶液。独立测定未反应SO3及水合后酸。

- 选定流：稳定化液态三氧化硫
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后，以fresh_so3来自cp_feeds和cp_carry的原始分子执行一次A_i / Q；唯一期间报告除法见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_feeds`
- 来源：`rohm-haas-so3-sulphonation-1980`

###### 新鲜溶胀溶剂及补充料 (`fresh_dce`)

全部用于珠体溶胀及配制磺化剂的新鲜DCE只计一次。回收DCE/SO3按组成拆分为内部交接亚账，保留回收能耗和排放清除负荷。专利回收百分比不作为场址默认值。

- 选定流：液态1,2-二氯乙烷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后，以fresh_dce来自cp_feeds和cp_carry的原始分子执行一次A_i / Q；唯一期间报告除法见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_feeds`
- 来源：`rohm-haas-so3-sulphonation-1980`

###### 整份外购钠型转化液 (`caustic_solution`)

记录整份外购NaOH水溶液及实测NaOH/水含量，不再次增加NaOH当量和载水采购。专利实施例1使用10%溶液；实际浓度、剂量及游离酸须测量，不能照抄。若场内配制，将该商业输入替换为分别外购的NaOH和水，并纳入配制负荷。

- 选定流：氢氧化钠水溶液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后，以caustic_solution来自cp_feeds和cp_carry的原始分子执行一次A_i / Q；唯一期间报告除法见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_feeds`
- 来源：`rohm-haas-so3-sulphonation-1980`

###### 水合及洗涤水 (`demin_water`)

计量另行供给的水合、洗涤、漂洗及实际回收清洁用水。区分交付珠体保留水、排液、蒸发和水性废液。配方载水已包括在整份制剂中。

- 选定流：去离子水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后，以demin_water来自cp_feeds和cp_carry的原始分子执行一次A_i / Q；唯一期间报告除法见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_feeds`
- 来源：`rohm-haas-so3-sulphonation-1980`

###### 回收惰性气体 (`nitrogen`)

实际使用时记录惰化、真空回收和储存用氮，保留组成、温压、速率积分及最终去向。实施例2支持回收单元，不规定必需氮耗或凝胶路线回收率。

- 选定流：氮气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后，以nitrogen来自cp_utilities和cp_carry的原始分子执行一次A_i / Q；唯一期间报告除法见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`rohm-haas-so3-sulphonation-1980`

###### 计量电力 (`electricity`)

包括接收、搅拌、泵、真空、冷却、回收、洗涤、筛分、脱游离水、储存、包装和装载的计量电力。共用负荷使用有证据的物理驱动量分配。披露实际场址及供电组合不确定性。

- 选定流：电力
- 流属性/单位：Energy / MJ
- 数量规则：原始单位换算后，以electricity来自cp_utilities和cp_carry的原始分子执行一次A_i / Q；唯一期间报告除法见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`rohm-haas-so3-sulphonation-1980`

###### 非蒸汽外供热 (`imported_heat`)

在声明的公用工程接口计量反应、回收蒸馏及实际保温储存的非蒸汽热负荷。本行不再包括蒸汽热量。上游燃料、发热损失和排放在完整公用工程供应模块中只计一次。

- 选定流：交付过程热
- 流属性/单位：Energy / MJ
- 数量规则：原始单位换算后，以imported_heat来自cp_utilities和cp_carry的原始分子执行一次A_i / Q；唯一期间报告除法见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`rohm-haas-so3-sulphonation-1980`

###### 供给蒸汽 (`steam`)

实际使用时记录蒸汽物理质量、压力、温度或焓、冷凝水返回及供给模块。蒸汽热量不得再次计入imported_heat。实际存在的冷却补水或另购制冷剂须分别增加原子交换行。

- 选定流：过程蒸汽
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后，以steam来自cp_utilities和cp_carry的原始分子执行一次A_i / Q；唯一期间报告除法见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`rohm-haas-so3-sulphonation-1980`

###### 实际使用的单一内衬袋 (`ldpe_liner`)

采集实际内衬质量及废包装，与树脂净质量分开。这是有条件的具体包装组件，不声称所引商业牌号采用该包装。纳入实际制袋上游，其他实际组件逐项增加。

- 选定流：LDPE内衬袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后，以ldpe_liner来自cp_pack和cp_carry的原始分子执行一次A_i / Q；唯一期间报告除法见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`dupont-irc120-na-2024`

###### 实际使用的单一外袋 (`pp_sack`)

称量实际外袋；适用时保留供应结构及可重复使用容器分配依据。即使实际包装材料不是该示例，也必须纳入包装、搬运、仓储及装载负荷。

- 选定流：聚丙烯编织外袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后，以pp_sack来自cp_pack和cp_carry的原始分子执行一次A_i / Q；唯一期间报告除法见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`dupont-irc120-na-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 终端净交付湿态钠型树脂 (`supplied_resin`)

终端产品为实际净交付并验收的1千克钠型磺酸基苯乙烯–DVB凝胶珠，按可复现排液协议保留声明的平衡珠内及珠间水分；不含独立上清液及包装皮重。原生基本名为Cation Exchange Resin / 阳离子交换树脂，混合类型为工厂生产混合；路线和属性名称分量为空，CAS及地理/locationOfSupply缺失，是Product flow，Mass参考系数为1且无其他属性。完整备注描述带负电交联结构单元以结合Na/Ca交换K，以及胃肠道和心力衰竭用途。明确披露该用途语境；其不构成工业等级、水分、离子型、药用等级、路线或实际供应商批准。原生CPC35499为粗泛分类债务。只采用广义阳离子树脂物理身份；具体Na/磺酸基/凝胶/湿态须以实际COA建立，不能由UUID推出。

- 选定流：阳离子交换树脂 `8fb3a705-f250-4f6d-afff-46d8ca7bee2b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_delivery`
- 来源：`rohm-haas-so3-sulphonation-1980`; `dupont-irc120-na-2024`

###### 跨边界公用工程冷凝水 (`returned_condensate`)

在公用工程接口记录实际返回的冷凝水；供应模块的供给返回及能量抵扣须一致。其不是产品Q，也不能再次作为回用水采购。

- 选定流：蒸汽冷凝水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后，以returned_condensate来自cp_utilities和cp_carry的原始分子执行一次A_i / Q；唯一期间报告除法见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：`rohm-haas-so3-sulphonation-1980`

##### 废物流

###### 单一实际收集水性废液 (`aqueous_effluent`)

称量实际混合并送外部处理的水性废液，独立测定游离酸碱、硫酸根、钠、溶解DCE和有机物、悬浮树脂及水。物理上分别去向的物流须拆行。整份废物交接及组成亚账不能同时当作直接水排放。不以COD重建物种。

- 选定流：含硫酸钠的树脂洗涤水性废液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后，以aqueous_effluent来自cp_outlets和cp_carry的原始分子执行一次A_i / Q；唯一期间报告除法见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlets`
- 来源：`rohm-haas-so3-sulphonation-1980`

###### 未回收磺化剂废液 (`spent_agent`)

实际未回收废磺化液或清除流以实测残留SO3/DCE/酸含量及物相跨越废物处理门。内部回收剂不是本外部输出。保留回收能耗、氮、冷凝、残留溶剂和处理；专利所谓无反应副产物不等于零废液或零排放。

- 选定流：废SO3–1,2-二氯乙烷液体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后，以spent_agent来自cp_outlets和cp_carry的原始分子执行一次A_i / Q；唯一期间报告除法见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlets`
- 来源：`rohm-haas-so3-sulphonation-1980`

###### 拒收珠体废物 (`resin_fines`)

分别计量破珠及拒收树脂，记录离子型、保留液、污染物、处理及结转负荷。送返工的退回珠体为内部循环，不能同时当作处置，也不能创造第二次验收产量或交付。

- 选定流：磺化苯乙烯–DVB树脂细粉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后，以resin_fines来自cp_outlets和cp_carry的原始分子执行一次A_i / Q；唯一期间报告除法见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlets`
- 来源：`rohm-haas-so3-sulphonation-1980`

##### 基本流

###### 向空气释放DCE (`dce_air`)

用物种分辨采样及积分废气流量测定向声明空气介质的逸散及治理后残留DCE。治理前后和回收溶剂不得重复计量。不得由溶剂回收主张推定零排放。

- 选定流：1,2-二氯乙烷，向空气排放
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后，以dce_air来自cp_outlets和cp_carry的原始分子执行一次A_i / Q；唯一期间报告除法见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlets`
- 来源：`rohm-haas-so3-sulphonation-1980`

###### 实际硫酸雾空气排放 (`acid_mist_air`)

若与水分接触形成酸雾，测量治理后实际H2SO4空气排放，区分未水合SO3、液态硫酸盐废物及树脂所含硫。若确有SO3排放，须单独增加基本流和测量，不得用闭合残差将其称为酸雾。

- 选定流：硫酸，向空气排放
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后，以acid_mist_air来自cp_outlets和cp_carry的原始分子执行一次A_i / Q；唯一期间报告除法见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlets`
- 来源：`rohm-haas-so3-sulphonation-1980`

###### 实测水蒸气 (`water_air`)

依据计量或采样废气的温湿度和积分流量确定实际水蒸气，并一致扣除入口湿度。不能将其与未知反应水一起作为拟合未知数闭合质量。

- 选定流：水，向空气排放
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后，以water_air来自cp_outlets和cp_carry的原始分子执行一次A_i / Q；唯一期间报告除法见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlets`
- 来源：`rohm-haas-so3-sulphonation-1980`

###### 排放氮气 (`nitrogen_air`)

追踪回收治理后实际排氮及保留库存；混合尾气须有实测组成。不能将每千克外购氮自动转成排放。

- 选定流：氮，向空气排放
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后，以nitrogen_air来自cp_outlets和cp_carry的原始分子执行一次A_i / Q；唯一期间报告除法见第8节。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlets`
- 来源：`rohm-haas-so3-sulphonation-1980`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| physical_tracking | p_resin | 优先使用等级批次直接计量；按有证据的运行时间、实测负荷、搬运质量或库位占用细分共用公用工程、回收、清洁、仓储及装载负荷，保留因果依据与不确定性。不按交换容量分配，也不能只凭eq/L比较等级。 | rohm-haas-so3-sulphonation-1980; dupont-irc120-na-2024 |
| recovery_no_credit | p_resin | 内部回收SO3/DCE、冷凝水及返工珠体保留配对质量组成负荷交接，合并时抵消。废物及树脂细粉不自动成为联产品。若有真实可售回收品外出，先新增实际流行及独立合理分配再报告；不默认给替代或避免处理抵扣。 | rohm-haas-so3-sulphonation-1980 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_feeds | p_resin | 整份外购化学品及前体输入 | foreground_records | row_id；批号；时间戳；毛重皮重；原始净质量；含量；载水；纯度；前体凝胶交联粒径；交付单位；收发及原料库存变化 | 物料负责人记录原始称重接收、整份发料及原料期初末库存；核对实际过程消耗、泄漏、回收返回和含量亚账。不除以产出。保留失败投料、返工和源COA。 | kg | 每批次及计量间隔 | 包括失败和零产出运行的完整匹配期间 | 实际树脂场址及声明接口 | 每 1 kg 参考流 | 校准称重、发票、领料日志及COA |
| cp_utilities | p_resin | 电热蒸汽气体及冷凝水 | foreground_records | 表起止读数；能量；积分气量或速率时间；组成；温度；压力；蒸汽焓；冷凝水；操作时间；共用负荷驱动量 | 公用工程负责人保留全部制造、实际回收、失败运行、储存、搬运及装载的原始期间总量；分别记录每种载体及生成模块边界。仅对速率积分，已经积分的体积不得再乘时间。采集端不做A/Q。 | kg; MJ; kWh; m3 | 每批次及计量间隔 | 包括失败和零产出运行的完整匹配期间 | 实际树脂场址及声明接口 | 每 1 kg 参考流 | 表计校准、公用工程票据、状态密度证据及分配测量 |
| cp_delivery | p_resin | 验收排液湿态及实际发运Q | foreground_records | 唯一批号批群；等级；新放行R；交付毛皮净湿质量；退回撤销及再交付质量；水分排液方法；游离液；功能基；Na比例；残DCE酸盐；容量试验及床体积 | 质量与发运负责人签认实际批次COA、可重复平衡排液程序、校准装填质量及交付单。R与实际净外发分开记录。退回撤销与原交付及负荷批群匹配；退回重新验收或再交付的珠体不能形成额外新产量。不将报告分母改成干基，也不从容量推质量。本协议不执行归一化。 | kg; mass fraction; eq/L; meq/g | 每批次及计量间隔 | 包括失败和零产出运行的完整匹配期间 | 实际树脂场址及声明接口 | 每 1 kg 参考流 | COA、原生身份限定、交付退回凭证、采样及排液记录 |
| cp_pack | p_resin | 实际包装仓储搬运及发运物料 | foreground_records | 组件row_id；组成；质量；皮重；报废；周转次数；批号；仓库占用；装载搬运次数 | 包装物流负责人记录所有相关批群的未除实际物料量及物理搬运记录，包括报废、退回和在库产品。能耗在cp_utilities用操作标签计量，不能重复增加同项负荷。声明参考门及发运装载接口。 | kg | 每批次及计量间隔 | 包括失败和零产出运行的完整匹配期间 | 实际树脂场址及声明接口 | 每 1 kg 参考流 | 包装单、皮重核验、库存及搬运日志 |
| cp_outlets | p_resin | 废物及实际环境物种 | foreground_records | 物流row_id；物相；去向介质；整份质量；组成；积分废气量或速率时间；采样条件；SO3/H2SO4区分；氮；水；DCE；过滤捕集；回收质量 | 环境负责人称量实际分开的废物流，采样治理后实际排放物种；保留独立干湿气基准、检出限及实测治理回收表现。外包整份废物处理只连接一次。不得用同一残差反推未知水和未知出口，也不得将检测失败当作零。不除以Q。 | kg; m3 | 每批次及计量间隔 | 包括失败和零产出运行的完整匹配期间 | 实际树脂场址及声明接口 | 每 1 kg 参考流 | 称量单、处置交接单、样品分析和监测限 |
| cp_carry | p_resin | WIP成品库存内部循环及结转负荷 | foreground_records | 期初末原料WIP成品质量；物种状态；批次谱系；按row_id结转负荷向量；当期过程负荷；新放行R；发运Q；回收返工返回；失败零产出批次；仓储发运负荷 | 生产核算负责人保留期初末WIP和成品的原始质量及未归一负荷，包括以前期间负荷以及全部失败零产出返工活动。分别核对制造放行账和成品仓发运账；内部交接质量及结转负荷保留至合并。对同批群退回先撤销原发运，再作一次再交付，并保留新增返工负荷；跨期更正明确原批群和此前报告。不得假设R=Q，也不得在采集时相除。 | kg; row-native burden units | 每批次及计量间隔 | 包括失败和零产出运行的完整匹配期间 | 实际树脂场址及声明接口 | 每 1 kg 参考流 | 库存勾稽、成本物理负荷账、批次谱系及退回文件 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | all inventory rows | 将原始称重单位换为kg；kWh按3.6 MJ/kWh换为MJ。实际气液体积使用同组成温压下独立支持的密度。速率乘持续时间得到积分体积；已积分体积不再乘时间。本步骤不归一。 | cp_feeds; cp_utilities; cp_pack; cp_outlets | converted_raw | rohm-haas-so3-sulphonation-1980 |
| species_ledger | all material rows | 分别守恒完整物理质量及C/H/O/S/Na/Cl，与实测化学物种和水状态分开。理想芳基-H + SO3 → 芳基-SO3H不净生成水；结合酸 + NaOH → 结合磺酸钠 + H2O只按独立测定转化程度生成水。残余SO3水合消耗水；实际游离酸中和使用独立分析的物种及反应程度。这些是配平解释式，不是默认反应程度，也不证明没有副反应。区分化学水、珠体保水、溶胀相态再分配、载水、排液及蒸发。用独立硫钠氯及功能基物种分析核验，不得用同一质量残差拟合反应水和出口水，也不得将COD当作物种衡算。 | converted_raw; cp_feeds; cp_delivery; cp_outlets; cp_carry | species_balance | rohm-haas-so3-sulphonation-1980; dupont-irc120-na-2024 |
| cohort_ledger | all inventory rows | 按同等级路线钠型湿态批群保留原始制造账和成品仓账。制造负荷向量B_release = B_open_WIP + B_current_process - B_close_WIP，保留失败零产出及未回收损失返工负荷，不自动给废料抵扣。实际新放行R及B_release只交成品账一次。交付负荷A_i = B_open_FG_i + B_release_i + B_storage_dispatch_i - B_close_FG_i；其他出口分配及退回更正须另有证据并披露。逐批匹配期初库存所带负荷、当期实际仓储包装装载及期末库存负荷。内部放行入仓交接在合并时抵消。成品期末库存不能作为同批R的第二次生产输出；未交付库存及负荷保留结转，不属于Q。物理衡算中库存仍为库存，不是重复外部交换。Q仅来自cp_delivery。缺少结转负荷或Q不为正时，不得报告每千克交付结果。 | converted_raw; species_balance; cp_carry; cp_delivery; cp_pack; cp_utilities; cp_outlets | A_i; Q | rohm-haas-so3-sulphonation-1980; dupont-irc120-na-2024 |
| normalize_period | all inventory rows | 在原始换算及完整批群负荷确定后，仅执行一次a_i = A_i / Q；A_i为匹配交付批群在行原生单位下的完整原始分子；Q为实际净交付验收湿树脂kg，不是R。参考输出恰为1千克。流卡公式和协议聚合引用该同一次报告操作，不能再次执行A/Q。 | A_i; Q; cp_delivery; cp_carry | a_i | rohm-haas-so3-sulphonation-1980; dupont-irc120-na-2024 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_and_state | p_resin | 核实未功能化凝胶前体及不同的功能化成品身份、整份制剂、实际离子转型和湿态排液测试；原生广义身份不能建立实际等级供应商适用性。 | COA、功能基离子分析、完整原生字段及供应证据 |
| period_completeness | all inventory rows | 计入全部实际原始期间进料负荷、失败零产出、返工退回、WIP成品库存及结转。缺失字段须声明不确定或结果不可得，不当作零。 | 原始日志、库存负荷勾稽及责任人签认 |
| species_independence | p_resin | 独立质量元素、物种及水状态证据须在声明分析不确定度内同时成立；保留实测副反应和残留，不强行精确闭合。 | 独立分析、采样设计、检出限和不确定度预算 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference_gate | p_resin | 要求唯一终端Product行supplied_resin，具有声明UUID、1千克实际净交付钠型湿凝胶状态及完整限定信息；不能用未功能化聚合物、容量、干kg、H型或放行R替代。 | rohm-haas-so3-sulphonation-1980; dupont-irc120-na-2024 |
| complete_period_and_unit | all inventory rows | 要求原始换算、匹配正Q、WIP及成品库存负荷结转、全部失败返工退回记录、唯一归一及独立物种水衡算；未解决源字段、介质或换算保留为明确发现。 | rohm-haas-so3-sulphonation-1980; dupont-irc120-na-2024 |
| native_limits_and_routes | p_resin | 在双语中保留全部原生名称分量、备注、缺失CAS地理、生产混合及类型属性限制和分类债务。原生广义阳离子树脂医疗用途不是等级批准；实际化学等级路线矛盾者不能采用。按无溶剂反证检查实际路线。 | rohm-haas-so3-sulphonation-1980; dupont-irc120-na-2024; lanxess-s1567-2020 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset；background_dataset |
| downstream_use | 所述新湿态钠型树脂制造及实际供应；只有另行明确功能及门时，才与独立建模的树脂使用再生组合。 |
| allowed_use | 有路线等级状态期间限定的供应清单，以及披露不确定度的等边界比较。 |
| excluded_use | 全CPC覆盖、任意交换剂、干聚合物等效、软化服务容量寿命主张、药用食品饮用水认证，或从广义UUID推定供应配方。 |
| required_metadata | 实际场址及供应地理；匹配批群及报告期；原生凝胶前体及交联指标；DCE/SO3路线及完整商业进料组成；磺酸功能基及Na比例；实际等级验收及残DCE/游离酸/盐；排液及平衡含水测定方法；湿态净交付Q及库存负荷结转；干质量/容量/床体积测试条件；实际公用工程包装处理及发运接口 |
| required_quality_disclosure | 实际数据覆盖；Q与R及库存结转；原生语境及粗分类限制；缺失辅助UUID供应模块；来源年代及实施例矛盾；物种换算不确定性。 |
| update_trigger | 骨架交联功能离子态、磺化路线溶剂、排液水分、验收、场址供应模块、库存门、回收处理或原始证据变化。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| rohm-haas-so3-sulphonation-1980 | literature | Rohm and Haas, US4209592A (1980-06-24), PDF pp.2–3, printed cols.1–4, Examples 1–3. https://patents.google.com/patent/US4209592A/en | SO3/DCE凝胶磺化；分别披露的水合NaOH转型洗涤及回收单元。仅历史实验案例：实施例3正文六小时而表2为16小时，不采用时间剂量收率水分或默认容量；实施例1大孔结果不是凝胶等级结果。 |
| dupont-irc120-na-2024 | handbook | DuPont, AmberLite IRC120 Na, 45-D01246-en Rev.5 (June 2024), pp.1–3. https://www.dupont.com/content/dam/water/amer/us/en/water/public/documents/en/IER-AmberLite-IRC120-Na-PDS-45-D01246-en.pdf | 实际苯乙烯DVB凝胶、磺酸基、装运钠型及湿态描述；溶胀容量及颗粒装运密度为不同测量。典型属性不是通用验收或kg换算；不声称该牌号使用所选工艺。 |
| lanxess-s1567-2020 | handbook | LANXESS, Lewatit S1567 flyer, 10365-EN 02/2020, Status 01/2020, pp.1–2. https://lanxess.com/-/media/project/lanxess/corporate-internet/products-and-solutions/brands/lewatit/service-center-product-literature/flyer_lewatit_s1567_en.pdf | 独立厂家反证：商业单分散软化树脂采用无溶剂生产磺化。本DCE方法排除该路线；不转用宣传性能及比较图为因子或等级规格。 |
