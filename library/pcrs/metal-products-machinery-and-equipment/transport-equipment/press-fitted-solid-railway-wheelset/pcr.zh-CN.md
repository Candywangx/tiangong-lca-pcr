---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.press-fitted-solid-railway-wheelset
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 精加工压装非驱动实心轴整体车轮裸铁路轮对制造

## 1. 范围与适用性

本候选自编方法仅覆盖明确收窄的新造裸铁路轮对结构：两只整体钢轮在非驱动实心钢轴圆柱轮座上常温常规过盈压装。前景从验收热处理轮轴毛坯开始，纳入真实精加工过盈装配接头曲线几何验收、完整净称重工厂放行。不隐含纳入供应方炼钢锻轧热处理。来源支持产品系列过程接口；真实工单图纸检验计划建立实际配置。

排除驱动齿轮轮对空心轴弹性轮轮箍轮独立轮变轨距缩装锥形轮座高压辅助压装；亦排除轴承轴箱制动盘降噪器最终永久涂装硬化、整车制造大修重镟铁路运行服务。购买完全完成轮轴的仅装配工厂不能声称本精加工边界。类别窄于CPC49540，且区别于完整机车货车制造：供应构件状态精密轮座接口两份力位移追溯裸设备验收建立实质方法需要。科学审查仍待完成；对齐机械检查不批准方法学。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.press-fitted-solid-railway-wheelset |
| classification_refs | CPC3.0 49540，更窄；不声称已接受映射 |
| covered_products | 新造非驱动实心轴两整体钢轮常规压装裸轮对，实际门点内精加工 |
| excluded_products | 其他轮对结构独立轮轴含轴承装配、最终永久涂装检修整车服务数据集 |
| representative_product | 证据选择BONATRANS产品系列中整体轮实心轴非驱动子集，按MAE描述路线常规压装；须真实现行工单 |
| production_route | 接收热处理毛坯→轮轴精加工→两处常规压装接头→尺寸曲线指定无损验收→完整净称重放行 |
| market_state | 声明制造放行门点的新造验收裸轮对 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 验收非驱动实心轴整体车轮压装裸铁路轮对 |
| How much | 1 kg验收完整配置裸轮对净质量 |
| How well | 按真实受控检验计划放行图纸物料轮轴证书两接头合格压装曲线最终几何 |
| How long or cycle | 一个制造验收周期；不假定运行寿命列车公里功能 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收非驱动实心轴整体车轮压装裸铁路轮对 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造者型号序列图纸版次；两只新整体钢轮与一根新非驱动实心钢轴；真实轮轴牌号炉批序列、毛坯完成度、上游热处理放行；圆柱轮座常温常规过盈压装、真实孔座表面接头追溯；声明轮廓间距跳动现行验收限值、压装力位移校准真实无损计划；裸设备排除轴承轴箱制动盘齿轮；真实保留油膜润滑膜状态、完整净实测M kg及cp_mass校准皮重不确定性；制造场址时期外包门点；供应数据集、消耗品配方安全数据表、废液废物接收方与实测条件释放 |

