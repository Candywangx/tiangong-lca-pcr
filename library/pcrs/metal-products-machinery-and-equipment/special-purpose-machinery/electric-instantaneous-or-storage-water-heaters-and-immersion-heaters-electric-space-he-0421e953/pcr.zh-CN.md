---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.electric-instantaneous-or-storage-water-heaters-and-immersion-heaters-electric-space-he-0421e953
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 电热水、空间及土壤加热装置和烹饪电器

## 1. 范围与适用性

本候选规则涵盖完整电即热式及储水式热水器、浸入式加热器、空间及土壤加热装置、烤箱、蒸煮用具、烹饪电炉面、沸腾电灶、烤架及烤炉的工厂制造。声明实际交付配置和主要功能。经产品证据支持的电阻、陶瓷PTC、感应及其他以电产生主要热量/烹饪功能的机制均保留适用可能；不采用仅镍铬或仅储水热水器的默认路线。这是设备生产参考，不是热量、熟食或终身服务参考。

CPC 44817属于家用电器父级。原文给出完整标题，没有详细叶级注释。商用/工业变体、微波或其他电烹饪机制、热泵热水器及太阳能/间接混合产品须按具体产品审查分类和主要功能；不得自动归入44817，也不得因参考UUID未解决而排除。有电辅助的储水容器可能主要是间接/太阳能产品。热泵不能建模为电阻加热器并无解释地遗漏压缩机/制冷剂。明确记录未解决分类，并在选择指南前采集完整实际结构。

纯非电烹饪/加热装置、单独销售零件、交付热量、安装土建、作物生产、客户烹饪和后续维护属于独立输出或阶段。工厂参考不含这些阶段，不免除实际购买模块的上游负担。来源：`unsd-cpc3-2025`、`stiebel-storage-hybrid`、`dimplex-heating-2026`、`ti-induction-2013`、`nexans-soil-heating`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.electric-instantaneous-or-storage-water-heaters-and-immersion-heaters-electric-space-he-0421e953 |
| classification_refs | CPC 3.0:44817 |
| covered_products | 全部列名电热水/浸入、空间/土壤及烹饪装置；按实际型号电结构 |
| excluded_products | 热量/食品服务；纯非电装置；单售零件；安装及使用阶段；不确定混合分类保留审查 |
| representative_product | 按型号、图纸、BOM及工厂测试放行识别的一种验收完整配置；不存在通用代表加热器 |
| production_route | 按型号自产/外购金属/聚合物/热组件/电子操作、组装、验收及出货 |
| market_state | 工厂完整制造设备；声明交付附件及工厂充填物 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造声明的完整电加热或烹饪装置 |
| How much | 一种配置验收净成品装置1千克 |
| How well | 实际额定功率/电压、适用储水量或流量及压力、加热/烹饪结构、安全规格及验收测试 |
| How long or cycle | 一个制造及工厂验收期间；不假定用户寿命或运行小时 |
| reference_flow_link | finished_appliance |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 瞬时电热器或存储式电热水器及浸入式水加热器，空间电热装置及土壤电热装置，烤箱，蒸煮用具、炊事电炉、沸腾电灶、烤架及烤炉 `cfcc8dd6-19dd-4174-95d3-7cccd44431c3` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号及配置；主要功能；家用/商用/工业分类审查；电阻/感应/其他机制；即热/储水/浸入/辐射/风扇/液体/土壤/烹饪分支；电压及额定功率；适用容量/压力；实际牌号及配方；自产/外购接口；交付附件及充填物；验收净质量；地点及期间；测试标准 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| physical_species | 物理材料及物种记录 | Mass | kg | 每项材料/物种衡算采用其自身组成、化验及干湿基准。钢、焊料或污泥总质量不是所含铁、铜、镍或溶剂质量。电力及运输不适用此材料化验规则。 |
| water_basis | 含水物理记录 | Mass | kg | 每项计量水体积采用其自身温度条件下测量或有记录的密度转换；保留投入水分、期初/期末库存、蒸发、排水及反应水。成对内循环回流仅抵消一次。 |
| utility_basis | 能源记录 | Energy | MJ | 保留仪表单位及转换证据、电压、地理和供应商接口。供回热各用自身质量及同一基准下比焓；仅从总供热表减回流一次，不得从已净热量再次扣减。 |
| emission_species | 直接基本排放 | Mass | kg | 物种、环境介质和控制出口须匹配。以NO2当量报告的NOx需物种分解或匹配经审查NOx流，不能全部改称实测NO2。燃料碳本身不能证明CO或NOx。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际接收材料、完整购买模块及有记录接口的供应公用工程 |
| starting_condition_role | 连接上游供应的前景工厂生产；不是无负担进厂投入 |
| product_classification_scope | 全部列名电装置；异常产品按实际主要功能审查分类 |
| recursive_input_rule | 同类购买装置/模块作为有供应商身份的一个上游投入；不递归虚构内部制造或再次叠加内含成分 |
| upstream_dataset_requirement | 匹配实际牌号、配方、模块完整性、地理、时间、电压及废物处理接口；供应商拆解替代而非叠加完整模块数据集 |
| disclosure | 声明供应商缺失数据、分类/UUID缺口、全部条件操作、工厂充填物、测试负荷及下游阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_factory | 前景 | 纳入实际制造、涂层/搪瓷、聚合物加工、加热器或电子制造、组装、验收及报废测试/返工负荷、包装及可归属服务；保留外部上游供应及废物处理。 | rangemaster-quick-guide |
| boundary_use | 工厂与使用 | 工厂电气/压力/烹饪测试能源及介质计入；客户产热、食品/作物投入及服务寿命不属于此参考。工厂排水须计量，不能保留为销售热量或饮用水。 |  |
| boundary_uncertain | 混合及异常结构 | 在主要功能审查前保留具体产品选择；不得强制遗漏、替代通用参考或通用工业分类。如确认在范围内，须以原子交换增加实际压缩机、制冷剂及换热器或其他独特模块。 | unsd-cpc3-2025; stiebel-storage-hybrid; dimplex-heating-2026 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fabrication | 金属外壳、容器及烹饪腔体 | conditional | 自行切割、成形、焊接或表面处理 | 前景生产 | 每 1 kg 参考流 |
| heater | 加热元件及蓄热材料制造 | conditional | 自行制造加热器、电缆或蓄热材料 | 前景生产 | 每 1 kg 参考流 |
| polymer | 聚合物模塑及保温发泡 | conditional | 自行模塑或反应发泡 | 前景生产 | 每 1 kg 参考流 |
| electronics | 感应线圈及控制组件 | conditional | 自行绕线或组装电路板 | 前景生产 | 每 1 kg 参考流 |
| assembly | 按配置组装电器 | required | 每种声明的成品配置 | 前景生产 | 每 1 kg 参考流 |
| test | 工厂验收及返工 | required | 实际适用的安全及功能测试 | 前景生产 | 每 1 kg 参考流 |
| dispatch | 包装及工厂出货 | required | 工厂就绪出货 | 前景生产 | 每 1 kg 参考流 |
| services | 剩余共享工厂服务 | conditional | 过程分表之后计量的未分配剩余负荷 | 前景生产 | 每 1 kg 参考流 |

