---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47140-to-47160
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 电子管、半导体器件与集成电路专用零件

## 1. 范围与适用性

本方法覆盖向外供应的电子管、半导体器件（包括光敏/LED 器件及已安装压电晶体）与集成电路专用组成零件。产品身份需宿主用途图纸、零件编号、交付状态及独立供应证据。纳入电子管电极、储备式阴极与吸气组件，IC/器件引线框架、封装基板及符合条件的封装/馈通子组件。功能性或活性表面本身不排除零件。

排除完整电子管、器件及 IC、通用原始晶圆/材料、通用印刷电路板及制造/试验设备。未安装裸片或晶圆不自动成为零件：须审查其是否已具备完成的半导体/IC 功能。未完成的功能元件仅在具备具体零件边界证据时适用。独立玻璃外壳/预制件可能属于另一个玻璃类别；应与已接受的玻璃金属电气子组件区分。模糊的玻璃、裸片、封装基板/印刷电路、中介层或谐振元件身份须个别分类及完成状态审查，不删除其范围或假定映射。专用宿主适配或 SHINKO 销售本身不能确定零件类别成员资格；独立属于印刷电路的基板适用自身类别。来源：unsd-cpc3-parts；unsd-cpc21-correspondence；census-semiconductor-state；shinko-package；saes-cathodes。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47140-to-47160 |
| classification_refs | CPC 3.0:47173 |
| covered_products | 电子管、半导体器件与集成电路专用零件 |
| excluded_products | 完整宿主器件；通用材料；机械设备；独立分类制品 |
| representative_product | 按图纸验收的 IC 引线框架；其他符合条件零件使用各自声明身份 |
| production_route | 实际金属、层压/陶瓷、粉末/吸气/阴极或气密路线及有条件表面工序 |
| market_state | 工厂出口独立供应的一个验收零件状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 电子管、半导体器件与集成电路专用零件 |
| How much | 1 kg |
| How well | 宿主产品族及主要专用用途；零件编号与图纸修订；交付完成状态；材料牌号与化验；几何、表面与公差；适用于该零件的电气/热/真空要求；验收批次与数量；净质量；自制/外购路线；供应方已完成工序；场址、期间与出口 |
| How long or cycle | 制造出口一次供应；不声明宿主服役寿命或使用阶段性能 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收合格图纸定义电子专用零件 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 宿主产品族及主要专用用途；零件编号与图纸修订；交付完成状态；材料牌号与化验；几何、表面与公差；适用于该零件的电气/热/真空要求；验收批次与数量；净质量；自制/外购路线；供应方已完成工序；场址、期间与出口 |