在数据集元数据或等效可寻源字段声明所有必需限定信息。等质量不建立同轴载轮径疲劳性能寿命。实际验收净M按精确裸配置实测，不从目录质量轴载理论钢材体积获得。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 | kg | M = 同一配置的一台完整设备的验收净质量,单位 kg; 使用 cp_mass 采集 M。 |
| `exchange_mass` | all kg inventory rows | 质量 | kg | 每项物理交换按净耗转移质量独测，保留领退库存平衡。按件购毛坯须真实单件称重精确供应状态；后续采用公开非质量属性须保留并记录换算，不改为质量。 |
| `electric_energy` | machining_electricity; pressing_electricity; inspection_electricity; release_electricity | 净热值 | MJ | 计量kWh按1 kWh =3.6 MJ换算；保留选定公开引用能量属性与供应技术电压场址披露。 |
| `hydraulic_volume` | hydraulic_oil | 体积 | m3 | 保留公开体积；用校准计量器声明液温领退库存原件计量真实补换油净体积。升换算用1 L =0.001 m3；独立所需质量平衡须同温度实测批次密度，不能假定油密度。 |
| `mass_configuration` | cp_mass | 质量 | kg | 称量完整验收裸两轮一实心轴装配，包含有记录保留配合润滑剂暂时防锈油膜。移除复用支架运输架测试工具可拆包装与排除轴承盘齿轮模块。用真实安装状态，修正须独立实测物理质量，不能假定附件重量。 |
| `mass_record_origin` | cp_mass | 质量 | kg | 用序列关联完整轮对校准秤读数，保留零点支承皮重校准证书适合实际设备量程重复性不确定性。以称量轮轴真实保留膜与实测M核对。不以库存目录名义轴载假定钢密度替代实测验收配置。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 适合精加工的供应放行热处理整体钢轮与实心轴毛坯 |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | CPC49540中常规压装非驱动实心轴整体轮裸轮对子集 |
| recursive_input_rule | 不递归将轮轴炼钢锻轧热处理纳入本精加工装配门点；外购完整轮对不是毛坯输入 |
| upstream_dataset_requirement | 更广供应链声明前关联真实兼容轮轴毛坯供应配制消耗品电力运输废物处理数据集 |
| disclosure | 仅声明所收毛坯精加工常规压装制造检验净称重放行；披露上游场址外包排除 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_actual` | all inventory rows | 独立记录真实消耗实测废物直接物质。不从电动机加工压装推断必需燃料VOC钢尘排放环境废水。工艺水是技术圈供应；废切削液是转移处理废物，不是淡水资源基础流废水。不规定基础流交换普遍发生。实际场址监测若建立排放资源取用，完整覆盖声明前须逐化学物理明确行加介质子介质测量身份审查。 |  |
| `boundary_limit` | dataset | 本清单不是完整摇篮到工厂门。声明真实场址能耗运输支持服务外包边界所有缺关联；原子化增列遗漏真实交换。供应上游负荷不是零。铁路运行检修轮廓重镟放行后交付排除。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `machining` | 接收车轮车轴毛坯精加工 | required | 新造非驱动裸轮对的热处理整体钢轮毛坯与实心钢轴毛坯在门点内精加工。 | foreground | 每台验收完整设备按M归一化 |
| `pressing` | 受控轮轴过盈压装 | required | 两只整体车轮在一根非驱动实心钢轴圆柱轮座常温常规过盈压装。 | foreground | 每台验收完整设备按M归一化 |
| `inspection` | 尺寸与指定无损验收 | required | 按真实指定制造检验计划验收完整装配裸轮对。 | foreground | 每台验收完整设备按M归一化 |
| `release` | 完整裸轮对净称重放行 | required | 声明配置的新造验收非驱动实心轴整体车轮压装裸轮对。 | foreground | 每台验收完整设备按M归一化 |

轮轴序列经精加工两个压装接头关联至同一裸设备放行。内部中间轮轴装配设备不重复列外购输入。记录真实工位顺序范围；必需过程不使各条件消耗普遍必需。

### 过程：接收车轮车轴毛坯精加工（`machining`）

核对供应炉批序列、轮轴材质证书与前序热处理放行。按受控图纸精加工轮孔踏面与轴颈轮座，保留真实操作余量。所收毛坯炼钢锻轧热处理在上游。完全外购完成构件、仅装配的工厂不属于本制造路线。水性切削液补水及废液仅真实使用时适用；不规定牌号余量流体配方成材率。

#### 输入

##### 产品流

###### 供精加工的热处理整体钢制铁路车轮毛坯（`wheel_blank`）

仅一个实际使用转移的物理交换。记录精确供应规格完成状态；称量净领用减退回并核对库存变化。条件项缺席须有记录不适用证据，不能假定零。

- 选定流：供精加工的热处理整体钢制铁路车轮毛坯
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machining。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machining`
- 来源：`bonatrans-profile`; `bonatrans-machining`

