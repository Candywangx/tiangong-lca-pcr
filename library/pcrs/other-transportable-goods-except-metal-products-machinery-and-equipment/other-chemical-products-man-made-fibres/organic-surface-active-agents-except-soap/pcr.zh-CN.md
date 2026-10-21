---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.organic-surface-active-agents-except-soap
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# C12十二烷基硫酸钠干粉：SO3硫酸化、中和及干燥供货

## 1. 范围与适用性

本PCR限定一种非皂有机表面活性剂：直链C12、无乙氧基的十二烷基硫酸钠（SDS，CAS151-21-3）干粉，包含其实际实测水分和伴生盐；以正十二醇和外购液态SO3进行空气稀释膜式硫酸化，再用外购NaOH水溶液中和、真空/薄膜干燥，完成实际包装、成品仓储和厂门净交付。它只是CPC35310的一种较窄制造方法，不覆盖整类表面活性剂。路线由Chemithon工业单元说明支持；Thermo A11183.18规格仅用于核实粉末供货形态，不证明该供应商采用此路线。实际场址须独立证实完整路线及达到所声明等级的所有操作。

排除SLES、不同EO或烷基分布的混合SLS、其他阳离子盐、膏体/水溶液供货、皂、成品洗涤或消毒配方、下游稀释/配制/洗涤用途，以及氯磺酸、硫酸/发烟硫酸、氨基磺酸和厂内硫燃烧路线。所选干燥方式不推成喷雾干燥；不同干燥路线须重新取证。本方法不默认供应商配方、温度、收率、能耗、纯度阈值或零排放。目录标题99%干基与实际供应商CofA下限98.5%干基不相同；美国干燥失重与非美国Karl Fischer水分限定也不能互换，不移为通用验收阈值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.organic-surface-active-agents-except-soap |
| classification_refs | CPC 3.0 35310; narrower |
| covered_products | 实际等级的C12十二烷基硫酸钠干粉整份供货 |
| excluded_products | SLES；混合链SLS；其他盐；液态/膏状供货；皂；整份下游制剂 |
| representative_product | 正十二烷基硫酸钠粉末，实际含量、水分及无机盐均声明 |
| production_route | 外购正十二醇与液态SO3→干空气膜式硫酸化→NaOH溶液中和→真空/薄膜干燥→实际整理、包装、仓储及交付 |
| market_state | 完整干粉，厂门实际净交付，净粉末质量不含包装；非活性kg或固定含水率 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应达到所声明等级的C12十二烷基硫酸钠粉末 |
| How much | 1 kg 实际净交付的整份粉末 |
| How well | 以实际身份、烷基/EO分布、含量、水分、盐及质量验收记录证明；不等同洗涤服务 |
| How long or cycle | 一个完整实际期间及对应批群，厂门交付；无默认保质期 |
| reference_flow_link | delivered_powder |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 十二烷基硫酸钠 `e15fed31-c5b7-4582-a841-abd0e9b68bea` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际C12身份与CAS; 烷基及EO分布; 钠盐; 粉末形态和等级; 水分/含量/盐的测定方法及干湿基; 完整制造与干燥路线; 交付门与批群; 退货返工谱系; 期初末WIP和成品及结转负荷; 包装; 场址和期间; 上游供货和背景基准; 真实G/R与原参考状态D_rev净交付桥接; 蒸汽水与外返凝结水质量温压水质焓及唯一上游owner; 环境空气逐物种进出及毛H2O来源相态非加和视图 |

本参考仅对应delivered_powder终端行；其完整原生限定信息见该卡片。所有必需限定信息须在数据包中明确。Q是所声明批群在完整期间实际净交付并被接受的唯一实物粉末质量；不是新放行产量P。通过唯一批次/交付/退货谱系扣除最终退回量，识别首次与重复交接；退回再验收或再发运不造新产量，同一最终净供货实物只计一次。期末未交付成品不计Q。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅用实际交付整份粉末净质量；剔除桶/内袋/托盘。湿基、干基、活性基和纯C12质量必须分开。 |
| one_normalization | all inventory rows | 各行声明的广延属性 | 各行声明的kg、kWh或MJ | 完整期间原始分子先换单位并携带对应库存负荷，仅normalize_delivery一次归一；采集端不除Q。积分体积不再乘时间；原生次级系数不是密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购实际正十二醇、液态SO3、NaOH水溶液及水到厂，连同期初库存和结转负荷 |
| starting_condition_role | 上游制造的化学品投入；前景自硫酸化起，不是下游洗涤剂配制 |
| product_classification_scope | CPC35310的C12无乙氧基钠盐干粉子集 |
| recursive_input_rule | 若外购SDS溶液/粉末，只记录完整采购品及其背景；不得仍声称本场址已执行相同上游合成，须重审边界。分解组分不可再次采购。 |
| upstream_dataset_requirement | 匹配完整供货品、含量/水/盐、路线、等级、地域/年份、运输接口和供应商数量基准；广义UUID不证明背景数量。 |
| disclosure | 披露实际前景操作、包装及仓储/搬运/装运，公用工程、治理、检验、清洗和废物处理；外部运输入口/出口界面及截断。无默认为零。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_units | sds | 纳入接收/储存、SO3汽化、空气处理、膜式硫酸化冷却、立即中和、真空/薄膜干燥、实际粉体整理、检验、包装、成品仓储及厂内装运；保留启停、失败运行、返工、清洗和治理。 | `chemithon-sulfation-1997` |
| boundary_interfaces | sds | 保留上游化学品和蒸汽等真实背景。外部运输入厂、离厂以声明接口单独建模，不因主过程简化而删除实际纳入负荷；下游配制、稀释及洗涤服务需独立数据。 | `chemithon-sulfation-1997` |
| boundary_stocks | sds | 生产账保留期初原料和WIP、真实投料领退、新放行P、期末原料WIP及每个真实废物物种出口，内部转移抵消。成品实物账：期初成品返工在制 + P + 实测毛实物退回R + 其他真实调入 + 真实补入物料水 = 互斥期末成品返工在制 + 实测毛实物发运G + 其他真实外返调出 + 真实废品废液及物种出口。逐交接独立量质量组成水分，真实返工不强制同重；每个加减项须在数据使用前有原子行。P合并抵消。gross_physical_dispatch和physical_return仅为G/R的非加和custody视图，不是新生产采购背景，也不与delivered_powder的Q相加。Q保持声明参考状态下唯一净交付验收粉末；冲回原验收交付量D_rev，不能盲用现退回实物R。仅有匹配状态验收批群时间证据时可Q=G-D_rev；另证质量状态未变才可D_rev=R。返工或外部吸湿变化须用实测物理桥接项，不能把R改名D_rev。迟到退货更正原交付报告或明确独立调整，不扣无关当前Q；重发去重，不造新生产，也不把首次放行P套作分母。 |  |
| boundary_packaging | sds | 每种完整桶或内袋独立：期初空包装 + 附着WIP/成品包装 + 可复用存量 + 实际外部新取得 + 实际外退接收 = 互斥对应期末存量 + 随实物总发运带出 + 另行对外返还 + 真实废物。各项实物计量保持总质量，不用净粉末Q、经济归属或周转次数缩小随货实物；内部复用不新增采购或信用。返回包装仅在真实新采购发生时另承担新制造负荷，已有历史和实际清理另记且不重复；供方已含包装生产核对一次。包装不是粉末组分或粉末净交付，附着/空/可复用状态不得重复。 |  |
| boundary_nonwip | sds | 原料、WIP/成品、冷却水回路、蒸汽/凝结水、公用传热流体、油或制冷剂充注及实际治理耗材分别记录实物期初末、组成状态和逐交换继承向量，不把设备存量再列WIP。仅在真实存在时逐具体物质建账。明确原始记录是采购接收、实际领用还是已校正存变的消耗量；已作消耗修正不得再加期初减期末一次。未校正账先由独立存量谱系计算真实归属释放和结转，仅一次纳入B_i；装机总量和内部循环不是本期新消耗。未知历史向量保留为定量包缺口，不填零。真实总蒸汽输入、外返凝结水、泄漏和各回路水量在独立物理账闭合；热服务的上游负荷按供方约定只计一次。 |  |
| boundary_air_steam | sds | 蒸汽水供应和凝结水外返是独立毛Mass交换，steam_heat唯一拥有匹配供方水能约定，实物卡不再加锅炉处理背景或自动返还信用。记录真实等级温压相态焓、存变、闪蒸泄漏及逐接收者，不假定供返相等。环境空气不再有额外可加bulk交换，整股量仅非加和原始校核；真实N2/O2/Ar/大气CO2/H2O各Resource输入及每个气态出口分别列，不固定空气配方，不默认采购压缩空气或化石生物来源。实际不同供货、液滴气溶胶凝水相态及接收者须在数据使用前各增原子行。 | `chemithon-sulfation-1997` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| sds | 硫酸化—中和—干燥—净交付 | required | 所声明C12路线和实际完整期间，全部实际辅助操作及库存结转 | foreground | delivered_powder |

