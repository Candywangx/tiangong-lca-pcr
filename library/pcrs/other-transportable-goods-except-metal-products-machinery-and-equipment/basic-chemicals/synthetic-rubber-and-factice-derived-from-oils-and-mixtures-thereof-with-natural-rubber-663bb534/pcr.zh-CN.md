---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.synthetic-rubber-and-factice-derived-from-oils-and-mixtures-thereof-with-natural-rubber-663bb534
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 23%结合苯乙烯非油展E-SBR干胶的乳液聚合生产

## 1. 范围与适用性

本方法限于以苯乙烯与1,3-丁二烯为单体的氧化还原引发乳液聚合、单体回收、盐/硫酸凝聚、洗涤、机械脱水、干燥和打包质量放行的23%结合苯乙烯、非油展、未硫化E-SBR干胶。胶乳是中间物，不是此参考产品。温度制度、实际牌号、组成及验收要求须独立声明；不同热聚/冷聚工况不得不加说明混合。此处单一过程是这些实际工段的合并前景账，各工段仍分别采集。

排除S-SBR、SBS、BR、NBR、EPDM、IIR、商品胶乳、油展或炭黑母炼胶、天然橡胶混合物、油膏胶、废塑料回收、轮胎和配混硫化制品。不得因同属34800替换。EPA的1982及1996美国资料仅支持路线与物料角色，不把历史转化率、温度、配方比例、排放因子或控制效率设为本厂默认；1996报告指出主体资料早于1986且各厂不通用。专利只支持具体助剂角色，不证明实际采购或数量。[epa-ap42-sbr; epa-sbr-1996; wo-shortstop-2014; us-stabilizer-2010]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.synthetic-rubber-and-factice-derived-from-oils-and-mixtures-thereof-with-natural-rubber-663bb534 |
| classification_refs | CPC 3.0:34800; 本方法仅覆盖窄范围，正映射待主控独立决定 |
| covered_products | 23%结合苯乙烯、非油展、未硫化E-SBR打包干胶 |
| excluded_products | 胶乳、其他胶种、油膏胶、油展/母炼胶和硫化制品；见第1节 |
| representative_product | 实际检验23%结合苯乙烯的E-SBR干胶；不冒充标称23.5%的1502牌号 |
| production_route | 氧化还原乳液聚合；终止；丁二烯闪蒸回收、苯乙烯汽提回收；盐/硫酸凝聚；漂洗压榨；干燥打包放行 |
| market_state | 未硫化非油展干胶，保留实际水分与稳定剂；包装不计净胶质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 同一牌号和路线的质量放行E-SBR干胶 |
| How much | 1 kg 净供货状态干胶 |
| How well | 23%结合苯乙烯；实际水分、灰分、皂/酸、稳定剂与门尼黏度达到声明验收规范；非油展且未硫化 |
| How long or cycle | 一个完整匹配期间与批群，按首次正质量放行计量，不作使用寿命承诺 |
| reference_flow_link | product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 苯乙烯-丁二烯橡胶 `0387054c-15d6-4e16-9f8f-0766754a653a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际牌号及23%结合苯乙烯检验依据; 乳液聚合与氧化还原体系; 热聚或冷聚及温度制度; 未硫化干胶形态; 非油展及稳定剂; 实际水分和残单; 首次质量放行门; 同批群Q与完整期间; WIP和成品结转; 实际场址与供应地; 包装和发运边界 |

必需限定信息应在前景数据包元数据、过程备注、参考流备注或等效字段完整声明。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为同产品、路线、状态批群首次质量放行的正净干胶质量，含实际残留水和稳定剂、无包装。按唯一胶包/批号去重，重验收不增Q；Q不是发运量，也不是纯聚合物质量。 |
| release_stock | all inventory rows | Mass | kg | 生产实物账输出已含放行Q，不再把同批Q期末成品库存作为额外生产输出。另建成品仓储/发运账：期初成品+放行入仓+实际退货=交付+期末成品+实际损失；合并抵消放行内部交接，逐批结转负荷。保留实际纳入的仓储、包装、搬运和发运负荷，披露其归属期间，不强设交付=Q。若改为净交付门，须重建分母、期初期末成品与负荷结转后才可报告。 |
| wet_formulation | all inventory rows | Mass | kg | 整份外购溶液或制剂只采购一次；活性、溶剂、载体水和水合水仅作组成亚账。现场配制记录单独购入成分、配制能耗和损失，不再重复采购配成物。中间胶乳水与干胶水分须按实际固含/水分换算。 |
| unit_conversion | all inventory rows | Mass / Energy / Volume | kg; MJ; m3 | 吨转kg乘1000，kWh转MJ乘3.6。液体体积用实际工况密度转质量。速率乘对应实际时长；已积分体积不再乘时间。蒸汽质量、焓及冷凝水分开，不以次级属性系数当密度。 |
| species_water | all inventory rows | Mass | kg | 物理总质量、C/H/O/S/Na/Cl及实际引发体系有关元素守恒分别检查；聚合加成不套缩合反应水。皂酸化、氧化还原、阻聚、燃烧及处理若形成/消耗水，须独立物种/反应与测量依据；蒸发、结晶水、自由水和冷凝只是各自转移。不得用同一残差同时拟合未知反应水和未知出口，不用COD或理论产率代替。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 新鲜抑制单体及明确整份助剂/公用工程入厂；不以采购胶乳为起点 |
| starting_condition_role | foreground_collection_boundary |
| product_classification_scope | CPC34800中本PCR限定的E-SBR初级干胶 |
| recursive_input_rule | 内部胶乳、回收单体、母液及返工胶按内部账抵消；外购E-SBR或胶乳另声明其上游与负荷，不用同一参考产品无限递归 |
| upstream_dataset_requirement | 逐项匹配实际化学品/整份制剂、蒸汽质量/焓、电网和废物处理边界，UUID不提供供应量 |
| disclosure | 声明场址、期间、工段、热/冷制度、外包处理、成品仓储/包装/装运纳入范围、负荷结转及排除项 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | all inventory rows | 纳入单体储存/去阻聚剂、制液、聚合与制冷、终止、闪蒸/汽提及压缩冷凝吸收回收、凝聚漂洗压榨、干燥打包质量放行、实际纳入仓储发运及污染控制；共享设施按可追溯计量归属。 | epa-ap42-sbr; epa-sbr-1996 |
| boundary_expand | all inventory rows | 所列助剂为具体可核验交换，不是普适配方。实际另用碱、脂肪酸皂、还原剂、螯合剂、吸收油、氮气、制冷剂、燃料、包装、处理药剂或产生废物/排放，须逐种增原子行及采集协议。仅有证据确实无该交换才可not_applicable；不得以UUID空白删负荷。 | epa-ap42-sbr; epa-sbr-1996 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| esbr_line | E-SBR单体至干胶放行合并生产线 | required | 仅第1节路线；各工段分别采集 | foreground | product |

### 过程：E-SBR合并生产线（`esbr_line`）

#### 输入

##### 产品流

###### 新鲜苯乙烯单体（`styrene`）

按实际供应状态记录采购含阻聚剂苯乙烯；纯度和阻聚剂为组成亚账。内部回收苯乙烯不是再次采购。

- 选定流：苯乙烯单体
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：epa-sbr-1996

###### 新鲜1,3-丁二烯单体（`butadiene`）

记录整份新鲜单体供货、实际纯度与阻聚剂、转移损失及储量变化；区分回收循环量。

- 选定流：1,3-丁二烯单体
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：epa-sbr-1996

###### 松香皂乳化剂溶液（`soap`）

一个采购松香皂溶液输入。声明实际钠盐或钾盐、固含量和载体水；若现场配制，以实际松香酸、碱、水各行替换采购制剂并计配制能耗与损失，不再重复采购同一配成溶液。

- 选定流：松香酸皂水制剂
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：epa-sbr-1996

###### 氢过氧化物引发剂制剂（`initiator`）

所选氧化还原路线的整份采购制剂；记录实际异构体或物种、活性含量和溶剂。历史典型配方不能证明供应商组成或投加量。

- 选定流：二异丙苯氢过氧化物制剂
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：epa-sbr-1996

###### 硫酸亚铁活化剂（`activator`）

记录实际供应水合态、溶液浓度及整份购入质量；结晶水与载体水分账。实际另用的还原剂或螯合剂须各增原子行。

- 选定流：硫酸亚铁
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：epa-sbr-1996

###### 硫醇链转移剂（`modifier`）

记录硫醇供应牌号及混合物实测含量，区别乳化剂与引发剂；不假定其定量进入聚合物。

- 选定流：叔十二烷基硫醇
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：epa-sbr-1996

###### 焦磷酸盐缓冲剂（`buffer`）

采用该缓冲剂时记录实际水合态或制剂和供货质量；其他缓冲化学品须另行明确。

- 选定流：焦磷酸钾
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：epa-sbr-1996

###### DEHA终止剂（`shortstop`）

仅在工厂配方确认时采用整份采购DEHA水溶液；跟踪汽提及回收夹带，不暗换为其他羟胺或混合终止剂。专利支持其作用与挥发性，不提供本厂用量。

- 选定流：N,N-二乙基羟胺水制剂
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：wo-shortstop-2014

###### 酚类抗氧剂制剂（`antioxidant`）

条件性采购苯乙烯化苯酚制剂；声明单、双、三取代组成、表活及载体和实际保留比例。另购亚磷酸酯或其他稳定剂须另增卡；不把专利混配或用量推定为本厂事实。

- 选定流：苯乙烯化苯酚抗氧剂制剂
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：us-stabilizer-2010

###### 凝聚硫酸溶液（`acid`）

盐/酸凝聚路线中的整份采购硫酸溶液，采用实际质量分数；有效H2SO4与载体水为亚账，另取的稀释水列用水输入。

- 选定流：硫酸水溶液
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：epa-ap42-sbr

###### 凝聚盐水（`salt`）

采用外购NaCl盐水时记整份供货；现场制盐水改记实际干NaCl及另供水并计混合负荷；循环母液属内部账。

- 选定流：氯化钠盐水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：epa-ap42-sbr

###### 新鲜工艺水（`water`）

分别计乳液制备、单体清洗、胶粒漂洗、清洁与冷却补水的外来水；排除采购制剂已含水及内循环。记录实际处理及计量工况下体积转质量密度。

- 选定流：工艺用水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：epa-ap42-sbr; epa-sbr-1996

###### 外购电力（`electricity`）

分阶段计聚合搅拌、制冷、真空回收、凝聚、压榨、干燥风机、打包、处理、仓储及装运用电；记录真实电网、电压、年份。自发电须含燃料及排放并避免重复外购电。

- 选定流：电力
- 流属性/单位：Energy / MJ
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_utility
- 来源：epa-ap42-sbr

###### 外购蒸汽（`steam`）

记录进口蒸汽质量、压力、温度、焓、直接注汽及冷凝水回流基准；背景须匹配供应蒸汽质量，不再重复采购同一蒸汽热量MJ。现场制汽须计燃料、给水、处理、排污及排放。

- 选定流：工业蒸汽
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_utility
- 来源：epa-ap42-sbr

###### 胶包包装膜（`film`）

实际采用PE胶包膜时适用；聚合物、助剂、厚度及供应商须有证据。包装不计入橡胶净质量Q，但材料、包装作业及废物负荷保留；其他包装组件各增行。

- 选定流：聚乙烯胶包包装膜
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_material
- 来源：epa-ap42-sbr

###### 搬运柴油（`diesel`）

边界内实际搬运和装载用油时适用；燃烧物种分别计量，不混合燃料与运输服务，不因发运不等于Q而删去搬运。

- 选定流：柴油
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_utility
- 来源：epa-ap42-sbr

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收E-SBR干胶（`product`）

唯一终端参考行：干燥并质量放行后的未硫化、非油展、23%结合苯乙烯E-SBR胶粒打包干胶。原生CAS为9003-55-8；原生备注描述E-SBR与宽分子量分布，不提供数值能耗因子。原生名称限定23%苯乙烯及乳液路线；locationOfSupply缺失，不代表CN、HK或GLO。其36220分类与初级聚合物物理身份不符，保留元数据债务。记录不提供品牌、温度、水分、供应配方或背景数量；不得把标称23.5%牌号暗当精确23%。

- 选定流：苯乙烯-丁二烯橡胶 `0387054c-15d6-4e16-9f8f-0766754a653a`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：fixed_value
- 适用范围：product_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：identity_reference
- 采集协议：cp_release
- 来源：epa-ap42-sbr; epa-sbr-1996

###### 外送冷凝水（`condensate`）

向蒸汽供应商实际外返时适用，记录质量、温度及双方边界。内部冷凝水循环不是外送，合并时抵消。

- 选定流：蒸汽冷凝水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_utility
- 来源：epa-ap42-sbr

##### 废物流

###### 凝聚与洗涤废水（`effluent`）

向厂外处理的一个真实汇集废水流，记录全湿质量与实测Na、Cl、S、残单、固体、pH及有机负荷；不同且不相容去向拆行。COD不是化学物种，不能用于元素闭合；厂内处理须展开实际药剂、污泥、直接排水及物种。

- 选定流：酸性含盐橡胶工艺废水
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_output
- 来源：epa-sbr-1996

###### 橡胶清除废料（`reject`）

仅计实际外送处置物，包括失败或零产出运行废料。内部返工是转移，不是外部废物或新产品；销售独立验收的次级牌号须明确联产品账及分配。

- 选定流：待处置不合格未硫化E-SBR胶粒
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_output
- 来源：epa-sbr-1996

###### PE膜废料（`film_waste`）

实际边角及不合格包装膜按声明处理去向记录，不与胶废料合并。

- 选定流：废聚乙烯膜
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_output
- 来源：epa-ap42-sbr

##### 基本流

###### 苯乙烯入大气（`styrene_air`）

按空气介质记录储存、放空、回收、凝聚、干燥、泄漏及处理未捕集苯乙烯；区分回收蒸气与销毁，不把历史总VOC因子全配给此物种。

- 选定流：苯乙烯
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_emission
- 来源：epa-ap42-sbr; epa-sbr-1996

###### 丁二烯入大气（`butadiene_air`）

按路线和介质分别测1,3-丁二烯排放；捕集循环单体不跨外部排放边界。

- 选定流：1,3-丁二烯
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_emission
- 来源：epa-ap42-sbr; epa-sbr-1996

###### 蒸发水（`water_air`）

按水分及冷凝水测量独立约束胶粒、干燥、冷却实际蒸发入气的水；不是通用聚合反应水，也不是可调闭合残差。

- 选定流：水蒸气
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_emission
- 来源：epa-ap42-sbr

###### 化石二氧化碳（`co2`）

现场燃烧或实际VOC氧化产生时按实测或有依据计算化石CO2；松香生物源碳另账，不将全部氧化碳标化石；外购电、蒸汽上游排放留在背景。

- 选定流：二氧化碳，化石
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_emission
- 来源：epa-sbr-1996

###### 二氧化氮入大气（`nox`）

条件性实际燃烧NO2排放，附方法和空气介质；总NOx以NO2计是等价指标，不是全部分子NO2，基本流报告前须把NO及其他物种拆行。

- 选定流：二氧化氮
- 流属性/单位：Mass / kg
- 数量规则：A_i / Q；完整匹配原始分子仅在第8节规定的报告操作中除一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_emission
- 来源：epa-sbr-1996

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_recycle | all inventory rows | 优先工段细分和物理因果计量。内部单体、母液、胶乳及返工胶既非联产品也不获避免负荷信用。失败、零产出、开停机、清洗及返工负荷全部保留在匹配批群；一次实际终端放行后重验收不造新Q。 | epa-ap42-sbr; jrc-ilcd-allocation-2010 |
| allocation_outputs | all inventory rows | 外售回收单体或独立验收次级胶须另列真实产品行、数量、质量、去向及负荷分配。优先避免分配；不可避免时声明物理关系与依据，物理不适用时说明替代依据与敏感性。废胶/废水不自动作联产品，外售不自动负排放。 | epa-sbr-1996; jrc-ilcd-allocation-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

采集保留未除的原始分子。aggregation_rule仅声明最终报告基准，与各数量卡指向同一个report_once操作，不是在采集端另算一次。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | esbr_line | product | quality_release | 批/胶包ID；牌号；路线；首次正放行时间；净质量；包装皮重；检验；水分；WIP及成品期初期末；退货；负荷结转 | owner：质量主管与生产会计。经校准净胶包称重和放行凭证确定原始Q；记录失败、零产出、撤销和返工的全部批次，附WIP及成品期初期末数量、组成和结转上游负荷，不归一化；核对独立仓储发运账，不把期末成品再加到已计Q。 | kg | 每批及连续区间 | 同一完整期间与产品/路线/状态批群 | 实际声明场址及纳入工段 | 每 1 kg 参考流 | 校准、台账、检验、库存与负荷结转核对记录 |
| cp_material | esbr_line | material | receipt_and_stock | 工段；行号；期间；批；整份供货质量；纯度/固含；物种；载体水；水合态；期初末；新鲜接收；循环；溢漏；WIP结转投入 | owner：物料会计及工段操作员。采集未除的原始收货、称量、库存移动及工段投料，核对整份外购制剂和组成亚账；保留失败、返工及WIP期初末全部结转负荷，采集端不作A/Q。实际新增化学品和包装各列原子行。 | kg; m3 | 每批及连续区间 | 同一完整期间与产品/路线/状态批群 | 实际声明场址及纳入工段 | 每 1 kg 参考流 | 校准、台账、检验、库存与负荷结转核对记录 |
| cp_utility | esbr_line | utility | meter_and_operation | 工段；行号；表计起止；积分体积；速率；时长；密度；kWh；蒸汽质量；压力；温度；焓；冷凝水；燃料；结转负荷；仓储装运期间 | owner：公用工程工程师。保留所有生产、回收、干燥、控制、仓储和装载的完整原始区间表计及工段日志，含失败和待机；核对共享表计及结转负荷。保留原始积分量及换算证据，不除Q；直接注汽水与冷凝水区别于外购热量。 | MJ; kWh; kg; m3 | 每批及连续区间 | 同一完整期间与产品/路线/状态批群 | 实际声明场址及纳入工段 | 每 1 kg 参考流 | 校准、台账、检验、库存与负荷结转核对记录 |
| cp_output | esbr_line | waste | weigh_and_analyse | 行号；物流；工段；湿质量；水分；物种；Na/Cl/S；碳；残单；COD；处理去向；废胶；循环量；WIP期初末 | owner：环保主管与废物保管员。逐流独立称量外送废物，保留分析及联单；全液质量与组成分账。未经/已处理接口、失败、废胶返工移动和WIP负荷全部保留原始期间总量，不A/Q，不残差拟合。 | kg; m3; mg/L | 每批及连续区间 | 同一完整期间与产品/路线/状态批群 | 实际声明场址及纳入工段 | 每 1 kg 参考流 | 校准、台账、检验、库存与负荷结转核对记录 |
| cp_emission | esbr_line | emission | monitor_and_speciate | 行号；物种；工段；大气/水介质；采样法；浓度；流量；积分气量；时长；水分；标况/工况；捕集/销毁；化石/生物碳；WIP负荷 | owner：环境监测负责人。采集正常与异常工况代表性原始分物种检测及完整匹配流量记录；核对捕集、循环、销毁和实际反应证据。原始浓度乘匹配积分体积不再乘时间，采集端不归一化；实际NO、CO、SO2、颗粒物或药剂排放须各增卡。 | kg; mg/m3; m3 | 每批及连续区间 | 同一完整期间与产品/路线/状态批群 | 实际声明场址及纳入工段 | 每 1 kg 参考流 | 校准、台账、检验、库存与负荷结转核对记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| report_once | all inventory rows | a_i = A_i / Q；A_i是转换原始单位后、按同批群归属并计期初WIP结转负荷减期末WIP结转负荷的完整期间分子，含失败/零产出、返工、损失和实际纳入仓储包装装运负荷；成品仓储账的负荷与内交接单独核对，不把已在Q内的期末成品再加产量。Q采用cp_release首次正放行净质量且必须大于零。此规则是唯一除法；各卡和aggregation_rule指向同一次报告，不顺序再除。参考输出恒为1 kg。 | A_i; Q; cp_release; cp_material; cp_utility; cp_output; cp_emission | a_i | epa-ap42-sbr; epa-sbr-1996 |
| physical_closure | all inventory rows | 生产批群：期初WIP+实际外入+内部转入=放行Q+其他真实出口+期末WIP+内部转出；成品仓储另账，合并抵消内转。先按全物理质量独立闭合，再按物种组成审计元素，不把单体聚合成胶的质量变化当水。未解释差额保留不确定性和调查。 | cp_release; cp_material; cp_output; cp_emission | physical_and_element_ledger | epa-ap42-sbr; epa-sbr-1996 |
| raw_convert | all inventory rows | 原始体积乘实测密度得质量；区间浓度乘同工况积分体积得物种质量并转换单位；只有速率才再乘对应时长。水/活性/载体亚账不再采购；蒸汽质量、焓和冷凝水各自保留，不能重复采购质量与热服务。原始换算在report_once之前且不除Q。 | cp_material; cp_utility; cp_emission | converted_raw_numerators | epa-sbr-1996 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 完整保留每项原生名称分量、CAS、路线、状态、地理/供货地、介质及属性单位；实际供应背景匹配独立判断。参考流只有23%苯乙烯乳液身份，分类36220债务披露；不从空地理推断全球适用。 | native identities; supplier certificates; actual grade assay |
| dq_complete | all inventory rows | 保留失败/零产出、返工、WIP、成品库存与结转负荷；实际药剂或排放不能因为未列或UUID未匹配而删去，完成原子展开后才能生成具体数量数据。 | complete period and stage ledgers |
| dq_reaction | all inventory rows | 水与元素闭合之外，实际反应物种及生成/消耗水须独立证据；残单/挥发/废水实测，历史资料只作路线核查。无现场数据不冒称已完成LCI。 | assays; reaction evidence; independent measurements |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | product | 只允许product作为唯一终端Product输出，UUID须与参考流相同。23%结合苯乙烯、乳液路线、干胶、非油展、未硫化及生产放行门均须一致；不以同UUID中间物、联产品或重验收造产量。 | epa-ap42-sbr |
| validate_period | all inventory rows | 核对全部原始期间分子、库存和WIP结转；Q>0且同批群去重。放行量与净交付量独立；禁止Q加同批期末成品；实际仓储包装发运返工负荷保留，内交接合并抵消，report_once只执行一次。 | epa-ap42-sbr |
| validate_species | all inventory rows | 检查质量及各相关元素、整份供货与亚账、不重复水和蒸汽；实际物种与反应水独立证据，不由COD、残差或理论产率替代。未确定实际配方/物种须说明并补证，不能伪造数值。 | epa-sbr-1996 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 同牌号同形态E-SBR作为下游橡胶配混原料 |
| allowed_use | 经现场证据核实的23%结合苯乙烯E-SBR干胶生产数据；候选方法须审查 |
| excluded_use | 胶乳、其他胶种/路线、油膏胶、废塑料、配混硫化产品及未经验证的23.5%牌号替代 |
| required_metadata | 全部参考限定信息、采集owner、原始期间分子、首次放行Q、WIP/库存与负荷结转、物种和实际供应背景 |
| required_quality_disclosure | 历史来源限制、原生分类债务、辅料UUID及供应背景未决、实测范围、未解释差额及不确定性 |
| update_trigger | 牌号/苯乙烯含量、配方、热冷制度、形态、参考门、回收或污染控制/能源供应发生变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| epa-ap42-sbr | official_guidance | US EPA. AP-42 §6.10 Synthetic Rubber, August 1982, reformatted January 1995. https://www.epa.gov/sites/default/files/2020-10/documents/c06s10.pdf | 第6.10-1至6.10-3页与图6.10-1：单体、回收、酸/盐凝聚、漂洗脱水干燥和打包称量路线；历史美国普通工艺描述，不采用温度、转化率、排放或控制效率默认。 |
| epa-sbr-1996 | official_guidance | US EPA. Locating and Estimating Air Emissions from Sources of 1,3-Butadiene, EPA-454/R-96-008, November 1996. https://www.epa.gov/sites/default/files/2020-11/documents/butadien.pdf | 第5-1至5-5页、表5-1：乳液与溶液及胶乳/固胶区分、实际物料角色、回收、洗涤干燥和排放源；主体资料早于1986，典型配方比例与历史排放不转作本厂数量或成品23%含量证明。 |
| wo-shortstop-2014 | literature | WO2014052212A1. Alkyl hydroxylamine compounds and their use for shortstopping free radical polymerizations, 2014-04-03. https://patents.google.com/patent/WO2014052212A1/en | 背景技术中DEHA终止剂及汽提/回收夹带问题；只作角色与去向证据，不采用发明替代品、剂量、效率或实际采购声明。 |
| us-stabilizer-2010 | literature | US7691927B2. Self-emulsifying liquid stabilizers, 2010-04-06. https://patents.google.com/patent/US7691927B2/en | 说明书酚类抗氧剂与苯乙烯化苯酚及凝聚前加入；不采用专利混配比例或功效，不证明本厂稳定剂牌号、供货组成或数量。 |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment, Detailed guidance, first edition March2010, §7.9.3, printed257–258/PDF277–278; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因型虚拟细分、决定性物理因果关系及剩余负荷经论证的其他关系，用于支持分配选择。不提供E-SBR配方、通用产品/废物份额、回收率、替代抵扣、温度或工厂数量。 |
