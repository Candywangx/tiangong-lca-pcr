---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machines-and-apparatus-of-a-kind-used-solely-or-principally-for-the-manufacture-of-semi-0b0922ac
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 专用或主要用于制造半导体单晶、晶圆、器件、集成电路或平板显示器的机器装置

## 1. 范围与适用性

本PCR覆盖专用或主要用于半导体单晶或晶圆生产、半导体器件制造、电子集成电路制造或平板显示器制造的机器装置。逐供货机器审主要功能，适用晶体生长、半导体晶圆制备划片、沉积溅射、光刻刻蚀清洗及器件集成电路键合设备属于不同配置，非通用晶圆厂设备配方；明确纳入显示器沉积设备。机器加工的客户基片半导体器件显示面板不作参考产品。独供零件、通用泵冷水机水处理单元、一般测试计量设备、无关或仅太阳能机器须相邻主要功能审查，不能因服务晶圆厂自动纳入。辅助电驱控制不定义制造机器主要功能。

原件证明不同实物架构制造接口：PVA自身真空腔室制造半导体CZ配置，ASML供应模块自身光学零件洁净室装配测试，ULVAC显示溅射腔传输泵结构，Oxford等离子沉积真空进样气分配，EVG器件集成电路键合及DISCO配置晶圆划片。这些例子仅证明适用接口，工厂记录须证明真实原料模块本地加工验收介质量。客户加工配方目录性能寿命通用机器质量保有量耗材均非制造默认值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machines-and-apparatus-of-a-kind-used-solely-or-principally-for-the-manufacture-of-semi-0b0922ac |
| classification_refs | CPC 3.0 44918; 完整原始半导体单晶晶圆器件集成电路平板显示器制造机器范围 |
| covered_products | 五类制造对象适用架构真实完整主要专用机器 |
| excluded_products | 客户加工货独立零件通用公用测试单元未经审查仅太阳能无关机器 |
| representative_product | 一个真实验收配置完整机器，无子型部件替代 |
| production_route | 真实原料制造及或外购模块，本地连接表面洁净室集成实测工厂验收交付 |
| market_state | 验收配置机器声明供货硬件附件填充范围 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完整主要功能类别真实完整验收配置机器 |
| How much | 1 kg验收配置机器净质量 |
| How well | 真实验收要求实证配置接口清洁泄漏电气功能检查，无默认产率器件通量 |
| How long or cycle | 一个共同设备制造验收期间，无客户寿命加工周期 |
| reference_flow_link | finished |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收配置半导体或显示器制造机器 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 机器型号序号配置真实主要半导体单晶晶圆器件集成电路显示功能机制，供货硬件选件备件软件留存填充，自身原料牌号纯度相态自制外购洁净室路线，校准验收净质量物料，场址期间供应运输接收，真实试验不良返修，原生单位状态化验分配身份缺口 |


## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考为cp_mass采集的1 kg验收配置完整机器净质量，同配置排除包装额外备件库存不良实耗试验基片介质。 |
| native_amount | all inventory rows | actual native property | native unit | 保留各原生分子包括缆Length米压缩气Volume立方米Energy，电换算每千瓦时3.6兆焦，转换时真实缆自身千克每米气温压湿密度液浓度密度须同接口自身证据。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实收到原料化学品或完整兼容模块有据完成状态 |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | 整个专用主要半导体单晶晶圆器件集成电路显示制造机器类别 |
| recursive_input_rule | 外部完整模块内含上游原料加工计一次，本地制造改计真实原料作业，内部转移配对抵销 |
| upstream_dataset_requirement | 兼容状态类型原生单位化学牌号相态供应地域运输接口 |
| disclosure | 真实供货物料选件留存填充软件范围自制外购本地制造实测试验边界 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_makebuy | 完整外购功率光学真空机器人控制热场模块与本地原料制造分开，部件分类不证明整机，外购半成品声明余下工序，模块内含化学属上游一次，本地装配原料独立。 | asml-manufacture; pva-cz; pva-cgs |
| boundary_test | 纳入可归属观察制造洁净室集成检查真实失败重复验收试验，留存随货填充实耗返还试验水气化学基片客户使用独立表计，目录配方加工通量额定功率乘假定小时不证明工厂负荷。 | asml-manufacture; pva-cz; linde-gases |
| boundary_supply | PVA CGS1218是半导体例子，仅太阳能1000PV须审，热区32英寸坩埚能力非32个坩埚，独立热区许可软件及包含可选排除硬件按真实订单，示例23000千克不含磁体且排除混凝土基座。DISCO DAD质量功率为示例额定，刀片是否包含按收货单；DWR1722是独供DI配套，RO可选冷水机水独立，非自动完整44918设备，不默认99.5%回收零废水。 | pva-cz; pva-cgs; disco-dicer; disco-water |
| boundary_gases | Air Liquide手册针对研究中心大学，Linde列电子气供货方式，仅证明可能化学身份供货区分，不证明工厂试验采用配方；须真实供应纯度气液溶液相容器汽化试验记录，工业氮氧不能自动替代高纯电子气。 | airliquide-gases; linde-gases |
| boundary_controls | Atlas燃烧及Proteus等离子是不同治理，Proteus无需烃天然气，销毁可产生酸由湿洗捕集亦可出现NOx；采用真实治理配置实测物种副产水污泥，不设目录销毁率通用燃料消失假定或把捕集当销毁。 | edwards-atlas; edwards-proteus |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fabrication | 本地结构真空零件制造 | conditional | 仅真实观察兼容设备作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |
| assembly | 配置机器装配 | conditional | 仅真实观察兼容设备作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |
| finish | 本地连接清洗表面加工 | conditional | 仅真实观察兼容设备作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |
| test | 真实工厂检查验收试验 | conditional | 仅真实观察兼容设备作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |
| services | 未归属共享工厂公用 | conditional | 仅真实观察兼容设备作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |
| dispatch | 验收设备交付包装 | conditional | 仅真实观察兼容设备作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |
| residues | 真实废物交接直接排放 | conditional | 仅真实观察兼容设备作业，公用仅含未归属剩余 | foreground | 每 1 kg 参考流 |