### 过程：C12粉末制造及净交付（`sds`）

本整合过程以内部阶段账保留各单元与成品仓储，合并时抵消交接。下列排放或包装卡只有在实际存在时才报告数量；有证据的不存在须说明，不能以未测代零。任何实际新增原料、包装组件、燃料、吸附剂、污泥或排放物种必须按独立原子行增补。

#### 输入

##### 产品流

###### 正十二醇原料 （`dodecanol`）

单独采购的直链C12伯醇，CAS112-53-8；保留实际含量、水分及同系物分布。C12/14混合醇、乙氧基化醇和流变助剂命中不能证明本原料身份。外购湿醇整份记账，组分仅为不可相加的子账。

- 选定流：正十二醇
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_material`
- 来源：`chemithon-sulfation-1997`

###### 外购液态三氧化硫 （`so3`）

整份实际液态SO3供货，CAS7446-11-9，包含有证据的稳定剂和杂质；厂内汽化并用干空气稀释。发烟硫酸、硫酸、SO2及SOx治理产品是不同交换。本路线不采用厂内硫燃烧；采用时须另建有证据的过程及全部燃料、催化剂和物种交换。

- 选定流：液态三氧化硫
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_material`
- 来源：`chemithon-sulfation-1997`

###### 外购氢氧化钠水溶液 （`naoh_solution`）

实际供货溶液按供应商含量和等级整份记一次；NaOH活性质量及载水是子账。不得用固定30%溶液、95–98%固体或0.2N试剂替代未经核实的实际浓度。设备商举例的50wt%不是默认值。

- 选定流：氢氧化钠水溶液试剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_material`
- 来源：`chemithon-sulfation-1997`

###### 单独取得的去离子水 （`water`）

原生Product flow，CAS7732-18-5，生产混合、在工厂；无地理或数值水质标准。名称路线为离子交换或反渗透、纯净物。备注另提蒸馏、可能的生产/消费混合及工厂/消费者供给。本选择仅用于实际离子交换/反渗透去离子水及其有记录的供给接口；蒸馏、实际电导率、交付及背景负荷须另核。唯一属性是参考Mass系数1，没有体积/密度属性。只计单独取得的水，包括实际采用的去离子清洗/冷却补水；排除已在试剂中的载水及内部循环。其他实际水等级须独立建行。

- 选定流：去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_material`
- 来源：`chemithon-sulfation-1997`

###### 外购电力 （`electricity`）

计量混合、泵送、SO3汽化辅助、空气压缩/干燥、冷却、真空、干燥辅助、实际粉碎、清洗、实验室、包装、仓储及电动装运。保留失败运行及全部真实返工。须明确实际电压、电网/场址/年份与背景基准；无通用kWh/kg默认值。

- 选定流：供制造厂使用的电力
- 流属性/单位：Energy / kWh
- 数量规则：按第8节，以完整实际原始期间分子及对应结转负荷，仅除以正的实际净交付Q一次。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_energy`
- 来源：`chemithon-sulfation-1997`

###### 外购蒸汽热 （`steam_heat`）

按供方约定，以独立实测入口、外返及其他出口焓流并计实际存变损失核算蒸汽进口门有效热，纳入干燥器、液SO3蒸发器及实际确用蒸汽的空气干燥再生支路；不假入口回水同量或把单一回水状态套全份供汽，不只计干燥而漏汽化热。其他真实热源单列，不假设再生热一定来自蒸汽。保留管损及实际启停/待机分摊。蒸汽质量、凝结水和泄漏另入公用工程水账。蒸汽背景已包含锅炉燃料时不得重复加入；厂内燃烧须逐项加入燃料及排放行。

- 选定流：蒸汽热
- 流属性/单位：Energy / MJ
- 数量规则：按第8节，以完整实际原始期间分子及对应结转负荷，仅除以正的实际净交付Q一次。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_energy`
- 来源：`chemithon-sulfation-1997`

###### 供场址使用的蒸汽水（`steam_water_supply`）

实际外供蒸汽进入边界的毛水质量，与steam_heat的MJ分开。记录表计、真实干度水质、温度、压力、相态、比焓、供方接口、管路期初末存量及真实泄漏损失。不预设压力、供返同重或水纯度；绑定UUID前匹配实际蒸汽等级，固定压力的蒸汽身份不能通用。steam_heat按声明的供方水热约定拥有唯一蒸汽制备处理输送上游负荷；本kg卡为公用工程实物水账，不再采购第二份蒸汽背景。单独取得的工艺水排除同一份蒸汽水。

- 选定流：供场址使用的蒸汽水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_energy`
- 来源：`chemithon-sulfation-1997`

###### HDPE运输桶 （`drum`）

一项实际完整HDPE桶及其一体桶盖，质量与净粉末分开称量。按真实组成、供应商、容量、周转/损失及清洗确定负荷。树脂或泛称塑料包装不是已核实的完整桶背景。其他单独采购的封口件或标签须另行建行。

- 选定流：HDPE运输桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_pack`
- 来源：`chemithon-sulfation-1997`