D 为报告期内同一图纸修订及交付完成状态的正实测验收净质量。排除运输载体、不合格件、试验耗材及包装。保留在零件中的金属化层、封接玻璃与组成子零件计入 D。一个数据集不得按质量平均不兼容零件身份。按件订单通过实测批次净质量与匹配验收数量换算，不允许假定单件质量。互操作发布前须解决实际零件参考产品 UUID。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | final_product | Mass | kg | cp_final_product 用校准天平测量 D；各可归属期间交换以 D 归一化。 |
| count_crosscheck | final_product | Mass | kg | 记录相同批次/图纸/完成状态的验收数量与实测质量。订单换算以批次净质量除以对应验收数量；不得采用包装毛质量或不同零件修订。 |
| species_basis | material and species mass balances | Mass | kg | 区分溶液/粉末/产品质量与所含元素；各平衡项保留化验、含水与有效含量。保留电能单位；1 kWh = 3.6 MJ。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收材料/粉末/层压板/预制件或专用购入子零件；披露供应方已完成工序 |
| starting_condition_role | 明确供应方到前景接口 |
| product_classification_scope | 电子管、半导体器件与集成电路专用零件 |
| recursive_input_rule | 购入同族零件仅一次携带上游供应负荷；抵消内部转移，不删除重复加工消耗 |
| upstream_dataset_requirement | 将每项进料及购入公用工程追溯至实际供应方、状态、地域/年份及所代表工序；未解决关联属缺口，不视为零 |
| disclosure | 宿主产品族及主要专用用途；零件编号与图纸修订；交付完成状态；材料牌号与化验；几何、表面与公差；适用于该零件的电气/热/真空要求；验收批次与数量；净质量；自制/外购路线；供应方已完成工序；场址、期间与出口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_make_buy | all processes | 按零件/BOM 修订建立自制/外购矩阵：购入完整子零件包含嵌入材料及供应工序；自制路线改为采集实际组成投入及工序。委外加工仅一次纳入运输及供应服务。 | `shinko-package`; `saes-cathodes` |
| boundary_routes | all processes | 纳入出口前实际成形、洁净室/真空、沉积/电镀、烧成/封接、返工、零件验收及治理。仅在已证实的专用零件路线或所关联上游供应过程中纳入半导体晶圆制造，不强加于所有引线框架或电子管零件。 | `shinko-business`; `saes-metallurgy` |
| boundary_later_use | all processes | 宿主组装、宿主运行、客户激活/烧成与寿命终结处于工厂生产之外，除非交付声明零件时实际实施。披露资本/维护及运输处理。完成数据集前将每种实际遗漏化学品、燃料、气体、废物及组分增为独立原子交换。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| receipt | 专用身份、自制/外购与接收 | required | 通过图纸及供应接口追溯各购入子零件或原料。 | 前景生产 | 每 1 kg 参考流 |
| metal_form | 金属成形与图形加工 | conditional | 实际引线框架/电极/盖：冲压、蚀刻、机械加工、拉制、清洗及内部返工。 | 前景生产 | 每 1 kg 参考流 |
| substrate | 封装基板与绝缘体 | conditional | 实际有机多层或陶瓷体：层压或粉料准备、成形、钻孔、图形加工及烧成；区分购入成品基板。 | 前景生产 | 每 1 kg 参考流 |
| tube_part | 电子管阴极、吸气与封接组件 | conditional | 按交付零件实际需要实施电极/吸气粉料成形、烧结、浸渍/涂覆、玻璃预制件成形/退火、玻璃金属连接及真空准备。 | 前景生产 | 每 1 kg 参考流 |
| finish | 表面金属化、电镀与连接 | conditional | 仅纳入实际零件状态所需沉积、电镀、冲洗、干燥、固化、钎焊或焊接。记录配方与治理，不设通用晶圆制造链。 | 前景生产 | 每 1 kg 参考流 |
| acceptance | 零件验收与交付 | required | 按零件规范实施尺寸/表面、导电、导通/绝缘、气密或发射试验；区分不合格品、试验消耗及包装。 | 前景生产 | 每 1 kg 参考流 |
| utilities | 工厂公用工程与污染控制 | required | 可归属购入能源、水循环、通风、真空、处理及维护，核对共享计量。 | 前景生产 | 每 1 kg 参考流 |

### 过程：专用身份、自制/外购与接收 (`receipt`)

#### 输入

##### 产品流

###### 引线框架 (`purchased_leadframe`)

仅用于与声明图纸/材料/表面相符的外购 IC 封装引线框架。全球产品身份不是场址供应过程。不采用数据库建议的质量占比，不将此 UUID 用于阴极/基板。

- 选定流：引线框架 `7246f723-e925-4cb4-a861-02b5368fac6d`
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_purchased_leadframe
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_purchased_leadframe`
- 来源：`shinko-package`

###### 购入烧成氧化铝陶瓷 IC 封装体 (`purchased_alumina_body`)

外购路径：供应方已实施成形/烧成；仅一次关联供应负荷与运输，只跳过已完成工序。

- 选定流：购入烧成氧化铝陶瓷 IC 封装体
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_purchased_alumina_body
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_purchased_alumina_body`
- 来源：`shinko-business`

###### 购入微波管储备式阴极 (`purchased_cathode`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：购入微波管储备式阴极
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_purchased_cathode
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_purchased_cathode`
- 来源：`saes-cathodes`

###### 交流电 (`receipt_electricity`)

仅作为中国 1–35 千伏消费组合用户端供应的限定示例。采用实际地区、电压及年份供应过程；其他接口需另行核实身份。不得用来源特定焚烧或生物质电力替代。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：采集的可归属期间数量除以 D；cp_receipt_electricity
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_receipt_electricity`
- 来源：`shinko-business`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：金属成形与图形加工 (`metal_form`)

#### 输入

##### 产品流

###### C19400 铜合金带材 (`c19400_strip`)

仅在实际引线框架图纸规定时作为具体进料示例；不作必需牌号或 Alloy42、镍、钼的代理。逐项增设实际牌号。