### 过程：本地结构真空零件制造 (`fabrication`)

#### 输入

##### 产品流

###### 本地真空腔室制造用不锈钢板 (`stainless`)

真实本地真空腔室制造用不锈钢板跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 本地真空腔室制造用不锈钢板
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: pva-cz; asml-manufacture

###### 本地结构制造用铝板 (`aluminium`)

仅真实厚度超过0.2毫米铝板，采用自身合金状态表面供应收据，本地切割成形独立实测。

- 选定流: 铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: pva-cz; asml-manufacture

###### 本地导体用T2铜杆 (`copper`)

仅本地导体冷却件机加工真实T2铜杆，自身化验尺寸供应，完整外购模块排除内含铜杆。

- 选定流: 铜杆 `776e80f1-8f0e-44ee-9a7e-baa9e747291a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: pva-cz; asml-manufacture

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：配置机器装配 (`assembly`)

#### 输入

##### 产品流

###### 外购完整半导体制造机器 (`boughtmachine`)

真实外购完整半导体制造机器跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 外购完整半导体制造机器
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 外购完整石墨热场 (`graphite`)

仅真实外购完整石墨热场准确热区供货配置牌号硬件范围，属于部件不能作整设备参考，不假定加热器坩埚数量。

- 选定流: 石墨热场 `b20109c6-15a3-431f-b5e5-21df0a2da18f`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 供货熔融石英坩埚 (`quartz`)

真实供货熔融石英坩埚跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 供货熔融石英坩埚
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 供货氧化铝陶瓷绝缘件 (`alumina`)

真实供货氧化铝陶瓷绝缘件跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 供货氧化铝陶瓷绝缘件
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 供货PFA管 (`pfa`)

真实供货PFA管跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 供货PFA管
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 供货氟橡胶密封垫 (`viton`)

真实供货氟橡胶密封垫跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 供货氟橡胶密封垫
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 供货低压电力电缆 (`cable`)

仅真实不超过1000伏电力缆结构供应，实测收到裁切安装返还长度米，实物质量核对需要才用同结构实测千克每米，射频缆独立。

- 选定流: 低压电缆 `49101b44-20cc-46a0-adfb-af07e4cc8908`
- 流属性/单位: Length / m
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 供货滚动轴承 (`bearing`)

真实成品滚动轴承子型尺寸牌号供货状态，称重收货安装返还，排除完整外购载台主轴内含轴承。

- 选定流: 滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 供货钢装配螺钉 (`screw`)

真实成品钢装配螺钉自身尺寸牌号表面供应，实测安装库存返还，无通用紧固件数量。

- 选定流: 钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 外购完整真空腔室 (`chamber`)

真实外购完整真空腔室跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 外购完整真空腔室
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 外购干式真空泵 (`drypump`)

真实外购干式真空泵跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 外购干式真空泵
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 外购分子泵 (`turbo`)

真实外购分子泵跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 外购分子泵
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 外购射频功率发生器 (`rf`)

真实外购射频功率发生器跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 外购射频功率发生器
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 外购质量流量控制器 (`mfc`)

真实外购质量流量控制器跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 外购质量流量控制器
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 外购精密晶圆载台 (`stage`)

真实外购精密晶圆载台跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 外购精密晶圆载台
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 外购晶圆搬运机器人 (`robot`)

真实外购晶圆搬运机器人跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 外购晶圆搬运机器人
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 外购工业冷水机 (`chiller`)

仅真实包含完整非家用制冷冷水机接口兼容供应回路充注，内含制冷剂制造属上游一次，本地补充填充独立识别。

- 选定流: 冷藏及冷冻设备及热泵，家用型设备除外 `0c1bef08-e0fc-465a-aff0-c3a43837edbc`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 外购光刻投影光学模块 (`optics`)

真实外购光刻投影光学模块跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 外购光刻投影光学模块
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 供货石墨电阻加热器 (`heater`)

真实供货石墨电阻加热器跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 供货石墨电阻加热器
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 供货电磁铁 (`magnet`)

真实供货电磁铁跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 供货电磁铁
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 供货已装配控制电路板 (`pcb`)

真实供货已装配控制电路板跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 供货已装配控制电路板
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 供货划片锯主轴 (`spindle`)

真实供货划片锯主轴跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 供货划片锯主轴
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### 留存供货去离子水填充 (`retained_di`)

仅验收供货配置机器内真实实测留存去离子水，自身供应纯度水分温度密度；空冷却通道目录选件不证明填充，工厂试验实耗返还独立。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_modules
- 来源: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：本地连接清洗表面加工 (`finish`)

#### 输入

##### 产品流

###### 工厂工艺水 (`water`)

真实处理工业工艺水接口自身水质水分温度密度供回库存本地清洗负荷，名称不证明超纯工艺水。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: pva-cz; asml-manufacture

###### 本地设备清洗异丙醇 (`ipa`)

仅本地设备清洗实际兼容中国厂内异丙醇供应，自身纯度水污染化验，不推断电子级纯度。

- 选定流: 异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: pva-cz; asml-manufacture

###### 本地设备清洗丙酮 (`acetone`)

真实本地设备清洗丙酮跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 本地设备清洗丙酮
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: pva-cz; asml-manufacture

###### 本地表面加工硝酸 (`nitric`)

仅本地设备表面实际40%硝酸供应，自身浓度供应密度实测配制反应返还，非通用电子湿洗配方。

- 选定流: 硝酸 `bf883501-c052-414e-8e21-e6f53cc257ba`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: pva-cz; asml-manufacture

###### 本地表面加工硫酸 (`acid`)

仅本地制造表面实际93–98%工业硫酸供应，自身化验供应稀释，高纯电子供货独立。

- 选定流: 硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: pva-cz; asml-manufacture

###### 本地清洗氢氧化钠 (`alkali`)

仅真实95–98%固体工业氢氧化钠，自身纯度水分供应配制记录，称量实物产品非假定活性质量。

- 选定流: 氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: pva-cz; asml-manufacture

###### 本地腔室连接不锈钢焊丝 (`weld`)

真实本地腔室连接不锈钢焊丝跨越声明设备制造装配边界，记录自身牌号完成状态尺寸供应实测库存返还，完整外购模块内含制造计一次，未匹配通用件不能证明该接口。

- 选定流: 本地腔室连接不锈钢焊丝
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_materials
- 来源: pva-cz; asml-manufacture

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：真实工厂检查验收试验 (`test`)

#### 输入

##### 产品流

###### 供货氧化铟锡溅射靶 (`target`)

仅有据设备工厂验收真实消耗供货氧化铟锡溅射靶，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 供货氧化铟锡溅射靶
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验去离子水 (`di`)

仅真实工厂试验去离子水，匹配自身离交反渗透供应纯度水分温度密度，供回留存随货填充排出试验水独立表计，无默认超纯指标回收。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验高纯氩气 (`argon`)

仅有据设备工厂验收真实消耗工厂试验高纯氩气，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 工厂试验高纯氩气
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验高纯氮气 (`nitrogen`)

仅有据设备工厂验收真实消耗工厂试验高纯氮气，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 工厂试验高纯氮气
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验氦气 (`helium`)

仅有据设备工厂验收真实消耗工厂试验氦气，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 工厂试验氦气
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验高纯氢气 (`hydrogen`)

仅有据设备工厂验收真实消耗工厂试验高纯氢气，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 工厂试验高纯氢气
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验气态氧 (`oxygen`)

仅真实空分低温厂内气态氧供应，匹配供应纯度相态实测工厂试验收货；该工业接口不证明电子高纯氧，液态供应须独立汽化核算。

- 选定流: 氧气 `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验单硅烷气 (`silane`)