### 结构及自产/外购决策

| 分支 | 实际过程证据及自产/外购规则 | source_ids |
| --- | --- | --- |
| 即热/浸入 | 裸线绝缘块或管/螺旋/填料结构不同。购买完整加热器替代其自产丝/管/填料生产。声明密封、压力件及传感器。 | stiebel-instantaneous |
| 储水 | 容器、防腐/阳极、保温、控制及电模块；自产搪瓷/发泡区别于购买完整保温容器。现场发泡须实际多元醇、异氰酸酯、发泡剂及排放配方。 | stiebel-storage-hybrid |
| 空间加热 | 辐射/对流、风扇/PTC、蓄热芯体及工厂充液散热器均不同。完整风扇/热模块外购仅计一次，或建模实际自产。无油设计不假定充油。 | dimplex-heating-2026; tdk-ptc-2026 |
| 土壤加热 | 按交付状态列电缆导体/加热体、绝缘/护套、冷端、密封、连接器及温控器；区分自产挤出/端接与外购电缆。挖土及种植属后续阶段。 | nexans-soil-heating |
| 烹饪 | 电阻烤箱/电炉面/烤架/烤炉及腔体/门/架、可选风扇区别于感应线圈、转换器、开关器件、冷却及面板。其他主要电机制须实际结构，不能无依据排除。 | ti-induction-2013; rangemaster-quick-guide |

自产金属加工分别采集切割/冲压/成形、连接、清洗/预处理及实际涂层/搪瓷固化。电阻加热器采集实际绕丝、裸线块组装或护套填充/压实/密封及验收；PTC制造需研磨、混合、压制、烧结、接触连接及涂层，并列出每项实际掺杂剂及反应排放。自产电缆需导体预备、实际绝缘/护套挤出及端接。自产聚合物采集模塑/干燥/回料或反应混合/发泡/固化及实际配方和控制出口。自产感应/控制组件需绕线/绝缘、电路板装配/焊接、功率器件及冷却组装和测试。这些实际子操作记录汇入声明过程组，不与外购完整模块边界重叠。

以下卡片是条件性、身份特定的采集模式，不是强制配方。核实每项实际牌号/配方及供应商接口；每项实际但未列树脂、发泡剂、器件、燃料、废物或基本物种均增加一张卡片。BOM完整外购模块内含金属/聚合物/电子只计一次；自产过程卡片仅适用于供应商边界之外。内部制造子组件为成对转移，在汇总清单中抵消。未列或未解决流绝不能解释为零。

### 过程：金属外壳、容器及烹饪腔体 (`fabrication`)

#### 输入

##### 产品流

###### 冷轧低碳钢板 (`steel_sheet`)

纳入条件：符合钢制外壳BOM牌号、镀层及厚度.

- 选定流：冷轧低碳钢板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：rangemaster-quick-guide

###### 奥氏体不锈钢板 (`stainless_sheet`)

纳入条件：符合容器或食品接触腔体牌号及表面.

- 选定流：奥氏体不锈钢板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 铜管 (`copper_tube`)