###### 供精加工的热处理非驱动实心钢制铁路车轴毛坯（`axle_blank`）

仅一个实际使用转移的物理交换。记录精确供应规格完成状态；称量净领用减退回并核对库存变化。条件项缺席须有记录不适用证据，不能假定零。

- 选定流：供精加工的热处理非驱动实心钢制铁路车轴毛坯
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machining。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machining`
- 来源：`bonatrans-profile`; `bonatrans-machining`

###### 配制可混水钢材机加工切削液浓缩液（`coolant`）

仅一个实际使用转移的物理交换。记录精确供应规格完成状态；称量净领用减退回并核对库存变化。条件项缺席须有记录不适用证据，不能假定零。

- 选定流：配制可混水钢材机加工切削液浓缩液
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machining。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machining`
- 来源：`bonatrans-profile`; `bonatrans-machining`

###### 切削液配制用供应工业工艺水（`process_water`）

仅实际供应经处理工业工艺水用于切削液配制。须有记录处理质量交付边界实测质量水箱库存；不是原始淡水取用废切削液。不将公开水单位改为体积。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machining。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machining`
- 来源：`bonatrans-profile`; `bonatrans-machining`

###### 前景交流电使用（`machining_electricity`）

采集实际过程可归属交流电使用。电表kWh按1 kWh =3.6 MJ换算。前景用电身份不建立发电机电网电压地域上游供应；独立记录真实供应关联。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machining。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machining`
- 来源：`bonatrans-profile`; `bonatrans-machining`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 转移回收的钢制车轮机加工切屑（`wheel_chips`）

实际分离钢机加工切屑切削屑送回收，保留独立轮轴来源接收记录。独测钢与保留液体，避免重复计切削液。本废物身份记录产生，不建立下游回收负荷避免钢抵扣。

- 选定流：钢屑 `b3da8cf4-e443-449d-aa6a-860bc8b21fb8`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machining。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machining`
- 来源：`bonatrans-profile`; `bonatrans-machining`

###### 转移回收的钢制车轴机加工切屑（`axle_chips`）

实际分离钢机加工切屑切削屑送回收，保留独立轮轴来源接收记录。独测钢与保留液体，避免重复计切削液。本废物身份记录产生，不建立下游回收负荷避免钢抵扣。

- 选定流：钢屑 `b3da8cf4-e443-449d-aa6a-860bc8b21fb8`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machining。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machining`
- 来源：`bonatrans-profile`; `bonatrans-machining`

###### 转移处理的废水性钢材机加工切削液（`spent_coolant`）

仅湿式数控精加工真实废水性乳化切削液送厂外处理。称量真实转移混合物组成包括水金属污染；不建模通用环境废水排放，不重复计切屑保留液。非数控其他化学须独立身份审查。

- 选定流：废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_machining。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_machining`
- 来源：`bonatrans-profile`; `bonatrans-machining`

##### 基本流


### 过程：受控轮轴过盈压装（`pressing`）

使用批准孔座配合真实装配规程。将两只可追溯车轮配一根可追溯车轴、预装、逐接头压装，保留实测力位移曲线最终轴向位置。MAE描述常规及替代压装；本方法选常温常规压装，排除缩装高压辅助压装。配合润滑剂仅按实际批准规程适用；液压油是压机独立计量消耗品，不是轮对构件。MAE退压注油说明不证明新压入必耗注油。

#### 输入

##### 产品流

###### 批准配制铁路轮座压装润滑剂（`fit_lubricant`）

仅一个实际使用转移的物理交换。记录精确供应规格完成状态；称量净领用减退回并核对库存变化。条件项缺席须有记录不适用证据，不能假定零。

- 选定流：批准配制铁路轮座压装润滑剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_pressing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pressing`
- 来源：`mae-press`; `bonatrans-profile`