###### 聚乙烯桶内袋 （`liner`）

一项实际单独取得的聚乙烯内袋，保留有证据的等级、厚度及原生/再生含量。整份外购桶系统已包含内袋时不得再次加入；保留真实包装废品及替换负荷。

- 选定流：聚乙烯桶内袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_pack`
- 来源：`chemithon-sulfation-1997`

###### HDPE运输桶 （`drum_return_received`）

实际外部退回的同类可用HDPE桶，含有残留粉末须在净粉末账另核而不重计；此方向不是新购，保留所有权及历史。 一项实际完整HDPE桶及其一体桶盖，质量与净粉末分开称量。按真实组成、供应商、容量、周转/损失及清洗确定负荷。树脂或泛称塑料包装不是已核实的完整桶背景。其他单独采购的封口件或标签须另行建行。

- 选定流：HDPE运输桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_pack`
- 来源：`chemithon-sulfation-1997`

###### 聚乙烯桶内袋 （`liner_return_received`）

仅实际外部退回的同类可用PE内袋，保留状态和历史；不默认污染内袋可复用，不作为新购。 一项实际单独取得的聚乙烯内袋，保留有证据的等级、厚度及原生/再生含量。整份外购桶系统已包含内袋时不得再次加入；保留真实包装废品及替换负荷。

- 选定流：聚乙烯桶内袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_pack`
- 来源：`chemithon-sulfation-1997`

##### 废物流

###### 十二烷基硫酸钠（`physical_return`）

非加和custody实物视图：真实接收的毛退回R按本次实测状态称量，记录原交付量D_rev、原水分含量和真实加减物料或水。R不能盲等D_rev；质量状态改变的重洗重干筛除和废物按真实原子方向分账。不是新增采购或新产量，不重新挂同一制造背景，不与净参考Q相加。原交付冲回链接原参考状态数量，迟到退货不扣无关当期Q。与delivered_powder相同原生身份限制如下。原生身份明确描述12碳有机硫酸酯钠盐CH3(CH2)11OSO3Na，具有烃链及极性头基的阴离子两亲物，用于清洁/卫生。原生名称声明生产混合、在工厂，未声明等级或工艺；无地理/locationOfSupply及CAS字段。唯一属性是参考Mass系数1。原生35499分类与本具体表面活性剂身份不一致，作为待上游纠正的分类缺陷保留，不是化学排除证据。本UUID有条件定位含实测水分及伴生盐的整份C12粉末，不代表纯活性kg、SLES、混合链SLS、供应商过程、保证含量或密度。须核实实际批次身份、烷基分布、无乙氧基、形态、含量/水/盐分数、制造路线及交付/背景基准。目录粉末规格只证明市场形态，不证明供应商路线。

- 选定流：十二烷基硫酸钠 `e15fed31-c5b7-4582-a841-abd0e9b68bea`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_delivery`
- 来源：`chemithon-sulfation-1997`

##### 基本流

###### 二氮（`n2_in`）

按校准干湿气量、温度、压力、湿度及逐物种分析，独立测真实进出口该物种质量；不固定空气组成、过程数量或进出等量。记录来源状态、真实转化及存量，其他实际物种逐一新增。原生为Resources from air / Renewable element resources from air、Elementary/Mass参考索引0系数1，CAS7727-37-9。仅为进入现场的环境空气中该物种，不是空分制气、液化商品气或排放。原生别名的同位素或其他物态不授权替换真实普通气体；无地域、配方或数量默认值。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_species`
- 来源：`chemithon-sulfation-1997`

###### 氧气（`o2_in`）

按校准干湿气量、温度、压力、湿度及逐物种分析，独立测真实进出口该物种质量；不固定空气组成、过程数量或进出等量。记录来源状态、真实转化及存量，其他实际物种逐一新增。原生为Resources from air / Renewable element resources from air、Elementary/Mass参考索引0系数1，CAS7782-44-7。仅为进入现场的环境空气中该物种，不是空分制气、液化商品气或排放。原生别名的同位素或其他物态不授权替换真实普通气体；无地域、配方或数量默认值。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_species`
- 来源：`chemithon-sulfation-1997`

###### 氩（`ar_in`）

按校准干湿气量、温度、压力、湿度及逐物种分析，独立测真实进出口该物种质量；不固定空气组成、过程数量或进出等量。记录来源状态、真实转化及存量，其他实际物种逐一新增。原生为Resources from air / Renewable element resources from air、Elementary/Mass参考索引0系数1，CAS7440-37-1。仅为进入现场的环境空气中该物种，不是空分制气、液化商品气或排放。原生别名的同位素或其他物态不授权替换真实普通气体；无地域、配方或数量默认值。

- 选定流：氩 `fe0acd60-3ddc-11dd-a354-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_species`
- 来源：`chemithon-sulfation-1997`

###### 随空气进入的环境二氧化碳（`co2_in`）

按校准干湿气量、温度、压力、湿度及逐物种分析，独立测真实进出口该物种质量；不固定空气组成、过程数量或进出等量。记录来源状态、真实转化及存量，其他实际物种逐一新增。真实环境CO2、CAS124-38-9，Resource输入。不由大气通过量推断化石、生物或土地利用来源及移除信用。入口CO2与新工艺形成吸收及毛出口分账；真实资源介质和来源约定匹配前身份留空，化石或生物排放及外购CO2产品不是本流。

- 选定流：随空气进入的环境二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_species`
- 来源：`chemithon-sulfation-1997`

###### 随湿空气进入的环境水蒸气（`h2o_air_in`）

按校准干湿气量、温度、压力、湿度及逐物种分析，独立测真实进出口该物种质量；不固定空气组成、过程数量或进出等量。记录来源状态、真实转化及存量，其他实际物种逐一新增。真实入口气态H2O湿度、CAS7732-18-5，Resources from air；排除采购水蒸汽及内部循环湿气。用实测湿度和气量状态独立求kg，整股湿空气m3不是水体积或kg。原生Volume水资源身份不能暗供Mass换算或密度；采用UUID前匹配真实气体Resource，同位素水、冰或液体资源不能代用。

- 选定流：随湿空气进入的环境水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_species`
- 来源：`chemithon-sulfation-1997`

#### 输出

##### 产品流

###### 十二烷基硫酸钠（`gross_physical_dispatch`）