纳入条件：自行制造匹配的管式加热器或水路.

- 选定流：铜管
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：stiebel-instantaneous

###### 钢焊丝 (`weld_wire`)

纳入条件：实际焊丝牌号及焊接路线.

- 选定流：钢焊丝
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 氩气保护气体 (`argon`)

纳入条件：实际使用氩气保护.

- 选定流：氩气保护气体
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 玻璃质搪瓷熔块 (`enamel_frit`)

纳入条件：容器/腔体实际供应商配方.

- 选定流：玻璃质搪瓷熔块
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：stiebel-storage-hybrid

###### 聚酯粉末涂料 (`polyester_powder`)

纳入条件：外壳实际聚酯配方.

- 选定流：聚酯粉末涂料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 氢氧化钠清洗溶液 (`sodium_hydroxide`)

纳入条件：清洗线实际配方及浓度.

- 选定流：氢氧化钠清洗溶液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 工厂清洗水 (`cleaning_water`)

纳入条件：实际供给清洗的水.

UUID仅确认基本流身份；实际供应过程、组成、牌号、地域及接口仍须匹配。空气流为未指定空气介质；取得实际释放环境后须复核介质。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：

###### 丙酮清洗溶剂 (`acetone`)

纳入条件：有记录的丙酮清洗；不假定所有涂层均使用.

UUID仅确认基本流身份；实际供应过程、组成、牌号、地域及接口仍须匹配。空气流为未指定空气介质；取得实际释放环境后须复核介质。

检索到的晶圆用丙酮流不匹配金属清洗接口，UUID仍待审查。

- 选定流：丙酮
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_solvent。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_solvent`
- 来源：

###### 交流电 (`fabrication_electricity`)

纳入条件：仅中国1–35千伏到用户消费供电；不同接口须匹配其他供应商.

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_utility。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：

#### 输出

##### 废物流

###### 低碳钢边角料废料 (`steel_scrap`)

纳入条件：实际分离废料牌号及回收接口.

UUID仅确认基本流身份；实际供应过程、组成、牌号、地域及接口仍须匹配。空气流为未指定空气介质；取得实际释放环境后须复核介质。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 奥氏体不锈钢边角料废料 (`stainless_scrap`)

纳入条件：实际分离废料牌号；不可用总金属质量替代元素化验.

- 选定流：奥氏体不锈钢边角料废料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 金属外壳清洗废水 (`wash_effluent`)

纳入条件：外部废水处理接口.

- 选定流：金属外壳清洗废水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：

###### 含金属清洗处理污泥 (`treatment_sludge`)

纳入条件：场内处理产生污泥；采用其自身水分及化验.

- 选定流：含金属清洗处理污泥
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：

###### 载丙酮活性炭 (`spent_carbon`)

纳入条件：实际捕集介质离厂.

- 选定流：载丙酮活性炭
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_solvent。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_solvent`
- 来源：

##### 基本流

###### 向空气排放的丙酮 (`acetone_air`)

纳入条件：实际控制后的烟囱及逸散丙酮实测.

UUID仅确认基本流身份；实际供应过程、组成、牌号、地域及接口仍须匹配。空气流为未指定空气介质；取得实际释放环境后须复核介质。

- 选定流：丙酮 `08a91e70-3ddc-11dd-9520-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_solvent。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_solvent`
- 来源：

### 过程：加热元件及蓄热材料制造 (`heater`)

#### 输入

##### 产品流

###### 镍铬电阻丝 (`nichrome_wire`)

纳入条件：匹配的电阻合金牌号；不是感应或所有电阻的默认材料.

- 选定流：镍铬电阻丝
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 铁铬铝电阻丝 (`fecral_wire`)

纳入条件：实际替代合金而非额外叠加镍铬丝.

- 选定流：铁铬铝电阻丝
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 氧化镁电绝缘粉末 (`magnesium_oxide`)

纳入条件：经验证的自产管式填料配方及纯度.

- 选定流：氧化镁电绝缘粉末
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 碳酸钡陶瓷原料 (`barium_carbonate`)

纳入条件：仅实际自行制造PTC陶瓷的配方.

UUID仅确认基本流身份；实际供应过程、组成、牌号、地域及接口仍须匹配。空气流为未指定空气介质；取得实际释放环境后须复核介质。

采用的身份为厂内原生生产材料；核实陶瓷原料纯度和实际供应商，不假定PTC配方。

- 选定流：碳酸钡 `95b9bf0d-61fb-4aeb-898d-e45dc5397ee0`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：tdk-ptc-2026

###### 二氧化钛陶瓷原料 (`titanium_dioxide`)

纳入条件：自产PTC配方；其他掺杂剂逐项采集.

- 选定流：二氧化钛陶瓷原料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：tdk-ptc-2026

###### 聚氯乙烯电缆护套混配料 (`pvc_compound`)

纳入条件：实际匹配的护套混配料及添加剂.

- 选定流：聚氯乙烯电缆护套混配料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：nexans-soil-heating

###### 硅橡胶电缆绝缘混配料 (`silicone_compound`)

纳入条件：实际替代绝缘化学组成.

