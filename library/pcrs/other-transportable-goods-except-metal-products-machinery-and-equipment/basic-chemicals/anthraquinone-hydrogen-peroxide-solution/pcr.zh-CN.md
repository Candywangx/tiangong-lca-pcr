---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.anthraquinone-hydrogen-peroxide-solution
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 蒽醌法过氧化氢水溶液

## 1. 范围与适用性

本 PCR 适用于烷基蒽醌自氧化（AO）循环法制造的工业过氧化氢水溶液，自反应物/公用工程接收，覆盖净化、必要的浓缩或稀释、储存和散装出厂。可执行参考对象为标称质量分数 30% 的水溶液牌号。类别身份由制造路线和过氧化氢水溶液确定，不由用户用途或分类标签确定。其他浓度须先核实浓度对应参考身份及数量兼容性，才可使用本实现；浓度不同不自动成为新 PCR 的理由。[jrc-lvoc-hydrogen-peroxide-2017; evonik-hydrogen-peroxide-brochure]

排除磷化物、碳化物、氢化物、氮化物、叠氮化物、硅化物、硼化物、有机过氧化物、氢氧直接合成、电化学制造、清洗/消毒复配产品及过氧化物下游使用。药用/电子/推进剂认证不属于本普通工业级实现。BREF 是 2017 年欧盟大规模连续生产参考；其法律产能适用范围、历史案例、单厂数据、运行条件和 BAT 适用条件均不是通用配方、排放因子、收率、纯度或能耗默认值。本 PCR 规定清单和计量要求，不提供合成或操作指令。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.anthraquinone-hydrogen-peroxide-solution |
| classification_refs | CPC 3.0:34280; narrower 建议范围关系，不是已接受映射 |
| covered_products | AO 路线工业过氧化氢水溶液；当前选定标称 30 wt-% 散装牌号 |
| excluded_products | 第 1 节列出的 CPC34280 其他化合物及排除路线/复配产品 |
| representative_product | 过氧化氢（30%） |
| production_route | 载体循环氢化和氧化；水萃取；净化；实际浓缩/稀释与稳定化；出厂 |
| market_state | 生产者出厂门测量的工业散装水溶液 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以水溶液形式供应指定工业过氧化物反应物 |
| How much | 1 kg 合格完整水溶液 |
| How well | 标称 H2O2 质量分数 30%；披露实际含量、杂质/稳定剂组成及购方验收规范 |
| How long or cycle | 一个声明的生产及出厂报告期，含相关开停车和更换周期 |
| reference_flow_link | peroxide_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 过氧化氢（30%） `b21960ac-f3c4-4f00-ba92-527ca1dd5d12` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | AO 路线；场址/期间；SKU 和标称牌号；实际 H2O2 质量分数 w；声明的添加剂/杂质分数 a；扣皮重的完整溶液质量；购方验收/容差；上游反应物及公用工程供应方；工作液组分和气体组成；处理/接收介质；散装交付边界 |