非加和custody实物视图：本卡只记录G的实际毛发运，不是1kg净参考输出之外再造一份产量。保留每次门交接净粉末质量、组成水分、验收、批群和原交付号，包括重复发运；未验收或不符声明状态的G另标，不能自动变Q。实际G不按负荷库存扣减或经济分配缩量；禁止与net参考Q相加。与delivered_powder相同原生身份限制如下。原生身份明确描述12碳有机硫酸酯钠盐CH3(CH2)11OSO3Na，具有烃链及极性头基的阴离子两亲物，用于清洁/卫生。原生名称声明生产混合、在工厂，未声明等级或工艺；无地理/locationOfSupply及CAS字段。唯一属性是参考Mass系数1。原生35499分类与本具体表面活性剂身份不一致，作为待上游纠正的分类缺陷保留，不是化学排除证据。本UUID有条件定位含实测水分及伴生盐的整份C12粉末，不代表纯活性kg、SLES、混合链SLS、供应商过程、保证含量或密度。须核实实际批次身份、烷基分布、无乙氧基、形态、含量/水/盐分数、制造路线及交付/背景基准。目录粉末规格只证明市场形态，不证明供应商路线。

- 选定流：十二烷基硫酸钠 `e15fed31-c5b7-4582-a841-abd0e9b68bea`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_delivery`
- 来源：`chemithon-sulfation-1997`

###### 向外部供方返还的蒸汽凝结水（`external_condensate_return`）

实际跨外部供方接口返还的毛液态蒸汽凝结水，属于Product返还，不是废水或大气H2O。独立记录返还质量、真实温压相态焓、水质污染、接收方所有权及存量损失。不强制与供汽同量同质；内部回用、真正外排废水及闪蒸分别按真实相态去向记录。本质量返还只遵守有记录的供方回水约定，不是第二次购热、泛化避免生产信用或重复水背景；供应商水能负荷由steam_heat唯一拥有。

- 选定流：向外部供方返还的蒸汽凝结水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_energy`
- 来源：`chemithon-sulfation-1997`

###### 实际净交付的C12十二烷基硫酸钠粉末 （`delivered_powder`）

完成实际包装、成品仓储及厂内装运后的终端参考Product输出。原生身份明确描述12碳有机硫酸酯钠盐CH3(CH2)11OSO3Na，具有烃链及极性头基的阴离子两亲物，用于清洁/卫生。原生名称声明生产混合、在工厂，未声明等级或工艺；无地理/locationOfSupply及CAS字段。唯一属性是参考Mass系数1。原生35499分类与本具体表面活性剂身份不一致，作为待上游纠正的分类缺陷保留，不是化学排除证据。本UUID有条件定位含实测水分及伴生盐的整份C12粉末，不代表纯活性kg、SLES、混合链SLS、供应商过程、保证含量或密度。须核实实际批次身份、烷基分布、无乙氧基、形态、含量/水/盐分数、制造路线及交付/背景基准。目录粉末规格只证明市场形态，不证明供应商路线。

- 选定流：十二烷基硫酸钠 `e15fed31-c5b7-4582-a841-abd0e9b68bea`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：fixed_value
- 适用范围：product_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：method_formula
- 采集协议：`cp_delivery`
- 来源：`thermo-sds-a11183-2026`; `chemithon-sulfation-1997`

###### HDPE运输桶 （`drum_gross_shipped`）

随实物总发运离厂的完整HDPE桶总质量，包含旧存货和重复发运；不得按粉末净交付Q、分配或复用缩减。 一项实际完整HDPE桶及其一体桶盖，质量与净粉末分开称量。按真实组成、供应商、容量、周转/损失及清洗确定负荷。树脂或泛称塑料包装不是已核实的完整桶背景。其他单独采购的封口件或标签须另行建行。

- 选定流：HDPE运输桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_pack`
- 来源：`chemithon-sulfation-1997`

###### HDPE运输桶 （`drum_return_sent`）

独立于随货发运、实际向外部所有者返还的可用HDPE桶；两方向互斥，不给信用。 一项实际完整HDPE桶及其一体桶盖，质量与净粉末分开称量。按真实组成、供应商、容量、周转/损失及清洗确定负荷。树脂或泛称塑料包装不是已核实的完整桶背景。其他单独采购的封口件或标签须另行建行。

- 选定流：HDPE运输桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_pack`
- 来源：`chemithon-sulfation-1997`

###### 聚乙烯桶内袋 （`liner_gross_shipped`）

实际随总实物发运离厂的PE内袋质量，包含重发；保留总量，不从净粉末退货或负荷分配扣减。 一项实际单独取得的聚乙烯内袋，保留有证据的等级、厚度及原生/再生含量。整份外购桶系统已包含内袋时不得再次加入；保留真实包装废品及替换负荷。

- 选定流：聚乙烯桶内袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_pack`
- 来源：`chemithon-sulfation-1997`

###### 聚乙烯桶内袋 （`liner_return_sent`）

仅实际另向外部返还的可用PE内袋，独立记录去向和污染，不能与随货内袋重复。 一项实际单独取得的聚乙烯内袋，保留有证据的等级、厚度及原生/再生含量。整份外购桶系统已包含内袋时不得再次加入；保留真实包装废品及替换负荷。

- 选定流：聚乙烯桶内袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_pack`
- 来源：`chemithon-sulfation-1997`

##### 废物流

###### 外运制造废水 （`wastewater`）

一股实际越过处理边界的废水；水、硫酸盐、钠、SDS及其他实际组分按实测建子账。洗涤器排污、清洗水及凝结水仅在实际合流时计入；内部回用凝结水不再次外排。处理服务质量不是基本流排放；若厂内处理，须实际建模处理投入、污泥及各最终物种，且不重复该交接。

- 选定流：十二烷基硫酸钠制造废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_outlet`
- 来源：`chemithon-sulfation-1997`

###### 处置的不合格SDS粉末 （`solid_reject`）

实际处置的洒落、受污染捕集粉和不可回用废品与内部回收粉分开计量。厂内回用粉是内部交接，不是联产品或避免生产信用；保留原始及再加工负荷。整份湿废品的水仍保留在实物账。

- 选定流：送处置的不合格十二烷基硫酸钠粉末
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_outlet`
- 来源：`chemithon-sulfation-1997`

###### 废HDPE运输桶 （`spent_drum`）

实际废弃的完整HDPE桶及其已含污染子账，分列接收处理；不得同时作为可用外返桶或随货桶，不重复处置内含同一粉末。 一项实际完整HDPE桶及其一体桶盖，质量与净粉末分开称量。按真实组成、供应商、容量、周转/损失及清洗确定负荷。树脂或泛称塑料包装不是已核实的完整桶背景。其他单独采购的封口件或标签须另行建行。

- 选定流：废HDPE运输桶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_pack`
- 来源：`chemithon-sulfation-1997`

###### 废弃聚乙烯内袋 （`spent_liner`）

本边界实际废弃的破损/使用后内袋，保留有证据的污染。不得假定全部随货包装已在制造厂变成废物；其他废桶材料及处理污泥如实际存在，须分别建具体行。

- 选定流：废弃聚乙烯桶内袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_outlet`
- 来源：`chemithon-sulfation-1997`

##### 基本流

###### 二氮（`n2_out`）