- 选定流：硅橡胶电缆绝缘混配料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 交流电 (`heater_electricity`)

纳入条件：自产加热器制造所用合格中国中压供电.

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_utility。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：

#### 输出

##### 废物流

###### 报废镍铬管式加热元件 (`heater_reject`)

纳入条件：实际报废匹配结构；其他报废设计须单独识别.

- 选定流：报废镍铬管式加热元件
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

### 过程：聚合物模塑及保温发泡 (`polymer`)

#### 输入

##### 产品流

###### 丙烯腈-丁二烯-苯乙烯模塑树脂 (`abs_resin`)

纳入条件：实际自产ABS壳体；购买完整模塑壳体时排除树脂.

UUID仅确认基本流身份；实际供应过程、组成、牌号、地域及接口仍须匹配。空气流为未指定空气介质；取得实际释放环境后须复核介质。

仅在实际中国聚合物粒料采购接口相符时采用该身份；耐热牌号及实际供应过程须独立核实。

- 选定流：丙烯腈丁二烯苯乙烯共聚物（ABS）粒料 `b895c3a1-076e-4a42-a2c0-6088890c0bd9`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 炭黑颜料 (`carbon_black`)

纳入条件：实际单独颜料配方；预混树脂内含颜料仅计一次.

UUID仅确认基本流身份；实际供应过程、组成、牌号、地域及接口仍须匹配。空气流为未指定空气介质；取得实际释放环境后须复核介质。

- 选定流：炭黑 `dee14a4f-c02b-4bf5-affc-9e66b1d9a8ce`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 聚醚多元醇发泡原料 (`polyether_polyol`)

纳入条件：实际自产泡沫配方、供应商牌号及反应性含量.

UUID仅确认基本流身份；实际供应过程、组成、牌号、地域及接口仍须匹配。空气流为未指定空气介质；取得实际释放环境后须复核介质。

仅用于实际相符的化工厂环氧丙烷嵌段聚合聚氨酯原料路线；羟基官能度、牌号、生物源含量及实际发泡配方仍须采集。

- 选定流：聚醚多元醇 `328068ba-3cd2-44c7-a118-8274c9c7885b`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 聚合二苯基甲烷二异氰酸酯 (`pmdi`)

纳入条件：实际匹配异氰酸酯配方及化验；不是通用泡沫化学组成.

- 选定流：聚合二苯基甲烷二异氰酸酯
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 环戊烷发泡剂 (`cyclopentane`)

纳入条件：实际自产发泡剂配方；其他发泡剂单独增加.

- 选定流：环戊烷发泡剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 交流电 (`polymer_electricity`)

纳入条件：合格自产模塑/发泡供电.

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_utility。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：

#### 输出

##### 废物流

###### 报废丙烯腈-丁二烯-苯乙烯模塑件 (`abs_reject`)

纳入条件：实际对外报废；内部再生料成对计一次.

- 选定流：报废丙烯腈-丁二烯-苯乙烯模塑件
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 报废固化聚氨酯泡沫 (`pu_reject`)

纳入条件：实际固化泡沫废物处理接口.

- 选定流：报废固化聚氨酯泡沫
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

##### 基本流

###### 向空气排放的环戊烷 (`cyclopentane_air`)

纳入条件：捕集/控制及泡沫保留库存后实际测量物种；残差不自动归入空气.

- 选定流：向空气排放的环戊烷
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emissions。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：

### 过程：感应线圈及控制组件 (`electronics`)

#### 输入

##### 产品流

###### 漆包铜绕组线 (`enamelled_copper`)

纳入条件：自产感应绕组；匹配漆层化学组成与导体牌号.

UUID仅确认基本流身份；实际供应过程、组成、牌号、地域及接口仍须匹配。空气流为未指定空气介质；取得实际释放环境后须复核介质。

明确匹配实际铜导体和漆包绝缘；通用电磁线身份也覆盖铝导体，不能据此证明铜含量。

- 选定流：电磁线 `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：ti-induction-2013

###### 锰锌铁氧体线圈背衬 (`ferrite_core`)

纳入条件：实际匹配铁氧体设计；不假定通用化学组成.

- 选定流：锰锌铁氧体线圈背衬
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### FR-4覆铜印刷电路板 (`bare_pcb`)

纳入条件：自行组装电路板；购买完整电路板时不计入.

- 选定流：FR-4覆铜印刷电路板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 封装绝缘栅双极晶体管 (`igbt`)

纳入条件：实际感应转换器器件；替代器件逐项描述.

- 选定流：封装绝缘栅双极晶体管
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：ti-induction-2013

###### 锡银铜焊料合金 (`solder`)

纳入条件：实际计量组装焊料牌号.

- 选定流：锡银铜焊料合金
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 交流电 (`electronics_electricity`)

纳入条件：合格中国中压组装供电.

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_utility。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：

#### 输出

##### 废物流

###### 报废装配感应控制板 (`pcb_reject`)

纳入条件：实际自产电路板报废后送电子废物处理.

仅在中国厂内装配印制线路板报废边界相符时采用；不得替代裸板、整机或已处理废物。

- 选定流：废弃装配印制线路板 `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

### 过程：按配置组装电器 (`assembly`)