- 选定流：C19400 铜合金带材
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_c19400_strip
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_c19400_strip`
- 来源：`shinko-business`

###### 铁镍 Alloy42 带材 (`alloy42_strip`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：铁镍 Alloy42 带材
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_alloy42_strip
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_alloy42_strip`
- 来源：`shinko-business`

###### 电子管电极用镍板 (`nickel_sheet`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：电子管电极用镍板
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_nickel_sheet
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_nickel_sheet`
- 来源：`shinko-business`

###### 氯化铁水溶液蚀刻剂 (`ferric_chloride`)

仅用于氯化铁蚀刻路线；声明溶液浓度、溶解铜/镍负荷与再生。其他蚀刻剂需独立化学品行。

- 选定流：氯化铁水溶液蚀刻剂
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_ferric_chloride
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_ferric_chloride`
- 来源：`shinko-business`

###### 交流电 (`metal_form_electricity`)

仅作为中国 1–35 千伏消费组合用户端供应的限定示例。采用实际地区、电压及年份供应过程；其他接口需另行核实身份。不得用来源特定焚烧或生物质电力替代。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：采集的可归属期间数量除以 D；cp_metal_form_electricity
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_metal_form_electricity`
- 来源：`shinko-business`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### C19400 铜合金冲压废料 (`metal_scrap`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：C19400 铜合金冲压废料
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_metal_scrap
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_metal_scrap`
- 来源：`shinko-business`

##### 基本流

### 过程：封装基板与绝缘体 (`substrate`)

#### 输入

##### 产品流

###### 陶瓷封装体用氧化铝粉 (`alumina_powder`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：陶瓷封装体用氧化铝粉
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_alumina_powder
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_alumina_powder`
- 来源：`shinko-business`

###### IC 封装基板用覆铜环氧玻璃层压板 (`epoxy_glass_laminate`)

购入层压板包含供应铜/树脂/玻璃生产；自制铺层以独立实际铜箔、树脂及增强体投入替代。不重复计入嵌入材料。

- 选定流：IC 封装基板用覆铜环氧玻璃层压板
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_epoxy_glass_laminate
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_epoxy_glass_laminate`
- 来源：`shinko-business`

###### 封装基板布线用铜箔 (`copper_foil`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：封装基板布线用铜箔
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_copper_foil
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_copper_foil`
- 来源：`shinko-business`

###### 封装基板介电层用环氧树脂 (`epoxy_resin`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：封装基板介电层用环氧树脂
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_epoxy_resin
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_epoxy_resin`
- 来源：`shinko-business`

###### 交流电 (`substrate_electricity`)

仅作为中国 1–35 千伏消费组合用户端供应的限定示例。采用实际地区、电压及年份供应过程；其他接口需另行核实身份。不得用来源特定焚烧或生物质电力替代。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：采集的可归属期间数量除以 D；cp_substrate_electricity
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_substrate_electricity`
- 来源：`shinko-business`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：电子管阴极、吸气与封接组件 (`tube_part`)

#### 输入

##### 产品流

###### 多孔阴极体用钨粉 (`tungsten_powder`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：多孔阴极体用钨粉
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_tungsten_powder
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_tungsten_powder`
- 来源：`saes-metallurgy`

###### 锆钒铁吸气合金粉 (`getter_alloy`)

仅在实际吸气配方规定该合金时采用；记录各组分比例与氧污染；钡基蒸散型吸气剂采用独立路线及流。

- 选定流：锆钒铁吸气合金粉
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_getter_alloy
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_getter_alloy`
- 来源：`saes-metallurgy`

###### 钡钙铝酸盐阴极浸渍剂 (`barium_aluminate`)

仅用于实际储备式阴极配方中由供应方定义的浸渍剂；获取化验、粘结剂及批次组成，不猜测化学计量。

- 选定流：钡钙铝酸盐阴极浸渍剂
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_barium_aluminate
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_barium_aluminate`
- 来源：`saes-metallurgy`

###### 硼硅酸盐玻璃封接预制件 (`glass_preform`)

实际气密组件用购入预制件；声明玻璃牌号、膨胀匹配及供应方已完成熔制/成形。场址自制时改为逐项实际配合料并保留熔制/退火负荷。独立玻璃外壳不能自动视为映射的器件零件。

