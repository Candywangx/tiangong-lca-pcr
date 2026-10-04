---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bakery-ovens-non-electric-machinery-for-making-hot-drinks-or-for-cooking-or-heating-foo-35bcfcbc
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非电热面包烘烤炉及非家用饮料、烹饪或食品加热机械制造

## 1. 范围与适用性

本 PCR 为完整非电热面包炉及非家用热饮、烹饪或食品加热机械构建制造阶段前景数据包。非电热限定适用于面包炉，不排除电热饮料锅炉或商用电热烹饪机。选用规则前识别实际主要功能及加热路线。辅助风机与电子控制器不使燃料加热面包炉变为电热面包炉。工业电热面包炉、实验室及其他工业炉属于另一边界；家电、单独交付燃烧器/零件、农产品干燥机、磨粉及其他非热食品加工机排除。多功能产品在类别不明确时须记录主要用途并审查分类。独立自动售货机排除；带可选结算接口的饮料机不自动成为完整售货机参考产品，须单独审查其实际交付功能及分类。

厂商示例证明不同配置，不是共同物料清单或配方。规则遵循实际加工、表面处理、组装、工厂试验与出口交付。后续客户使用的食品、饮料、能源及清洗，以及安装和终端处置须另建下游模型；不规定寿命、食品产率、默认功率或通用机器质量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bakery-ovens-non-electric-machinery-for-making-hot-drinks-or-for-cooking-or-heating-foo-35bcfcbc |
| classification_refs | CPC 3.0 44515 |
| covered_products | 非电热面包炉；非家用热饮机、商用烹饪及食品加热机，后者包含实际电热配置 |
| excluded_products | 工业电热面包炉及其他工业/实验室炉；家用机器；单独零件/燃烧器；无关食品加工及农产品干燥机 |
| representative_product | 燃气/燃油转架炉、电热咖啡机或陶瓷加热商用烹饪机作为不同配置，均不代表全类别 |
| production_route | 实际自制/外购接收 → 有条件金属加工/表面处理 → 配置热工/电气组装 → 工厂验收/返工 → 净质量交付/包装 |
| market_state | 工厂出口的新验收完整机器，配置可追溯，运输包装分开 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供声明配置的验收完整非家用食品/饮料热工机器 |
| How much | 1 kg |
| How well | 达到批准设计、食品接触/安全要求及实际工厂验收；质量为生产参考，不是等效烹饪服务 |
| How long or cycle | 仅制造至工厂出口，无假设服役寿命或使用周期 |
| reference_flow_link | final_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 面包烘烤炉，非电动，制作热饮或烹饪或加热食品的机器，家用型机器除外 `818fc255-fcf4-4702-818b-aa7b29550764` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造商；型号及序列号/配置；非家用设计用途；面包炉或饮料/烹饪/加热功能；主加热技术及实际燃料；容量、食品接触与压力等级；钢材及弹性体牌号；自制/外购组件；实际安装的燃烧器、换热器、锅炉、加热器、泵、风机、研磨机及控制器；包含的冷却等附件；初始流体充注；交付净质量 M 与验收状态；工厂场址、期间及供应地域；工厂试验工况及耗材 |

类别流为工厂制造成品，以质量为基准属性。其宽泛身份不提供特定物料清单、牌号或地域，须保留准确配置及供应边界。中文显示保留官方流名；本规则独立区分两条加热分支。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| net_scope | final_product | Mass | kg | 包含交付内置附件及初始流体充注，排除运输包装。不使用另一配置的册中空重，不混用干/毛质量。 |
| composition | chemical and metal rows | Mass | kg | 分别记录配方质量和实测有效/所含元素分数；化验全部平衡项并测量湿/干基准。 |
| utilities | energy and water | Energy; Volume | kWh; MJ; m3 | 保留实际基准属性及校准原始单位。kWh × 3.6 = MJ；燃料采用实际低位热值，水密度为来源特定。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收出口实际认证板/管及外购成品组件，识别供应加工及运输 |
| starting_condition_role | foreground_input |
| product_classification_scope | 语义完整机械边界；CPC 44515 仅为映射背景 |
| recursive_input_rule | 购入同类模块一次计其供应数据集，仅计本地增量工序；不递归重建已内含物料/能源 |
| upstream_dataset_requirement | 匹配实际牌号/状态、部件规范、供应地域/年份及处理去向；披露运输覆盖和缺失供应负荷 |
| disclosure | 制造商；型号及序列号/配置；非家用设计用途；面包炉或饮料/烹饪/加热功能；主加热技术及实际燃料；容量、食品接触与压力等级；钢材及弹性体牌号；自制/外购组件；实际安装的燃烧器、换热器、锅炉、加热器、泵、风机、研磨机及控制器；包含的冷却等附件；初始流体充注；交付净质量 M 与验收状态；工厂场址、期间及供应地域；工厂试验工况及耗材 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_manufacture | all processes | 纳入实际接收/运输、加工、表面处理、组装、公用工程、控制、工厂试验、不合格/返工、治理及包装。排除客户运行、客户食品及无关模块。 | `un-cpc3-2025` |
| boundary_make_buy | assemblies | 逐实际组件维持自制/外购矩阵：起始状态、供应工序、本地步骤及上游覆盖。外购完整燃烧器/锅炉/电机/制冷模块与其内含原材料不可重复计。委外表面处理一次计供应过程，不再计本地化学品。 | `miwe-rack-oven`, `franke-a800`, `rational-ivario` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | 炉腔、锅体、机架及流体管路制造 | conditional | 仅纳入实际厂内工序：对认证板、管及接头切割、折弯、机加工与连接；外购成品容器跳过供应商已完成工序。识别牌号、连接程序、边角料及食品接触表面。 | foreground_production | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| surface_finish | 有条件清洗、钝化及保护表面 | conditional | 仅纳入实际脱脂、焊缝清理、钝化或外表面涂层。记录槽液身份/浓度、冲洗及固化；无通用酸、溶剂或涂层配方。 | foreground_production | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| thermal_assembly | 配置对应的热工与流体系统组装 | required | 仅组装选定产品路线：非电热面包炉的燃气/燃油燃烧器及换热器；饮料/烹饪机实际热水/蒸汽锅炉、电阻/陶瓷加热器或外供蒸汽接口。保留实际安装的泵、阀及安全装置。 | foreground_production | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| electromechanical | 驱动、控制及配置制冷系统组装 | required | 安装实际电线、控制器、传感器及电机/风机/研磨/倾锅机构。冷却单元为可选项：仅作为产品组成时定义交付模块、压缩机及制冷剂。 | foreground_production | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| factory_acceptance | 工厂泄漏、安全与功能验收 | required | 纳入实际压力/泄漏、电气安全、加热、循环及控制试验，以及复试和清洗。试验限值来自批准设计及适用规范；试验不等于客户终身运行。 | foreground_production | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| dispatch | 验收交付及运输包装 | required | 工厂出口交付验收完整机器，声明附件及已安装初始流体。包装单独称量，保留净质量基准。 | foreground_production | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| shared_services | 共享工厂公用工程与污染控制 | required | 在选定制造和工厂试验之间一次核对分配公用工程、治理及废物处理，单独记录外购与自产能源。 | foreground_production | 每 1 kg 参考流；采集基准为每台验收成品机器 |