#### 输入

##### 产品流

###### 完整管式浸入加热模块 (`bought_heater`)

纳入条件：购买完整模块；不另外叠加其内含管/丝/填料.

- 选定流：完整管式浸入加热模块
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：stiebel-instantaneous

###### 完整陶瓷PTC加热模块 (`bought_ptc`)

纳入条件：购买匹配PTC模块，不叠加陶瓷生产清单.

- 选定流：完整陶瓷PTC加热模块
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：tdk-ptc-2026

###### 完整感应线圈及功率转换模块 (`bought_induction`)

纳入条件：购买完整指定模块；不重复计入绕组/电路板/器件.

- 选定流：完整感应线圈及功率转换模块
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：ti-induction-2013

###### 完整搪瓷钢水容器 (`bought_vessel`)

纳入条件：购买容器；不重复计入钢/搪瓷上游.

- 选定流：完整搪瓷钢水容器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：stiebel-storage-hybrid

###### 玻璃陶瓷灶面板 (`glass_ceramic`)

纳入条件：实际感应/辐射烹饪面板.

- 选定流：玻璃陶瓷灶面板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 钢化烤箱门玻璃 (`tempered_glass`)

纳入条件：实际烤箱/烧烤器外壳.

- 选定流：钢化烤箱门玻璃
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 完整粘结磁铁矿蓄热芯体 (`storage_cell`)

纳入条件：实际蓄热空间加热器；匹配供应商磁铁矿及粘结剂组成.

- 选定流：完整粘结磁铁矿蓄热芯体
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：dimplex-heating-2026

###### 矿物棉保温板 (`mineral_insulation`)

纳入条件：实际保温板化学组成及贴面.

- 选定流：矿物棉保温板
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 完整硬质聚氨酯保温嵌件 (`pu_foam`)

纳入条件：购买成品嵌件；若现场发泡，须拆分实际多元醇/异氰酸酯/发泡剂配方.

- 选定流：完整硬质聚氨酯保温嵌件
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：stiebel-storage-hybrid

###### 镁牺牲阳极 (`magnesium_anode`)

纳入条件：实际储水容器镁牌号；其他阳极设计单独限定.

- 选定流：镁牺牲阳极
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 矿物传热油 (`radiator_oil`)

纳入条件：实际充油散热器工厂充填，不适用于无油或后续客户服务.

- 选定流：矿物传热油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：dimplex-heating-2026

###### 完整电风扇电机 (`fan_motor`)

纳入条件：实际风扇辅助加热器/烤箱；不叠加电机内含铜/钢.

- 选定流：完整电风扇电机
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：dimplex-heating-2026

###### 完整电器温控器 (`thermostat`)

纳入条件：实际配置温度控制.

- 选定流：完整电器温控器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 完整铜制电器线束 (`wiring_harness`)

纳入条件：匹配购买线束，其绝缘仅计入一次.

- 选定流：完整铜制电器线束
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 完整丙烯腈-丁二烯-苯乙烯外壳 (`abs_housing`)

纳入条件：实际购买模塑ABS壳体；自产模塑须分别列出实际树脂/色料/公用工程/废物.

- 选定流：完整丙烯腈-丁二烯-苯乙烯外壳
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 交流电 (`assembly_electricity`)

纳入条件：合格中国中压组装供电.

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_utility。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：

### 过程：工厂验收及返工 (`test`)

#### 输入

##### 产品流

###### 交流电 (`test_electricity`)

纳入条件：合格工厂安全/功能测试供电，含报废品复测.

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_utility。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：

###### 工厂压力测试水 (`test_water`)

纳入条件：实际液体回路压力/泄漏/功能测试.

UUID仅确认基本流身份；实际供应过程、组成、牌号、地域及接口仍须匹配。空气流为未指定空气介质；取得实际释放环境后须复核介质。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：

#### 输出

##### 产品流

###### 瞬时电热器或存储式电热水器及浸入式水加热器，空间电热装置及土壤电热装置，烤箱，蒸煮用具、炊事电炉、沸腾电灶、烤架及烤炉 (`finished_appliance`)

纳入条件：一种已验收的指定配置；不是类别平均型号.

- 选定流：瞬时电热器或存储式电热水器及浸入式水加热器，空间电热装置及土壤电热装置，烤箱，蒸煮用具、炊事电炉、沸腾电灶、烤架及烤炉 `cfcc8dd6-19dd-4174-95d3-7cccd44431c3`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`identity_reference`
- 采集协议：`cp_mass`
- 来源：

##### 废物流

###### 排放工厂压力测试水 (`test_discharge`)

纳入条件：实际对外排水；内循环回水不是另一购买投入.

- 选定流：排放工厂压力测试水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：

##### 基本流

###### 向空气排放的水蒸气 (`water_vapour`)

纳入条件：通过含库存/水分/反应证据的水衡算确定实际测试蒸发.

UUID仅确认基本流身份；实际供应过程、组成、牌号、地域及接口仍须匹配。空气流为未指定空气介质；取得实际释放环境后须复核介质。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：

### 过程：包装及工厂出货 (`dispatch`)

#### 输入

##### 产品流