- 选定流：硼硅酸盐玻璃封接预制件
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_glass_preform
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_glass_preform`
- 来源：`saes-metallurgy`

###### 气密馈通用铁镍钴可伐合金引脚 (`kovar_pin`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：气密馈通用铁镍钴可伐合金引脚
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_kovar_pin
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_kovar_pin`
- 来源：`saes-metallurgy`

###### 交流电 (`tube_part_electricity`)

仅作为中国 1–35 千伏消费组合用户端供应的限定示例。采用实际地区、电压及年份供应过程；其他接口需另行核实身份。不得用来源特定焚烧或生物质电力替代。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：采集的可归属期间数量除以 D；cp_tube_part_electricity
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_tube_part_electricity`
- 来源：`saes-metallurgy`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：表面金属化、电镀与连接 (`finish`)

#### 输入

##### 产品流

###### 硫酸镍电镀水溶液 (`nickel_sulfate`)

仅用于实际镀镍；镍盐、添加剂与阳极分供时分别记录；核对镍组分平衡，不把溶液质量等同镍质量。

- 选定流：硫酸镍电镀水溶液
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_nickel_sulfate
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_nickel_sulfate`
- 来源：`shinko-business`

###### 银沉积靶材 (`silver_target`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：银沉积靶材
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_silver_target
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_silver_target`
- 来源：`shinko-business`

###### 盐酸清洗水溶液 (`hydrochloric_acid`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：盐酸清洗水溶液
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_hydrochloric_acid
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hydrochloric_acid`
- 来源：`shinko-business`

###### 异丙醇清洗溶剂 (`isopropanol`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：异丙醇清洗溶剂
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_isopropanol
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_isopropanol`
- 来源：`shinko-business`

###### 氮气工艺气体 (`nitrogen`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：氮气工艺气体
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_nitrogen
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_nitrogen`
- 来源：`shinko-business`

###### 交流电 (`finish_electricity`)

仅作为中国 1–35 千伏消费组合用户端供应的限定示例。采用实际地区、电压及年份供应过程；其他接口需另行核实身份。不得用来源特定焚烧或生物质电力替代。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：采集的可归属期间数量除以 D；cp_finish_electricity
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_electricity`
- 来源：`shinko-business`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 含镍电镀污泥 (`plating_sludge`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：含镍电镀污泥
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_plating_sludge
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_plating_sludge`
- 来源：`shinko-business`

##### 基本流

###### 排入空气的异丙醇 (`ipa_air`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：排入空气的异丙醇
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_ipa_air
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_ipa_air`
- 来源：`shinko-business`

### 过程：零件验收与交付 (`acceptance`)

#### 输入

##### 产品流

###### 氦气检漏气体 (`helium`)

仅用于实际气密零件试验；纳入气体消耗及不合格/破坏性试验件，不虚设完整电子管寿命试验。

- 选定流：氦气检漏气体
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_helium
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_helium`
- 来源：`shinko-business`

###### 聚乙烯防静电运输袋 (`polyethylene_bag`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：聚乙烯防静电运输袋
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_polyethylene_bag
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_polyethylene_bag`
- 来源：`shinko-business`

###### 瓦楞纸板运输箱 (`corrugated_box`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：瓦楞纸板运输箱
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_corrugated_box
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_corrugated_box`
- 来源：`shinko-business`

###### 交流电 (`acceptance_electricity`)

仅作为中国 1–35 千伏消费组合用户端供应的限定示例。采用实际地区、电压及年份供应过程；其他接口需另行核实身份。不得用来源特定焚烧或生物质电力替代。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：采集的可归属期间数量除以 D；cp_acceptance_electricity
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance_electricity`
- 来源：`shinko-business`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格图纸定义电子专用零件 (`final_product`)

在具体数据集中将此产出绑定至恰好一个实际图纸定义零件身份及实际交付状态。引线框架、基板、电极/阴极、吸气或气密子组件均需自身核实参考身份。不同零件编号/完成状态拆为独立产出行及数据集；本行不是材料集合，也不允许将引线框架 UUID 用于整个产品族。

- 选定流：验收合格图纸定义电子专用零件
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_final_product`
- 来源：`shinko-package`

##### 废物流

##### 基本流

### 过程：工厂公用工程与污染控制 (`utilities`)

#### 输入

##### 产品流

###### 交流电 (`utilities_electricity`)