卡片为具体有条件交换，不是必需共同配方。若记录配置采用其他钢级、燃料、涂层化学品、制冷剂或包装材料，增设其原子卡片及协议，不使用集合标签或继承不相容 UUID。以物料清单/工序证据将不发生路线记为 not_applicable；数量未知仍待解决。配对内部组件转移为核对记录，不是新增外部原材料。

### 过程：炉腔、锅体、机架及流体管路制造 (`fabrication`)

仅纳入实际厂内工序：对认证板、管及接头切割、折弯、机加工与连接；外购成品容器跳过供应商已完成工序。识别牌号、连接程序、边角料及食品接触表面。

#### 输入

##### 产品流

###### EN 1.4301 不锈钢板 (`sheet_14301`)

仅在材质证明识别 EN 1.4301 且购入表面/轧制状态相符时适用；其他牌号另设原子卡片。不得由册中“不锈钢”推断该牌号。

- 选定流: EN 1.4301 不锈钢板
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_sheet_14301。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sheet_14301`
- 来源: `epa-fabricated-metal`

###### EN 1.4404 不锈钢管 (`tube_14404`)

仅在实际食品接触管认证使用该牌号时适用；记录壁厚、长度及供应成形状态；其他牌号/形状另设卡片。

- 选定流: EN 1.4404 不锈钢管
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_tube_14404。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_tube_14404`
- 来源: `epa-fabricated-metal`

###### ER308L 不锈钢焊丝 (`weld_wire`)

仅用于实际合格连接程序指定 ER308L 的情况。不用于不相容合金接头；其他焊材单独交换。

- 选定流: ER308L 不锈钢焊丝
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_weld_wire。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_weld_wire`
- 来源: `epa-fabricated-metal`

###### 焊接保护气氩气 (`argon`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 焊接保护气氩气
- 流属性 / 单位: Volume / m3
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_argon。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_argon`
- 来源: `epa-fabricated-metal`