###### 瓦楞纸箱 (`corrugated_board`)

纳入条件：实际出货纸箱.

UUID仅确认基本流身份；实际供应过程、组成、牌号、地域及接口仍须匹配。空气流为未指定空气介质；取得实际释放环境后须复核介质。

仅在C/E/F型多层瓦楞纸板、纤维至少80%且含再生材料时采用；实际再生比例、牌号及生产商仍须实测供应商记录。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 低密度聚乙烯包装薄膜 (`ldpe_film`)

纳入条件：实际薄膜；不计入电器净质量.

UUID仅确认基本流身份；实际供应过程、组成、牌号、地域及接口仍须匹配。空气流为未指定空气介质；取得实际释放环境后须复核介质。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 膨胀聚苯乙烯保护垫 (`eps_pad`)

纳入条件：实际保护垫；替代保护材料单独识别.

- 选定流：膨胀聚苯乙烯保护垫
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_exchange。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_exchange`
- 来源：

###### 公路货运服务 (`inbound_transport`)

纳入条件：实际供应商至工厂运输段及货车服务.

- 选定流：公路货运服务
- 流属性/单位：运输工作量 / t·km
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_transport。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`
- 来源：

### 过程：剩余共享工厂服务 (`services`)

#### 输入

##### 产品流

###### 交流电 (`residual_electricity`)

纳入条件：仅未分配的合格购电剩余量，不是全场总表.

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_utility。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utility`
- 来源：

###### 购买热水热量 (`purchased_heat`)

纳入条件：实际交付热接口；独立供回计量或认证净表.

UUID仅确认基本流身份；实际供应过程、组成、牌号、地域及接口仍须匹配。空气流为未指定空气介质；取得实际释放环境后须复核介质。

检索到的清洗消毒/生活热水供热流及高位热值基准未确立本工厂购热接口，不采用其UUID或属性系数。

- 选定流：蒸汽或热水供热
- 流属性/单位：能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_heat。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_heat`
- 来源：

###### 供工厂燃烧器的天然气 (`natural_gas`)

纳入条件：实际场内炉/锅炉燃料，不是用户使用或购热上游.