在数据集元数据或等效过程/产品记录中声明所有必需限定信息。本对象是声明质量参考，不是漂白/消毒性能的通用比较。溶液含活性过氧化物、载水和核实的添加剂；浓度数值不能确定品质或制造能耗。选定流声明主属性 Mass 系数 1.0 及 30% 水溶液身份；该系数不是含量测定或供应方过程的数量约定。核对实际批次质检单、质量百分数约定及净称量记录。每个关联供方或消费方接口均须声明原生过程交换采用 kg 完整溶液还是 kg 活性 H2O2。仅活性物数量等于各实际批次溶液质量与其实测过氧化氢分数乘积之和；不能以相同数值链接到完整溶液。未声明浓度的通用过氧化氢流不能证明 30% 完整溶液接口，50% 纺织厂供货须保留浓度、地域及接收接口。客户用途示例不把本参考限定为纺织漂白。[evonik-hydrogen-peroxide-brochure; jrc-ilcd-general-guide-2010]

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| mu_solution | peroxide_product | Mass | kg | Q 定义为一致期间生产的各合格完整溶液批次实测净质量之和，每个合格批次仅计一次。核对生产、出厂、期初/期末成品库存、不合格品及返工；外购同类别物料不计为新合成，返工批次不重复计量。所有清单行采用每 1 kg 参考流。活性质量 A = sum(批次溶液质量 × 批次 w)；载水 W = sum(批次质量 × (1 − w − a))。核实各实测分数互不重叠及其质量闭合。A 与 W 是组成账，不另列参考产品输出。 |
| mu_solution_inputs | 水溶液化学品投入 | Mass | kg | 完整供货溶液及测量含量分别记录；仅在声明浓度、水和背景边界后换算供应方仅活性物数据。不得重复加入载水。 |
| mu_circulation | 工作液及催化剂 | Mass | kg | 分别记录组分期初/期末存量、接收、外部回收返回、外送、降解、内部循环和测量损失。内部回收不产生负外部投入，也不消除实际损失。 |
| mu_gases | 气体交换 | Mass / Volume | kg / m3 | 气体体积须注明温度、绝压、湿度、组成和压缩因子及供应方参考条件；质量由测量或供方核实条件推导。不把数据库次级系数假设为密度。 |
| mu_energy | electricity_in; steam_in | Net calorific value / Mass | MJ / kg | 电力：测量 kWh × 3.6 = MJ，使用核实的能量单位组；原生 NCV 标签不表示电力燃烧。蒸汽 kg、状态焓及供方热量参考分账。根据实测绝压、温度和相态/干度，在有效域内采用可追溯 IAPWS-IF97 实现求普通水比焓。仅饱和温压不能确定湿蒸汽干度。记录各项冷凝液、排气、排水、外送及能量库存变动；约定热量控制边界及损失。原生能量属性的 NCV 或 GCV 均不能证明蒸汽净交付热量。[iapws-if97-2012] |
| mu_emissions | 空气/水中物种 | Mass | kg | 按一致期间积分物种浓度 × 兼容气/液流量 × 时长。缺少物种分析及明确碳到物种换算时，FID 的 mg C 不能作为任一特定溶剂的 kg。COD/TOC 是处理指标，不自动作为物种排放；避免总量/组分负荷重复。 |
| mu_input_attribution | 产品投入 | Mass / Volume / Energy | 本行单位 | 采用关联协议核对实物接收、仓储及在用库存、阶段领用和未用退回，再求一致期间投入分子。催化剂、吸附剂、滤芯、周转容器及维修物料的实际使用期归属须与完整实物数量和共产品负荷分配分别记录。不得把未经调整的采购发票除以 Q。[jrc-ilcd-general-guide-2010] |
| mu_species_balance | p_ao | Mass | kg | 分别建立完整相态质量账和各分子物种账。物种可生成或消耗；H2O2 在合成或分解中不守恒。根据核实分子式及实测混合物分数核对守恒的 C/H/N/O 和其他实际元素。记录 H2、O2、N2、载水、溶解气、蒸汽/冷凝液、反应净生成或消耗的水以及全部实物去向。不提供默认收率、过量空气比例、过氧化物销毁比例或分解速率。[jrc-lvoc-hydrogen-peroxide-2017; evonik-hydrogen-peroxide-brochure; jrc-ilcd-general-guide-2010] |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际接收的氢、声明工作液补充组分、催化剂、水及公用工程，并具上游生产证据 |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC34280 中 AO 过氧化氢子集；不是该叶全部化学品 |
| recursive_input_rule | 外购过氧化氢或外部加工的同类别溶液须有核实上游数据集；不得将其制造记零或再计为新合成 |
| upstream_dataset_requirement | 每项供应/接收交换须匹配路线、牌号、浓度/参考量、地域/年份、公用工程状态及废物处理 |
| disclosure | 实际过程图、控制体、供方边界、内部回用、废水去向、回收、排除项及缺失身份/数量链接 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| sb_ao | p_ao | 纳入实际氢化/氧化/萃取循环、工作液干燥/再生、催化剂回收、净化、实际浓缩/稀释与稳定化、储存/出厂、冷却及排放治理。即使采用聚合前景单元，也须保留各阶段计量及实物交接。 | jrc-lvoc-hydrogen-peroxide-2017; evonik-hydrogen-peroxide-brochure |
| sb_utilities | p_ao | 外购水、压缩空气和蒸汽链接上游供应；现场生成须另列真实投入和排放。本实现采用外部供汽且无现场燃烧。采用燃烧路线须在数据集完成前补充独立证据支持的公用工程模块、各燃料及每项相关基本排放。 | jrc-lvoc-hydrogen-peroxide-2017 |
| sb_destination | p_ao | 区分外部废物转交与纳入处理后的直接排放。记录相分离、回收有机相、水回用及实际残余排放。若现场处理，须以独立原子反应物、能源、污泥和排放扩展处理单元；不得将其藏在假设去除率中。 | jrc-lvoc-hydrogen-peroxide-2017 |
| sb_actual_recipe | p_ao | 所列蒽醌、溶剂和处理剂选项是有条件核算示例，不规定工作液配方。完整性确认前，对本清单未表示的每种实际稳定剂、其他载体/溶剂、催化剂载体供应、冷却药剂、清洗药剂、包装组件、废物及排放物种分别添加一个原子行，并核实实物身份与数量基准。散装交付产品质量扣除容器皮重；声明边界含包装和运输时须补充。 | jrc-lvoc-hydrogen-peroxide-2017; evonik-hydrogen-peroxide-brochure |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| p_ao | AO 过氧化氢溶液一体化制造与散装出厂 | required | 核实的 AO 路线及选定 30% 水溶液牌号 | foreground | peroxide_product |

实物过程图：反应物接收 → 氢化 → 氧化 → 水萃取 → 净化 → 实际浓缩/稀释及稳定化 → 储存/出厂。萃取后有机工作相经干燥/再生返回氢化；适用时催化剂捕集使催化剂内部返回。冷凝器/吸附器回收溶剂和冷凝液；外部损失及处理转交仍保持可见。每个内部链接的发送端和接收端保持同量。这些阶段在 p_ao 内独立计量，因此中间过氧化氢与最终产品不会产生两个具有参考 UUID 的产品输出。

逐阶段保留实测完整工作液相态及组分组成的关联实物记录。每种实际添加的蒽醌、氢蒽醌补充料、溶剂和稳定剂各设一个原子交换；工作液总量不能视为一种纯组分或未经披露的背景配方。逐项跟踪回收有机馏分、水相、相间夹层、吹放、降解产物和残余物，直至内部回用、库存、外部回收、废物或实际接收介质。外购配制催化剂或真实供货混合物保留其完整供货身份及组分测定；组分核算不得重复其上游采购。内部回收物是交接，实际外部回收供货或出售则须有独立限定交换及供方/接收方边界。

工艺空气和反应氢气是完整供货载体，须测量湿度和杂质；其数量不等于干 O2 或纯 H2 物种。仅在实物组分账及适当的基本资源/排放行分解，不能重复外购载体背景。工作液和产品中的溶解气、气溶胶载水、冷凝液库存及回水均进入同期间质量/元素账。实际 CO2、CH4 及其他含碳排放保留物种及生产者化石/生物来源，即使选定影响方法不表征也不得删除。声明边界内每种实际容器/包装材料、清洗/钝化药剂、维修耗材及外购服务各设一个原子交换，采用真实数量单位和服务日志；包装皮重、催化剂 kg 和服务小时是不同数量。[jrc-lvoc-hydrogen-peroxide-2017; evonik-hydrogen-peroxide-brochure; jrc-ilcd-general-guide-2010]