仅实际兼容歧化供货接口纯单硅烷SiH4 CAS7803-62-5气，自身电子级纯度供应相态气瓶消耗，不是有机硅或通用沉积配方。

- 选定流: 硅烷 `2b6e6900-7be6-41d1-bda9-060e8303f96f`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验氨气 (`ammonia`)

仅有据设备工厂验收真实消耗工厂试验氨气，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 工厂试验氨气
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验三氟化氮气 (`nf3`)

仅有据设备工厂验收真实消耗工厂试验三氟化氮气，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 工厂试验三氟化氮气
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验六氟化硫气 (`sf6`)

仅有据设备工厂验收真实消耗工厂试验六氟化硫气，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 工厂试验六氟化硫气
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验四氟化碳气 (`cf4`)

仅有据设备工厂验收真实消耗工厂试验四氟化碳气，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 工厂试验四氟化碳气
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验八氟环丁烷气 (`c4f8`)

仅有据设备工厂验收真实消耗工厂试验八氟环丁烷气，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 工厂试验八氟环丁烷气
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验一氧化二氮气 (`n2o`)

仅有据设备工厂验收真实消耗工厂试验一氧化二氮气，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 工厂试验一氧化二氮气
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验六氟化钨 (`wf6`)

仅有据设备工厂验收真实消耗工厂试验六氟化钨，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 工厂试验六氟化钨
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验二氯硅烷 (`sich2`)

仅有据设备工厂验收真实消耗工厂试验二氯硅烷，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 工厂试验二氯硅烷
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验正硅酸乙酯 (`teos`)

仅有据设备工厂验收真实消耗工厂试验正硅酸乙酯，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 工厂试验正硅酸乙酯
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验氢氟酸水溶液 (`hf`)

仅有据设备工厂验收真实消耗工厂试验氢氟酸水溶液，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 工厂试验氢氟酸水溶液
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验30%盐酸水溶液 (`hcl`)

仅有据工厂验收试验实际30%盐酸水溶液CAS7647-01-0，匹配供应自身化验密度，不能代表气态电子氯化氢。

- 选定流: 盐酸 `56414d25-a353-4d67-b362-87212ce6011d`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验过氧化氢溶液 (`peroxide`)