按校准干湿气量、温度、压力、湿度及逐物种分析，独立测真实进出口该物种质量；不固定空气组成、过程数量或进出等量。记录来源状态、真实转化及存量，其他实际物种逐一新增。实际毛气态出口，含未反应载气。原生Elementary/Mass参考索引0系数1，CAS7727-37-9，介质Emissions to air, unspecified。已有更具体真实介质须另选相符身份，不降格。Resource入口身份不得作Emission出口；保留逐物种毛进出及净变化，不能把未反应载气删掉而留下污染物质量。普通气体身份不授权原生别名中的放射性同位素、液体或另一元素。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_species`
- 来源：`chemithon-sulfation-1997`

###### 氧（`o2_out`）

按校准干湿气量、温度、压力、湿度及逐物种分析，独立测真实进出口该物种质量；不固定空气组成、过程数量或进出等量。记录来源状态、真实转化及存量，其他实际物种逐一新增。实际毛气态出口，含未反应载气。原生Elementary/Mass参考索引0系数1，CAS7782-44-7，介质Emissions to air, unspecified。已有更具体真实介质须另选相符身份，不降格。Resource入口身份不得作Emission出口；保留逐物种毛进出及净变化，不能把未反应载气删掉而留下污染物质量。普通气体身份不授权原生别名中的放射性同位素、液体或另一元素。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_species`
- 来源：`chemithon-sulfation-1997`

###### 氩（`ar_out`）

按校准干湿气量、温度、压力、湿度及逐物种分析，独立测真实进出口该物种质量；不固定空气组成、过程数量或进出等量。记录来源状态、真实转化及存量，其他实际物种逐一新增。实际毛气态出口，含未反应载气。原生Elementary/Mass参考索引0系数1，CAS7440-37-1，介质Emissions to air, unspecified。已有更具体真实介质须另选相符身份，不降格。Resource入口身份不得作Emission出口；保留逐物种毛进出及净变化，不能把未反应载气删掉而留下污染物质量。普通气体身份不授权原生别名中的放射性同位素、液体或另一元素。

- 选定流：氩 `fe0acd60-3ddc-11dd-a350-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_species`
- 来源：`chemithon-sulfation-1997`

###### 向空气返回的环境二氧化碳（`co2_out`）

按校准干湿气量、温度、压力、湿度及逐物种分析，独立测真实进出口该物种质量；不固定空气组成、过程数量或进出等量。记录来源状态、真实转化及存量，其他实际物种逐一新增。真实毛气态CO2出口及其原大气来源通过量，CAS124-38-9；与真实新生成CO2、吸收溶入液体或库存变化独立分账。不默认化石、生物、土地利用来源或产生气候信用；只可按独立实际来源和介质证据进一步表征。已查询的化石生物Emission与Resource近名身份不能强套本普通环境通过量，UUID留具体身份缺口。

- 选定流：向空气返回的环境二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_species`
- 来源：`chemithon-sulfation-1997`

###### 向空气排放的SDS （`sds_air`）

依据治理后/无组织实际粉尘及独立组成确定SDS质量。原生SLES或十二烷基硫酸铵命中是不同化学品。不得把同一化学粉尘质量再加为总颗粒物；替代的颗粒物表征须明确与不重叠粒径分段协调。

原生Elementary流CAS151-21-3，Mass参考索引0、系数1，未固定地域、牌号、工艺、粒径或排放量。接收介质严格为“Emissions to air, unspecified”；只在真实研究清单的该介质匹配时采用，若已有室内、城区、烟囱高度、长期等更具体证据，须另取相符流而非降格为未指定空气。宽泛同义词中的醚硫酸盐或磺酸盐不改变CAS151-21-3钠硫酸酯身份；不绑定SLES、铵盐或未表征总尘。独立确认存在、物种、状态及真实出口数量；UUID不证明发生排放。

- 选定流：十二烷基硫酸钠 `fe0acd60-3ddc-11dd-a1f3-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_species`
- 来源：`chemithon-sulfation-1997`

###### 向空气排放的三氧化硫 （`so3_air`）

采用独立证据支持的实际SO3出口物种及子介质。以SO2当量报告的SOx、酸雾及硫酸盐气溶胶不能自动视为SO3质量。总硫/COD或闭合残差换算不能证明本物种。

- 选定流：向空气排放的三氧化硫
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_species`
- 来源：`chemithon-sulfation-1997`

###### 向空气排放的二氧化硫 （`so2_air`）

仅计治理后实际测得的残余SO2，包括有证据的原料杂质贡献。不得把外购液态SO3路线套成硫燃烧排放因子，也不得把实验反应收率移作出口默认值。

原生Elementary流CAS7446-09-5，Mass参考索引0、系数1，未固定地域、牌号、工艺、粒径或排放量。接收介质严格为“Emissions to air, unspecified”；只在真实研究清单的该介质匹配时采用，若已有室内、城区、烟囱高度、长期等更具体证据，须另取相符流而非降格为未指定空气。这是SO2分子质量，不是按SO2当量表示的SOx。独立确认存在、物种、状态及真实出口数量；UUID不证明发生排放。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_species`
- 来源：`chemithon-sulfation-1997`

###### 向空气排放的硫酸雾 （`acid_mist_air`）

实际H2SO4雾须与SO3、硫酸盐气溶胶及捕集洗涤废物区分。采样伪影或SO3当量报告须有记录的分析换算及不确定性，不能证明多个物种同时各自的量。

原生Elementary流CAS7664-93-9，Mass参考索引0、系数1，未固定地域、牌号、工艺、粒径或排放量。接收介质严格为“Emissions to air, unspecified”；只在真实研究清单的该介质匹配时采用，若已有室内、城区、烟囱高度、长期等更具体证据，须另取相符流而非降格为未指定空气。采用雾中独立测得的H2SO4化学质量，不是整份含水液滴或硫酸盐；溶液或酯类宽泛别名不证明浓度或不同化学品。独立确认存在、物种、状态及真实出口数量；UUID不证明发生排放。

- 选定流：硫酸 `d1e249b9-59b4-45c4-b1cb-ad89a2dd167b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_species`
- 来源：`chemithon-sulfation-1997`

###### 向空气排放的正十二醇 （`dodecanol_air`）

对真空/通风治理后逸出的实际未反应醇，以独立核实的物种及出口体积或积分质量计量。总VOC不能识别C12醇；回收凝结液属于内部物料交接或实际废物，不能同时再计为空气排放。

原生Elementary流CAS112-53-8，Mass参考索引0、系数1，未固定地域、牌号、工艺、粒径或排放量。接收介质严格为“Emissions to air, unspecified”；只在真实研究清单的该介质匹配时采用，若已有室内、城区、烟囱高度、长期等更具体证据，须另取相符流而非降格为未指定空气。CAS限定C12伯醇，不是十二烷或宽泛别名所及C8–18混合物。独立确认存在、物种、状态及真实出口数量；UUID不证明发生排放。

- 选定流：1-十二醇 `9569ddaf-0a84-4f35-9697-5a84c94b7e38`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_species`
- 来源：`chemithon-sulfation-1997`