### 过程：AO 一体化制造（`p_ao`）

#### 输入

##### 产品流

###### 氢气（`hydrogen_in`）

外购反应氢气：保留实际生产者、纯度、杂质、水分及供货路线；循环或溶解氢在内部跟踪。煤制甲醇制乙烯产品身份仅在实际生产者及该硬路线有证据，且 kg-H2 或完整气体约定、气态条件和上游边界均匹配时，才可作为投入供应方。它不是本过氧化氢输出参考或通用氢替代。不能仅因原生记录存在而选择生产路线。

- 选定流：氢气
- 流属性/单位：Mass / kg
- 数量规则：关联协议经库存核对及任何有记录的使用期归属后的一致期间投入数量，除以 Q kg 合格完整溶液；完整实物外部数量另行保留。条件性投入缺席须有证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 压缩的空气（`air_in`）

仅外购压缩工艺空气。测量与供应方一致的压力、温度、湿度及体积基准，供方压缩仅计一次。现场压缩环境空气改用资源行和现场压缩机电力。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：关联协议经库存核对及任何有记录的使用期归属后的一致期间投入数量，除以 Q kg 合格完整溶液；完整实物外部数量另行保留。条件性投入缺席须有证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gases`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 外购气态氧气（`oxygen_in`）

仅实际供氧或富氧供货。记录纯度和气体参考条件；不得用基本资源流代替外购产品。

- 选定流：外购气态氧气
- 流属性/单位：Mass / kg
- 数量规则：关联协议经库存核对及任何有记录的使用期归属后的一致期间投入数量，除以 Q kg 合格完整溶液；完整实物外部数量另行保留。条件性投入缺席须有证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gases`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 氮气（`nitrogen_in`）

仅有记录的气态 N2 储罐保护或惰性气体供货。选定广义产品身份确立氮及 kg 参考，但原生记录未声明 CAS、相态、纯度和生产路线。链接背景前核实实际气态及供方组成。灌装线专用身份仅在该实际接收接口成立时才可使用。

- 选定流：氮气 `4f19ca0f-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：关联协议经库存核对及任何有记录的使用期归属后的一致期间投入数量，除以 Q kg 合格完整溶液；完整实物外部数量另行保留。条件性投入缺席须有证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gases`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 去离子水（`water_in`）

由选定离子交换或反渗透纯水供货路线提供的去离子萃取、稀释或清洗用水；各用途分别计量。即使通用备注提到蒸馏，该硬路线也不证明仅蒸馏的供方。实物账分别记录留在供货溶液中的水及作为冷凝液或废水离开的水。

- 选定流：去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：关联协议经库存核对及任何有记录的使用期归属后的一致期间投入数量，除以 Q kg 合格完整溶液；完整实物外部数量另行保留。条件性投入缺席须有证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 工艺用水（`water_cooling`）

仅供应的经处理工艺水，用于冷却补水或其他有记录公用工程用途。记录水质和处理；不得在本前景重复记录其上游天然取水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：关联协议经库存核对及任何有记录的使用期归属后的一致期间投入数量，除以 Q kg 合格完整溶液；完整实物外部数量另行保留。条件性投入缺席须有证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 交流电（`electricity_in`）

仅原生 CN 地域、用户侧 1–35 kV 电网平均消费组合供电。其他地域、电压或专用供电须有各自兼容身份和供方；本行不确立全球组合。分阶段计量压缩、循环、分离、净化及处理用电；供方地域、年份与实际电压须一致。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：关联协议经库存核对及任何有记录的使用期归属后的一致期间投入数量，除以 Q kg 合格完整溶液；完整实物外部数量另行保留。条件性投入缺席须有证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 外购工艺蒸汽（`steam_in`）

计量供汽质量和冷凝回水，并记录压力、表压/绝压约定、温度及相态/干度。按与供应方一致的焓边界另算净交付热量。不假设压力限定或仅具 MJ 属性的身份。

- 选定流：外购工艺蒸汽
- 流属性/单位：Mass / kg
- 数量规则：关联协议经库存核对及任何有记录的使用期归属后的一致期间投入数量，除以 Q kg 合格完整溶液；完整实物外部数量另行保留。条件性投入缺席须有证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 2-乙基蒽醌（`quinone_in`）

仅实际使用并测量的本载体。其他烷基蒽醌须另设行；总循环、补充、存量变化和降解分别记录。

- 选定流：2-乙基蒽醌
- 流属性/单位：Mass / kg
- 数量规则：关联协议经库存核对及任何有记录的使用期归属后的一致期间投入数量，除以 Q kg 合格完整溶液；完整实物外部数量另行保留。条件性投入缺席须有证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 二甲苯（`xylene_in`）

仅实际混合异构体二甲苯溶剂；记录异构体组成、杂质、化石/生物来源及供应方。本行为净外部供应物料，不是每次循环的质量。

- 选定流：二甲苯 `55dcefce-e5b7-492d-9f02-5bd5a70c94a1`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：关联协议经库存核对及任何有记录的使用期归属后的一致期间投入数量，除以 Q kg 合格完整溶液；完整实物外部数量另行保留。条件性投入缺席须有证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 磷酸三(2-乙基己基)酯（`phosphate_in`）

仅实际使用的本极性溶剂。磷酸三丁酯和二(2-乙基己基)磷酸是不同物种，不能替代。