- 选定流：供工厂燃烧器的天然气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fuel。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fuel`
- 来源：

#### 输出

##### 基本流

###### 向空气排放的化石二氧化碳 (`fossil_co2`)

纳入条件：实际场内燃烧，考虑碳及不完全燃烧物种.

UUID仅确认基本流身份；实际供应过程、组成、牌号、地域及接口仍须匹配。空气流为未指定空气介质；取得实际释放环境后须复核介质。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emissions。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：

###### 向空气排放的一氧化碳 (`carbon_monoxide`)

纳入条件：物种特定烟囱/逸散测量或经审查技术证据.

UUID仅确认基本流身份；实际供应过程、组成、牌号、地域及接口仍须匹配。空气流为未指定空气介质；取得实际释放环境后须复核介质。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emissions。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：

###### 向空气排放的二氧化氮 (`nitrogen_dioxide`)

纳入条件：仅实际NO2质量；以NO2当量报告的总NOx不是此交换.

- 选定流：向空气排放的二氧化氮
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emissions。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：

###### 向空气排放的一氧化氮 (`nitric_oxide`)

纳入条件：声明控制后的实际NO物种质量.

- 选定流：向空气排放的一氧化氮
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emissions。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_direct | 工厂输出 | 先分离配置特定生产线及仪表。剩余共用负荷采用测试占用时间或机器周期能源等实测因果驱动量分配；记录驱动量和期间。不得仅按数量平均不同装置配置。 |  |
| allocation_reject | 报废及返工 | 合格产品生产承担可归属报废/返工/测试负担。废料在实际接口作为废物或有证据共产品，不是负原生金属或自动避免负担抵扣。如有真实可售共产品，声明分配方法。 |  |

## 8. 前景数据采集、计算与质量规则

对一种配置及一个核对期间，Q为每项可归属交换总量，含报废生产及返工；N为验收完整台数；验收校准净质量总量为逐台质量之和。M为该和除以N；q_item = Q/N，q_ref为Q除以同一验收总质量。报废品、测试水及运输包装不进入该分母。不提供设备质量、收率、寿命或强度数值默认值。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | test | 参考输出 | 前景记录 | 型号；配置；序列号；验收净质量 M；验收台数 N；校准；验收日期 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每批及仪表间隔 | 同一完整核对生产期间 | 实际场址及一种配置 | 每台验收净质量 | 校准、来源记录、取样及不确定度 |
| cp_exchange | all | 物理交换 | 前景记录 | 批次；供应商；BOM行；牌号；配方；交付状态；毛/净质量；自身化验；水分；库存；报废量；退回；上游边界 | 核对校准秤、发票/库存移动及完整供应商BOM；每项物理材料流按自身基准取样。每项实际未列原子投入/输出单独记录。 | kg | 每批及仪表间隔 | 同一完整核对生产期间 | 实际场址及一种配置 | 可归属交换量 / 验收机器数量 | 校准、来源记录、取样及不确定度 |
| cp_utility | all | 电力 | 前景记录 | 场址购入；发电；输出；储能变化；每项过程/测试仪表；仪表单位；校准；期间；电压；供应商；因果驱动量 | 读取同步校准场址总表及分表；核对已分配负荷，仅分配未指派剩余量。依期间、单位及组合不确定度调查负剩余量；不得截为零。 | MJ | 每批及仪表间隔 | 同一完整核对生产期间 | 实际场址及一种配置 | 可归属电量 / 验收机器数量 | 校准、来源记录、取样及不确定度 |
| cp_water | all | 水流 | 前景记录 | 各体积；自身温度及密度；各水分；期初/期末库存；成对内回流；反应水；蒸发；排水；各流化验 | 用校准仪表/秤及各流特定取样计量全部适用水投入及出口；水衡算包含湿材料、反应及库存。内部测试循环为一对转移，不是重复购买。 | kg | 每批及仪表间隔 | 同一完整核对生产期间 | 实际场址及一种配置 | 可归属水交换量 / 验收机器数量 | 校准、来源记录、取样及不确定度 |
| cp_solvent | fabrication | 丙酮 | 前景记录 | 投入纯度；库存；产品保留；回收溶剂；捕集介质质量及自身载量；实际销毁；废水溶剂；烟囱/逸散物种 | 按每项流自身基准计量丙酮。碳捕集不等于销毁；回收和保留液体/污泥属于非空气去向。控制后按丙酮自身浓度×与其同步匹配的干/湿气流量×取样期间计量烟囱排放，另以独立测量或审查方法计量逸散；气流基准、控制出口、单位、校准和不确定度逐项记录。不得将未解释质量残差标为空气排放。 | kg | 每批及仪表间隔 | 同一完整核对生产期间 | 实际场址及一种配置 | 可归属溶剂交换量 / 验收机器数量 | 校准、来源记录、取样及不确定度 |
| cp_heat | services | 购热 | 前景记录 | 供质量；供比焓；回质量；回比焓；共同比焓基准；总/净表状态；仪表及分配证据 | 独立计量供回：各用自身kg乘自身MJ/kg，并使用共同基准。总购入热减实际回热一次；认证净供热量不得再次扣回流。 | MJ | 每批及仪表间隔 | 同一完整核对生产期间 | 实际场址及一种配置 | 可归属热量 / 验收机器数量 | 校准、来源记录、取样及不确定度 |
| cp_fuel | services | 天然气 | 前景记录 | 燃料质量或计量体积；自身压力/温度/密度；组成；热值基准；燃烧器；控制；库存 | 记录实际场内燃烧及燃料供应商；购热上游燃料属于其供应商数据集。各燃料分别保留。 | kg | 每批及仪表间隔 | 同一完整核对生产期间 | 实际场址及一种配置 | 可归属燃料 / 验收机器数量 | 校准、来源记录、取样及不确定度 |
| cp_emissions | all | 物种排放 | 前景记录 | 物种；出口/环境介质；浓度；干/湿气流量；期间；采样；控制；氧/参考校正；物种质量与当量报告；不确定度 | 采用同步物种特定实测浓度及气流或独立审查的路线特定证据。区分NO、NO2及NOx当量；碳衡算关闭碳但不推定CO/NOx。 | kg | 每批及仪表间隔 | 同一完整核对生产期间 | 实际场址及一种配置 | 可归属物种排放 / 验收机器数量 | 校准、来源记录、取样及不确定度 |
| cp_transport | dispatch | 货运 | 前景记录 | 净运输载荷；各距离；货车；实际运输段；载重率证据；重复供应商运输边界 | 采用实际运输单及路线距离，载荷质量乘距离；避免供应商已包含运输段。包装运输质量区别于净参考分母。 | t·km | 每批及仪表间隔 | 同一完整核对生产期间 | 实际场址及一种配置 | 可归属货运 / 验收机器数量 | 校准、来源记录、取样及不确定度 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_period_normalization | 原始期间采集及全部适用交换 | 对同一配置及核对期间采集Qattr（每项可归属交换，含报废/返工/测试负担）、Naccepted（验收完整台数）及Dnet（校准验收净质量之和）。M = Dnet/Naccepted；q_item = Qattr/Naccepted；q_ref = Qattr/Dnet。Dnet排除报废品、包装及测试水质量。保留Qattr原始分子单位及准确转换；不得跨配置平均。 | 同步仪表/库存、校准序列质量及验收记录 |
| dq_configuration | 全部清单 | 保留图纸/BOM/测试/配置关联、完整自产/外购台账及实际牌号/供应商。不得跨配置分母。 | 验收及供应商记录 |
| dq_uncertainty | 物理衡算及公用工程剩余量 | 使用实际组合测量、取样及分配不确定度调查闭合。不设通用容差、假定收率或未测损失向空气转移。存在时产品、废料、炉渣、污泥、废水及排放各自匹配化验；考虑反应/库存并抵消成对内部转移。 | 衡算工作簿及不确定度预算 |
| dq_gaps | 身份及范围缺口 | 具体化学配方、牌号、外购模块供应商、废物及基本流UUID在直读限定前未解决。不采用经验质量、因子或范围。条件性不存在须实际结构证据；未知保留未知。 | 限定数据及缺口披露 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | 参考身份 | 确认完整产品功能及实际结构；解决不确定工业/混合主要功能归类。通用UUID不能证明每种变体。 | unsd-cpc3-2025; stiebel-storage-hybrid |
| validate_mass | 参考输出 | 核实一种配置/期间校准验收净质量及数量、输出1千克及全部适用交换转换；分母排除包装/报废品，但计入其可归属负担。 |  |
| validate_routes | 自产/外购及条件 | 追溯全部实际模块/牌号/配方及缺失原子卡片。完整外购模块及内含材料/过程负担仅计一次；其他实际电结构需审查及采集，不得静默排除。 | ti-induction-2013; tdk-ptc-2026 |
| validate_balances | 物理材料/水/溶剂 | 核对各项自身化验/密度/水分/反应/库存及成对回流。包含保留/回收/捕集/销毁溶剂及全部非空气去向；捕集不等于销毁，残差不等于排放。按实测组合不确定度调查不一致。 |  |
| validate_utilities | 全部过程及共享仪表 | 核对同场址期间购入、发电、输出、储能及过程/测试负荷。仅剩余服务不能再次叠加全场总量。须记录热总/净状态及各自独立供回比焓。 |  |
| validate_species | 直接排放 | 匹配物种/环境介质及控制；NOx当量不能冒充NO2质量。CO及NOx须燃料碳之外独立物种证据。缺少身份、供应商或数量则不能形成完整具体数据包。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景设备生产数据包；process和lifecyclemodel是下游投影 |
| downstream_use | 限定审查后作为secondary_dataset；background_dataset |
| allowed_use | 同一指定装置/配置、生产路线、供应商接口、场址及期间 |
| excluded_use | 通用使用阶段热/食品服务或寿命比较；无依据跨路线替代 |
| required_metadata | 全部参考限定信息；边界/自产外购台账；测试/报废基准；上游/废物供应商；分配；测量记录 |
| required_quality_disclosure | 候选状态；未解决分类、UUID、牌号/配方/供应商及经验范围；条件性不适用证据；组合不确定度 |
| update_trigger | 设计、机制、供应商牌号/配方、场址、仪表接口、测试要求或类别证据改变 |

## 11. 数据源

| 来源编号 | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD, Central Product Classification Version 3.0 Explanatory Notes, 30 June 2025, printed pp. 239–240. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 类别标题与家用父级；相邻非电和太阳能类别；44817无详细叶级注释。 |
| stiebel-instantaneous | handbook | STIEBEL ELTRON, What heating systems are used in instantaneous water heaters?, undated publisher page, inspected 2026-10-02. https://www.stiebel-eltron.co.uk/en/service/faq/what-heating-systems-are-used-in-instantaneous-water-heaters.html | 裸线绝缘块与电绝缘管式加热器；仅定性结构。 |
| stiebel-storage-hybrid | handbook | STIEBEL ELTRON, SB-E Single Coil DHW Tanks with Integral Backup Heating Element, undated publisher page, inspected 2026-10-02. https://www.stiebel-eltron-usa.com/products/sb-e-single-coil-domestic-hot-water-tanks-ingetral-backup-element-solar-geothermal-or-hydronic-applications | 钢容器、搪瓷、聚氨酯保温与阳极实例；间接/太阳能辅助加热反例需审查主要功能。 |
| dimplex-heating-2026 | handbook | Dimplex and Xpelair, Heating and Ventilation 2026, cover 2026 with cover code DTC0725 and final back-cover code DTC0126; pp. 14–15, 30–33, 38–45. https://www.dimplex.co.uk/sites/g/files/emiian551/files/2026-02/Dimplex%20Xpelair%20Trade%20Catalogue%202026_1.pdf | 蓄热、红外、风扇及充油/无油结构；热泵反例；不移植额定值或强度。 |
| nexans-soil-heating | handbook | Nexans, Soil heating, undated publisher page, inspected 2026-10-02. https://www.nexans.no/en/segments/building/heating-cables/frost-protection/soil-heating.html | 单导体电缆与电缆元件方案；交付装置区别于挖土和已安装场地。 |
| ti-induction-2013 | handbook | Texas Instruments, C2000 Dual VF Resonant Induction Cookers, SPRABT2, April 2013, pp. 1, 3–6. https://www.ti.com/lit/an/sprabt2/sprabt2.pdf | 感应线圈/功率转换器结构，作为仅电阻烹饪的反例。 |
| tdk-ptc-2026 | handbook | TDK Electronics, PTC Thermistors — General technical information, April 2026, pp. 2, 4. https://www.tdk-electronics.tdk.com/download/539366/728d0d379187d1dfa0831555b8c93202/pdf-general-technical-information.pdf | 条件性陶瓷PTC制造区别于金属绕丝；供应商配方不是类别默认值。 |
| rangemaster-quick-guide | handbook | Rangemaster Quick Guide, undated original, pp. 2–3. https://www.rangemaster.co.uk/sites/default/files/2021-02/Rangemaster%20Quick%20Guide.pdf | 混合燃料型号中的钢材冲压/切割/清洗/抛光/搪瓷及测试实例。 |