###### 向空气排放的水蒸气 （`water_air`）

计量各真实外部出口凝结分离后的全部毛气态H2O，包括未凝载气湿度与工艺来源水蒸气；按入口大气水、试剂载水、独立实证反应水、真实蒸汽泄漏或其他来源保留不可加和来源子账。净增量E仅为同一毛进出及其他真实水出口/存变推导的核对视图，不再另加一张相同H2O排放。气态H2O不含液滴、气溶胶夹带水、凝水或内部回用，它们各按真实相态和受纳者另列原子流。干燥是物理迁移，不证明反应生成水；保留实际游离/结合/水合状态，干燥失重不自动等于水。

原生Elementary流CAS7732-18-5，Mass参考索引0、系数1，未固定地域、牌号、工艺、粒径或排放量。接收介质严格为“Emissions to air, unspecified”；只在真实研究清单的该介质匹配时采用，若已有室内、城区、烟囱高度、长期等更具体证据，须另取相符流而非降格为未指定空气。仅为普通H2O水蒸气，不是宽泛别名中的冰、重水、氚水或结合氧；不由此获得密度、水合或反应水因子。独立确认存在、物种、状态及真实出口数量；UUID不证明发生排放。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本方向实物交换的真实实测毛原始量，按第8节每参考流只报告一次；继承负荷归属与分配不改变实物质量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：process_output
- 证据类型：collected_record
- 采集协议：`cp_species`
- 来源：`chemithon-sulfation-1997`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | sds | 先依据批群及单元实际分表计量，保留共用装置启停及失败负荷；有证据的运行时间/处理量等因果驱动用于共用服务，披露驱动、数值和不确定性，不默认按销售额分摊。 |  |
| allocation_recycle | sds | 本路线不预设联产品。厂内酸/浆体/粉末/凝结水循环及P交接不新增采购、产量或信用。实际可销售副产物须证明质量、功能及独立出口并重审分配；废水、污泥和盐杂质不自动成为联产品。 | `chemithon-sulfation-1997` |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。 |  |

## 8. 前景数据采集、计算与质量规则