仅有据设备工厂验收真实消耗工厂试验过氧化氢溶液，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 工厂试验过氧化氢溶液
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验半导体硅晶圆 (`siwafer`)

仅有据设备工厂验收真实消耗工厂试验半导体硅晶圆，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 工厂试验半导体硅晶圆
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂试验正性光刻胶 (`resist`)

仅有据设备工厂验收真实消耗工厂试验正性光刻胶，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 工厂试验正性光刻胶
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂生长试验半导体多晶硅 (`silicon`)

仅有据设备工厂验收真实消耗工厂生长试验半导体多晶硅，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 工厂生长试验半导体多晶硅
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂EUV光源试验锡条进料 (`tin`)

仅观察EUV光源工厂试验实际兼容金属锡条CAS7440-31-5供货，自身纯度实測及条材至熔体配制，锡条非自动液滴进料，不以目录脉冲率推消耗。

- 选定流: 锡条材 `e9c72b13-0d60-4d67-a1c9-b0c963ec62cf`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂保护气氛氮气 (`nitrogenpurge`)

仅设备装配吹扫检查真实厂内保护气氛氮，匹配供应纯度气状态，不自动成为高纯沉积氮。

- 选定流: 氮气 `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### 工厂燃烧治理天然气 (`ng`)

仅有据设备工厂验收真实消耗工厂燃烧治理天然气，自身纯度化验相态供应温压库存返还，排除客户加工配方寿命介质，未解决供货身份不能替代。

- 选定流: 工厂燃烧治理天然气
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_tests
- 来源: asml-manufacture; pva-cz; airliquide-gases; linde-gases

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：未归属共享工厂公用 (`services`)

#### 输入

##### 产品流

###### 工厂电力 (`electricity`)

仅真实兼容中国用户侧低于1千伏电网平均电力，共同期间制造装配洁净室工厂试验交付表计；核对输入真实自产输出库存，仅未归属公用剩余。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: Energy / kWh
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源:

###### 工厂压缩空气 (`air`)

真实外购压缩气体积自身交付压力温度湿度供应，场内制气改计自身实测电量独立损失一次。

- 选定流: 压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位: Volume / m3
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源:

###### 外购工业热 (`heat`)

仅匹配真实中国天然气工业供热，供回自身焓同基准，毛热返还扣一次净热不重复，供应燃料在上游。

- 选定流: 区域或工业热, 天然气 `eb581eb3-c707-41a0-b4e6-ee1854551714`
- 流属性/单位: Energy / MJ
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源:

###### 公用自来水 (`tap`)

真实自来水供应实测共同期间公用供回，自身水分温度密度，仅未归属共享剩余，不重复清洗试验水。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_utilities
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：验收设备交付包装 (`dispatch`)

#### 输入

##### 产品流

###### 瓦楞包装纸板 (`board`)

真实C/E/F瓦楞板至少80%纤维，自身供应再生成分实测包装质量在设备Dnet外。

- 选定流: 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: cpc; pva-cgs

###### 低密度聚乙烯包装薄膜 (`film`)

仅真实PE-LD非自黏非泡孔非增强非层压无衬底薄膜，自身厚度牌号供应，包装称量在Dnet外。

- 选定流: 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: cpc; pva-cgs

###### 交付木托盘 (`pallet`)

仅实际木欧标托盘结构供应实测质量有据复用返还份额，在设备净质量外。

- 选定流: 木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: cpc; pva-cgs

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收配置半导体或显示器制造机器 (`finished`)

一个完整验收机器专用或主要用于声明半导体单晶晶圆器件集成电路平板显示器制造功能，校准配置净质量排除包装不良实耗试验基片介质。

- 选定流: 验收配置半导体或显示器制造机器
- 流属性/单位: Mass / kg
- 数量规则: 1 千克
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: cpc; pva-cgs

##### 废物流

##### 基本流

### 过程：真实废物交接直接排放 (`residues`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 外送钢机加工废料 (`wsteel`)

仅实际未处理工业钢机加工废料离场，自身合金油水化验库存返还接收路线，内部回用原料独立。

- 选定流: 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源: edwards-atlas; edwards-proteus

###### 外送铜机加工废料 (`wcu`)

仅真实称重废铜交接兼容湿法冶金接收路线，自身铜合金水油组成库存返还接收记录。

- 选定流: 废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源: edwards-atlas; edwards-proteus

###### 外送石墨机加工废物 (`wgraphite`)

真实称重外送石墨机加工废物离开设备制造场址，采集自身组成水分库存返还接收路线，已查询未匹配身份不可用，非空气废物与实测空气独立。

- 选定流: 外送石墨机加工废物
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源: edwards-atlas; edwards-proteus

###### 外送废石英坩埚 (`wquartz`)

仅设备工厂试验或不良后真实废石英坩埚交接，自身硅污染水分化验接收路线，无假定寿命更换。

- 选定流: 废坩埚 `3db2ae0b-f79d-42d1-9c1f-7d9594085dbd`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源: edwards-atlas; edwards-proteus

###### 外送废异丙醇 (`spentipa`)

真实称重外送废异丙醇离开设备制造场址，采集自身组成水分库存返还接收路线，已查询未匹配身份不可用，非空气废物与实测空气独立。

- 选定流: 外送废异丙醇
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源: edwards-atlas; edwards-proteus

###### 外送工业废水 (`wastewater`)

真实称重外送工业废水离开设备制造场址，采集自身组成水分库存返还接收路线，已查询未匹配身份不可用，非空气废物与实测空气独立。

- 选定流: 外送工业废水
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源: edwards-atlas; edwards-proteus

###### 外送金属氢氧化物污泥 (`sludge`)

真实称重外送金属氢氧化物污泥离开设备制造场址，采集自身组成水分库存返还接收路线，已查询未匹配身份不可用，非空气废物与实测空气独立。

- 选定流: 外送金属氢氧化物污泥
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源: edwards-atlas; edwards-proteus

###### 外送氟化钙废物 (`fluoride`)

仅观察本地工厂试验治理真实实测氟化钙废物，自身氟化钙水污染化验接收路线，混合污泥毛量非所含氟质量。

- 选定流: 氟化钙废物 `b0edd7b4-ad53-4d05-8bcd-cdb05a6eae03`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源: edwards-atlas; edwards-proteus

###### 外送硅工厂试验废料 (`testwaste`)

仅真实工厂验收试验硅废料交接，自身硅掺杂涂层水分化验复用库存返还接收路线，非所有混合试验基片。

- 选定流: 硅废料 `14ed622c-2306-4edb-b860-2a0779216299`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源: edwards-atlas; edwards-proteus

###### 交接捕集金属磨削粉尘 (`dust`)

真实称重交接捕集金属磨削粉尘离开设备制造场址，采集自身组成水分库存返还接收路线，已查询未匹配身份不可用，非空气废物与实测空气独立。

- 选定流: 交接捕集金属磨削粉尘
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源: edwards-atlas; edwards-proteus

###### 外送低密度聚乙烯包装废物 (`wfilm`)

真实称重外送低密度聚乙烯包装废物离开设备制造场址，采集自身组成水分库存返还接收路线，已查询未匹配身份不可用，非空气废物与实测空气独立。

- 选定流: 外送低密度聚乙烯包装废物
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_wastes
- 来源: edwards-atlas; edwards-proteus

##### 基本流

###### 化石二氧化碳向空气 (`co2`)

仅观察本地设备制造工厂验收真实化石二氧化碳向空气，匹配物种CAS来源普通未指定空气，治理后取样浓度流量时间状态匹配并独立实测无组织，捕集溶解物种属非空气。 化石来源须独立证明，供应电热排放属上游。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源: edwards-atlas; edwards-proteus

###### 化石一氧化碳向空气 (`co`)

仅观察本地设备制造工厂验收真实化石一氧化碳向空气，匹配物种CAS来源普通未指定空气，治理后取样浓度流量时间状态匹配并独立实测无组织，捕集溶解物种属非空气。 化石来源须独立证明，供应电热排放属上游。

- 选定流: 一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源: edwards-atlas; edwards-proteus

###### 异丙醇向空气 (`ipair`)

仅观察本地设备制造工厂验收真实异丙醇向空气，匹配物种CAS来源普通未指定空气，治理后取样浓度流量时间状态匹配并独立实测无组织，捕集溶解物种属非空气。

- 选定流: 异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源: edwards-atlas; edwards-proteus

###### 丙酮向空气 (`acetair`)

仅观察本地设备制造工厂验收真实丙酮向空气，匹配物种CAS来源普通未指定空气，治理后取样浓度流量时间状态匹配并独立实测无组织，捕集溶解物种属非空气。

- 选定流: 丙酮 `08a91e70-3ddc-11dd-9520-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源: edwards-atlas; edwards-proteus