###### 轮对装配压机用配制矿物液压油（`hydraulic_oil`）

仅真实配制矿物基础液压油，须供应安全数据表组成证明满足公开润滑油分类的石油油类质量至少70%。按m3计量声明油液温度下制造可归属真实压机换油补加净体积，保留计量器校准领退油箱库存变化，不逐周期计循环油箱充注。其他基础液须独立身份审查；液压油不计安装轮对质量。

- 选定流：液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_pressing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pressing`
- 来源：`mae-press`; `bonatrans-profile`

###### 前景交流电使用（`pressing_electricity`）

采集实际过程可归属交流电使用。电表kWh按1 kWh =3.6 MJ换算。前景用电身份不建立发电机电网电压地域上游供应；独立记录真实供应关联。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_pressing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pressing`
- 来源：`mae-press`; `bonatrans-profile`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 轮对装配压机废矿物液压油（`spent_hydraulic_oil`）

实际压机取出经使用污染的石油基矿物液压润滑油，在产生点称量。独立记录接收方下游处理；公开身份不规定回收燃烧。不是水性切削液无关化学混合物。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_pressing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pressing`
- 来源：`mae-press`; `bonatrans-profile`

##### 基本流


### 过程：尺寸与指定无损验收（`inspection`）

核对轮轴证书前序无损覆盖，按现行受控限值检验最终轮间距轮座位置实测径轴向跳动，并复核两个压装曲线。记录批准检验计划实际所需最终无损；不声称渗透磁粉超声耗材普遍必需。接触超声耦合剂行仅真实进行接触超声时适用。不因制造商有认可试验室就逐台计破坏疲劳试验。

#### 输入

##### 产品流

###### 配制接触超声轮对检验耦合凝胶（`couplant`）

仅一个实际使用转移的物理交换。记录精确供应规格完成状态；称量净领用减退回并核对库存变化。条件项缺席须有记录不适用证据，不能假定零。

- 选定流：配制接触超声轮对检验耦合凝胶
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_inspection。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_inspection`
- 来源：`mae-press`; `bonatrans-profile`

###### 前景交流电使用（`inspection_electricity`）

采集实际过程可归属交流电使用。电表kWh按1 kWh =3.6 MJ换算。前景用电身份不建立发电机电网电压地域上游供应；独立记录真实供应关联。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_inspection。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_inspection`
- 来源：`mae-press`; `bonatrans-profile`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废超声轮对检验耦合凝胶（`spent_couplant`）

仅一个实际使用转移的物理交换。记录精确供应规格完成状态；称量净领用减退回并核对库存变化。条件项缺席须有记录不适用证据，不能假定零。

- 选定流：废超声轮对检验耦合凝胶
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_inspection。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_inspection`
- 来源：`mae-press`; `bonatrans-profile`

##### 基本流


### 过程：完整裸轮对净称重放行（`release`）

凭序列关联图纸几何压装原件放行验收裸轮对。用校准秤与合适支承称量完整净配置，排除复用运输架包装轴承轴箱制动盘齿轮。可选暂时防锈油与LDPE运输保护独称；保留油膜须明确计入净M，可移除包装排除。收料后新增永久涂装喷丸强化硬化须其他披露制造边界，本稿排除。

#### 输入

##### 产品流

###### 配制暂时钢制轮对防锈油（`protective_oil`）

仅一个实际使用转移的物理交换。记录精确供应规格完成状态；称量净领用减退回并核对库存变化。条件项缺席须有记录不适用证据，不能假定零。

- 选定流：配制暂时钢制轮对防锈油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`bonatrans-profile`; `mae-press`

###### 非黏性非泡沫低密度聚乙烯保护包装薄膜（`film`）