- 选定流：磷酸三(2-乙基己基)酯
- 流属性/单位：Mass / kg
- 数量规则：关联协议经库存核对及任何有记录的使用期归属后的一致期间投入数量，除以 Q kg 合格完整溶液；完整实物外部数量另行保留。条件性投入缺席须有证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 负载型钯加氢催化剂（`catalyst_in`）

实际配制催化剂，包含测定的载体与钯负载量；不得把催化剂质量写成纯钯。分别记录新购、外部再生返回及内部回收。

- 选定流：负载型钯加氢催化剂
- 流属性/单位：Mass / kg
- 数量规则：关联协议经库存核对及任何有记录的使用期归属后的一致期间投入数量，除以 Q kg 合格完整溶液；完整实物外部数量另行保留。条件性投入缺席须有证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 活性氧化铝工作液再生剂（`alumina_in`）

仅实际固体工作液再生剂。不接受活化状态不明或 CAS 矛盾的普通氧化铝。其他再生剂须有独立身份。

- 选定流：活性氧化铝工作液再生剂
- 流属性/单位：Mass / kg
- 数量规则：关联协议经库存核对及任何有记录的使用期归属后的一致期间投入数量，除以 Q kg 合格完整溶液；完整实物外部数量另行保留。条件性投入缺席须有证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 氢氧化钠水溶液（`caustic_in`）

仅有记录的碱法再生、清洗或处理。称量完整供货溶液并测定 NaOH；95–98% 干烧碱不是该溶液。

- 选定流：氢氧化钠水溶液
- 流属性/单位：Mass / kg
- 数量规则：关联协议经库存核对及任何有记录的使用期归属后的一致期间投入数量，除以 Q kg 合格完整溶液；完整实物外部数量另行保留。条件性投入缺席须有证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 硝酸水溶液（`nitric_in`）

仅有记录的硝酸使用。记录实际溶液浓度及用途；40% 候选或一般市场浓度均不提供默认值。

- 选定流：硝酸水溶液
- 流属性/单位：Mass / kg
- 数量规则：关联协议经库存核对及任何有记录的使用期归属后的一致期间投入数量，除以 Q kg 合格完整溶液；完整实物外部数量另行保留。条件性投入缺席须有证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 活性炭（`carbon_in`）

仅实际活性炭吸附剂，记录原料、牌号和湿/干基准。分别记录使用期床层更换和再生；广义身份不选定炭原料或吸附容量。

- 选定流：活性炭 `5cad53b5-252a-4e2f-8197-8be465707405`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：关联协议经库存核对及任何有记录的使用期归属后的一致期间投入数量，除以 Q kg 合格完整溶液；完整实物外部数量另行保留。条件性投入缺席须有证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 工业净化用阳离子交换树脂（`resin_cation_in`）

仅实际阳离子树脂；声明聚合物、官能团、离子型及含水率。药用树脂描述不能核实工业净化身份。

- 选定流：工业净化用阳离子交换树脂
- 流属性/单位：Mass / kg
- 数量规则：关联协议经库存核对及任何有记录的使用期归属后的一致期间投入数量，除以 Q kg 合格完整溶液；完整实物外部数量另行保留。条件性投入缺席须有证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 工业净化用阴离子交换树脂（`resin_anion_in`）

仅实际阴离子树脂；保留聚合物、离子型及粒径牌号。50 微米色谱树脂记录不作为通用工业树脂。

- 选定流：工业净化用阴离子交换树脂
- 流属性/单位：Mass / kg
- 数量规则：关联协议经库存核对及任何有记录的使用期归属后的一致期间投入数量，除以 Q kg 合格完整溶液；完整实物外部数量另行保留。条件性投入缺席须有证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 聚丙烯芯玻璃纤维滤芯（`filter_in`）

仅实际采用的本耗材滤芯设计。称量完整滤芯并核实物料组成；不锈钢芯设计须另设行。不规定更换频率。

- 选定流：聚丙烯芯玻璃纤维滤芯
- 流属性/单位：Mass / kg
- 数量规则：关联协议经库存核对及任何有记录的使用期归属后的一致期间投入数量，除以 Q kg 合格完整溶液；完整实物外部数量另行保留。条件性投入缺席须有证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


##### 基本流

###### 地下水（`water_ground`）

仅前景内直接地下取水，声明水井、地点及期间；取水、回流和消耗分账。

- 选定流：地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 河水（`water_river`）

仅前景内直接河流取水。不得重复地下水或已由外购水数据集表示的上游取水。

- 选定流：河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 氧气（`oxygen_resource`）