###### 矿物油切削润滑剂 (`cutting_oil`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 矿物油切削润滑剂
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_cutting_oil。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cutting_oil`
- 来源: `epa-fabricated-metal`

###### 外购工厂电力 (`fabrication_electricity`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 外购工厂电力
- 流属性 / 单位: Energy / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication_electricity。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_fabrication_electricity`
- 来源: `epa-fabricated-metal`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 不锈钢制造边角料 (`stainless_scrap`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 不锈钢制造边角料
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_stainless_scrap。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_stainless_scrap`
- 来源: `epa-fabricated-metal`

###### 废矿物切削油 (`spent_cutting_oil`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 废矿物切削油
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_spent_cutting_oil。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_cutting_oil`
- 来源: `epa-fabricated-metal`

##### 基本流

### 过程：有条件清洗、钝化及保护表面 (`surface_finish`)

仅纳入实际脱脂、焊缝清理、钝化或外表面涂层。记录槽液身份/浓度、冲洗及固化；无通用酸、溶剂或涂层配方。

#### 输入

##### 产品流

###### 氢氧化钠脱脂液 (`naoh`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 氢氧化钠脱脂液
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_naoh。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_naoh`
- 来源: `epa-fabricated-metal`

###### 柠檬酸钝化液 (`citric`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 柠檬酸钝化液
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_citric。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_citric`
- 来源: `epa-fabricated-metal`

###### 表面清洁溶剂异丙醇 (`ipa`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 表面清洁溶剂异丙醇
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_ipa。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_ipa`
- 来源: `epa-fabricated-metal`

###### 聚酯粉末涂料 (`powder_coat`)

仅实际指定外涂层；不假定食品接触表面涂装。记录化学组成、过喷回收及固化工况。

- 选定流: 聚酯粉末涂料
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_powder_coat。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_powder_coat`
- 来源: `epa-fabricated-metal`

###### 外购工厂电力 (`surface_finish_electricity`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 外购工厂电力
- 流属性 / 单位: Energy / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish_electricity。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_surface_finish_electricity`
- 来源: `epa-fabricated-metal`

###### 处理后自来水 (`surface_finish_water`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 处理后自来水
- 流属性 / 单位: Volume / m3
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish_water。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_surface_finish_water`
- 来源: `epa-fabricated-metal`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废氢氧化钠清洗液 (`spent_cleaner`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 废氢氧化钠清洗液
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_spent_cleaner。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_cleaner`
- 来源: `epa-fabricated-metal`

###### 废柠檬酸钝化液 (`spent_passivation`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 废柠檬酸钝化液
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_spent_passivation。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_passivation`
- 来源: `epa-fabricated-metal`

###### 外送处理的工艺废水 (`surface_finish_wastewater`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 外送处理的工艺废水
- 流属性 / 单位: Volume / m3
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish_wastewater。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_surface_finish_wastewater`
- 来源: `epa-fabricated-metal`

##### 基本流

###### 异丙醇，排入空气 (`ipa_air`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 异丙醇，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_ipa_air。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_ipa_air`
- 来源: `epa-fabricated-metal`

### 过程：配置对应的热工与流体系统组装 (`thermal_assembly`)

仅组装选定产品路线：非电热面包炉的燃气/燃油燃烧器及换热器；饮料/烹饪机实际热水/蒸汽锅炉、电阻/陶瓷加热器或外供蒸汽接口。保留实际安装的泵、阀及安全装置。

#### 输入

##### 产品流

###### 外购完整不锈钢面包炉炉腔 (`purchased_chamber`)

仅用于实际含该具名组件/材料的配置。供应认证物料清单决定规范。外购组件一次包含其内含物料及供应制造；厂内自制时改用实际原材料行和制造工序，二者不得重复。

- 选定流: 外购完整不锈钢面包炉炉腔
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_purchased_chamber。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_chamber`
- 来源: `miwe-rack-oven`

###### 外购完整不锈钢商用烹饪锅体 (`purchased_pan`)

仅用于实际含该具名组件/材料的配置。供应认证物料清单决定规范。外购组件一次包含其内含物料及供应制造；厂内自制时改用实际原材料行和制造工序，二者不得重复。

- 选定流: 外购完整不锈钢商用烹饪锅体
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_purchased_pan。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_pan`
- 来源: `rational-ivario`

###### 外购完整机器支撑框架 (`purchased_frame`)

仅用于实际含该具名组件/材料的配置。供应认证物料清单决定规范。外购组件一次包含其内含物料及供应制造；厂内自制时改用实际原材料行和制造工序，二者不得重复。

- 选定流: 外购完整机器支撑框架
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_purchased_frame。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_frame`
- 来源: `miwe-rack-oven`

###### 外购面包炉燃气燃烧器组件 (`burner`)

仅用于实际含该具名组件/材料的配置。供应认证物料清单决定规范。外购组件一次包含其内含物料及供应制造；厂内自制时改用实际原材料行和制造工序，二者不得重复。

- 选定流: 外购面包炉燃气燃烧器组件
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_burner。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_burner`
- 来源: `miwe-rack-oven`

###### 外购面包炉液体燃料燃烧器组件 (`oil_burner`)

仅用于实际含该具名组件/材料的配置。供应认证物料清单决定规范。外购组件一次包含其内含物料及供应制造；厂内自制时改用实际原材料行和制造工序，二者不得重复。

- 选定流: 外购面包炉液体燃料燃烧器组件
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_oil_burner。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_oil_burner`
- 来源: `miwe-rack-oven`

###### 外购不锈钢面包炉换热器 (`heat_exchanger`)

仅用于实际含该具名组件/材料的配置。供应认证物料清单决定规范。外购组件一次包含其内含物料及供应制造；厂内自制时改用实际原材料行和制造工序，二者不得重复。

- 选定流: 外购不锈钢面包炉换热器
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_heat_exchanger。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_heat_exchanger`
- 来源: `miwe-rack-oven`

###### 外购饮料机蒸汽锅炉组件 (`steam_boiler`)

仅用于实际含该具名组件/材料的配置。供应认证物料清单决定规范。外购组件一次包含其内含物料及供应制造；厂内自制时改用实际原材料行和制造工序，二者不得重复。

- 选定流: 外购饮料机蒸汽锅炉组件
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_steam_boiler。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steam_boiler`
- 来源: `franke-a800`

###### 外购饮料机热水锅炉组件 (`hotwater_boiler`)

仅用于实际含该具名组件/材料的配置。供应认证物料清单决定规范。外购组件一次包含其内含物料及供应制造；厂内自制时改用实际原材料行和制造工序，二者不得重复。

- 选定流: 外购饮料机热水锅炉组件
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_hotwater_boiler。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hotwater_boiler`
- 来源: `franke-a800`

###### 外购烹饪锅陶瓷加热元件 (`ceramic_heater`)

仅用于实际含该具名组件/材料的配置。供应认证物料清单决定规范。外购组件一次包含其内含物料及供应制造；厂内自制时改用实际原材料行和制造工序，二者不得重复。

- 选定流: 外购烹饪锅陶瓷加热元件
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_ceramic_heater。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_ceramic_heater`
- 来源: `rational-ivario`

###### 外购饮料锅炉电阻加热元件 (`resistance_heater`)

仅用于实际含该具名组件/材料的配置。供应认证物料清单决定规范。外购组件一次包含其内含物料及供应制造；厂内自制时改用实际原材料行和制造工序，二者不得重复。

- 选定流: 外购饮料锅炉电阻加热元件
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_resistance_heater。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_resistance_heater`
- 来源: `franke-a800`

###### 外购饮料机水泵组件 (`water_pump`)

仅用于实际含该具名组件/材料的配置。供应认证物料清单决定规范。外购组件一次包含其内含物料及供应制造；厂内自制时改用实际原材料行和制造工序，二者不得重复。

- 选定流: 外购饮料机水泵组件
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_water_pump。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water_pump`
- 来源: `franke-a800`

###### 外购蒸汽安全阀 (`steam_valve`)

仅用于实际含该具名组件/材料的配置。供应认证物料清单决定规范。外购组件一次包含其内含物料及供应制造；厂内自制时改用实际原材料行和制造工序，二者不得重复。

- 选定流: 外购蒸汽安全阀
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_steam_valve。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steam_valve`
- 来源: `franke-a800`

###### 外购面包炉隔热门玻璃 (`insulating_glass`)

仅用于实际含该具名组件/材料的配置。供应认证物料清单决定规范。外购组件一次包含其内含物料及供应制造；厂内自制时改用实际原材料行和制造工序，二者不得重复。

- 选定流: 外购面包炉隔热门玻璃
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_insulating_glass。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_insulating_glass`
- 来源: `miwe-rack-oven`

###### 硅橡胶门密封垫 (`seal`)

仅用于实际含该具名组件/材料的配置。供应认证物料清单决定规范。外购组件一次包含其内含物料及供应制造；厂内自制时改用实际原材料行和制造工序，二者不得重复。

- 选定流: 硅橡胶门密封垫
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_seal。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_seal`
- 来源: `miwe-rack-oven`

###### 矿物棉隔热材料 (`mineral_wool`)

仅用于实际含该具名组件/材料的配置。供应认证物料清单决定规范。外购组件一次包含其内含物料及供应制造；厂内自制时改用实际原材料行和制造工序，二者不得重复。

- 选定流: 矿物棉隔热材料
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mineral_wool。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mineral_wool`
- 来源: `miwe-rack-oven`

###### 外购工厂电力 (`thermal_assembly_electricity`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 外购工厂电力
- 流属性 / 单位: Energy / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_thermal_assembly_electricity。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_thermal_assembly_electricity`
- 来源: `miwe-rack-oven`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：驱动、控制及配置制冷系统组装 (`electromechanical`)

安装实际电线、控制器、传感器及电机/风机/研磨/倾锅机构。冷却单元为可选项：仅作为产品组成时定义交付模块、压缩机及制冷剂。

#### 输入

##### 产品流

###### 外购风机驱动电机 (`motor`)

仅实际安装配置；追踪部件规范、自制/外购及供应边界。外购电机/压缩机已包含内含金属和油，不再将内部组分作为新前景输入。

- 选定流: 外购风机驱动电机
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_motor。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_motor`
- 来源: `franke-a800`

###### 外购面包炉循环风机 (`fan`)

仅实际安装配置；追踪部件规范、自制/外购及供应边界。外购电机/压缩机已包含内含金属和油，不再将内部组分作为新前景输入。

- 选定流: 外购面包炉循环风机
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_fan。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_fan`
- 来源: `franke-a800`

###### 外购陶瓷磨盘咖啡研磨组件 (`grinder`)

仅实际安装配置；追踪部件规范、自制/外购及供应边界。外购电机/压缩机已包含内含金属和油，不再将内部组分作为新前景输入。

- 选定流: 外购陶瓷磨盘咖啡研磨组件
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_grinder。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_grinder`
- 来源: `franke-a800`

###### 外购机器控制板组件 (`controller`)

仅实际安装配置；追踪部件规范、自制/外购及供应边界。外购电机/压缩机已包含内含金属和油，不再将内部组分作为新前景输入。

- 选定流: 外购机器控制板组件
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_controller。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_controller`
- 来源: `franke-a800`

###### 外购温度传感器 (`sensor`)

仅实际安装配置；追踪部件规范、自制/外购及供应边界。外购电机/压缩机已包含内含金属和油，不再将内部组分作为新前景输入。

- 选定流: 外购温度传感器
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_sensor。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sensor`
- 来源: `franke-a800`

###### PVC 绝缘铜导体机器电线 (`wire`)

仅实际安装配置；追踪部件规范、自制/外购及供应边界。外购电机/压缩机已包含内含金属和油，不再将内部组分作为新前景输入。

- 选定流: PVC 绝缘铜导体机器电线
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wire。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wire`
- 来源: `franke-a800`

###### 外购密封制冷压缩机 (`compressor`)

仅实际安装配置；追踪部件规范、自制/外购及供应边界。外购电机/压缩机已包含内含金属和油，不再将内部组分作为新前景输入。

- 选定流: 外购密封制冷压缩机
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_compressor。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_compressor`
- 来源: `franke-a800`

###### 丙烷制冷剂 R290 (`r290`)

仅在铭牌和充注记录确认被纳入的冷却回路使用 R290 时适用；其他实际制冷剂须另设具名卡片。记录初始充注与工厂损失，不记录终身泄漏。厂内充注与预充注外购压缩机/模块分开。

- 选定流: 丙烷制冷剂 R290
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_r290。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_r290`
- 来源: `franke-a800`

###### 外购工厂电力 (`electromechanical_electricity`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 外购工厂电力
- 流属性 / 单位: Energy / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_electromechanical_electricity。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_electromechanical_electricity`
- 来源: `franke-a800`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 丙烷，排入空气 (`r290_air`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 丙烷，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_r290_air。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_r290_air`
- 来源: `franke-a800`

### 过程：工厂泄漏、安全与功能验收 (`factory_acceptance`)

纳入实际压力/泄漏、电气安全、加热、循环及控制试验，以及复试和清洗。试验限值来自批准设计及适用规范；试验不等于客户终身运行。

#### 输入

##### 产品流

###### 工厂燃烧器试验用天然气 (`test_naturalgas`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 工厂燃烧器试验用天然气
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_test_naturalgas。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_test_naturalgas`
- 来源: `rational-ivario`

###### 工厂燃烧器试验用馏分燃料油 (`test_fuel_oil`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 工厂燃烧器试验用馏分燃料油
- 流属性 / 单位: Net calorific value / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_test_fuel_oil。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_test_fuel_oil`
- 来源: `rational-ivario`

###### 工厂烹饪机试验用外购蒸汽 (`test_steam`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 工厂烹饪机试验用外购蒸汽
- 流属性 / 单位: Energy / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_test_steam。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_test_steam`
- 来源: `rational-ivario`

###### 工厂冲煮试验用烘焙咖啡豆 (`test_food`)

仅实际工厂验收消耗该具体试料时适用；其他试验食品配方逐原料另设卡片。不纳入未来客户食品产量。

- 选定流: 工厂冲煮试验用烘焙咖啡豆
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_test_food。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_test_food`
- 来源: `rational-ivario`

###### 外购工厂电力 (`factory_acceptance_electricity`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 外购工厂电力
- 流属性 / 单位: Energy / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_factory_acceptance_electricity。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_factory_acceptance_electricity`
- 来源: `rational-ivario`

###### 处理后自来水 (`factory_acceptance_water`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 处理后自来水
- 流属性 / 单位: Volume / m3
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_factory_acceptance_water。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_factory_acceptance_water`
- 来源: `rational-ivario`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工厂试验湿咖啡渣 (`coffee_residue`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 工厂试验湿咖啡渣
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_coffee_residue。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_coffee_residue`
- 来源: `rational-ivario`

###### 外送拆解的不合格食品加热机器 (`rejected_machine`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 外送拆解的不合格食品加热机器
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_rejected_machine。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_rejected_machine`
- 来源: `rational-ivario`

###### 外送处理的工艺废水 (`factory_acceptance_wastewater`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 外送处理的工艺废水
- 流属性 / 单位: Volume / m3
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_factory_acceptance_wastewater。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_factory_acceptance_wastewater`
- 来源: `rational-ivario`

##### 基本流

###### 化石二氧化碳，排入空气 (`co2`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 化石二氧化碳，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_co2。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co2`
- 来源: `rational-ivario`

###### 一氧化碳，排入空气 (`co`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 一氧化碳，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_co。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co`
- 来源: `rational-ivario`

###### 氮氧化物，以 NO2 计，排入空气 (`nox`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 氮氧化物，以 NO2 计，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_nox。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_nox`
- 来源: `rational-ivario`

### 过程：验收交付及运输包装 (`dispatch`)

工厂出口交付验收完整机器，声明附件及已安装初始流体。包装单独称量，保留净质量基准。

#### 输入

##### 产品流

###### 瓦楞纸板运输箱 (`carton`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 瓦楞纸板运输箱
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_carton。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_carton`
- 来源: `miwe-rack-oven`

###### 软木运输托盘 (`pallet`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 软木运输托盘
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_pallet。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pallet`
- 来源: `miwe-rack-oven`

###### 低密度聚乙烯运输膜 (`film`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 低密度聚乙烯运输膜
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_film。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_film`
- 来源: `miwe-rack-oven`

###### 外购工厂电力 (`dispatch_electricity`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 外购工厂电力
- 流属性 / 单位: Energy / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_dispatch_electricity。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_dispatch_electricity`
- 来源: `miwe-rack-oven`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 面包烘烤炉，非电动，制作热饮或烹饪或加热食品的机器，家用型机器除外 (`final_product`)

验收完整声明配置，包含内置初始充注及指定附件，排除全部运输包装。

- 选定流: 面包烘烤炉，非电动，制作热饮或烹饪或加热食品的机器，家用型机器除外 `818fc255-fcf4-4702-818b-aa7b29550764`
- 流属性 / 单位: Mass / kg
- 数量规则: 1 千克
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_final_product`
- 来源: `un-cpc3-2025`

##### 废物流

##### 基本流

### 过程：共享工厂公用工程与污染控制 (`shared_services`)

在选定制造和工厂试验之间一次核对分配公用工程、治理及废物处理，单独记录外购与自产能源。

#### 输入

##### 产品流

###### 外购工厂电力 (`shared_services_electricity`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 外购工厂电力
- 流属性 / 单位: Energy / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_shared_services_electricity。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_shared_services_electricity`
- 来源: `epa-fabricated-metal`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 含金属废水处理污泥 (`sludge`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 含金属废水处理污泥
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_sludge。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sludge`
- 来源: `epa-fabricated-metal`

##### 基本流

###### 小于 2.5 微米的颗粒物，排入空气 (`pm25`)

仅在实际物料清单或工序使用时适用；声明牌号、组成及接口。不发生交换记为 not_applicable，不将缺测当作零。

- 选定流: 小于 2.5 微米的颗粒物，排入空气
- 流属性 / 单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_pm25。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pm25`
- 来源: `epa-fabricated-metal`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_causal | shared manufacture | 优先细分；共享时以实测工况/负荷及匹配期间证明物理因果。不同炉循环、试验时间或冷却工况仅质量不足以分配。其他关系须说明并做敏感性，保留未分配总量，确保分配和为一。 | `ef-allocation-2021` |
| allocation_rejects | rework and residues | 保留全部可归属不合格品及复试负荷于验收机器生产。不合格数量不计 N。抵消内部转移；外送边角料/废物一次计实际处理。收入本身不确立联产品身份，不假定避免金属抵扣。 | `ef-allocation-2021` |

## 8. 前景数据采集、计算与质量规则

对同一型号/配置及报告期保留外部收料、期初/期末库存、不合格品及回收。由序列号交付记录取得正验收数量 N。核对与因果分配后才计算每台验收机器的可归属期间交换；不得在不保留不合格/返工负荷时直接将周转量除验收数。配置变化须拆分批次及分母。期间汇总保留同一配置每台验收设备的校准净质量：S = 各验收净质量之和；M 为其均值 S / N，每台采集交换为 Q / N。因此归一化清单等于 Q / S。保留单台质量、变异及不确定性；拆分不相容配置，不作混合平均。不虚构数值 M、强度、成材率或寿命。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference_mass | measurement_record | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 逐验收配置/序列号 | 与清单同一报告期 | 声明工厂出口 | 每台验收净质量 | 校准证明；净称重单；验收/物料清单 |
| cp_sheet_14301 | fabrication | sheet_14301 | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_tube_14404 | fabrication | tube_14404 | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_weld_wire | fabrication | weld_wire | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_argon | fabrication | argon | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 计量供气及气瓶余量，记录压力/温度及体积状态；归属实际焊接工况。 | m3 | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_cutting_oil | fabrication | cutting_oil | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_stainless_scrap | fabrication | stainless_scrap | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_spent_cutting_oil | fabrication | spent_cutting_oil | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_naoh | surface_finish | naoh | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_citric | surface_finish | citric | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_ipa | surface_finish | ipa | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_powder_coat | surface_finish | powder_coat | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_spent_cleaner | surface_finish | spent_cleaner | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_spent_passivation | surface_finish | spent_passivation | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_ipa_air | surface_finish | ipa_air | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 测量物种特定排气及逸散损失；核对新鲜/回收溶剂、库存、残余及反应；不得将总 VOC 标作异丙醇。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_purchased_chamber | thermal_assembly | purchased_chamber | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_purchased_pan | thermal_assembly | purchased_pan | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_purchased_frame | thermal_assembly | purchased_frame | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_burner | thermal_assembly | burner | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_oil_burner | thermal_assembly | oil_burner | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_heat_exchanger | thermal_assembly | heat_exchanger | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_steam_boiler | thermal_assembly | steam_boiler | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_hotwater_boiler | thermal_assembly | hotwater_boiler | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_ceramic_heater | thermal_assembly | ceramic_heater | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_resistance_heater | thermal_assembly | resistance_heater | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_water_pump | thermal_assembly | water_pump | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_steam_valve | thermal_assembly | steam_valve | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_insulating_glass | thermal_assembly | insulating_glass | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_seal | thermal_assembly | seal | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_mineral_wool | thermal_assembly | mineral_wool | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_motor | electromechanical | motor | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_fan | electromechanical | fan | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_grinder | electromechanical | grinder | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_controller | electromechanical | controller | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_sensor | electromechanical | sensor | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_wire | electromechanical | wire | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_compressor | electromechanical | compressor | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_r290 | electromechanical | r290 | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_r290_air | electromechanical | r290_air | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用检漏、气瓶及回收记录测量实际工厂丙烷排放，不规定泄漏比例。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_test_naturalgas | factory_acceptance | test_naturalgas | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 计量实际试验输入；燃料采用实测供应低位热值及质量/体积状态；蒸汽采用供应压力、温度及凝结水回流焓。区分直接使用与厂内公用工程产能边界。 | MJ | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_test_fuel_oil | factory_acceptance | test_fuel_oil | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 计量实际试验输入；燃料采用实测供应低位热值及质量/体积状态；蒸汽采用供应压力、温度及凝结水回流焓。区分直接使用与厂内公用工程产能边界。 | MJ | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_test_steam | factory_acceptance | test_steam | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 计量实际试验输入；燃料采用实测供应低位热值及质量/体积状态；蒸汽采用供应压力、温度及凝结水回流焓。区分直接使用与厂内公用工程产能边界。 | MJ | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_co2 | factory_acceptance | co2 | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 治理后按匹配浓度、干/湿排气流量及试验时间测量各物种。碳平衡 CO2 扣除独立确定的 CO、烃、烟炱和保留残余碳；仅碳平衡不能确定 CO 或 NOx。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_co | factory_acceptance | co | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 治理后按匹配浓度、干/湿排气流量及试验时间测量各物种。碳平衡 CO2 扣除独立确定的 CO、烃、烟炱和保留残余碳；仅碳平衡不能确定 CO 或 NOx。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_nox | factory_acceptance | nox | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 治理后按匹配浓度、干/湿排气流量及试验时间测量各物种。碳平衡 CO2 扣除独立确定的 CO、烃、烟炱和保留残余碳；仅碳平衡不能确定 CO 或 NOx。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_test_food | factory_acceptance | test_food | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_coffee_residue | factory_acceptance | coffee_residue | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_rejected_machine | factory_acceptance | rejected_machine | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_carton | dispatch | carton | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_pallet | dispatch | pallet | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_film | dispatch | film | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_final_product | dispatch | final_product | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 核对序列号验收、实际校准净称重、交付配置与正验收数量 N；不合格机器不计入分母，其可归属负荷保留。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 每 1 kg 参考流 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_fabrication_electricity | fabrication | fabrication_electricity | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 分时读取校准工序电表并与场址购电核对；保留实际电压、供应/电网地域与年份、试验/生产划分及实测因果分配。厂内发电改计其燃料和排放，不再重复计购电。 | kWh | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_surface_finish_electricity | surface_finish | surface_finish_electricity | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 分时读取校准工序电表并与场址购电核对；保留实际电压、供应/电网地域与年份、试验/生产划分及实测因果分配。厂内发电改计其燃料和排放，不再重复计购电。 | kWh | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_thermal_assembly_electricity | thermal_assembly | thermal_assembly_electricity | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 分时读取校准工序电表并与场址购电核对；保留实际电压、供应/电网地域与年份、试验/生产划分及实测因果分配。厂内发电改计其燃料和排放，不再重复计购电。 | kWh | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_electromechanical_electricity | electromechanical | electromechanical_electricity | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 分时读取校准工序电表并与场址购电核对；保留实际电压、供应/电网地域与年份、试验/生产划分及实测因果分配。厂内发电改计其燃料和排放，不再重复计购电。 | kWh | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_factory_acceptance_electricity | factory_acceptance | factory_acceptance_electricity | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 分时读取校准工序电表并与场址购电核对；保留实际电压、供应/电网地域与年份、试验/生产划分及实测因果分配。厂内发电改计其燃料和排放，不再重复计购电。 | kWh | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_dispatch_electricity | dispatch | dispatch_electricity | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 分时读取校准工序电表并与场址购电核对；保留实际电压、供应/电网地域与年份、试验/生产划分及实测因果分配。厂内发电改计其燃料和排放，不再重复计购电。 | kWh | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_shared_services_electricity | shared_services | shared_services_electricity | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 在同一期间核对实际场址输入、厂内发电及外送，适用时包含实测储能变化。共享/剩余电量等于核对后的工厂可用电量减去已经分配到加工、表面处理、组装、试验及交付的电量。仅对剩余实测共享负荷按因果工况分配；不得在工序/试验分表之上叠加整个工厂总表。保持供应方与本地发电边界分明。对负残差结合计量匹配及不确定性调查，不截为零。 | kWh | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_surface_finish_water | surface_finish | surface_finish_water | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 分别计量外供水和循环补水，不将循环量当作新水；保留供应地域及质量平衡所需来源特定密度、实际溶解负荷与回流去向。 | m3 | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_surface_finish_wastewater | surface_finish | surface_finish_wastewater | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 计量排水并采样实际组成/密度；区分可回用内部回流、溶解组分及处理污泥。 | m3 | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_factory_acceptance_water | factory_acceptance | factory_acceptance_water | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 分别计量外供水和循环补水，不将循环量当作新水；保留供应地域及质量平衡所需来源特定密度、实际溶解负荷与回流去向。 | m3 | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_factory_acceptance_wastewater | factory_acceptance | factory_acceptance_wastewater | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 计量排水并采样实际组成/密度；区分可回用内部回流、溶解组分及处理污泥。 | m3 | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_sludge | shared_services | sludge | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 采用校准称量、采购/领用及期初/期末库存记录；核对批次、回收、不合格品及同一配置的验收数量 N。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |
| cp_pm25 | shared_services | pm25 | measurement_record | 场址；期间；配置；批次；原始数量及单位；库存；回流；化验/密度；分配依据；验收数量 N；不确定性 | 捕集治理后实际监测焊接/磨削排气；保留粒径组分、采样气量及生产期间。未测粉尘记为未知，不能记零。 | kg | 逐批/计量区间，期间核对 | 实际代表年度/周期，含不合格及复试 | 选定机器线及因果分配工厂服务 | 可归属数量 / 验收机器数量 | 原始签署记录；校准；化验；序列号验收；自制/外购边界 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |
| physical_balance | site | 每种物料/所含元素按期初库存 + 外部输入 + 反应生成 = 期末库存 + 验收产品 + 外送不合格品/边角料 + 污泥/废水组分 + 空气排放物种 + 反应消耗闭合。对每项对应库存/输入/输出应用实测化验；钢材总质量不是铬或镍质量。整体边界对每项内部转移/回收配对抵消；内部回流不是新增上游采购。水采用实测密度和湿产品、污泥及残余实际含水率，包含补水、试验/清洗进水、库存、保留水、蒸发、排水及反应水；循环配对，不当作消耗。溶剂保留新鲜/回收物种、槽液库存、残余、外送、排放及化学反应。保留残差及合并计量/化验不确定性，调查无法解释的闭合差，不虚构容差。 | 库存；化验；校准计量；反应及回流记录；不确定性 | 闭合残差及不确定性 |  |
| energy_units | utilities | kWh × 3.6 = MJ。燃料质量 × 实测低位热值 = MJ。外购蒸汽净能量 E_net = m_steam × h_in - m_return × h_return：各实测 kg 与实际压力/温度及共同参考状态下匹配的 MJ/kg 比焓相乘。保留实际回流比例及期间/库存对应。厂内蒸汽发生改计其燃料、水及排放，不重复计外购蒸汽供应负荷；发生产能燃料与供热不重复。 | 校准计量；供应低位热值及状态；凝结水回流 | MJ |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | final_product | 制造商；型号及序列号/配置；非家用设计用途；面包炉或饮料/烹饪/加热功能；主加热技术及实际燃料；容量、食品接触与压力等级；钢材及弹性体牌号；自制/外购组件；实际安装的燃烧器、换热器、锅炉、加热器、泵、风机、研磨机及控制器；包含的冷却等附件；初始流体充注；交付净质量 M 与验收状态；工厂场址、期间及供应地域；工厂试验工况及耗材 | 订单；批准图纸/物料清单；供应证明；实际验收 |
| identity_gaps | all cards | 完整数据集交付前解析实际流/供应方/属性及环境介质。无牌号/状态通用板材、其他地域的香港供水及来源特定生物质/焚烧电力不建立本接口。 | manifest review_metadata |
| ranges | all rows | 无受支持通用经验范围。保留实际记录、签署适用性、校准及不确定性；必需数量未知阻止完整性，证明不发生则记 not_applicable。 | 工厂与独立相容来源证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | 核对类别分支、非家用用途、主加热技术、正实测 M 与 N、同一交付配置、1 kg 参考及完整限定信息。不得仅机器质量比较等效烹饪服务。 | `un-cpc3-2025` |
| validate_balance | all processes | 每种物料/所含元素按期初库存 + 外部输入 + 反应生成 = 期末库存 + 验收产品 + 外送不合格品/边角料 + 污泥/废水组分 + 空气排放物种 + 反应消耗闭合。对每项对应库存/输入/输出应用实测化验；钢材总质量不是铬或镍质量。整体边界对每项内部转移/回收配对抵消；内部回流不是新增上游采购。水采用实测密度和湿产品、污泥及残余实际含水率，包含补水、试验/清洗进水、库存、保留水、蒸发、排水及反应水；循环配对，不当作消耗。溶剂保留新鲜/回收物种、槽液库存、残余、外送、排放及化学反应。保留残差及合并计量/化验不确定性，调查无法解释的闭合差，不虚构容差。 |  |
| validate_completeness | all applicable rows | 核对各实际路线/外部原子流、自制/外购互斥、库存、不合格/返工、因果公用工程、归一化及物种特定治理后排放。未知 UUID/必需数量或无依据换算阻止完整数据集。本候选方法不是认证或终身 LCA。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 声明完整设备制造并核实上游关联 |
| excluded_use | 客户食品生产清单、家用机器、工业电热面包炉或无依据完整服务等效 |
| required_metadata | 制造商；型号及序列号/配置；非家用设计用途；面包炉或饮料/烹饪/加热功能；主加热技术及实际燃料；容量、食品接触与压力等级；钢材及弹性体牌号；自制/外购组件；实际安装的燃烧器、换热器、锅炉、加热器、泵、风机、研磨机及控制器；包含的冷却等附件；初始流体充注；交付净质量 M 与验收状态；工厂场址、期间及供应地域；工厂试验工况及耗材 |
| required_quality_disclosure | 路线及自制/外购覆盖；未解决身份/范围；计量与平衡不确定性；分配；供应地域/年份；废物去向 |
| update_trigger | 设计/加热技术、供应/牌号、包含冷却/附件、验收试验、场址或制造路线变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed pages 225–236, subclasses 43420/43430 and 44515/44516/44518. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 身份及相邻产品/零部件排除，分类本身不是制造证据。 |
| miwe-rack-oven | handbook | MIWE roll-in e+ product information, PI RIE3.0/en/1909, pages 3–4. https://www.miwe.com/media/docs/produkte/prospekt/en/produktinformation-roll-in-eplus-3-0-en.pdf | 燃油/燃气与电炉替代配置，不锈钢换热器、蒸汽系统、隔热玻璃、控制器及可选门驱动。不确立牌号、制造配方或能耗强度。 |
| franke-a800 | handbook | Franke A800 product leaflet, 590.0690.071/09.23/CH-EN, pages 1–2. https://www.franke.com/content/dam/franke/language-masters/en/coffee-systems/documents/factsheets/en/EN_A800_Franke_CS_Product_Leaflet.pdf | 商用咖啡机锅炉、研磨、冲煮/控制结构及随配置变化的冷却附件；电热饮料机反证不得将烤炉限定延伸到所有机器。册中质量/功率不是默认值。 |
| rational-ivario | handbook | RATIONAL, iVario The Game Changer, Restaurant brochure, pages 8–9. https://hcms.rational-online.com/hcms/v1.7/entity/brochure/166028/storage/MDE2NjAyOC8wL3BkZi1wcmV2aWV3LTE1MHBwaS1wcmludHNoZWV0/download/20_720_brochure_ivario_pro_restaurant_letter-en_ca.pdf | 商用烹饪的电陶瓷加热器与不锈钢锅底配置；为具体型号结构，不是工厂耗用或食品生产清单。 |
| epa-fabricated-metal | official_guidance | US EPA, Industrial Stormwater Fact Sheet Sector AA, EPA 833-F-06-042, Table 1 page 2. https://www.epa.gov/sites/default/files/2015-10/documents/sector_aa_fabmetal.pdf | 切割、折弯、焊接、清洗及相关残余物的通用加工核对。该行业范围明确排除机械，仅提示核实实际路线，不证明所有路线发生或提供排放因子。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 细分与因果分配层级，不宣称完全符合 PEF。 |