###### 水蒸气向空气 (`vapor`)

仅观察本地设备制造工厂验收真实水蒸气向空气，匹配物种CAS来源普通未指定空气，治理后取样浓度流量时间状态匹配并独立实测无组织，捕集溶解物种属非空气。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源: edwards-atlas; edwards-proteus

###### 分子二氧化氮向空气 (`no2`)

仅观察本地设备制造工厂验收真实分子二氧化氮向空气，匹配物种CAS来源普通未指定空气，治理后取样浓度流量时间状态匹配并独立实测无组织，捕集溶解物种属非空气。 分子NO2不同以NO2当量报告的NOx，碳闭合不能推导。

- 选定流: 二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源: edwards-atlas; edwards-proteus

###### PM10向空气 (`pm10`)

仅观察本地设备制造工厂验收真实PM10向空气，匹配物种CAS来源普通未指定空气，治理后取样浓度流量时间状态匹配并独立实测无组织，捕集溶解物种属非空气。 PM10包括更细颗粒，避免重复组分元素排放。

- 选定流: 颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源: edwards-atlas; edwards-proteus

###### 氟化氢向空气 (`hf_air`)

仅观察本地设备制造工厂验收真实氟化氢向空气，匹配物种CAS来源普通未指定空气，治理后取样浓度流量时间状态匹配并独立实测无组织，捕集溶解物种属非空气。

- 选定流: 氟化氢向空气
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源: edwards-atlas; edwards-proteus

###### 氯化氢向空气 (`hcl_air`)

仅观察本地设备制造工厂验收真实氯化氢向空气，匹配物种CAS来源普通未指定空气，治理后取样浓度流量时间状态匹配并独立实测无组织，捕集溶解物种属非空气。

- 选定流: 氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源: edwards-atlas; edwards-proteus

###### 氨向空气 (`ammonia_air`)

仅观察本地设备制造工厂验收真实氨向空气，匹配物种CAS来源普通未指定空气，治理后取样浓度流量时间状态匹配并独立实测无组织，捕集溶解物种属非空气。