仅进入现场压缩机的环境空气中的氧；测量进气组成。不得将同一份氧再次记为外购压缩空气或外购氧气。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gases`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 二氮（`nitrogen_resource`）

仅进入现场压缩机的环境空气中的二氮，采用实际进气组成；外购工艺空气自带其上游资源清单。

- 选定流：二氮 `08a91e70-3ddc-11dd-96e4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gases`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


#### 输出

##### 产品流

###### 过氧化氢（30%）（`peroxide_product`）

出厂交付的合格标称 30% 水溶液。测量的完整溶液含水及实际声明添加剂，扣除槽罐/容器皮重，不是纯 H2O2 质量。

- 选定流：过氧化氢（30%） `b21960ac-f3c4-4f00-ba92-527ca1dd5d12`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


##### 废物流

###### 含工作液有机物的蒽醌法工艺废水（`wastewater_out`）

仅转送外部处理的废水，记录实际相态、含水率及过氧化物/有机物负荷；不得把未处理废水标为直接淡水排放。

- 选定流：含工作液有机物的蒽醌法工艺废水
- 流属性/单位：Mass / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 工作液再生废碱焦油（`tar_out`）

仅实际分离的碱性有机残余物；测定水、溶剂、降解蒽醌和无机成分并记录接收方。其既不是硫酸盐制浆黑液，也不是回收可售溶剂。

- 选定流：工作液再生废碱焦油
- 流属性/单位：Mass / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 废活性氧化铝工作液再生剂（`alumina_out`）

实际含残留溶剂和蒽醌的废再生剂，测量完整湿物料；保留接收验收及金属/矿物组成。水泥利用不自动产生共产品抵扣。

- 选定流：废活性氧化铝工作液再生剂
- 流属性/单位：Mass / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 废负载型钯加氢催化剂（`catalyst_out`）

向外部再生/回收转交的催化剂，含测量的载体及污染物；金属回收和催化剂返回分别跟踪，不假设回收率。

- 选定流：废负载型钯加氢催化剂
- 流属性/单位：Mass / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 废活性炭（`carbon_out`）

实际外送废活性炭，记录吸附溶剂、水、原料和接收处理；内部蒸汽再生的炭不是外部废物。

- 选定流：废活性炭 `aff33890-3f08-40f9-9310-a7f77213de05`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 废工业阳离子交换树脂（`resin_cation_out`）

实际外送废阳离子树脂；声明离子型、含水率、过氧化物/有机污染物及接收方。不得假设为普通非危险废物。

- 选定流：废工业阳离子交换树脂
- 流属性/单位：Mass / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 废工业阴离子交换树脂（`resin_anion_out`）

实际外送废阴离子树脂；与废阳离子树脂分列，独立记录组成、湿/干基准及接收验收。

- 选定流：废工业阴离子交换树脂
- 流属性/单位：Mass / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 废聚丙烯芯玻璃纤维滤芯（`filter_out`）

仅对应的废滤芯，含夹带催化剂/工作液及接收处理；过滤残渣本身不是完整滤芯。

- 选定流：废聚丙烯芯玻璃纤维滤芯
- 流属性/单位：Mass / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


##### 基本流

###### 氢（`hydrogen_air`）

测量跨室外空气边界排出的氢；区分吹放与内部循环，并跟踪所有相关运行事件。

- 选定流：氢 `08a91e70-3ddc-11dd-949c-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 过氧化氢（`peroxide_air`）

实际储存、交接或工艺排气中的 H2O2 空气释放，按 H2O2 物种质量测量，不按溶液气溶胶总质量；受控收集泄漏进入废物/水账。

- 选定流：过氧化氢 `4d9a8790-3ddd-11dd-9237-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 二甲苯（所有异构体）（`xylene_air`）

仅溶剂实际含有并测量的二甲苯异构体；各异构体仅合计一次，不再叠加总二甲苯或总 VOC。

- 选定流：二甲苯（所有异构体） `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 三(2-乙基己基)磷酸酯（`phosphate_air`）

仅使用本溶剂时测量的三(2-乙基己基)磷酸酯室外空气排放。低蒸气压不证明损失为零。

- 选定流：三(2-乙基己基)磷酸酯 `fe0acd60-3ddc-11dd-a05d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 甲烷 (化石源)（`methane_air`）

仅氢源杂质中实际进入室外空气的化石甲烷；确认来源及物种。若有生物甲烷，须另设流并保留在 LCI。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 二氮（`nitrogen_air`）

工艺空气或有记录的保护气中实际室外二氮排放；即使缺少影响表征，也保留实物氮平衡。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 氧（`oxygen_air`）

实际进入即时室外未特指空气的 O2，采用匹配气量/组成记录测量 kg 物种。区分过量进料氧、溶解氧库存变动和实际过氧化氢分解生成的氧；不采用默认销毁分数或来源的过量空气比例。核对同期间 O2 分子、Q 合格完整产品及实验室时间。不采用资源、土壤、水或长期排放身份。

- 选定流：氧 `08a91e70-3ddc-11dd-9745-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 水蒸气（`water_evap`）

冷却及其他纳入用水中实际跨室外空气边界的蒸发；内部蒸发冷凝回收不是大气释放。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 水（`water_return`）

实际直接回排淡水水体的 H2O，使用原生 m3 参考，记录地点及温度。实测水物种 kg 须采用可追溯、状态匹配的水密度换算；完整污染废水质量或体积不自动等于该 H2O 数量。单独测量的污染物种各设接收介质行，外送废水保留在废物账；保留成对实物总排水及组成记录，不重复水。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 过氧化氢（`peroxide_water`）

纳入处理后实际进入淡水的残余 H2O2，按物种质量测量。处理中的过氧化物分解不是正的过氧化物排放。

- 选定流：过氧化氢 `08a91e70-3ddc-11dd-94a4-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 二甲苯（所有异构体）（`xylene_water`）

仅处理后进入淡水的残余二甲苯异构体；不得把未处理外送负荷指定为直接环境排放。

- 选定流：二甲苯（所有异构体） `fe0acd60-3ddc-11dd-ad96-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 三(2-乙基己基)磷酸酯（`phosphate_water`）

仅使用时处理后进入淡水的残余三(2-乙基己基)磷酸酯；不得替换为磷酸三丁酯或磷当量质量。