仅作为中国 1–35 千伏消费组合用户端供应的限定示例。采用实际地区、电压及年份供应过程；其他接口需另行核实身份。不得用来源特定焚烧或生物质电力替代。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：采集的可归属期间数量除以 D；cp_utilities_electricity
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities_electricity`
- 来源：`shinko-business`

###### 炉用燃烧天然气 (`natural_gas`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：炉用燃烧天然气
- 流属性/单位：Net calorific value / MJ
- 数量规则：采集的可归属期间数量除以 D；cp_natural_gas
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_natural_gas`
- 来源：`shinko-business`

###### 外购工艺蒸汽 (`steam`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：外购工艺蒸汽
- 流属性/单位：Net calorific value / MJ
- 数量规则：采集的可归属期间数量除以 D；cp_steam
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_steam`
- 来源：`shinko-business`

###### 购入去离子工艺水 (`water`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：购入去离子工艺水
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_water
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`shinko-business`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送处理的含铜工艺废水 (`wastewater`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：送处理的含铜工艺废水
- 流属性/单位：Volume / m3
- 数量规则：采集的可归属期间数量除以 D；cp_wastewater
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_wastewater`
- 来源：`shinko-business`

##### 基本流

###### 排入空气的化石二氧化碳 (`co2_air`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：排入空气的化石二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_co2_air
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_co2_air`
- 来源：`shinko-business`

###### 排入空气的氮氧化物，以 NO2 计 (`nox_air`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：排入空气的氮氧化物，以 NO2 计
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_nox_air
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_nox_air`
- 来源：`shinko-business`

###### 排入空气的一氧化碳 (`co_air`)

仅在实际配方/BOM存在时适用；核实不发生并与未知区分。