各协议有独立owner。实物事件m_i和继承归属负荷B_i分账，不以负荷修正实物质量；毛custody G/R与净Q、bulk空气与物种、水来源与E各明确不可加。collection_method只采集未除以Q的原始期间分子、库存及结转负荷；aggregation_rule只声明最终报告基准，既不在采集端执行A/Q，也不是在卡片公式之后再除一次。仅normalize_delivery拥有唯一归一操作。

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | sds | chemical and water supply | purchase charge and assay records | lot_id; supply_mass; charge_mass; water_fraction; assay; CAS; alkyl_EO_profile; grade; raw_unit; temperature; density_evidence; opening_closing_feed_stock; supplier_basis | owner=进料与生产物料主管；匹配发票、称量/槽计、投料、供应商CoA及实际化验，核对完整湿供货品，采集原始质量/体积及未归一的库存负荷，不把收货和投料重复采购。 | kg; m3; mass fraction; degC | 每批及连续仪表读数 | 完整实际报告期间，包含失败及零产出运行 | 实际同一场址、产品、路线及供货状态 | 每 1 kg 参考流 | 校准、CoA、称量、库存和供应商原始证明 |
| cp_energy | sds | electricity and steam heat | meter and utility records | 表号; 起止; 原始电量; 毛供汽质量; 蒸汽等级干度水质; 入口温压相态比焓; 外返凝结水质量温压相态比焓水质接收者; 蒸汽凝结水期初末存量; 真实泄漏闪蒸其他出口损失; 供方水热唯一owner; 启停; 分配依据; 仓储装运; 逐继承负荷向量 | owner=公用工程计量负责人；独立测毛蒸汽水输入、真实液态凝结水外返及各损失存量的原始质量状态，焓流与热MJ分开。覆盖每个真实匹配支路及电力、异常待机返工；不假供返同重同质。steam_heat唯一拥有供方背景，实物kg卡和内部循环不造第二次采购。保留未归一观察换算和逐交换历史，单位结果仅经normalize_delivery。 | kWh; MJ; kg; h | 连续计量，每期间核对 | 同一完整期间及同批群结转 | 实际生产与仓储公用工程范围 | 每 1 kg 参考流 | 仪表校准、焓基准、供应商账单及分摊证据 |
| cp_pack | sds | drum and liner | packaging and dispatch records | article_id; composition; net_article_mass; ownership; opening_closing_empty_attached_WIP_FG_reusable_stocks; new_external_acquisition; gross_external_return_received; gross_physical_dispatch; separate_external_return_sent; waste; receiver; cleaning; each_historical_exchange_vector; supplier_inclusion | owner=包装与物流主管；桶和内袋按材质及每个方向校准称量、盘点并闭合boundary_packaging；原始实物总量与其归属上游负荷向量分别保存。记录附着、空及可复用状态的真实转换，每份只计一次；采集不除Q，复用不缩实物出口。 | kg; item | 每包装批及发运批 | 完整实际包装、仓储及交付期间 | 实际厂内包装及交付接口 | 每 1 kg 参考流 | 物料清单、称量、周转及物流原件 |
| cp_delivery | sds | terminal powder output | quality acceptance and net delivery records | 批次; 放行P; 毛皮净; G真实发运状态质量; 合格验收交付条目; R真实退回状态质量; 原交付号质量状态; D_rev原验收量; 重复交接; 真实返工加减物料水; 验收; 等级; 水分方法; 干湿含量; 盐; 批群; 报告区间; 发运门 | owner=质量放行与交付验收负责人；逐毛实物G/R事件保留独立称量组成水分及原验收量状态D_rev。只按delivery_mass_bridge及唯一谱系定合格净Q，不假G-R或首次P。真实返工加减逐项记录，识别迟到原报告调整。G/R卡为非加和custody观察，delivered_powder为净报告参考；原始量不作负荷库存或经济缩量及重复采购。采集未归一，单位结果仅经normalize_delivery。 | kg; mass fraction | 每次放行、交付及退回 | 完整期间及相关期初末批群 | 唯一厂门实际净交付点 | 每 1 kg 参考流 | 校准净重、检验原件、交付和退货谱系 |
| cp_stocks | sds | 原料、WIP、成品及互斥非WIP回路充注和返工历史 | stage genealogy and burden ledger | stage; lot_id; opening_closing_mass_composition_state; each_inherited_exchange_vector; raw_receipt_issue_or_already_corrected_consumption; disjoint_nonWIP_water_fluid_charge_stocks; release_P; internal_transfer; gross_dispatch_and_returns; original_delivery_reversal; actual_rework_material_water_in; actual_removed_material_effluent_species_out; failure; zero_output; loss; driver | owner=生产成本与库存谱系主管；逐阶段和独立非WIP设备回路保存期初末实物及每项历史向量，关联新原始投入、失败、返工增减料水及真实出口。原料若已按实际领退/存变校正消耗，不再重复校正；WIP/成品和非WIP历史只转入真实归属释放的B_i一次。旧交付退货先关联原交付和全部旧历史，再另计真实增量返工；历史归一基准保留用于解释或冲回，但本报告分母仍匹配所声明净交付Q。生产与仓储内部P抵消；仅采原始账，不执行B_i/Q。 | kg; kWh; MJ; original exchange units | 每批及期初/期末结账 | 完整期间及历史结转谱系 | 同产品、路线、状态及真实生产/仓储阶段 | 每 1 kg 参考流 | 库存盘点、阶段账、分摊驱动与历史负荷原件 |
| cp_outlet | sds | air water and exported waste | physical outlet and waste records | 流号; 阶段; 非加和整股湿空气进出原始总量; 独立气体物种进出; 原始质量; 速率; 时长; 积分体积; 温度; 压力; 湿度; 组成; 分开气态液滴气溶胶凝水相态; 凝水回用; 废物去向; 处理边界; 不确定性 | owner=场址环境与废物负责人；每个真实相态和方向进出独立实测。整股空气气量仅非加和校核独立物种和，不在物种上另加bulk air_in资源或排放。区分气态H2O、液滴气溶胶水、收集凝水、实际场外废物及内部复用；真实新增相态接收者制剂须数据使用前各建原子行。实物原始毛移动不作负荷向量修正或分配，采集不相除，不用残差拟合多未知。 | kg; m3; h; degC; Pa | 连续/每批出口及废物交接 | 完整实际期间含治理启停与失败运行 | 实际出口及处理边界 | 每 1 kg 参考流 | 校准仪表、转移联单、含水/组成及处理证明 |
| cp_species | sds | actual species reaction and water | analytical species and reaction-extent records | 物种; CAS; 真实Resource或Emission介质; N2_O2_Ar_大气CO2_H2O各进出质量; 干湿流量温压; 进出湿度; 非加和大气工艺H2O来源分数及E; 无默认的CO2来源证据; 气液液滴气溶胶状态; 原始浓度; 分析基准; 速率时长; 方法; 回收率; 检出限; 反应进度; 酸碱含量; 游离结合水; 水合; 不确定性 | owner=分析化学与排放监测负责人；逐真实进出物种相态独立采样并匹配气量温压干湿基。N2/O2/Ar/大气CO2与湿度各有真实Resource输入及毛气态出口；不固定大气分数、等量通过或化石生物来源。water_air为毛气态H2O，大气工艺来源不可加，净E仅校核。相态水、真实反应进度酸碱分析、干扰检出限不确定性独立采集，不用COD或单残差拟合多物种反应水。保留未归一量，不作实物分配或库存负荷扣减。 | kg; mol; mg/m3; m3; mass fraction | 每批及代表完整期间的排口监测 | 同批群及完整期间，包括异常与返工 | 真实反应阶段及治理后/无组织出口 | 每 1 kg 参考流 | 独立含量/物种报告、体积/浓度基准、反应证据及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_delivery | all inventory rows | 保留两个相互关联的账。实物方向事件换单位后保持实测毛原始量m_i，需要单位视图时仅报告m_i/Q一次；不得扣继承负荷或按经济分配缩实物质量。特别是G、R、蒸汽水输入凝结水外返、逐气体物种和包装各方向都保留真实事件量；G/R custody视图与净参考Q互为视图，不叠加生产采购。另算交付批群负荷分子B_i：匹配期初原料WIP成品非WIP的逐交换继承向量 + 当期完整真实可归属交换 - 仅有记录的期末未交付留存或转其他独立批群向量。保留失败零产出、损失、真实返工、包装仓储装运及原交付冲回，谱系和因果分配只用一次；已校正存量的消耗不再校正。粉末存量标量不能替代全部交换向量。换算归属完成后每个B_i/Q只除一次，作为负荷结果，不再校正实物m_i。实物视图不得再采购相同背景：steam_heat唯一拥有供方蒸汽水能约定，G/R携带既有SDS历史而非再采购。卡片与aggregation仅引用同一次报告。Q取delivery_mass_bridge声明净交付门，不改P或无关历史Q。Q<=0保留原始实物负荷账而不出单位结果，数据完成前解决验收和调整。 | cp_material; cp_energy; cp_pack; cp_delivery; cp_stocks; cp_outlet; cp_species | 每1kg参考流的交换数量 |  |
| delivery_mass_bridge | delivered_powder; gross_physical_dispatch; physical_return | 按原验收交付退货谱系，Q为真实称量且匹配声明参考状态的合格验收交付条目之和，减原验收条目冲回量D_rev。G为全部实物发运，R为按现质量组成水分称量的真实实物退回。D_rev取原验收量状态，不由R推断；仅当全部G有匹配验收参考状态、批群期间和唯一事件证据时才可Q=G-D_rev。水分组成、筛除返工或跨期改变时不得用G-R捷算净交付。每项实测加减及原退回状态独立桥接，不假同重；原冲回后的重发仅按真实合格事件计，不造新生产或重复最终供货，迟到旧批群退回更新原报告或明确独立调整。delivered_powder=1kg为净参考视图，G/Q和R/Q仅非加和custody观察，不是第三份粉末输出或再采购。P保持内部，保留留存失败零Q负荷，未测桥接项不是零。 | cp_delivery; cp_stocks; cp_species | 实测G/R及原状态冲回与净Q桥接 |  |
| raw_conversions | all inventory rows | 用校准质量或真实体积乘独立本物质密度，保留组成温压相态基准。真实速率只按实测时段积分，已积分气液体积不再乘时长。物种量用实测浓度组成及匹配干湿气量，不以整股空气体积作水体积，不固定空气分数。按声明蒸汽门，用真实入口焓流减独立实测返还或外出焓流并纳入实际库存及其他出口项，遵守供方约定；不假定供返同量同质，也不把一个回水比焓套全份供汽。保留管损和真实泄漏去向，公用工程水kg与热MJ各自核对，kWh和MJ明确区分。 | cp_material; cp_energy; cp_outlet; cp_species | 归一前已换单位的原始分子 |  |
| constituent_ledger | dodecanol; so3; naoh_solution; delivered_powder; wastewater | 各组分质量=整份实际供货/出口质量×独立实测的同基质量分数。干基含量换为湿基须有同批真实水分，干燥失重不可自动作水；活性滴定当量、C12分布和EO不能混用。采购制剂/溶液只算一次，组分及载水不另建重复采购。若现场混合则按实际单独采购成分及混合能耗/损失建账。 | cp_material; cp_delivery; cp_species | 不可相加的组分/载水子账 | `thermo-sds-a11183-2026` |
| mass_elements_water | all inventory rows | 制造成品及合并物理门使用真实G和R，不用Q替代毛移动。外部实物输入（含蒸汽水和逐环境空气物种）+ 互斥期初原料WIP成品非WIP存量 = G + 凝结水外返 + 每个真实气液固出口 + 期末存量 + 其他独立确认调出；P和内部循环抵消。R按实测退回状态作外部实物输入，原交付冲回D_rev属于报告桥接，不另造实物出口；Q是非加和净参考视图。独立核对完整质量与C/H/O/Na/S及相关N/Ar和各真实物种。整股湿空气气体观测量仅校核物种合计，不与所含物种再加作Resource或Emission。毛气态H2O含未凝载气和工艺来源水；来源分数和净增E为不可加子账，不再多一份H2O出口。液滴凝水气溶胶载水等真实相态须各列实际接收者原子流。独立区分试剂载水、入口湿度、蒸汽水泄漏、游离结合结构水、反应进度及真实水出口，不能以单残差拟合多个物种或水未知量。蒸汽和其他非WIP回路用真实存量损失闭合，kg不是MJ。完整逐包装物等式及毛方向保留，不以负荷分配或库存向量归属缩实物事件。 | cp_material; cp_delivery; cp_stocks; cp_outlet; cp_species | 独立实物/元素/阶段水平衡 |  |
| reaction_species | sds | 理论反应仅作化学计量校验：C12H25OH+SO3→C12H25OSO3H，不净生水；C12H25OSO3H+NaOH→C12H25OSO3Na+H2O。实际反应水须由独立酸碱含量、反应转化及副反应证据确定，不按交付粉末kg默认完全转化。SO3水合、游离硫酸中和和有机硫酸酯水解等实际反应须另证各自进度与水消耗/生成。绝不把硫酸/发烟硫酸或氯磺酸路线的水/HCl移入。物种出口须独立浓度/体积/介质证据，COD、总硫及闭合残差均不能识别物种，也不能同时拟合未知反应水和未知出口。 | cp_material; cp_species; cp_outlet | 独立反应进度和真实物种/反应水记录 | `chemithon-sulfation-1997` |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quality | reference and inputs | 独立核对C12/EO/钠盐/形态/等级/路线；完整供货品与活性/水/盐子账区分。原生UUID的全部名称、备注、地域、介质和属性限定均适用；不以分类label或近名替代化学身份。 | `thermo-sds-a11183-2026` |
| cohort_quality | all inventory rows | 完整实际期间/批群、失败零产出、返工与库存历史负荷均可追溯；质量放行P和实际净交付Q分离。实际纳入仓储、包装和装运负荷不得删除。 | cp_stocks; cp_delivery; cp_energy; cp_pack |
| species_quality | water and outlets | 独立校准质量/体积、含量和物种分析，保留检出限、干湿气/温压基准与不确定性；物理/元素平衡与反应水证据分别成立，禁止残差或COD拟合。 | cp_outlet; cp_species |
| transferability | dataset | Thermo规格无制造路线；Chemithon1997是设备技术说明，含广义醇/醚硫酸盐及其他化学路线，非本产品工厂清单。只采用适用单元原理；任何配方、工况、收率、热/电耗和水分/活性示例均不移作通用默认。 | `chemithon-sulfation-1997`; `thermo-sds-a11183-2026` |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | delivered_powder | 参考必须指向唯一终端Product行及同一UUID，双语选择同一实物行；中间酸/浆体或真实联产品不能改名或隐藏以绕过检查。全部参考限定及实际路线需被数据包证明，SLES/其他链分布/盐/供货浓度不可互换。 | `thermo-sds-a11183-2026` |
| validate_gate | all inventory rows | 按真实参考状态验收交付条目和原D_rev及完整事件custody谱系核对Q。独立核对G/R实物与返工水分变化，无同状态证据不得R=D_rev，不以净Q替代实物门G。P为内部、未交付成品不入Q，G/R视图不在净参考上另加生产采购。实物事件量和另行归属负荷向量均只归一一次，Q<=0保留原始账而不出单位结果。 |  |
| validate_balance | all inventory rows | 要求Mass蒸汽输入与外返凝结水输出及温压相态水质焓、独立存量损失；唯一供方负荷owner防止重复蒸汽水热背景。环境空气逐物种Resource输入和毛气态出口须分列真实介质，bulk空气、水来源分数与净E仅非加和视图。不以Emission代Resource，不假定大气CO2化石生物来源。各实物物种元素相态水门按G/R及真实加减出口独立闭合，不用Q。整份供货与组分不重复，积分体积不多乘时间，不用COD或同一残差拟合多物种反应水未知项。 |  |
| validate_completeness | dataset | 每行具备原始证据、协议owner、实际数量基准及相容的流/属性/介质；辅助UUID或背景未匹配须显式披露，不能虚构默认或删真实负荷。纯格式验证不证明方法科学批准。 |  |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 实际等级C12 SDS干粉的制造与净交付背景 |
| allowed_use | 相容C12/无EO/钠盐/粉末等级及同供货基准；实际交付kg可按有证据的成分换算 |
| excluded_use | SLES、混合链SLS、其他盐或浓度供货、洗涤性能、下游整份制剂、未核实供应商路线 |
| required_metadata | 实际产品/等级、全部限定信息、期间/场址、制造路线、交付门、Q/P、库存结转负荷、供应链及所有实际辅助操作 |
| required_quality_disclosure | 测定基准及不确定性、失败/返工完整性、物种/反应水证据、UUID及背景限制、未决数据与截断、共享服务分配 |
| update_trigger | 烷基/EO/盐/含水/等级/路线/干燥方式/交付门/包装/背景变化或新原始证据 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| chemithon-sulfation-1997 | literature | Norman C. Foster, Chemithon, Sulfonation and Sulfation Processes (1997), printed pp2,6,17,26–27,32–33; https://www.chemithon.com/Resources/pdfs/Technical_papers/Sulfo%20and%20Sulfa%201.pdf ; retrieved2026-10-16 | 图18与图29确认载气及蒸汽凝结水实物接口，不提供实测空气组成、蒸汽等级、返还量或供方信用。C12硫酸化反应图、液态SO3供给、酸/NaOH中和、干燥及配制边界的单元原理；历史设备技术资料，含其他化学路线/醚硫酸盐；不采用任何配方、工况、活性、水分、收率或能耗示例为通用默认。实际反应水为所示酸与NaOH反应的化学计量推导，实际量仍需独立证据。 |
| thermo-sds-a11183-2026 | literature | Thermo Scientific, Sodium n-dodecyl sulfate A11183.18 Product Specification, print2026-10-16; https://assets.thermofisher.com/chem-specs-pdf/retrievePdf?countryCode=cn&erp_type=CN_E1_LCD&rootSku=A11183&sku=A11183.18 ; retrieved2026-10-16 | CAS151-21-3与C12粉末商品形态、干基含量及区域水分方法差异；标题99%而供应商CofA下限98.5%干基；美国干燥失重≤2.0%与非美国Karl Fischer水分<2.0%分别适用。规格可变，不证明制造路线、产地、实际批含量或纯水损失，无通用阈值。 |