- 选定流：三(2-乙基己基)磷酸酯 `fe0acd60-3ddc-11dd-a061-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明期间测量的本行外部数量除以 Q kg 合格完整溶液；有证据记录条件性流的缺席，不假设为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| al_physical | p_ao | 未分配实物物料、水、氢/氧及溶剂组分平衡须独立于分配后环境负荷保留。内部循环不是可售共产品。不得将测量实物输出乘以分配份额。 | jrc-lvoc-hydrogen-peroxide-2017 |
| al_shared | p_ao | 尽可能采用阶段/生产活动实测耗量及过程拆分，避免共用公用工程和处理负荷分配。剩余分配须符合声明的研究目标及建模框架；存在决定性实物因果关系时须证明该关系，不存在时记录其他有依据准则，并记录实测份额和为一及敏感性。本 PCR 不提供通用质量、售价或化学计量份额。实物数量保持未分配。 | jrc-ilcd-general-guide-2010 |
| al_recovery | p_ao | 可售回收溶剂、催化剂金属或外送有用热须有实测品质、接收需求及兼容处理边界。按声明目标及建模框架解决多功能性，适用时优先过程拆分；分配和系统扩展不能自由互换。系统扩展有依据时证明实际替代及不确定性。同一操作不得叠加回收物料信用和第二份避免处理信用。仅废物去向不确立信用。 | jrc-ilcd-general-guide-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | p_ao | peroxide_product | 批次出厂与实验室验收 | 批次号；毛重/皮重/净溶液质量；w；添加剂/杂质分数 a；SKU；验收规范；产品期初/期末库存；时间 | 校准质量流量计/地磅及批次经验证过氧化氢分析；独立测量声明添加剂和杂质。核对生产、出厂、返工及库存变化。 | kg; mass fraction | 逐批及报告期库存盘点 | 同一声明期间，包含相关运行及更换周期 | 同一生产者控制体；声明供方/接收方边界 | 每 1 kg 参考流 | 校准；原始记录；方法质控；时间；平衡残差及不确定性；实际规范 |
| cp_materials | p_ao | material inputs | 接收、阶段领用及库存/组分平衡 | row_id；CAS/分子式/牌号；生产者及路线；完整供货质量；含量/水分；新料/回收来源；仓储及在用期初/期末存量；未用外送/退回；阶段领用；降解；更换日期；实际服务总量及报告期份额；上游约定 | 用校准仪器及实际供方质检单称量接收和阶段领用。核对仓储期初 + 接收 + 未用退回 = 仓储期末 + 阶段领用 + 未用外送，另保留有记录的其他交接。在用装料及实物损失/转化平衡分账。短期消耗投入归属匹配生产期间；催化剂/吸附剂/滤芯装料服务多个期间时，记录实际使用/服务关系，按有证据的服务总量跨期间归属，所有期间份额和为一。尚未完成的使用寿命须明确为带证据及敏感性的估计。这些归属份额不改变完整实物接收、库存或排放，也不等于共产品负荷分配。 | kg; mass fraction | 逐次接收/领用与更换；期间盘点 | 匹配生产期间；披露实际服务覆盖 | 同一生产者控制体；保留供方接口 | 每 1 kg 参考流 | 校准；实际质检单；库存和服务日志；不确定性；jrc-ilcd-general-guide-2010 |
| cp_gases | p_ao | gas inputs and air resources | 气体计量与组成测量 | row_id；来源；温度；绝压；湿度；组成；压缩因子；供方参考条件；体积/质量；阶段；期间 | 使用实际组成和供方条件的校准同基准气体计量；环境空气 O2/N2 资源采用同一进气记录，外购气体采用其供应方数据集。 | kg; m3; gas state | 连续累计及有代表性的组成采样 | 同一声明期间，包含相关运行及更换周期 | 同一生产者控制体；声明供方/接收方边界 | 每 1 kg 参考流 | 校准；原始记录；方法质控；时间；平衡残差及不确定性；实际规范 |
| cp_energy | p_ao | electricity_in; steam_in | 分表、蒸汽状态及供方边界 | 阶段；电力 kWh；蒸汽 kg；绝压/表压及大气参考；温度；相态/干度；各冷凝液/排气/排水/外送；库存；焓来源/版本/区间；供方总热/净热约定；损失；轴功；动能/势能项；时间 | 采用校准电力、蒸汽及全部出口计量并匹配时间。通过 IAPWS-IF97 或可追溯供方状态属性测量核实普通水焓；湿蒸汽须有实际干度。链接供方热量前闭合声明能量平衡，含未回送冷凝液、库存、损失及功。通用 MJ、GCV/NCV 标签或蒸汽压力均不足以证明；未闭合热接口保持不完整。 | kWh; MJ; kg; kJ/kg | 连续计量及逐次状态变化 | 同一匹配生产期间 | 声明公用工程控制体和供方边界 | 每 1 kg 参考流 | iapws-if97-2012; original meters and provider evidence |
| cp_water | p_ao | water exchanges | 水控制体 | 来源/去向；体积/质量；温度/密度证据；萃取/稀释/冷却/清洗用途；内部回用；蒸发；溶液载水；存量；期间 | 校准取水/回水/用途计量及可追溯质量体积换算密度；仅按闭合测量水衡算及不确定性计算蒸发，并区分排污与水汽。 | kg; m3 | 连续累计及库存核对 | 同一声明期间，包含相关运行及更换周期 | 同一生产者控制体；声明供方/接收方边界 | 每 1 kg 参考流 | 校准；原始记录；方法质控；时间；平衡残差及不确定性；实际规范 |
| cp_waste | p_ao | waste outputs | 转交及接收验收 | row_id；湿质量；干物分数；溶剂/过氧化物/金属组成；接收方；处理/回收路线；转运；配对再生返回；时间 | 逐项称量并表征每次独立外部废物转运；核实接收验收、实际处理及再生记录。不合并不同树脂、催化剂与残余物质量。 | kg; mass fraction | 逐次转交和再生周期 | 同一声明期间，包含相关运行及更换周期 | 同一生产者控制体；声明供方/接收方边界 | 每 1 kg 参考流 | 校准；原始记录；方法质控；时间；平衡残差及不确定性；实际规范 |
| cp_air | p_ao | air emissions | 有组织及无组织物种监测 | 出口/物种；浓度；物种质量或碳基准；气量及温压/湿干基准；时长；吸附周期；开停车；泄漏调查；来源；不确定性 | 在完整吸附/再生及运行周期内积分有代表性的物种分析和兼容气量测量；FID 总碳在独立物种分析前仅为筛查记录。保留低于检出限结果及方法/限值，不编造零值。 | kg; species concentration; m3; time | 连续或有代表性的全周期采样，另含事件/泄漏记录 | 同一声明期间，包含相关运行及更换周期 | 同一生产者控制体；声明供方/接收方边界 | 每 1 kg 参考流 | 校准；原始记录；方法质控；时间；平衡残差及不确定性；实际规范 |
| cp_effluent | p_ao | freshwater species outputs | 最终排水及处理性能 | 出口；接收水体；最终流量；物种浓度；过氧化物分解；独立 COD/TOC/TSS；有机相回收；处理投入/残余物；采样日期 | 流量加权最终排水采样，采用物种专用经验证分析及实际处理测量；未处理外送数据保留为外部废物转交记录。 | kg; species concentration; m3 | 全报告期及工艺事件的流量加权采样 | 同一声明期间，包含相关运行及更换周期 | 同一生产者控制体；声明供方/接收方边界 | 每 1 kg 参考流 | 校准；原始记录；方法质控；时间；平衡残差及不确定性；实际规范 |
| cp_balance | p_ao | 分子物种及守恒元素 | 关联完整相态和组分账 | 阶段/链接；完整湿相质量；物种/CAS/分子式；含量；溶解气；库存；生成/消耗；净生成/消耗水；回收有机/水相/相间夹层；吹放；实际接收方；碳来源；时间 | 逐阶段和期间匹配实物发送/接收数量、代表性气/液/固体分析及盘点。保留实测或有证据的反应程度和不确定性；物种不明作为明确残差，不编造平衡交换。氧实验室结果关联同期间气体分子与合格完整产品 Q。 | kg; species mol; elemental kg | 匹配期间、采样周期及事件 | 同一生产及库存期间 | 同一实物生产者边界及实际接收去向 | 每 1 kg 参考流 | 实际实验室方法、分子式/质检单、库存/交接记录；jrc-lvoc-hydrogen-peroxide-2017；jrc-ilcd-general-guide-2010 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalise | all inventory rows | 清单数量 = 一致期间协议分子 / Q；Q 为 cp_product 的合格完整溶液质量，单位 kg。适用投入采用协议库存/服务归属，外部输出/资源数量保留匹配实物边界。参考产品输出 = 1 kg。保持本行分子单位及未分配实物账。 | cp_product; row collection protocol | 本行单位/每 1 kg 参考流 | jrc-ilcd-general-guide-2010; evonik-hydrogen-peroxide-brochure |
| calc_composition | peroxide_product | A = sum(m_lot × w_lot)；W = sum(m_lot × (1 − w_lot − a_lot))；添加剂/杂质 = sum(m_lot × a_lot)。在分配前核对三项之和与完整溶液质量。按浓度加权的补充活性质量归一负荷采用 A，明确与必须采用 Q 的清单分开。 | cp_product | 独立活性物/水/添加剂实物账 | evonik-hydrogen-peroxide-brochure |
| calc_component_balance | quinone_in; xylene_in; phosphate_in; catalyst_in | 期初组分存量 + 外部接收 + 实际生成 = 期末组分存量 + 外部转交 + 测量排放 + 测量转化/销毁；内部转交在聚合边界抵消。总循环另记。仅补充量不等于全部溶剂排放。 | cp_materials; cp_waste; cp_air; cp_effluent | 组分残差及记录的不确定性 | jrc-lvoc-hydrogen-peroxide-2017 |
| calc_energy | electricity_in; steam_in | 电能（MJ）= 测量 kWh × 3.6。仅质量匹配的间接回路、无库存变动/其他出口/功时，交付热量（MJ）= sum(m × (h_steam − h_condensate)) / 1000 再扣实测边界热损失，采用 kg 及 kJ/kg。否则先以全部入口/出口焓、能量库存、功及相关动能/势能项闭合完整实测能量平衡，再求热量。实际湿蒸汽比焓 = (1 − 干度) × 饱和液体比焓 + 干度 × 饱和蒸气比焓，采用实测饱和状态。不提供固定蒸汽到 MJ 系数或 GCV/NCV 等价关系。 | cp_energy | 分列电力 MJ、蒸汽 kg 及核实交付热 MJ | iapws-if97-2012; jrc-lvoc-hydrogen-peroxide-2017 |
| calc_emission | air and freshwater outputs | 物种质量 = sum(兼容物种浓度 × 匹配体积流量 × 期间时长)，明确量纲换算。核对点源、无组织源及处理残余量，不重复捕集/回用物料或总碳指标。 | cp_air; cp_effluent | 每物种及接收介质的 kg | jrc-lvoc-hydrogen-peroxide-2017 |
| calc_species_elements | p_ao | 物种 i：期初 + 外部投入 + 实际生成 = 期末 + 外部输出 + 实际消耗；内部交接抵消。守恒元素 e：期初元素质量 + 外部元素投入 = 期末元素质量 + 外部元素输出，采用核实分子式分数及实测混合物组成。总实物质量无反应生成/销毁项。明确跟踪过氧化氢合成、降解、分解及水净生成/消耗；化学计量描述有证据的反应程度，不假设工厂收率或销毁分数。 | cp_balance; cp_product; cp_materials; cp_gases; cp_water; cp_waste; cp_air; cp_effluent | 分列分子、元素和完整质量残差及不确定性 | jrc-lvoc-hydrogen-peroxide-2017; evonik-hydrogen-peroxide-brochure; jrc-ilcd-general-guide-2010 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 分别核实名称、相关 CAS、完整限定、路线、参考属性及供应方数量。空 UUID 表示身份未决；检索成功不确立背景数据集兼容。 | 实际直接记录及供方元数据 |
| dq_mass | p_ao | 核对溶液组成、水、氢/氧及每项实际溶剂/载体组分；保留未解释残差、不确定性及调查原因，不编造平衡交换。 | cp_product; cp_materials; cp_gases; cp_water |
| dq_completeness | p_ao | 仅有实际路线证据时条件行可缺席。缺少稳定剂、处理药剂/污泥、其他工作液物种或事件排放时，须添加原子行，并阻止数据集完整性结论。 | 实际配方/质检单、过程图及监测覆盖 |
| dq_time | all inventory rows | 匹配生产、公用工程、物料更换、废物及排放记录；说明期间/使用期归属、分析检出限、缺失数据及不确定性。不用历史 BREF 耗量填补默认值。 | 原始采集记录及不确定性报告 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| val_reference | peroxide_product | 要求恰好一个关联参考产品输出、完整溶液质量、标称 30% 牌号及实际含量/验收。仅活性物质量或未核实路线/牌号身份不满足适用性。 | evonik-hydrogen-peroxide-brochure |
| val_denominator | all inventory rows | 清单、协议聚合及双语规则均要求正的 Q 及每 1 kg 参考流。任何补充每活性 kg 结果须披露 A，且不是必须的参考清单。 | evonik-hydrogen-peroxide-brochure |
| val_balance | p_ao | 负荷分配前核查未分配实物平衡及内部链接同量；保留损失、溶液载水、降解及实际排放。不得把理论化学计量假设为实测收率。 | jrc-lvoc-hydrogen-peroxide-2017 |
| val_species | p_ao | 核查基本物种、来源、介质/子介质及质量定义。室外未特指空气身份不是室内或长期流；淡水排放不是取水。如存在生物 CO2/CH4，无论选用何种温室气体报告口径均以独立来源行保留。不得合并嵌套颗粒区间或总量/组分排放。 | jrc-lvoc-hydrogen-peroxide-2017 |
| val_readiness | all inventory rows | 对相关数据集，未决身份、供方数量、配方、蒸汽焓或处理/监测覆盖均属于明确的不完整性。本已编写方法不确立科学批准，也不批准替换为不兼容 UUID。 | jrc-lvoc-hydrogen-peroxide-2017; evonik-hydrogen-peroxide-brochure |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 声明生产者门的核实工业 AO 过氧化氢溶液供应 |
| allowed_use | 在全部必需限定信息和缺失链接解决后，用于同路线、浓度/溶液数量及声明牌号 |
| excluded_use | CPC34280 其他化合物、排除制造路线、仅活性物或浓度不兼容背景，以及未证明的特殊认证 |
| required_metadata | AO 过程图；场址/年份；供方路线；实际含量/添加剂；完整溶液参考；实物及分配账；处理/接收介质；全部协议 ID |
| required_quality_disclosure | 实际测量方法、代表性、检出限、缺失身份及供方兼容性、平衡残差、分配及不确定性 |
| update_trigger | 工作液组成、过氧化氢牌号、路线、公用工程供方基准、回收/处理、排放证据或生产期间变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| jrc-lvoc-hydrogen-peroxide-2017 | official_guidance | European Commission JRC109279, LVOC BREF (2017), DOI 10.2760/77304. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/JRC109279_LVOC_Bref.pdf | 第 12.2、12.3.1–12.3.6 和 13.11 节；印刷页549–564和627–628（PDF586–601及664–665）：AO 边界、实际溶剂/催化剂选项、水/空气/废物及热回收计量需求。保留范围/适用条件；历史数值、运行参数、BAT-AEL 和单厂值不作清单默认值。 |
| evonik-hydrogen-peroxide-brochure | handbook | Evonik, Hydrogen Peroxide – Leadership through innovation, undated acquired brochure. https://products.evonik.com/assets/95/41/Evonik_Hydrogen_Peroxide_Brochure_EN_Asset_2439541.pdf | PDF14–19、21页：生产者 AO 过程、水溶液与纯物种、牌号/浓度及交付状态。生产者特定牌号声明不作通用验收规范；无盐溶液物性表不确立实际密度或能耗。 |
| jrc-ilcd-general-guide-2010 | official_guidance | European Commission JRC48157, EUR24708EN, DOI 10.2788/38479, ILCD Handbook: General guide for Life Cycle Assessment – Detailed guidance, first edition (2010). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 第 7.4.2.5–7.4.2.11 节（印刷页197–214，PDF217–234）及 7.9.1–7.9.3 节（印刷页254–265，PDF274–285）：库存/组成和运行周期记录、原始数据与参考量同期间归一、质量核查、由目标决定的多功能性、过程拆分、实物因果及服务归属。支持核算方法，不证明本生产者配方、实测数量或科学批准。 |
| iapws-if97-2012 | official_guidance | IAPWS R7-97(2012), Revised Release on the IAPWS Industrial Formulation 1997 for the Thermodynamic Properties of Water and Steam. https://iapws.org/technical-guidance/release/IF97-Rev.download | 第 1–3、5–8 和 12 节（PDF3–35、46–48页）：普通水状态焓、液体/蒸气/饱和区间、参考约定及不确定性。须有有效实测状态和干度并采用核实实现；不证明实际供汽状态、供方热量约定或通用 kg 到 MJ 系数。 |