仅实际非黏性非泡沫无增强无层压无支承LDPE薄膜用于可移除运输保护。核验供应组成净耗质量；本行及净M不包含运输架托盘。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`bonatrans-profile`; `mae-press`

###### 前景交流电使用（`release_electricity`）

采集实际过程可归属交流电使用。电表kWh按1 kWh =3.6 MJ换算。前景用电身份不建立发电机电网电压地域上游供应；独立记录真实供应关联。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`bonatrans-profile`; `mae-press`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收非驱动实心轴整体车轮压装裸铁路轮对（`finished_machine`）

验收完整配置裸轮对固定1 kg：两只整体钢轮压装于一根实心钢轴，包含有记录保留的压装润滑剂防锈油。排除轴承轴箱制动盘齿轮整车结构复用架测试夹具可移除包装。归一化依据真实实测净M，不用轴载目录重量。

- 选定流：验收非驱动实心轴整体车轮压装裸铁路轮对
- 流属性/单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`bonatrans-profile`; `mae-press`

##### 废物流

##### 基本流


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared resources | 按工单序列工位细分分表避免分配。不可避免共用机床压机检验负荷按有证明因果实测有效时间负载分配；保留分子分母排除工单待机归属敏感性。不同轮径库存余量压装规程间按质量台均分配须真实因果证明。 | `ghg-allocation` |
| `allocation_recovery` | wheel_chips; axle_chips; spent_coolant; spent_hydraulic_oil | 区分库存退回内部循环外部废物回收审查真实联产品。切屑保留液体独测，记录接收方废物状态，避免自动原生钢替代抵扣或按出售价值假定联产品。返工仍关联原工单；验收输出数量排除报废。一致记录选定废物循环方法负荷边界。 | `ghg-allocation` |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | release | reference product | weighing_record | 序列；配置；验收净质量 M；校准秤零点支承皮重不确定性；安装两轮一轴物料；保留润滑剂油膜；排除包装模块；验收签署 | 使用经校准的秤称量已验收的完整设备,排除运输包装；核对同一配置和验收记录。 | kg | 每个验收序列与变化配置 | 声明制造报告期间 | 真实完整裸轮对放行工位 | 每台验收净质量 | 校准量程零皮原件原始读数物料验收核对 |
| `cp_machining` | machining | individual inventory exchanges | production_record | row_id；序列工单；配置；同一配置的验收设备数量；净领退；库存；分表kWh；实测交换数量单位；接收状态；报废返工；分配分子分母 | 记录毛坯收料质量轮轴序列、真实完成尺寸、机加工周期分表、独称钢切屑、切削液浓缩液补水减退回与液体库存变化。 汇总真实同一配置工单原件，核对库存废物平衡，按有记录物理驱动分配，并用同一配置的验收设备数量除可归属总量。分母排除报废设备，但保留其可归属消耗。 | 质量kg；声明温度下液压油体积m3；有记录kWh换算后电力MJ | 每序列工单批次真实消耗事件 | 声明完整报告期间库存日期 | 真实纳入工位或标识外包操作 | 可归属交换数量 / 验收设备数量 | 原始读数供应证书安全数据表秤分表校准过程接收原件同一配置真实数量 |
| `cp_pressing` | pressing | individual inventory exchanges | production_record | row_id；序列工单；配置；同一配置的验收设备数量；净领退；库存；分表kWh；实测交换数量单位；接收状态；报废返工；分配分子分母 | 采集配合尺寸实测两接头曲线可追溯力位移校准工具身份真实润滑剂领用净液压油更换补加回收废油、电力及可归属待机。 汇总真实同一配置工单原件，核对库存废物平衡，按有记录物理驱动分配，并用同一配置的验收设备数量除可归属总量。分母排除报废设备，但保留其可归属消耗。 | 质量kg；声明温度下液压油体积m3；有记录kWh换算后电力MJ | 每序列工单批次真实消耗事件 | 声明完整报告期间库存日期 | 真实纳入工位或标识外包操作 | 可归属交换数量 / 验收设备数量 | 原始读数供应证书安全数据表秤分表校准过程接收原件同一配置真实数量 |
| `cp_inspection` | inspection | individual inventory exchanges | production_record | row_id；序列工单；配置；同一配置的验收设备数量；净领退；库存；分表kWh；实测交换数量单位；接收状态；报废返工；分配分子分母 | 保留几何曲线验收、真实无损方法校准覆盖、重复检验报废返工路线、真实单一耦合剂配方废物电力。 汇总真实同一配置工单原件，核对库存废物平衡，按有记录物理驱动分配，并用同一配置的验收设备数量除可归属总量。分母排除报废设备，但保留其可归属消耗。 | 质量kg；声明温度下液压油体积m3；有记录kWh换算后电力MJ | 每序列工单批次真实消耗事件 | 声明完整报告期间库存日期 | 真实纳入工位或标识外包操作 | 可归属交换数量 / 验收设备数量 | 原始读数供应证书安全数据表秤分表校准过程接收原件同一配置真实数量 |
| `cp_release` | release | individual inventory exchanges | production_record | row_id；序列工单；配置；同一配置的验收设备数量；净领退；库存；分表kWh；实测交换数量单位；接收状态；报废返工；分配分子分母 | 采集完整两轮一轴安装身份序列净质量秤校准皮重、可选保留油膜薄膜领用、同一配置验收设备数量与放行签署。 汇总真实同一配置工单原件，核对库存废物平衡，按有记录物理驱动分配，并用同一配置的验收设备数量除可归属总量。分母排除报废设备，但保留其可归属消耗。 | 质量kg；声明温度下液压油体积m3；有记录kWh换算后电力MJ | 每序列工单批次真实消耗事件 | 声明完整报告期间库存日期 | 真实纳入工位或标识外包操作 | 可归属交换数量 / 验收设备数量 | 原始读数供应证书安全数据表秤分表校准过程接收原件同一配置真实数量 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |
| `electricity_conversion` | machining_electricity; pressing_electricity; inspection_electricity; release_electricity | normalize_mass前按1 kWh =3.6 MJ将原始电表kWh换成MJ；保留读数共用负荷归属供应边界。 | meter kWh | q_item in MJ |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `configuration_trace` | reference product | 轮轴炉批序列牌号毛坯供应热处理图纸圆柱常规配合裸设备排除真实保留膜须全程一致。不从目录取得M。 | 证书工单物料秤验收原件 |
| `press_geometry` | pressing; inspection | 保留真实孔座表面实测配合、两份力位移曲线与校准力位置仪表、按现行受控限值验收轮间距跳动。制造商压机能力不建立产品公差。 | 接头曲线文件几何原件现行检验计划限值校准仪表 |
| `ndt_coverage` | inspection | 识别供应方最终无损覆盖真实方法人员资格仪器校准结果重复。可选耦合剂仅真实接触超声计入；其他真实方法化学耗材须完整量值覆盖前独立原子行。 | 供应试验证书真实检验结果消耗日志 |
| `balance_and_period` | all inventory rows | 用完整声明期间或每验收序列、期初期末库存领退报废返工湿干切屑状态。核对金属去除安装轮对质量，对未解释失衡结合测量不确定性调查；不虚构固定闭合阈值。 | 质量台账数量废料接收证据不确定性 |
| `range_evidence` | all inventory rows | 不从制造商产品组合压机能力能耗营销推断经验数量范围单轮对质量。经验基准前须兼容真实工单批次观察独立边界兼容证据；未解决范围证据仍须声明。 | 前景观察审查兼容原始来源 |
| `upstream_and_identity` | dataset | 披露缺供应关联未解决流身份。空UUID保留具体物理交换，不是匿名材料集合。采用身份前审查真实属性单位链正式本地名称。 | 供应规格数据集关联身份审查 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | dataset | 检查两整体轮实心非驱动轴常规圆柱压装结构真实门点内精加工裸设备完成度。拒绝隐含纳入驱动空心缩装轴承盘齿轮整车维修路线。 | `bonatrans-profile`; `mae-press`; `caf-wheelset` |
| `validate_mass` | finished_machine | 须cp_mass原件精确真实完整净M及双语归一化一致。每非参考行应用normalize_mass及声明采集协议；件面积换算须真实数据保留公开属性。不造数值质量猜密度。 |  |
| `validate_joint` | pressing; inspection | 须两个压装接头合格曲线与最终几何无损计划结果关联放行序列。未知限值缺物理原件仍为科学量值采集缺口；检查器成功仅确认声明契约一致。 | `mae-press` |
| `validate_completeness` | all inventory rows | 检查原子交换净领退库存条件适用。区分技术圈水废切削液真实基础流排放，保留真实组成介质子介质属性单位正式中文名，明确未知不假定零。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景制造数据集 |
| downstream_use | secondary_dataset；background_dataset仅在真实量值完成独立审查后 |
| allowed_use | 声明兼容新造裸实心轴非驱动压装轮对制造供应输入 |
| excluded_use | 完整49540覆盖铁路运行服务所有轮对变体整车摇篮到坟墓无条件仅按质量比较 |
| required_metadata | 制造者型号序列图纸版次；两只新整体钢轮与一根新非驱动实心钢轴；真实轮轴牌号炉批序列、毛坯完成度、上游热处理放行；圆柱轮座常温常规过盈压装、真实孔座表面接头追溯；声明轮廓间距跳动现行验收限值、压装力位移校准真实无损计划；裸设备排除轴承轴箱制动盘齿轮；真实保留油膜润滑膜状态、完整净实测M kg及cp_mass校准皮重不确定性；制造场址时期外包门点；供应数据集、消耗品配方安全数据表、废液废物接收方与实测条件释放 |
| required_quality_disclosure | 实测M不确定性时期数量压装无损覆盖构件状态供应关联分配返工条件缺席未解决身份范围缺原始测量科学审查状态 |
| update_trigger | 图纸牌号毛坯供应接头方法轴向几何无损场址过程能耗保留膜净交付状态上游数据集变化 |


## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| bonatrans-profile | literature | GHH BONATRANS Profile January2026; https://www.bonatrans.cz/soubory/2026/GHH_BONATRANS%20profile%20210x210%20EN_NEW_01_2026.pdf ; PDF physical4 printed6–7 and physical5 printed8–9 | 产品系列制造质量；不推断牌号重量寿命数值清单。 |
| mae-press | literature | MAE Wheelset Presses; https://mae-group.com/en/wheelset-presses/ ; conventional/alternative methods, RACOS curve evaluation and measuring head; unpaginated | 独立装配设备路线实测接头几何控制；无压机能力作为产品因子或注油必需性。 |
| bonatrans-machining | literature | BONATRANS New production plant in India opened,2 June2016; https://www.bonatrans.cz/en/about-us/news-detail/new-bonatrans-production-plant-in-india-opened-21 ; unpaginated manufacturing paragraphs | 仅历史真实轮轴机加工轮对装配接口；不是现状量值基准。 |
| caf-wheelset | literature | CAF MIIRA Wheelsets Solutions; https://www.cafmiira.com/wp-content/uploads/2024/09/wheelsets_catalogue.pdf ; PDF physical4 printed6–7 | 独立追溯轮对变体反证；无缩装齿轮箱能耗碳废料泛化。 |
| ghg-allocation | official_guidance | WRI/WBCSD GHG Protocol Product Life Cycle Accounting and Reporting Standard2011; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; printed63 PDF65 Tables9.1–9.2 | 历史方法分配层级，不是现行铁路法规真实资源驱动。 |