- 选定流: 氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源: edwards-atlas; edwards-proteus

###### 三氟化氮向空气 (`nf3_air`)

仅观察本地设备制造工厂验收真实三氟化氮向空气，匹配物种CAS来源普通未指定空气，治理后取样浓度流量时间状态匹配并独立实测无组织，捕集溶解物种属非空气。

- 选定流: 氟化氮 `23bfd19e-9751-4b06-81f4-93b069a3fd56`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源: edwards-atlas; edwards-proteus

###### 六氟化硫向空气 (`sf6_air`)

仅观察本地设备制造工厂验收真实六氟化硫向空气，匹配物种CAS来源普通未指定空气，治理后取样浓度流量时间状态匹配并独立实测无组织，捕集溶解物种属非空气。

- 选定流: 六氟化硫 `fe0acd60-3ddc-11dd-ac51-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源: edwards-atlas; edwards-proteus

###### 四氟化碳向空气 (`cf4_air`)

仅观察本地设备制造工厂验收真实四氟化碳向空气，匹配物种CAS来源普通未指定空气，治理后取样浓度流量时间状态匹配并独立实测无组织，捕集溶解物种属非空气。

- 选定流: 四氟化碳向空气
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源: edwards-atlas; edwards-proteus

###### 八氟环丁烷向空气 (`c4f8_air`)

仅观察本地设备制造工厂验收真实八氟环丁烷向空气，匹配物种CAS来源普通未指定空气，治理后取样浓度流量时间状态匹配并独立实测无组织，捕集溶解物种属非空气。

- 选定流: 八氟环丁烷向空气
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源: edwards-atlas; edwards-proteus

###### 一氧化二氮向空气 (`n2o_air`)

仅观察本地设备制造工厂验收真实一氧化二氮向空气，匹配物种CAS来源普通未指定空气，治理后取样浓度流量时间状态匹配并独立实测无组织，捕集溶解物种属非空气。

- 选定流: 一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源: edwards-atlas; edwards-proteus

###### 铜向空气 (`copperair`)

仅观察本地设备制造工厂验收真实铜向空气，匹配物种CAS来源普通未指定空气，治理后取样浓度流量时间状态匹配并独立实测无组织，捕集溶解物种属非空气。 合金氧化物盐毛量不同所含元素，原生通用流涵盖金属离子，实际LCIA方法区分物种时须独立查询优先匹配个别物种。

- 选定流: 铜 `fe0acd60-3ddc-11dd-a7a0-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源: edwards-atlas; edwards-proteus

###### 六价铬向空气 (`chromiumair`)

仅观察本地设备制造工厂验收真实六价铬向空气，匹配物种CAS来源普通未指定空气，治理后取样浓度流量时间状态匹配并独立实测无组织，捕集溶解物种属非空气。 须自身六价铬化验，不是总铬金属涂层质量。

- 选定流: 六价铬 `08a91e70-3ddc-11dd-950b-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源: edwards-atlas; edwards-proteus

###### 镍向空气 (`nickelair`)

仅观察本地设备制造工厂验收真实镍向空气，匹配物种CAS来源普通未指定空气，治理后取样浓度流量时间状态匹配并独立实测无组织，捕集溶解物种属非空气。 合金氧化物盐毛量不同所含元素，原生通用流涵盖金属离子，实际LCIA方法区分物种时须独立查询优先匹配个别物种。

- 选定流: 镍 `08a91e70-3ddc-11dd-96c8-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 实测可归属原生单位数量除以验收配置机器净质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: process_output
- 证据类型: collected_record
- 采集协议: cp_emissions
- 来源: edwards-atlas; edwards-proteus


## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| allocate_configuration | 先分配置制造装配试验表计真实验收输出，同期间按因果实测机器小时公用需求分配，不用通用目录通量，可归属失败试验不良返修纳入验收设备負荷，内部转移配对抵销；回收出售产品接收处理披露独立分配无虚构避免负荷。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | 验收配置机器 | foreground_record | 型号配置序号校准验收净质量Naccepted Dnet包含选件填充 | 采用校准可追溯称重核对验收完整机器真实供货配置，排除包装额外备件库存不良实耗试验，核对验收台账同配置期间净质量合计。 | kg | 各实际批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_materials | fabrication | 本地原料成分 | foreground_record | Qattr自身毛量化验水密度库存返还反应硬件留存槽涂层清洗路线 | 称量真实自身原料化学收货，采用自身牌号配方各流化验核对裁切留存反应回收废物库存返还，排除上游完整模块内含材料。 | kg | 各实际批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_modules | assembly | 硬件留存成分接口 | foreground_record | Qattr物料完成状态硬件质量长度包含选件软件独立化学配方化验相态库存返还留存填充 | 硬件分支称量计量真实完整收货安装返还模块缆长并声明余下本地加工，内含化学制造属上游一次。化学成分分支按各本地添加气填充助料自身原生单位独立计量，自身组成水温压密度库存反应留存返还；整模块硬件质量不证明化学数量，本地连接原料独立。 | native unit | 各实际批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_tests | test | 真实验收介质 | foreground_record | Qattr试验目的配置次数重复失败自身化学气基片纯度相态供应数量库存返还光源沉积刻蚀键合划片生长负荷 | 仅表计称量观察可归属工厂验收介质公用，纳入失败重复试验，各物种留存随货填充实耗回收返还独立实测，供应结构介质清单不提供工厂配方，客户加工后续维护在设备制造外。 | native unit | 各实际批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_utilities | services | 工厂公用 | foreground_record | Qattr共同期间输入真实自产输出库存工序表计供回状态焓 | 核对共同期间公用输入真实自产输出库存实测制造装配洁净室试验交付负荷，公用仅分未归属剩余，负平衡调查不截零；毛热同基准独立返还质量乘自身焓扣一次，净热不重复扣；实物水蒸汽与能源独立，供应锅炉燃料在上游。 | native unit | 各实际批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_dispatch | dispatch | 供货机器包装 | foreground_record | Qattr验收物料净质量包装库存复用返还供应运输真实包含硬件填充 | 通过cp_mass实测真实供货配置净硬件填充，各包装独立称量采用自身复用返还基准，目录选件更换清单客户运行耗材不证明随货。 | kg | 各实际批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_wastes | residues | 真实非空气交接 | foreground_record | Qattr称重交接自身组成水物种库存返还接收处理路线水分密度 | 各真实外部废物独立实测，核对自身干湿组成库存复用返还接收路线，所含金属氟与废物毛量不同；真实废水自身水分密度溶解悬浮负荷排出接口，捕集溶解介质属非空气，外部接收排放在处理过程非虚构本地释放。 | kg | 各实际批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |
| cp_emissions | residues | 各观察释放物种 | foreground_record | Qattr CAS物种来源区室治理后浓度匹配流量时间温压干湿氧单位修正无组织取样治理副产 | 按实际配置治理后浓度乘匹配气液流量同期间时间及真实状态修正并独立无组织实测物种；真实进口沉积留存回收销毁湿洗污泥库存独立，目录销毁率未解释残差不能推空气；分子NO2不同NOx当量，自身元素化验不同氧化物PM毛量并防重叠。 | kg | 各实际批次匹配区间 | 一个共同生产期间 | 同声明配置场址 | 每 1 kg 参考流 | 校准原始收据自身化验验收物料不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | 同真实配置期间将各可归属原生单位交换总量除以校准验收完整机器净质量之和，保留原始数量不确定性。 | Qattr; Dnet; cp_mass | native-unit amount per kg reference flow |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_qnd | all inventory rows | 同配置期间Qattr纳入可归属原料装配洁净室试验不良返修负荷，Naccepted为验收完整机器数量，Dnet为校准净质量合计，单台交换=Qattr/Naccepted，实测平均净质量=Dnet/Naccepted，每千克交换=Qattr/Dnet，保留原生分子，无目录质量加工通量试验时间默认值。 | 同配置校准称重验收台账 |
| quality_physical | all inventory rows | 各元素物种项采用自身毛量化验水干湿基库存反应留存返还，合金污泥溶液质量不同所含元素化学量，各水流自身水分真实温度密度反应留存填充蒸发排出库存，内部返还配对抵销。 | 各流自身化验库存反应状态测量 |
| quality_solvent | ipa; acetone; spentipa; ipair; acetair; wastewater | 逐溶剂自身化验库存留存回收捕集销毁废水废介质去向与独立真实空气测量核对，捕集不同销毁，非空气未解释残差不能变空气。 | 独立去向测量 |
| quality_gases | all inventory rows | 各工厂试验气前驱体须真实CAS物种相纯度供应容器汽化气瓶管路库存返还记录，自身反应副产留存湿洗去向独立于入口气目录销毁率，工业氧保护氮非默认电子级，电子供货清单非工厂消耗证据。 | 真实供应化验试验治理记录 |
| quality_scope | reference product | 保留整个单晶晶圆器件集成电路显示主要功能边界真实供货硬件选件软件留存填充，PVA32英寸坩埚是尺寸，不含磁体质量非通用Dnet，通用DI回收冷水机泵计量独供零件须邻类审查。 | 真实订单物料原始技术原件 |
| quality_identity | all inventory rows | 匹配真实发布状态100类型原生基准内部ID属性单位组官方双语名完整分类化学牌号相供应地域基本来源区室，各真实未列材料化学气燃料制冷剂填充模块刀片滤芯树脂运输废物排放新增独立查询原子实测交换，未解决参考部件化学废物保留缺口，缺失不同零，不适用须实物证据。 | 自身完整直读身份供应配置证据 |


## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_scope | 须真实完整配置机器主要半导体单晶晶圆器件集成电路显示制造功能及双语等效每千克净参考，拒石墨热场铝硅银混合物独立公用客户产品作整机替代。 | cpc |
| validate_makebuy | 须真实完整供货配置物料本地自制外购洁净室试验边界，拒重复模块内含制造假定目录填充选件客户配方寿命耗材作工厂负荷，纳入可归属失败重复试验返修。 | cpc; pva-cz; pva-cgs; ulvac-display; evg-bond; asml-manufacture; asml-products; asml-euv; tel-product; oxford-deposition; oxford-etch; disco-dicer; disco-water; edwards-atlas; edwards-proteus; airliquide-gases; linde-gases |
| validate_balances | 须各流自身元素水溶剂平衡治理后物种浓度乘匹配流量时间状态独立无组织，公用共同期间输入真实自产输出库存核对归属表计仅未归属剩余，毛热同基准独立返还扣一次净热不重复。 |  |
| validate_species | 须分子NO2非NOx当量真实六价铬非总铬自身所含金属非盐氧化物毛量及PM元素不重叠核算，适用LCIA区分时优先个别镍铜物种。目录销毁率化学名称不证明销毁供应相纯度释放物种，捕集溶解物种属非空气，真实报告执行跳过检查发现完整性。 | edwards-atlas; edwards-proteus |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 真实声明配置主要专用半导体单晶晶圆器件集成电路显示机器制造 |
| excluded_use | 部件公用替代客户加工产品配方目录质量性能通用工厂气假设 |
| required_metadata | 全部参考限定同配置Qattr/Naccepted/Dnet原生单位自身化验状态真实物料自制外购试验供应运输接收分配缺口 |
| required_quality_disclosure | 实测估计缺失校准取样不确定性实物残差身份范围缺口真实执行跳过检查完整性 |
| update_trigger | 机器主要功能配置物料牌号纯度相供应自制外购场址期间验收处理变化 |