- 选定流：排入空气的一氧化碳
- 流属性/单位：Mass / kg
- 数量规则：采集的可归属期间数量除以 D；cp_co_air
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_co_air`
- 来源：`shinko-business`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | all processes | 分配前细分专用批次/工序。共享炉、洁净室、真空及处理需求按能够解释消耗的实测设备占用/负荷、面积时间或污染负荷归属；披露因果基准与不确定性。避免在无关零件技术间按质量分配。 |  |
| allocation_rework | all processes | 在可归属投入中保留不合格、破坏性试验及重复加工，仅验收净可售零件计入 D。回收金属/溶剂不是无负荷产品，也不自动取得避免生产抵扣。声明废物与共产品状态及所用建模惯例，不混用。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_purchased_leadframe | receipt | purchased_leadframe | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_purchased_alumina_body | receipt | purchased_alumina_body | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_purchased_cathode | receipt | purchased_cathode | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_c19400_strip | metal_form | c19400_strip | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_alloy42_strip | metal_form | alloy42_strip | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_nickel_sheet | metal_form | nickel_sheet | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_ferric_chloride | metal_form | ferric_chloride | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_alumina_powder | substrate | alumina_powder | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_epoxy_glass_laminate | substrate | epoxy_glass_laminate | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_copper_foil | substrate | copper_foil | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_epoxy_resin | substrate | epoxy_resin | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_tungsten_powder | tube_part | tungsten_powder | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_getter_alloy | tube_part | getter_alloy | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_barium_aluminate | tube_part | barium_aluminate | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_glass_preform | tube_part | glass_preform | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_kovar_pin | tube_part | kovar_pin | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_nickel_sulfate | finish | nickel_sulfate | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_silver_target | finish | silver_target | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_hydrochloric_acid | finish | hydrochloric_acid | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_isopropanol | finish | isopropanol | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_nitrogen | finish | nitrogen | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_helium | acceptance | helium | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_polyethylene_bag | acceptance | polyethylene_bag | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_corrugated_box | acceptance | corrugated_box | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量收料、领用及退回，核对期初/期末库存与批次化验；记录实际牌号、状态与供应方。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_receipt_electricity | receipt | receipt_electricity | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 分表计量实际运行、待机及返工消耗；核对总购电并仅一次分配实测共享负荷。保留千瓦时记录并精确换算 MJ。 | MJ | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_metal_form_electricity | metal_form | metal_form_electricity | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 分表计量实际运行、待机及返工消耗；核对总购电并仅一次分配实测共享负荷。保留千瓦时记录并精确换算 MJ。 | MJ | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_substrate_electricity | substrate | substrate_electricity | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 分表计量实际运行、待机及返工消耗；核对总购电并仅一次分配实测共享负荷。保留千瓦时记录并精确换算 MJ。 | MJ | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_tube_part_electricity | tube_part | tube_part_electricity | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 分表计量实际运行、待机及返工消耗；核对总购电并仅一次分配实测共享负荷。保留千瓦时记录并精确换算 MJ。 | MJ | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_finish_electricity | finish | finish_electricity | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 分表计量实际运行、待机及返工消耗；核对总购电并仅一次分配实测共享负荷。保留千瓦时记录并精确换算 MJ。 | MJ | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_acceptance_electricity | acceptance | acceptance_electricity | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 分表计量实际运行、待机及返工消耗；核对总购电并仅一次分配实测共享负荷。保留千瓦时记录并精确换算 MJ。 | MJ | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_utilities_electricity | utilities | utilities_electricity | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 分表计量实际运行、待机及返工消耗；核对总购电并仅一次分配实测共享负荷。保留千瓦时记录并精确换算 MJ。 | MJ | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_natural_gas | utilities | natural_gas | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 计量记录条件下供应体积并采用实测低位热值；区分外购热与自有炉燃气。 | MJ | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_steam | utilities | steam | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 测量蒸汽流量及进汽/回流焓；保留压力、温度与凝结水回流边界。 | MJ | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_water | utilities | water | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 计量新供水并单独记录内部循环、处理及排污；不得将循环流量重复作为购入需求。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_metal_scrap | metal_form | metal_scrap | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 按牌号、氧化/涂层及去向称量外送废料；内部返回在场址平衡中抵消并保留再加工负荷。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_plating_sludge | finish | plating_sludge | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 称量湿污泥；在一致含水基准下测定干固体与镍化验值，记录去向与处理。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_wastewater | utilities | wastewater | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 测量外部处理转移体积并匹配铜/化学品化验。场址处理时记录处理投入及残余物，再独立记录实际基本流排放。 | m3 | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_ipa_air | finish | ipa_air | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 采用组分特定废气/逸散监测或经验证溶剂平衡，纳入回收库存及治理；不得将总挥发性有机物等同此组分。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_co2_air | utilities | co2_air | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 采用实际燃料碳化验、氧化及捕集/其他碳流，或匹配烟气监测；仅计化石碳。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_nox_air | utilities | nox_air | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 采用治理后匹配浓度、气流、运行时长及报告组分；燃料碳平衡不能确定氮氧化物。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_co_air | utilities | co_air | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 采用治理后匹配组分监测；仅凭燃料碳平衡不能确定一氧化碳。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |
| cp_final_product | acceptance | final_product | production_record | 批次；图纸修订；完成状态；数量；单位；化验/条件；期初/期末库存；验收净产出 D | 按图纸修订/批次用校准天平称量验收零件净质量；运输载体/卷盘/包装不留在销售零件中时扣除。核对数量与验收登记。 | kg | 各批次及计量区间 | 匹配且有代表性的报告期，覆盖启停、待机、不合格及返工 | 声明工序及可归属共享服务 | 每 1 kg 参考流 | 校准；化验；供应接口；验收及库存核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | 各可归属期间交换除以匹配的正验收净产出 D；产出参考为 1 千克。 | D; interval quantity; applicable protocol | 每 1 kg 参考流交换 |  |
| count_conversion | final_product | 匹配批次净质量 / 匹配验收数量获得订单换算质量；不采用目录典型质量。 | cp_final_product; count; drawing revision | 实测同状态件数到质量关系 |  |
| element_balance | metal_form; finish; tube_part | 逐元素：外部投入加期初库存等于产品保留加外送残余物/排放加期末库存，考虑实测不确定性。各流质量乘匹配元素化验，抵消成对内部转移。化学组分须纳入实测反应消耗/生成及回收库存。 | mass; matched assay; stocks; reaction; uncertainty | 已审查元素/组分闭合 |  |
| energy_conversion | electricity rows | 实测千瓦时乘以 3.6 转为 MJ；区分外购公用工程与自发能源，仅一次分配自发能源燃料/治理负荷。 | meter; unit; provider | 声明供应接口的 MJ |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| identity | final_product | 宿主产品族及主要专用用途；零件编号与图纸修订；交付完成状态；材料牌号与化验；几何、表面与公差；适用于该零件的电气/热/真空要求；验收批次与数量；净质量；自制/外购路线；供应方已完成工序；场址、期间与出口 | 订单；图纸；宿主用途；供应目录；验收 |
| completeness | all processes | 维护有限路线/流清单：适用已测、适用未知、已核实 not_applicable。未知不等于零；增设示例以外实际气体、排放、清洗与处理行。 | 工序流转单；BOM；计量；安全数据；排放审计 |
| uncertainty | all exchanges | 不规定通用成材率、质量、能源、排放、寿命或 GWP 范围。采用实际前景分布及不确定性；披露缺失经验界限。 | 校准记录及明确缺口登记 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_part | final_product | 确认专用宿主/零件用途、图纸修订及交付完成状态。逐项审查完整裸片/器件及玻璃/设备反例；具体数据集不得带有未解决分类假设。 | `unsd-cpc3-parts`; `census-semiconductor-state` |
| validate_denominator | all inventory rows | 要求正校准验收 D、相同报告范围及双语每千克基准；核对件数、试验不合格、载体皮重与保留表面层。 |  |
| validate_balance | all processes | 按记录计量不确定性检查元素/组分/水/库存闭合；污泥或镀液总质量不等同所含金属。保留反应与内部转移证据。一氧化碳及氮氧化物需独立组分证据。 |  |
| validate_provider | all exchanges | 核实产品/废物/基本流类型、具体身份、属性/单位及供应接口；仅凭 UUID 名称不能确定牌号、质量占比、地域或过程负荷。未解决实际零件 UUID 与缺失经验范围仍为披露的发布缺口。 |  |
| validate_route | all processes | 确认各自制/外购工序仅计一次、实际零件状态试验及仅工厂公用工程；区分核实不发生、实测零与未知。跳过适用路线或缺供应过程意味着数据不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个符合条件专用零件的前景生产包 |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 为宿主组装供应相同声明身份/状态的零件 |
| excluded_use | 未限定类别平均；完整器件生产；宿主寿命/使用影响 |
| required_metadata | 宿主产品族及主要专用用途；零件编号与图纸修订；交付完成状态；材料牌号与化验；几何、表面与公差；适用于该零件的电气/热/真空要求；验收批次与数量；净质量；自制/外购路线；供应方已完成工序；场址、期间与出口 |
| required_quality_disclosure | 供应过程/UUID、范围、路线、平衡及计量缺口；来源范围；有条件不发生；分配不确定性 |
| update_trigger | 图纸/材料/状态/路线/供应过程变更，实测成材率或过程控制变更 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc3-parts | official_guidance | UNSD CPC 3.0 Explanatory Notes, 30 June 2025, printed pages255–256, classes4714–4717. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; current detail https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/47173 | 提供当前宿主名称及零件类别；PDF 与在线记录均未提供47173详细纳入/排除说明。 |
| unsd-cpc21-correspondence | official_guidance | UNSD CPC 2.1, subclass 47173, correspondence to HS 2012/2017. https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/47173 | 历史零件税目佐证，HS854091/854099/854190/854290；不宣称其为当前 CPC3 对照表。 |
| census-semiconductor-state | official_guidance | US Census, Schedule B 2022, Chapter 85, notes and headings 8540–8542. https://www.census.gov/foreign-trade/schedules/b/2022/c85.html | 反证：未安装芯片/裸片/晶圆可能已属器件；独立玻璃制品及制造设备须单独分类。历史美国统计税表，不作当前法律建议。 |
| shinko-package | extension_guidance | SHINKO, Semiconductor Package, product catalogue, undated. https://www.shinko.co.jp/english/product/package/ | 引线框架、封装基板及气密组件的销售接口；IC 组装是不同业务。 |
| shinko-business | extension_guidance | SHINKO, Our Business, products and core technologies, undated. https://www.shinko.co.jp/english/corporate/business/ | 有条件冲压/蚀刻、电镀、多层、陶瓷与封接路线；吸盘属设备零件，不能自动视为器件零件。不推定强度、配方或通用路线。 |
| saes-cathodes | extension_guidance | SAES/Spectra-Mat, Thermal Management and Cathodes, undated. https://www.saesgetters.com/industrial-thermal-management-cathodes/ | 独立佐证功能性储备式阴极、吸气及热管理组件具有多种用途，须记录电子管/半导体专用性。 |
| saes-metallurgy | extension_guidance | SAES Industrial, metallurgy capabilities, undated. https://www.saesgetters.com/industrial/ | 仅支持有条件粉末成形、烧结与合金路线；供应能力不能确定某个零件配方或烧成制度。 |