## 11. 数据源

| source_id | type | title | reference | used_for |
| --- | --- | --- | --- | --- |
| cpc | official_guidance | 联合国CPC3.0解释注释 | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅真实原始类别架构制造或供货治理接口，无通用质量包含配方产率负荷寿命销毁因子。 |
| pva-cz | handbook | PVA CZ晶体生长与制造接口 | https://www.pvatepla.com/products-technologies/crystal-growth/czochralski-process/ | 仅真实原始类别架构制造或供货治理接口，无通用质量包含配方产率负荷寿命销毁因子。 |
| pva-cgs | handbook | PVA CGS1218真实供货范围 | https://www.pvatepla.com/fileadmin/sitepackage/pdf/brochures/PVA_CGS1218.pdf | 仅真实原始类别架构制造或供货治理接口，无通用质量包含配方产率负荷寿命销毁因子。 |
| ulvac-display | handbook | ULVAC显示器溅射装置 | https://www.ulvac.co.jp/en/products/sputtering_system/smd-vertical/ | 仅真实原始类别架构制造或供货治理接口，无通用质量包含配方产率负荷寿命销毁因子。 |
| evg-bond | handbook | EVG半导体键合设备 | https://www.evgroup.com/products/bonding/ | 仅真实原始类别架构制造或供货治理接口，无通用质量包含配方产率负荷寿命销毁因子。 |
| asml-manufacture | handbook | ASML设备制造装配测试 | https://www.asml.com/careers/teams/manufacturing | 仅真实原始类别架构制造或供货治理接口，无通用质量包含配方产率负荷寿命销毁因子。 |
| asml-products | handbook | ASML设备组合及邻类审查 | https://www.asml.com/en/products | 仅真实原始类别架构制造或供货治理接口，无通用质量包含配方产率负荷寿命销毁因子。 |
| asml-euv | handbook | ASML EUV真实光源光学真空结构 | https://www.asml.com/en/products/euv-lithography-systems | 仅真实原始类别架构制造或供货治理接口，无通用质量包含配方产率负荷寿命销毁因子。 |
| tel-product | handbook | TEL制造设备组合 | https://www.tel.com/product/ | 仅真实原始类别架构制造或供货治理接口，无通用质量包含配方产率负荷寿命销毁因子。 |
| oxford-deposition | handbook | Oxford ICP-CVD结构 | https://plasma.oxinst.com/products/icpcvd/plasmapro-100-icpcvd | 仅真实原始类别架构制造或供货治理接口，无通用质量包含配方产率负荷寿命销毁因子。 |
| oxford-etch | handbook | Oxford Estrelas刻蚀真空结构 | https://plasma.oxinst.com/assets/uploads/Estrelas_Brochure.pdf | 仅真实原始类别架构制造或供货治理接口，无通用质量包含配方产率负荷寿命销毁因子。 |
| disco-dicer | handbook | DISCO DAD3651划片结构 | https://www.disco.co.jp/eg/products/dicer/dad3651.html | 仅真实原始类别架构制造或供货治理接口，无通用质量包含配方产率负荷寿命销毁因子。 |
| disco-water | handbook | DISCO DWR1722独立配套水处理 | https://www.disco.co.jp/eg/products/accessory/dwr1722.html | 仅真实原始类别架构制造或供货治理接口，无通用质量包含配方产率负荷寿命销毁因子。 |
| edwards-atlas | handbook | Edwards Atlas燃烧治理 | https://www.edwardsvacuum.com/en-us/semiconductor/our-products/atlas | 仅真实原始类别架构制造或供货治理接口，无通用质量包含配方产率负荷寿命销毁因子。 |
| edwards-proteus | handbook | Edwards Proteus无燃气等离子治理 | https://www.edwardsvacuum.com/en-us/semiconductor/our-products/proteus | 仅真实原始类别架构制造或供货治理接口，无通用质量包含配方产率负荷寿命销毁因子。 |
| airliquide-gases | handbook | Air Liquide研究中心大学气体供应手册 | https://uk.airliquide.com/statics/2022-08/ra_nwe_brochure_2_0.pdf | 仅真实原始类别架构制造或供货治理接口，无通用质量包含配方产率负荷寿命销毁因子。 |
| linde-gases | handbook | Linde电子特气供货身份 | https://www.linde-gas.com/products-and-services/gases/specialty-gases-for-electronics | 仅真实原始类别架构制造或供货治理接口，无通用质量包含配方产率负荷寿命销毁因子。 |
